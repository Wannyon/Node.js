const fs = require('fs');

// 디렉토리 생성.
fs.access('our-fs', fs.constants.F_OK, (err) => {
    // 디렉토리가 존재하지 않을 때 에러 발생.
    if (err) {
        // 디렉토리가 존재하지 않으면 생성.
        fs.mkdir('our-fs', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Directory created successfully!')
            }
        });
    } else {
        console.log('Directory already exists');
    }
});

// sync version
if (!fs.existsSync('our-fs-Sync')) {
    try {
        fs.mkdirSync('our-fs-Sync');
        console.log('Directory created successfully!');
    } catch (err) {
        console.error(err);
    }
} else {
    console.log('Directory already exists.');
};

// 디렉토리 삭제는
// fs.rmdir('our-fs', (err) => console.log(err));