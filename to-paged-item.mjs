#! /usr/bin/env node
import readline from 'node:readline/promises'
process.stdin.setEncoding('utf-8');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})
for await (const line of rl) {
    const {meta: {page}, content} = JSON.parse(line)
    console.log(`- > ${content}\n${page}`)
}
