#! /usr/bin/env node
import readline from 'node:readline/promises'
process.stdin.setEncoding('utf-8');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})
let clipping = {}
for await (const line of rl) {
    if (!clipping.title) {
        clipping.title = line
    } else if (line.startsWith('- Highlight on Page') && !clipping.meta) {
        const [page, loc, added] = line.split('|').map(s => s.trim())
        clipping.meta = {page: page.replace('- Highlight on Page ', ''), loc, added}
    } else if (line.startsWith('=========')) {
        console.log(JSON.stringify(clipping))
        clipping = {}
        continue
    } else if (line.trim() === ''){
        continue
    } else {
        clipping.content ??= ''
        clipping.content += `${line}\n`
    }
}
