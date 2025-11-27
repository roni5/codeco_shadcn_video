import { invokeBedrock } from "@/lib/bedrock"; // if this alias fails, use: import { invokeBedrock } from '../../../lib/bedrock';
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
	// Build-safe guard until Bedrock env is ready
	if (!process.env.AWS_REGION || !process.env.BEDROCK_MODEL_ID) {
		return NextResponse.json(
			{ ok: false, error: "Bedrock not configured" },
			{ status: 501 },
		);
	}

	const { prompt } = await req.json();

	const result = await invokeBedrock({
		modelId: process.env.BEDROCK_MODEL_ID,
		body: {
			anthropic_version: "bedrock-2023-05-31",
			max_tokens: 256,
			messages: [{ role: "user", content: prompt ?? "Say hello" }],
		},
	});

	return NextResponse.json({ ok: true, result });
}
// // app/api/chat/route.ts
// import {
//   BedrockRuntimeClient,
//   InvokeModelCommand,
// } from '@aws-sdk/client-bedrock-runtime'
// import { NextRequest } from 'next/server'

// const client = new BedrockRuntimeClient({
//   region: process.env.AWS_REGION || 'us-east-1',
//   credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
//   },
// })

// export async function POST(req: NextRequest) {
//   try {
//     const { messages } = await req.json()

//     const claudeMessages = messages.map((msg: any) => ({
//       role: msg.role,
//       content: [{ type: 'text', text: msg.content }],
//     }))

//     const params = {
//       modelId: 'anthropic.claude-3-5-haiku-20241022-v1:0',
//       contentType: 'application/json',
//       accept: 'application/json',
//       body: JSON.stringify({
//         anthropic_version: 'bedrock-2023-05-31',
//         max_tokens: 2000,
//         messages: claudeMessages,
//         system:
//           'You are a helpful AI assistant for codeco.tech. Provide accurate, helpful responses based on the context provided.',
//       }),
//     }

//     const command = new InvokeModelCommand(params)
//     const response = await client.send(command)

//     const responseBody = JSON.parse(new TextDecoder().decode(response.body))
//     const reply = {
//       role: 'assistant',
//       content: responseBody.content[0].text,
//     }

//     return Response.json({ reply })
//   } catch (error) {
//     console.error('Bedrock API error:', error)
//     return Response.json(
//       { error: 'Failed to get response from Claude' },
//       { status: 500 }
//     )
//   }
// }

// // app/api/chat/route.ts
// import {
//   BedrockRuntimeClient,
//   InvokeModelCommand,
// } from '@aws-sdk/client-bedrock-runtime'
// import { NextRequest } from 'next/server'

// const client = new BedrockRuntimeClient({
//   region: process.env.AWS_REGION || 'us-east-1',
//   credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
//   },
// })

// export async function POST(req: NextRequest) {
//   try {
//     const { messages, images } = await req.json()

//     // Build the content array for Claude
//     const content = []

//     // Add any images first
//     if (images && images.length > 0) {
//       for (const image of images) {
//         content.push({
//           type: 'image',
//           source: {
//             type: 'base64',
//             media_type: image.mimeType,
//             data: image.data,
//           },
//         })
//       }
//     }

//     // Add the text message
//     const lastMessage = messages[messages.length - 1]
//     content.push({
//       type: 'text',
//       text: lastMessage.content,
//     })

//     // Format for Claude API
//     const claudeMessages = [
//       {
//         role: 'user',
//         content: content,
//       },
//     ]

//     // Add previous messages for context (excluding system message)
//     const conversationHistory = messages.slice(1, -1).map(msg => ({
//       role: msg.role === 'user' ? 'user' : 'assistant',
//       content: [{ type: 'text', text: msg.content }],
//     }))

//     const allMessages = [...conversationHistory, ...claudeMessages]

//     const params = {
//       modelId: 'anthropic.claude-3-5-haiku-20241022-v1:0', // or claude-3-5-sonnet-20241022-v2:0
//       contentType: 'application/json',
//       accept: 'application/json',
//       body: JSON.stringify({
//         anthropic_version: 'bedrock-2023-05-31',
//         max_tokens: 2000,
//         messages: allMessages,
//         system:
//           'You are a helpful AI assistant for codeco.tech. Provide accurate, helpful responses based on the context provided.',
//       }),
//     }

//     const command = new InvokeModelCommand(params)
//     const response = await client.send(command)

//     const responseBody = JSON.parse(new TextDecoder().decode(response.body))
//     const reply = {
//       role: 'assistant',
//       content: responseBody.content[0].text,
//     }

//     return Response.json({ reply })
//   } catch (error) {
//     console.error('Bedrock API error:', error)
//     return Response.json(
//       { error: 'Failed to get response from Claude' },
//       { status: 500 }
//     )
//   }
// }

// import { OpenAI } from 'openai'

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// })

// export async function POST(req: Request) {
//   const { messages } = await req.json()

//   const response = await openai.chat.completions.create({
//     model: 'gpt-3.5-turbo',
//     messages,
//   })

//   const reply = response.choices[0].message
//   return Response.json({ reply })
// }
