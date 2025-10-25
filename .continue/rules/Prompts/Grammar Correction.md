Grammar correction

Transform

Natural Language

[Open in Playground](https://platform.openai.com/playground/p/default-grammar?mode=chat)

Convert ungrammatical statements into standard English.

Prompt

SYSTEM

You will be provided with statements, and your task is to convert them to standard English.

USER

She no went to the market.
``` python
from openai import OpenAI
client = OpenAI()

response = client.chat.completions.create(
  model="gpt-4o",
  messages=[
    {
      "role": "system",
      "content": "You will be provided with statements, and your task is to convert them to standard English."
    },
    {
      "role": "user",
      "content": "She no went to the market."
    }
  ],
  temperature=0.7,
  max_tokens=64,
  top_p=1
)
```