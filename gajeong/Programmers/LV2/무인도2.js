function solution(maps) {
  const map = maps.map((arr) => arr.split(''));
  const m = map.length;
  const n = map[0].length;

  const visited = Array({ length: n }, () => Array(m).fill(false));
  console.log(visited);
}

console.log(solution(['X591X', 'X1X5X', 'X231X', '1XXX1']));
