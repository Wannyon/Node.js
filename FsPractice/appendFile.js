const fs = require('fs');

const filePath = 'our-fs/example.txt';
const additionalContent = 'This content will be appended.\n';

// 파일에 내용 추가.
fs.appendFile(filePath, additionalContent, (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Content appended successfully!!');
    }
});