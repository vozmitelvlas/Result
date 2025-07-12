import * as http from "http"
import fs from "fs/promises"
import path from "path"
import {fileURLToPath} from 'url';
import chalk from "chalk";

const port = 3000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const basePath = path.join(__dirname, 'pages')

server.listen(port, () => {
    
})
const server = http.createServer(async (req, res) => {
    if (req.method === 'GET') {
        const content = await fs.readFile(path.join(basePath, 'index.ejs'))
        res.end(content)
    } else if (req.method === 'POST') {
        const body = []
        req.on('data', data => {
            body.push(Buffer.from(data))
        })
        req.on('end', () => {
            
        })
        res.end('Post success')
    }
})