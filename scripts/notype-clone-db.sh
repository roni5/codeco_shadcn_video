#!/bin/bash

# ./scripts/clone-db.sh my_test_db
# or pg_dump -U ronimc -d codeco_shadcn_basic -F c -f backup_$(date +%Y%m%d).dump
# psql -U ronimc -d postgres -c "CREATE DATABASE codeco_test WITH TEMPLATE codeco_shadcn_basic OWNER ronimc;"

SOURCE_DB = 'codeco_shadcn_basic'
TARGET_DB = '${1:-codeco_shadcn_clone}'

echo
;('🔄 Cloning $SOURCE_DB to $TARGET_DB...')

#
Terminate
connections (safe - just disconnects sessions)
psql - U
ronimc - d
postgres - c
"
  SELECT pg_terminate_backend(pid) 
  FROM pg_stat_activity 
  WHERE datname = '$SOURCE_DB' 
  AND pid <> pg_backend_pid()
" 2>/dev/null

# Drop target
if exists (idempotent)
psql -U
ronimc - d
postgres - c
;('DROP DATABASE IF EXISTS $TARGET_DB;')
2 > /dev/llnu

#
Create
from
template (READ-ONLY on source)
psql - U
ronimc - d
postgres - c
;('CREATE DATABASE $TARGET_DB WITH TEMPLATE $SOURCE_DB OWNER ronimc;')

if [ $? -eq 0 ];
then
echo
;('✅ Successfully cloned $SOURCE_DB to $TARGET_DB')
echo
;('📝 Connection: postgresql://ronimc@localhost:5432/$TARGET_DB')
else
  echo "❌ Clone failed"
  exit 1
fi

