#!/usr/bin/env bash

set -euo pipefail

TS_NODE_DEBUG=true yarn tsnd --respawn --transpileOnly ./wdio.ts
