#prompts 
[[web developer.]]
Make a single page website , using Next.js 14 best practices , Just , create the <main> </main> as the Layout.tsx will have the nav bar & footer. Shows off different neat components features . Please use Tailwind.css and Shadcn ui Library. Make a openai.com , ChatGPT like chat input with , sample response . Make sure the the css. is Mobile First Design, Do Not use tailwind.css screen size i.e sm: as this is not recommended by tailwind.css. Please Add some relative text , for the type of website. but do not use apostrophes instead use html entities i.e &apos; &#39; The website should be clean and modern rounded corners and gentle on the eyes, with the latest  javascript and CSS.

```python
from openai import OpenAI
client = OpenAI()

response = client.chat.completions.create(
  model="gpt-4o",
  messages=[
    {
      "role": "user",
      "content": "Make a single page website , using Next.js 14 best practices , Just , create the <main> </main> as the Layout.tsx will have the nav bar & footer. Shows off different neat components features . Please use Tailwind.css and Shadcn ui Library. Make a openai.com , ChatGPT like chat input with , sample response . Make sure the the css. is Mobile First Design, Do Not use tailwind.css screen size i.e sm: as this is not recommended by tailwind.css. Please Add some relative text , for the type of website. but do not use apostrophes instead use html entities i.e &apos; &#39; The website should be clean and modern rounded corners and gentle on the eyes, with the latest  javascript and CSS."
    }
  ],
  temperature=0.7,
  max_tokens=64,
  top_p=1
)
```