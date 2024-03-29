Bun.serve({
port:3031,
fetch(req){
console.log(req)
return new Response("hello from the A P I")
}
})
