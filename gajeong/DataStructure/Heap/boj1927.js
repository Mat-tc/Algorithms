const fs = require('fs');
let input =
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : fs
        .readFileSync('C:/project/Algorithms/gajeong/예제.txt')
        .toString()
        .trim()
        .split('\n');

solution(input);

function solution(input) {
  class Node {
    // value 외에도 priority 클래스를 함께 담기 위해 Node 클래스를 사용한다.
    constructor(val) {
      this.val = val;
    }
  }

  class PriorityQueue {
    constructor() {
      this.values = [];
    }

    enqueue(val) {
      // 이진 힙에서 만든 Insert 메서드에서 이름을 바꿨다.
      const newNode = new Node(val);
      this.values.push(newNode);
      this.bubbleUp();
    }

    bubbleUp() {
      let idx = this.values.length - 1;
      while (idx > 0) {
        const parentIdx = Math.floor((idx - 1) / 2);
        if (this.values[idx].val < this.values[parentIdx].val) break;
        [this.values[idx], this.values[parentIdx]] = [
          this.values[parentIdx],
          this.values[idx],
        ];
        idx = parentIdx;
      }
    }

    dequeue() {
      // 이진 힙에서 만든 extractMax 메서드에서 이름을 바꿨다.
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
      const element = this.values[0];
      while (true) {
        const leftChildIdx = 2 * idx + 1;
        const rightChildIdx = 2 * idx + 2;
        let leftChild;
        let rightChild;
        let swap = null;

        if (leftChildIdx > length) {
          leftChild = this.values[leftChildIdx];
          // 최소이진힙이라 최대이진힙과 달리 부등호 방향이 반대고, 비교하는 값은 priority 프로퍼티다.
          if (leftChild.val < element.val) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx > length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild.val > element.val) ||
            (swap !== null && rightChild.val > leftChild.val)
          ) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
  }

  const N = Number(input[0]);
  const pq = new PriorityQueue();
  const answer = [];
  for (let i = 1; i <= N; i++) {
    let num = Number(input[i]);
    if (num == 0) {
      if (pq.values.length == 0) answer.push(0);
      else answer.push(pq.values.pop().val);
    } else {
      pq.enqueue(num);
    }
  }
  console.log(answer);
}
