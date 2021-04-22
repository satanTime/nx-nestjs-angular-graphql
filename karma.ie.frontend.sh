#!/bin/bash

export IE_BIN="/c/Program Files/Internet Explorer/iexplore.exe"
cd /c/ && rm -Rf nx-nestjs-angular-graphql && mkdir nx-nestjs-angular-graphql && cd nx-nestjs-angular-graphql
find /z/nx-nestjs-angular-graphql -maxdepth 1 -not -name nx-nestjs-angular-graphql -not -name .git -not -name e2e -not -name node_modules -exec cp -r {} . \;
npm ci --no-optional --ignore-scripts
npm run postinstall
npm run test ct-frontend -- --browsers=IECi --reporters=dots,junit
