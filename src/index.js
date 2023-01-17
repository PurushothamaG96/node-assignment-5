const express = require('express')
const app = express()
app.get("/", (req, res)=>{
    res.send("hello world")
})

app.get('/welcome', (req, res)=>{
    res.status(200);
    res.setHeader('content-type', 'text/plain');
    res.send('Welcome to Dominos!')
})
app.get('/contact', (req, res)=>{
    res.status(200);
    res.setHeader('content-type', 'application/json');
    res.json(
        {  
            phone: '18602100000', 
                 email: 'guestcaredominos@jublfood.com' 
           }
           
    )
})
app.get('/*', (req, res)=>{
    res.status(404)
    res.send('404 Page not Found')
})

app.listen(8081, ()=>{
    console.log("server id up at 8081")
})
