{
  "dependencies": {
    "@aws-sdk/client-bedrock-runtime": "^3.540.0",
    "@aws-sdk/client-s3": "^3.540.0",
    "drizzle-orm": "^0.29.0",
    "postgres": "^3.4.3",
    "lucide-react": "^0.263.1",
    "next": "^15.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "tailwindcss": "^3.4.0"
  },
  "devDependencies": {
    "drizzle-kit": "^0.20.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0"
  }
}

# .env.local
# AWS Bedrock Configuration
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key_here
AWS_SECRET_ACCESS_KEY=your_secret_key_here

# Database
DATABASE_URL=postgresql://username:password@localhost:5432/your_database

# Optional: For file uploads to S3
AWS_S3_BUCKET=your-chat-files-bucket
AWS_S3_REGION=us-east-1

# Optional: For Bedrock Knowledge Bases
BEDROCK_KNOWLEDGE_BASE_ID=your_knowledge_base_id