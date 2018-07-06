simpleWebSSH2
====

Simple Web based SSH console. This code forked from [stackoverflow](https://stackoverflow.com/questions/38689707/connecting-to-remote-ssh-server-via-node-js-html5-console)

## Requirement

ssh2, xterm and socket.io

## Usage

1. edit index.js. You must change below part(host, username and password).

    }).connect({
        host: '127.0.0.1',
        username: 'hoge',
        password: 'pass'
    });

1. node index.js
1. Open http:localhost:8000

## Install

    npm install
