import fs from 'fs';
import { promisify } from 'util';

const dirPath = 'our-fs';
const filePath = `${dirPath}/example.txt`;
const additionalContent = 'This content will be appended.\n';

// Promise로 변환된 fs 메서드
const access = promisify(fs.access);
const mkdir = promisify(fs.mkdir);
const appendFile = promisify(fs.appendFile);
const readFile = promisify(fs.readFile);
const stat = promisify(fs.stat);

// IIFE
(async () => {
    try {
        // 디렉토리 존재 여부 확인
        try {
            await access(dirPath, fs.constants.F_OK);
            console.log('Directory already exists.');
        } catch (err) {
            // 디렉토리가 존재하지 않으면 생성
            await mkdir(dirPath);
            console.log('Directory created successfully!');
        }

        // 파일에 내용 추가
        await appendFile(filePath, additionalContent);
        console.log('Content appended successfully!');

        // 파일 내용 읽기
        const data = await readFile(filePath, 'utf8');
        console.log('File content:', data);

        // 파일 상태 가져오기
        const stats = await stat(filePath);
        console.log('File stats:', stats);

    } catch (err) {
        console.error('Error:', err);
    }
})();