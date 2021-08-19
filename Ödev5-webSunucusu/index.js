const http = require('http');
const server = http.createServer((req,res)=>{

const url =req.url;
if(url==='/'){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1>Welcome to index page</h1>')
}
else if(url==='/about'){
    res.write('<h1>Welcome to about page</h1>')
}
else if(url==='/contact'){
    res.write('<h1>Welcome to contact page</h1>')
}
else{
    res.write('<h1>404 Not Found</h1>')
}
console.log('Bir istek gönderildi')
res.end();
});

const port=5000;
server.listen(port,()=>{
    console.log('Sunucu port 300 de başlatıldı')
})