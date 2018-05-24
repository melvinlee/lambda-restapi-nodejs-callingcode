#!/bin/sh

set -e
set -o pipefail

instruction()
{
    echo "Usage: ./build.sh <command>"
    echo 
    echo "where <command> is one of:"
    echo "      install, test, offlinestart"
    echo 
    echo "for example: ./bulid.sh install" 
}

if [ $# -eq 0 ]; then
    instruction
    exit 1
elif [ "$1" = "install" ]; then
    echo Installing NPM dependencies...
    npm install
    echo
    echo Installing Serverless...
    npm install -g serverless@1.26.1
    if ! serverless --version ; then exit 1; fi
    serverless --version
elif [ "$1" = "test" ]; then
    echo Running test...
    npm test
elif [ "$1" = "offlinestart" ]; then
    echo Start Serverless offline mode...
    serverless offline start > /dev/null &  # run offline mode in background
else
    instruction
    exit 1
fi 
