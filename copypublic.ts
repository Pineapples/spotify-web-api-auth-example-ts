import fs from 'fs-extra';

fs.copy('src/public', 'dist/public', (err) => {
    if(err) {
        console.error(err);
    } else {
        console.log('copied public folder');
    }
});