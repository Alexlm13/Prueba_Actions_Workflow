#!/bin/sh
missing=0
for f in $(echo "$1" | tr ',' ' '); do
  if [ -f "$f" ]; then
    echo "✅ $f"
  else
    echo "❌ $f"
    missing=1
  fi
done
exit $missing