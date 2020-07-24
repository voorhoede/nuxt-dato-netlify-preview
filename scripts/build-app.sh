#!/bin/bash

if [ "$APP_PREVIEW" = "true" ]
then
  npm run build_preview
else
  npm run build_production
fi
