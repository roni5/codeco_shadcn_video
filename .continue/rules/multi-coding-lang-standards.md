Codeco.tech Coding Standards
Core Principle
Simple but not more simple. Actionable only. No fluff.

TypeScript / Next.js 16
File Structure
src/
  app/              # App router pages
  components/       # React components
  lib/              # Utilities, helpers
  types/            # Type definitions
  hooks/            # Custom hooks
Naming

Files: kebab-case.tsx for components, camelCase.ts for utilities
Components: PascalCase, one component per file
Functions: camelCase, verb-first (getUserData, handleClick)
Types/Interfaces: PascalCase with descriptive names

Type Safety
typescript// YES - Explicit return types
export async function fetchUser(id: string): Promise<User> {
  // implementation
}

// NO - Implicit any
export async function fetchUser(id) {
  // implementation
}

Never use any. Use unknown if type is truly unknown.
Define interfaces for all API responses
Use type guards for runtime checks

Server Components (Next.js 16)
typescript// Default to server components
export default async function Page() {
  const data = await fetchData(); // Direct async
  return <div>{data}</div>;
}

// Mark client components explicitly
'use client';
export default function InteractiveWidget() {
  const [state, setState] = useState();
  // ...
}
Error Handling
typescript// YES - Explicit error handling
try {
  const result = await apiCall();
  return { data: result, error: null };
} catch (error) {
  return { data: null, error: error instanceof Error ? error.message : 'Unknown error' };
}

// NO - Silent failures
const result = await apiCall().catch(() => null);
Idempotency

All mutations must be idempotent
Use unique request IDs for critical operations
Database operations: use upsert over insert when appropriate

typescript// YES
await db.user.upsert({
  where: { id: userId },
  update: { name },
  create: { id: userId, name }
});

// NO - Can fail on retry
await db.user.create({ id: userId, name });

Tailwind CSS
Class Organization
typescript// Order: layout → spacing → typography → visual → interactions
<div className="flex items-center gap-4 p-4 text-lg font-bold bg-blue-500 hover:bg-blue-600 rounded-lg">
Responsive Design
typescript// Mobile-first
<div className="w-full md:w-1/2 lg:w-1/3">
No Arbitrary Values Unless Necessary
typescript// YES
<div className="p-4 text-lg">

// NO - Unless design requires it
<div className="p-[17px] text-[15.5px]">
Custom Colors in tailwind.config
typescript// Define brand colors, don't use arbitrary hex
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#...',
        secondary: '#...'
      }
    }
  }
}

Python
Style

Follow PEP 8
Max line length: 100 characters
Use type hints everywhere

python# YES
def process_data(items: list[dict[str, Any]]) -> list[ProcessedItem]:
    return [ProcessedItem(**item) for item in items]

# NO
def process_data(items):
    return [ProcessedItem(**item) for item in items]
Error Handling
python# YES - Specific exceptions
try:
    result = dangerous_operation()
except ValueError as e:
    logger.error(f"Invalid value: {e}")
    raise
except KeyError as e:
    logger.error(f"Missing key: {e}")
    raise

# NO - Bare except
try:
    result = dangerous_operation()
except:
    pass
Async Code
python# Use async/await consistently
async def fetch_data(url: str) -> dict[str, Any]:
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        response.raise_for_status()
        return response.json()

Java/Android
Naming

Classes: PascalCase
Methods/variables: camelCase
Constants: UPPER_SNAKE_CASE
Packages: lowercase

Null Safety
java// YES - Use Optional or @Nullable/@NonNull
public Optional<User> findUser(String id) {
    return userRepository.findById(id);
}

// Use annotations
public void processUser(@NonNull User user) {
    // implementation
}
Android Activities/Fragments
java// Lifecycle methods in order
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // implementation
}

// Use ViewBinding, not findViewById
private ActivityMainBinding binding;

Dart/Flutter
File Structure
lib/
  models/
  screens/
  widgets/
  services/
  utils/
Naming

Files: snake_case.dart
Classes: PascalCase
Variables/functions: camelCase
Private: _leadingUnderscore

State Management
dart// Use StatelessWidget when possible
class MyWidget extends StatelessWidget {
  const MyWidget({super.key});
  
  @override
  Widget build(BuildContext context) {
    return Container();
  }
}

// StatefulWidget when state needed
class MyStatefulWidget extends StatefulWidget {
  const MyStatefulWidget({super.key});
  
  @override
  State<MyStatefulWidget> createState() => _MyStatefulWidgetState();
}
Null Safety
dart// Never use ! unless absolutely certain
String? name = getName();
if (name != null) {
  print(name.length); // Safe
}

// Use ?? for defaults
final displayName = user.name ?? 'Anonymous';

C++
Style

Use modern C++ (C++17 or later)
Smart pointers over raw pointers
RAII for resource management

cpp// YES - Smart pointers
std::unique_ptr<Resource> resource = std::make_unique<Resource>();

// NO - Raw pointers
Resource* resource = new Resource();
Memory Safety
cpp// Use vector instead of arrays
std::vector<int> data = {1, 2, 3};

// Range-based for loops
for (const auto& item : data) {
    process(item);
}
Error Handling
cpp// Use exceptions for exceptional cases
std::optional<Result> processData(const Data& input) {
    if (!input.isValid()) {
        return std::nullopt;
    }
    return Result{/* ... */};
}

Terraform
File Organization
main.tf          # Primary resources
variables.tf     # Input variables
outputs.tf       # Output values
terraform.tfvars # Variable values (gitignored)
Naming

Resources: snake_case
Consistent prefixes for resource types

hcl# YES
resource "aws_s3_bucket" "app_storage" {
  bucket = "${var.environment}-app-storage"
}

# NO - Inconsistent naming
resource "aws_s3_bucket" "AppStorage" {
  bucket = "my-bucket"
}
Idempotency

All Terraform must be idempotent by nature
Use lifecycle blocks to prevent accidental destruction

hclresource "aws_instance" "app" {
  # ...
  
  lifecycle {
    prevent_destroy = true
    ignore_changes  = [tags]
  }
}
State Management

Always use remote state (S3 + DynamoDB for locking)
Never commit state files
Use workspaces for environments


AWS Bedrock
Model Invocation
typescript// Always specify model explicitly
const response = await bedrockClient.invokeModel({
  modelId: 'anthropic.claude-v2',
  body: JSON.stringify({
    prompt: userPrompt,
    max_tokens_to_sample: 1000,
    temperature: 0.7
  })
});
Error Handling
typescript// Handle throttling and retries
const invokeWithRetry = async (params: InvokeParams, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await bedrock.invokeModel(params);
    } catch (error) {
      if (error.name === 'ThrottlingException' && i < maxRetries - 1) {
        await sleep(2 ** i * 1000); // Exponential backoff
        continue;
      }
      throw error;
    }
  }
};
Cost Control

Set token limits on all requests
Log all invocations for billing tracking
Cache responses when possible


Universal Rules
Git Commits
feat: add user authentication
fix: resolve mobile navigation bug
refactor: simplify data fetching logic
docs: update API documentation
Comments

Code should be self-documenting
Only comment WHY, not WHAT
No commented-out code in commits

typescript// YES - Explains reasoning
// Using setTimeout instead of setInterval because the API 
// rate limit resets every 60 seconds, not on a sliding window
setTimeout(fetchData, 60000);

// NO - States the obvious
// Set timeout to 60000
setTimeout(fetchData, 60000);
Testing

Write tests for business logic
Integration tests for API endpoints
E2E tests for critical user flows
No tests for trivial getters/setters

Code Review Checklist

 Idempotent operations
 Error handling present
 Type safety enforced
 No hardcoded values
 Environment variables for secrets
 Database queries optimized
 API responses validated

Environment Variables
typescript// YES - Validate at startup
const env = {
  DATABASE_URL: process.env.DATABASE_URL!,
  API_KEY: process.env.API_KEY!
};

if (!env.DATABASE_URL || !env.API_KEY) {
  throw new Error('Missing required environment variables');
}

// NO - Runtime failures
const dbUrl = process.env.DATABASE_URL;
Logging

Use structured logging
Log errors with context
No console.log in production code

typescript// YES
logger.error('Failed to fetch user', { 
  userId, 
  error: error.message,
  timestamp: Date.now() 
});

// NO
console.log('error:', error);

Performance
Database

Index foreign keys
Use connection pooling
Batch operations when possible
Use SELECT with specific columns, not *

Frontend

Lazy load components and routes
Optimize images (use Next.js Image component)
Minimize bundle size (check with next build)
Use React.memo for expensive renders

API

Implement caching headers
Use CDN for static assets
Rate limit all public endpoints
Paginate large datasets


Last Updated: 2025-11-18
Review Frequency: Quarterly or when tech stack changes