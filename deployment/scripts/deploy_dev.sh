#!/usr/bin/env bash

set -euo pipefail

cd deployment

echo "--- 🚀 Unzipping the build..."
unzip -q -o dev-build.zip

echo "--- 🚀 Installing npm dependencies..."
yarn install --frozen-lockfile

echo "--- 🚀 Deploying CDK stack..."
yarn cdk \
  --context stage=dev \
  --outputs-file cdk-output.json \
  --require-approval never \
  --verbose \
  --execute true \
  --force \
  '--toolkit-stack-name "cdk-toolkit-master"' \
  --app "ts-node ./src/deployment.ts" \
  deploy *-dev
