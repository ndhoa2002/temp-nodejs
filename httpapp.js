const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page!');
        return;
    }
    if(req.url === '/about'){
        for(let i=0; i<100; i++){
            for(let j=0; j<100; j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('Here is our short history')
        return;
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you're looking for.</p>
    <a href="/">Home</a>
    `)
})
server.listen(3000); 