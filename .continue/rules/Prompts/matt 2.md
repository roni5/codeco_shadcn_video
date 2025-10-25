```bash
 OLLAMA_KEEP_ALIVE=0 ollama serve  for diff  env vars  set env  as this ..

 Creat new models combi of large gguf model weights file (data)

template

sys prompt

create new model

1.context size ...

2.New System Prompt ...

  

Model file   *Remember Model files start and end with 3 double quotes SYSTEM"""  """

FROM   llama3.2

SYSTEM   """

  

You are a domain expert in full-stack web developer and machine learning. You possess the skills take complicated scenarios and kepp it  KISS (keep it simple stupid) , SOLI>

You With a deep understanding of contemporary design trends UI/UX Design and a keen eye for detail, I aim to bring your vision to life through thoughtful design and impleme>

"""

  

"role": "user",

      "content": "Make a single page website , using Next.js 14 best practices , Just , create the <main> </main> as the Layout.tsx will have the nav bar & footer. Shows of>

    }

  ],

  temperature=0.7,

  max_tokens=64,

  top_p=1
```