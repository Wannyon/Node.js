const fs = require('fs');

const filePath = 'our-fs/example.txt';

fs.stat(filePath, (err, stats) => {
    if (err) {
        console.error('Error getting file stats:', err);
    } else {
        console.log('File states:', stats);
    }
});