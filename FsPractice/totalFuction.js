const fs = require('fs');

const dirPath = 'our-fs';
const filePath = `${dirPath}/example.txt`;
const additionalContent = `This content will be appended.\n`;

// 디렉토리 존재 여부 확인
fs.access(dirPath, fs.constants.F_OK, (err) => {
    if (err) {
        // 디렉토리가 존재하지 않으면 생성
        fs.mkdir(dirPath, (err) => {
            if (err) {
                console.error('Error creating directory:', err);
            } else {
                console.log('Directory created successfully!');
                // 디렉토리 생성 후 파일에 내용 추가
                fs.appendFile(filePath, additionalContent, (err) => {
                    if (err) {
                        console.error('Error appending to file:', err);
                    } else {
                        console.log('Content appended successfully!');
                        // 파일 내용 읽기
                        readFileContent(filePath);
                        // 파일 상태 가져오기
                        getFileStats(filePath);
                    }
                });
            }
        });
    } else {
        console.log('Directory already exists.');
        // 디렉토리가 이미 존재하면 바로 파일에 내용 추가
        fs.appendFile(filePath, additionalContent, (err) => {
            if (err) {
                console.error('Error appending to file:', err);
            } else {
                console.log('Content appended successfully!');
                // 파일 내용 읽기
                readFileContent(filePath);
                // 파일 상태 가져오기
                getFileStats(filePath);
            }
        });
    }
});

// 파일 내용 읽기 함수
function readFileContent(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        } else {
            console.log('File content:', data);
        }
    });
}

// 파일 상태 가져오기 함수
function getFileStats(filePath) {
    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.error('Error getting file stats:', err);
        } else {
            console.log('File stats:', stats);
        }
    });
}