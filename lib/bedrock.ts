import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';

type BedrockInput = {
  modelId: string;
  body: unknown;
  accept?: string;
  contentType?: string;
};

export async function invokeBedrock(input: BedrockInput): Promise<unknown> {
  const client = new BedrockRuntimeClient({
    region: process.env.AWS_REGION ?? 'us-east-1', // safe default; real env can come later
  });

  const cmd = new InvokeModelCommand({
    modelId: input.modelId,
    accept: input.accept ?? 'application/json',
    contentType: input.contentType ?? 'application/json',
    body: Buffer.from(JSON.stringify(input.body)),
  });

  const res = await client.send(cmd);
  if (!res.body) return null;

  const bytes = Buffer.isBuffer(res.body)
    ? res.body
    : Buffer.from(await res.body.transformToByteArray());

  try {
    return JSON.parse(bytes.toString('utf-8'));
  } catch {
    return bytes.toString('utf-8');
  }
}