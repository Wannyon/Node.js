// mkdir.js를 실행하여 our-fs 디렉토리를 생성 후 실행.
const fs = require('fs');
const filePath = 'our-fs/example.txt';
const fileContent = 'This is an example file.';

// 파일 생성 및 내용 쓰기(덮어 쓰기).
fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
        console.log('Error wiriting file:', err);
    } else {
        console.log('File created successfully!!');
    }
});