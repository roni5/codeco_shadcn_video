import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from '@aws-sdk/client-bedrock-runtime'

type BedrockInput = {
  modelId: string
  body: unknown
  accept?: string
  contentType?: string
}

export async function invokeBedrock(input: BedrockInput): Promise<unknown> {
  const client = new BedrockRuntimeClient({
    region: process.env.AWS_REGION ?? 'us-east-1', // safe default; real env can come later
  })

  const cmd = new InvokeModelCommand({
    modelId: input.modelId,
    accept: input.accept ?? 'application/json',
    contentType: input.contentType ?? 'application/json',
    body: Buffer.from(JSON.stringify(input.body)),
  })

  const res = await client.send(cmd)
  if (!res.body) return null

  // Replace this block with the following 6 lines:
  const bytes =
    (res.body as unknown as Uint8Array) instanceof Uint8Array
      ? (res.body as unknown as Uint8Array)
      : new Uint8Array() // fallback to empty
  const text = new TextDecoder().decode(bytes)
  try {
    return JSON.parse(text)
  } catch {
    return text
  }
}

// try {
//   return JSON.parse(text);
// } catch {
//   return text;
// }
// const text = await streamToString(res.body)
// try {
//   return JSON.parse(text);
// } catch {
//   return text;
// } 