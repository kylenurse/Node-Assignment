function reqHandler (req,res) {
    const url = req.url;
    const method = req.method;

    if (url === '/') {

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My second page</title></head>');
        res.write('<body><h1>Welcome to my page!<h1><form action="/create-user" method="POST"><input name="create-user" type="text"></input></form></body>');
        res.write('<html>');
        return res.end();
    }

    else if (url === '/users') {

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My second page</title></head>');
        res.write('<body><ul><li>user1</li></ul></body>');
        res.write('<html>');
    }

    else if (url === '/create-user' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        }); 

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
};