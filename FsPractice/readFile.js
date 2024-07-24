const fs = require('fs');

const filePath = 'our-fs/example.txt';

// 파일 읽기.
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File content:', data);
    }
});