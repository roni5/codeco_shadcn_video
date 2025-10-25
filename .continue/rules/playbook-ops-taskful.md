# .continue-example-workflow-rules.md

**Reference all files**
.continue/rules/*  
i.e
##Favicon generation 
- name & short  string will be variable (will change)
/scripts/*
generate-favicons.mjs
node generate-favicons.mjs --src public/img/logo.png --name "Taskful" --short "Taskful" --out public --bg "#ffffff" --theme "#00ccde"

## Rewrite
If a prompt is vague (e.g. "Create onboarding"), rewrite to include:
- Specific tech stack: Next.js > 15, Tailwind v4, Drizzle ORM
- Taskful use case context: categories like Cleaning, Handyman, Moving Help, Gardening
- User type (Tasker or Poster)
- Functional components: multi-step wizard, save state, completion logic
- UI behavior: Skip/back, See More button, form validation

## Critique
For each TODO:
- Does it support Tasker workflows or job categories?
- Is it achievable in a single atomic commit?
- Does it follow Tailwind v4 class constraints best practices?
- Does it assume Next.js routing layout properly?

## Elaborate
For broad prompts like "Design UI", generate:
- A list of specific screens/components
- Tailwind layout suggestions
- Data requirements (e.g. for PostgreSQL tables drizzle ORM)
- API endpoint needs (e.g. onboarding flow tracking)

## Standard Workflow

1. Begin by fully understanding the problem. Scan the codebase for all relevant files and functionality.
   - Extract only what’s needed to act.
   - Create a scoped plan in `tasks/todo.md` under the `backlog/` directory.

2. Break the plan into discrete, checkable TODO items.
   - Each item must be atomic and clearly scoped.
   - No vague tasks. Each should result in visible progress or a small commit.

3. Before coding anything, pause. Post the TODO list and check in for verification and alignment.

4. Execute TODOs sequentially.
   - Mark each one complete once implemented and committed.
   - Work in clear units of progress — no batch changes.

5. At every step, provide a concise, high-level summary of what changed and why.
   - No deep technical breakdowns unless asked.
   - Focus on the intent behind the change.

6. Keep every task and code change minimal and isolated.
   - Avoid coupling.
   - Don’t solve future problems — only the current one.
   - Simplicity beats cleverness.

7. After completing your set of tasks, append a `## Review` section to `todo.md`.
   - Summarize what was done, what files were touched, and any relevant notes.
   - No fluff — just facts and context.


## Standard Workflow

1. First think through the problem, read the codebase for relevant files, and write a plan to tasks/todo.md.
2. The plan should have a list of todo items that you can check off as you complete them.
3. Before you begin working, check in with me and I will verify the plan.
4. Then, begin working on the todo items, marking them as complete as you go.
5. Please every step of the way just give me a high level explanation of what changes you made.
6. Make every task and code change you do as simple as possible. We want to avoid making any massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.
7. Finally, add a review section to the todo.md file with a summary of the changes you made and any other relevant information.

---

## Onboarding Workflow Tasks

### Frontend Tasks

- [ ] Create multi-step onboarding wizard component  
  - Step 1: Basic info (name, profession)  
  - Step 2: Work & interests  
  - Step 3: Goals (30-day, 365-day)  
  - Step 4: Daily activities & routines  
  - Step 5: Side projects & hobbies

- [ ] Design onboarding UI with progress indicators  
- [ ] Add skip/back navigation between steps  
- [ ] Create engaging copy for each onboarding step  
- [ ] Add onboarding completion tracking  
- [ ] Create "Edit Profile" flow from existing data  
- [ ] Add profile completeness indicator  
- [ ] Implement onboarding tips/examples for each field

### Backend Tasks

- [ ] Create onboarding status tracking in user model  
- [ ] Add onboarding_completed timestamp field  
- [ ] Create endpoint to track onboarding progress  
- [ ] Enhance user context generation from profile data  
- [ ] Create user preference learning system  
- [ ] Add analytics for onboarding drop-off points  
- [ ] Implement profile validation rules