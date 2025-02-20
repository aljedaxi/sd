#!/usr/bin/env deno
import {readLines} from "https://deno.land/std@0.154.0/io/buffer.ts";

for await (const l of readLines (Deno.stdin)) {
	console.log (`https://www.youtube.com/results?search_query=${encodeURIComponent(l)}`)
}
