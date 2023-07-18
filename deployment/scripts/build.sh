#!/usr/bin/env bash

set -euo pipefail

env=$1

echo "--- 🚀 Installing npm dependencies..."
yarn install --frozen-lockfile

echo "--- 🚀 Run next build..."
if [ "$env" == 'dev' ]
  then
    yarn open-next-build:dev
  else
    yarn open-next-build:prod
fi

echo "--- 🚀 Zipping build..."
if [ "$env" == 'dev' ]
  then
    zip -r dev-build.zip .open-next
  else
    zip -r prod-build.zip .open-next
fi