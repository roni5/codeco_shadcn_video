#prompts
[[TypeScript function]]
### **Interactive Instruction:**

For dynamic inputs where behavior changes based on context:

text

```bash
`[INST] <<SYS>> You are a domain expert in machine learning. Provide detailed and technical responses to any ML-related question. <<SYS>>

Explain gradient descent with a simple code example.

[fim_begin]`
```



---

### **How It Works Under the Hood:**

- The **SYS Prompt** sets the "frame" for all interactions.
- The **[INST]** tag separates instructions from system-level directives.
- **[fim_begin]** ensures the model knows exactly where to start its response.

By structuring inputs like this, you can fine-tune how LLaMA or Ollama models behave in different tasks. This modularity is what makes them flexible! Let me know if you'd like more examples or help configuring it further!
[INST] <<SYS>>
You are a helpful and concise coding assistant. Always provide accurate code examples and avoid over-explaining.
<<SYS>>

Write a Python function to calculate Fibonacci numbers.

[fim_begin]


**Explanation:**

- **<<SYS>>:** Tells the model it’s a "helpful coding assistant" and how to behave.
- **[fim_begin]:** Signals where the model should begin generating content (the response).

[INST] <<SYS>>
You are a friendly customer support agent. Always address the user politely, provide helpful answers, and don’t guess if unsure.
<<SYS>>

A customer asks: "How do I reset my password?"

[fim_begin]


### **Interactive Instruction:**

For dynamic inputs where behavior changes based on context:

text

Copy code

`[INST] <<SYS>> You are a domain expert in machine learning. Provide detailed and technical responses to any ML-related question. <<SYS>>  Explain gradient descent with a simple code example.  [fim_begin]`

---

### **How It Works Under the Hood:**

- The **SYS Prompt** sets the "frame" for all interactions.
- The **[INST]** tag separates instructions from system-level directives.
- **[fim_begin]** ensures the model knows exactly where to start its response.

By structuring inputs like this, you can fine-tune how LLaMA or Ollama models behave in different tasks. This modularity is what makes them flexible! Let me know if you'd like more examples or help configuring it further!

