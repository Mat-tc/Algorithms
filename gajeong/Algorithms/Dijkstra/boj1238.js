const fs = require("fs");
let input = fs
  .readFileSync("C:/project/Algorithms/gajeong/예제.txt")
  .toString()
  .trim()
  .split("\r\n");
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
  const [N, M, X] = input[0].split(" ").map(Number);
  const max = 100 * N;
  const map1 = Array.from(Array(N + 1), () => Array(N + 1).fill(max));
  const map2 = Array.from(Array(N + 1), () => Array(N + 1).fill(max));
  for (let i = 1; i <= M; i++) {
    let [start, end, cost] = input[i].split(" ").map(Number);
    map1[start][end] = cost;
    map2[end][start] = cost;
  }

  for (let i = 1; i <= N; i++) {
    map1[i][i] = 0;
    map2[i][i] = 0;
  }

  let heap = new PriorityQueue();
  heap.enqueue([0, X], 0);
  let visited = Array(N + 1).fill(-1);
  visited[0] = 0;
  while (heap.values.length) {
    let item = heap.dequeue();

    let [start, end] = item.val;
    let cost = item.priority;
    if (visited[end] > -1 && visited[end] < cost) continue;
    for (let k = 1; k <= N; k++) {
      if (map1[end][k] > 0 && visited[k] == -1 && map1[end][k] < max) {
        heap.enqueue([end, k], map1[end][k] + visited[start]);
      }
    }
    visited[end] = visited[start] + cost;
  }

  let heap2 = new PriorityQueue();
  heap2.enqueue([0, X], 0);
  let visited2 = Array(N + 1).fill(-1);
  visited2[0] = 0;
  while (heap2.values.length) {
    let item2 = heap2.dequeue();

    let [start, end] = item2.val;
    let cost = item2.priority;
    if (visited2[end] > -1 && visited2[end] < cost) continue;
    for (let k = 1; k <= N; k++) {
      if (map2[end][k] > 0 && visited2[k] == -1 && map2[end][k] < max) {
        heap2.enqueue([end, k], map2[end][k] + visited2[start]);
      }
    }
    visited[end] = visited[start] + cost;
  }

  const answer1 = [];
  const answer2 = [];
  const res = [];
  for (let i = 1; i <= N; i++) {
    res.push(answer1[i] + answer2[i]);
  }
  console.log(Math.max(...res));
}
