const fs = require('fs');
let input =
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : fs
              .readFileSync('C:/project/Algorithms/gajeong/예제.txt')
              .toString()
              .trim()
              .split('\n');

const N = Number(input.shift());
input = input.map(Number);
const Heap = Array(100000).fill(0);
let idx = 1;

const ans = [];
for (let i = 0; i < N; i++) {
    if (input[i] === 0) {
        ans.push(Heap[1]);
        if (idx > 1) del();
    } else {
        insert(input[i]);
    }
}

function insert(num) {
    Heap[idx] = num;
    //인덱스 오름차순(역) 정렬
    sort(-1);
    idx++;
}

function sort(way) {
    //마지막인덱스에 원소가 삽입되어, 삽입된 원소가 부모보다 작은지 확인
    if (way == -1) {
        let pIdx = parseInt(idx / 2);
        let cIdx = idx;
        while (pIdx > 0 && Heap[cIdx] < Heap[pIdx]) {
            let p = Heap[pIdx];
            Heap[pIdx] = Heap[cIdx];
            Heap[cIdx] = p;

            cIdx = pIdx;
            pIdx = parseInt(pIdx / 2);
        }
    } else {
        let p = 1;
        while (
            p < parseInt(idx / 2) &&
            (Heap[p] > Heap[2 * p] || Heap[p] > Heap[2 * p + 1])
        ) {
            if (Heap[2 * p] <= Heap[2 * p + 1]) {
                let v = Heap[2 * p];
                Heap[2 * p] = Heap[p];
                Heap[p] = v;
                p = 2 * p;
            } else {
                let v = Heap[2 * p + 1];
                Heap[2 * p + 1] = Heap[p];
                Heap[p] = v;
                p = 2 * p + 1;
            }
        }
    }
}

function del() {
    if (Heap[1] != 0) {
        Heap[1] = Heap[idx - 1];
        Heap[idx - 1] = 0;
        idx--;
        //인덱스 오름차순 정렬
        sort(1);
    }
}

console.log(ans.join('\n'));
