import { createServer } from 'node:http';
import querystring from 'node:querystring';

import { handleStaticFiles } from './static.js';

let count = 0;

const server = createServer(async (req, res) => {
    const isStaticHandled = await handleStaticFiles(req, res);
    if (isStaticHandled) {
        return;
    }

    if (req.url === '/count') {
        if (req.method === 'GET') {
            res.writeHead(200);
            res.end(`${count}`);
        } else if (req.method === 'POST') {
            let data = '';
            req.on('data', (chunk) => {
                data += chunk.toString();
            });
            req.on('end', () => {
                try {
                    const body = JSON.parse(data);
                    const c = parseInt(body.count);
                    if (isNaN(c)) {
                        res.writeHead(400);
                        res.end('Shit\n');
                    } else {
                        res.writeHead(200);
                        count += c;
                        res.end(`${count}`);
                    }
                } catch (err) {
                    res.writeHead(400);
                    res.end('Fuck\n');
                }
            });

            return;
        } else if (req.method === 'DELETE') {
            res.writeHead(200);
            count -= 1;
            res.end(`${count}`);
        }
    }

    // const { accessToken } = querystring.decode(req.url.split('?')[1]);
    // if (accessToken) {
    //   res.writeHead(200, { 'Content-Type': 'text/plain' });
    //   res.end(`Your access token is ${accessToken}\n`);
    // } else {
    //   res.writeHead(401, { 'Content-Type': 'text/plain' });
    //   res.end('Unauthorized\n');
    // }
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
    console.log(('standby count'));
});
