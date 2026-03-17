#!/usr/bin/env deno
import {readLines} from "https://deno.land/std@0.154.0/io/buffer.ts";
const toBandcampUrl = q => {
    const base = new URL('/search', 'https://bandcamp.com')
    base.search = new URLSearchParams({q})
    return base
}
for await (const l of readLines (Deno.stdin)) {
	console.log (toBandcampUrl(encodeURIComponent(l)))
}
