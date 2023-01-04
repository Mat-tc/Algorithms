const fs = require('fs');
let input =
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : fs
        .readFileSync('C:/project/Algorithms/gajeong/예제.txt')
        .toString()
        .trim()
        .split('\r\n');
solution(input);
function solution(input) {
  class MinBinaryHeap {
    constructor() {
      this.values = [];
    }

    insert(element) {
      this.values.push(element);
      this.bubbleUp();
    }

    bubbleUp() {
      let idx = this.values.length - 1;
      while (idx > 0) {
        const parentIdx = Math.floor((idx - 1) / 2);
        if (this.values[idx] >= this.values[parentIdx]) break;
        let parent = this.values[parentIdx];
        this.values[parentIdx] = this.values[idx];
        this.values[idx] = parent;
        idx = parentIdx;
      }
    }

    extractMin() {
      const min = this.values[0];
      const end = this.values.pop();
      if (this.values.length > 0) {
        this.values[0] = end;
        this.sinkDown();
      }
      return min;
    }

    sinkDown() {
      let idx = 0;
      const length = this.values.length;
      while (true) {
        const element = this.values[idx];
        const leftChildIdx = 2 * idx + 1;
        const rightChildIdx = 2 * idx + 2;
        let leftChild;
        let rightChild;
        let swap = null;
        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild < element) {
            swap = leftChildIdx;
          }
        }

        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild < element) ||
            (swap !== null && rightChild < leftChild)
          ) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;

        [this.values[idx], this.values[swap]] = [
          this.values[swap],
          this.values[idx],
        ];
        idx = swap;
      }
    }
  }
  let heap = new MinBinaryHeap();

  const N = Number(input[0]);
  for (let i = 1; i <= N; i++) {
    let line = input[i].split(' ').map(Number);
    for (let j = 0; j < N; j++) {
      heap.insert(line[j]);
      // 힙의 크기가 N보다 크면, 가장 작은 값 pop
      if (heap.values.length > N) heap.extractMin();
    }
  }
  console.log(heap.values[0]);
}
