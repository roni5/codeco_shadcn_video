#!/usr/bin/env bash
# Changes ONLY: "bg-gradient-to-" -> "bg-gradient-to-"
# Creates backups: <file>.bak.<timestamp>
set -euo pipefail
STAMP="$(date +%Y%m%d-%H%M%S)"
PATTERN='bg-gradient-to-'
REPLACEMENT='bg-gradient-to-'
CHANGED_LIST="/tmp/changed-$STAMP.lst"; : > "$CHANGED_LIST"

# Preview
if [ "${DRY_RUN:-0}" = "1" ]; then
  find . -type f \( -name "*.tsx" -o -name "*.jsx" -o -name "*.mdx" -o -name "*.html" -o -name "*.css" \) -print0 \
  | xargs -0 grep -nH -- "${PATTERN}" || true
  exit 0
fi

# Apply with per-file backups (BSD-safe)
find . -type f \( -name "*.tsx" -o -name "*.jsx" -o -name "*.mdx" -o -name "*.html" -o -name "*.css" \) -print0 \
| while IFS= read -r -d '' f; do
    if grep -q -- "${PATTERN}" "$f"; then
      cp "$f" "$f.bak.$STAMP"
      tmp="$f.tmp.$$"
      sed "s/${PATTERN}/${REPLACEMENT}/g" "$f" > "$tmp" && mv "$tmp" "$f"
      printf '%s\n' "$f" >> "$CHANGED_LIST"
    fi
  done

CHANGED=$(wc -l < "$CHANGED_LIST" 2>/dev/null || echo 0)
echo "Done. Files changed: ${CHANGED}"
if [ "$CHANGED" -gt 0 ]; then
  echo "Backups: .bak.${STAMP}"
  cat "$CHANGED_LIST"
fi
