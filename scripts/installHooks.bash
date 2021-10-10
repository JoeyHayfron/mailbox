#!/bin/bash
GIT_DIR=$(git rev-parse --git-dir)
echo "Installing hooks"
ln -s ../../scripts/preCommit.bash $GIT_DIR/hooks/pre-commit
echo "Done!"
