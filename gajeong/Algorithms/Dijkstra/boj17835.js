const fs = require('fs');
let input = fs
  .readFileSync('C:/project/Algorithms/gajeong/예제.txt')
  .toString()
  .trim()
  .split('\r\n');
solution(input);
function solution(input) {
  class Node {
    // value 외에도 priority 클래스를 함께 담기 위해 Node 클래스를 사용한다.
    constructor(val, priority) {
      this.val = val;
      this.priority = priority;
    }
  }

  class PriorityQueue {
    constructor() {
      this.values = [];
    }

    enqueue(val, priority) {
      // 이진 힙에서 만든 Insert 메서드에서 이름을 바꿨다.
      const newNode = new Node(val, priority);
      this.values.push(newNode);
      this.bubbleUp();
    }

    bubbleUp() {
      let idx = this.values.length - 1;
      while (idx > 0) {
        const parentIdx = Math.floor((idx - 1) / 2);
        if (this.values[idx].priority >= this.values[parentIdx].priority) break;
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

        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          // 최소이진힙이라 최대이진힙과 달리 부등호 방향이 반대고, 비교하는 값은 priority 프로퍼티다.
          if (leftChild.priority < element.priority) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild.priority < element.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)
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

  const [N, M, K] = input[0].split(' ').map(Number);
  const MAX = 1e10;
  const map = Array.from(Array(N + 1), () => Array(N + 1).fill(MAX));
  const d = input[1 + M].split(' ').map(Number);
  for (let i = 1; i <= M; i++) {
    let [start, end, cost] = input[i].split(' ').map(Number);
    if (map[start][end] > cost) map[start][end] = cost;
  }
  const answer = [];
  for (let i = 1; i <= N; i++) {
    if (d.includes(i)) continue;
    let heap = new PriorityQueue();
    heap.enqueue([0, i], 0);
    let visited = Array(N + 1).fill(-1);
    visited[0] = 0;
    while (heap.values.length) {
      let item = heap.dequeue();

      let [start, end] = item.val;
      let cost = item.priority;
      if (visited[end] > -1) continue;
      visited[end] = cost;
      for (let k = 1; k <= N; k++) {
        if (visited[k] > -1) continue;
        if (end == k) continue;
        heap.enqueue([end, k], cost + map[end][k]);
      }
    }
    answer[i] = visited;
  }
  let result = [];
  let idx = 0;
  let dist = 0;
  for (let i = 1; i <= N; i++) {
    for (let j = 0; j < K; j++) {
      if (answer[i]) {
        if (!result[i]) result[i] = answer[i][d[j]];
        if (answer[i][d[j]] < result[i]) result[i] = answer[i][d[j]];
      }
    }
  }

  for (let i = 1; i <= N; i++) {
    if (result[i] > dist) {
      dist = result[i];
      idx = i;
    }
  }
  console.log(idx);
  console.log(dist);
}
