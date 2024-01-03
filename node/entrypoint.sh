#!/usr/bin/env bash

cd /code

[ -f .env ] && source .env

if [ "$NODE_INSTALL" == "true" ]; then
    echo "Installings node modules..."
    npm install
fi

echo "Starting node..."
npm start

exec "$@"
