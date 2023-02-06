function solution(cards) {
  var answer = 0;
  const N = cards.length;
  const visited = Array(N + 1).fill(false);
  const arr = [0];
  cards.splice(0, 0, 0);
  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;
    visited[cards[i]] = true;
    if (cards[i] == i) {
      arr.push(1);
      continue;
    }
    let stack = [cards[i]];
    let idx = 0;
    while (idx < stack.length) {
      if (!visited[cards[stack[idx]]]) {
        stack.push(cards[stack[idx]]);
        visited[cards[stack[idx]]] = true;
      }
      idx++;
    }
    arr.push(stack.length);
  }
  arr.sort((a, b) => b - a);
  console.log(arr);
  return arr[0] * arr[1];
}

console.log(solution([2, 3, 4, 5, 6, 7, 8, 1]));
