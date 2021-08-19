#!/bin/bash

set -e

GIT_STATUS=$(git status --porcelain=1)
if [ -n "$GIT_STATUS" ]; then
  echo
  echo "The repo is not clean!"
  exit 1
fi

npm install
npm run check
npm run build

echo
read -p "Publish to npmjs? (y/n) " choice
if [ $choice != 'y' ]
then
  exit 0
fi

echo "Tagging git..."
VERSION=$(node -p "require('./package.json').version")
git tag "v""$VERSION"
git push --tags

echo "Publishing to npmjs..."
npm login
npm publish --access public
