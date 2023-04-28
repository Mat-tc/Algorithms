function solution(A, K) {
  // Implement your solution here
  let move = K % A.length;

  const answer = [
    ...A.slice(A.length - move, A.length),
    ...A.slice(0, A.length - move),
  ];
  return answer;
}

console.log(solution([1, 2, 3, 4], 4));
