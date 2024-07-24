import fs from 'node:fs/promises';
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function handleStaticFiles(req, res) {
    const filename = req.url === '/' ? 'index.html' : req.url.slice(1);

    if (req.method !== 'GET' && !filename) {
        return false;
    }

    try {
        const staticDirPath = path.join(__dirname, 'static');
        const staticFilelist = await fs.readdir(staticDirPath);

        if (staticFilelist.includes(filename)) {
            const staticFilePath = path.join(staticDirPath, filename);
            const staticFile = await fs.readFile(staticFilePath, 'utf8');

            res.writeHead(200);
            res.end(staticFile);
            return true;
        }
        return false;
    } catch (err) {
        return false;
    }
}