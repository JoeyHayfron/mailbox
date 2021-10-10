#!/bin/bash
echo "Running preCommit Hook"
npm run test
if [ $? -ne 0 ]; then
 echo “Tests must pass before commit!”
 exit 1
fi