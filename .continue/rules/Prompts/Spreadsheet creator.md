Create spreadsheets of various kinds of data.

Prompt

USER

Create a two-column CSV of top science fiction movies along with the year of release.

```python
from openai import OpenAI
client = OpenAI()

response = client.chat.completions.create(
  model="gpt-4o",
  messages=[
    {
      "role": "user",
      "content": "Create a two-column CSV of top science fiction movies along with the year of release."
    }
  ],
  temperature=0.5,
  max_tokens=64,
  top_p=1
)
```