const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `9
0
12345678
1
2
0
0
0
0
32`
)
    .trim()
    .split('\n');
