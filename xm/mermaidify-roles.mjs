#! /usr/bin/env node
import readline from 'node:readline/promises'
process.stdin.setEncoding('utf-8');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})
console.log('flowchart TD')
for await (const chunk of rl) {
    try {
        const {name, roles, grantable} = JSON.parse(chunk)
        console.log(`\t${name} ${roles ? `--> ${roles?.join(' & ')}` : ''}`)
    } catch (e) {
        console.error(e)
    }
}
