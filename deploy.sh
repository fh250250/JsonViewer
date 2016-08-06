#!/usr/bin/env bash
set -u
set -e


TMP_DIR=/tmp/JsonViewerDeploy

npm run build

rm -rf $TMP_DIR
cp -r dist $TMP_DIR

pushd $TMP_DIR
git init
git checkout --orphan gh-pages
git add .
git commit -m "Build"
git remote add origin git@github.com:fh250250/JsonViewer.git
git push -f origin gh-pages
popd

rm -rf $TMP_DIR
