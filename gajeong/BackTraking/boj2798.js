const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `10 500
    93 181 245 214 315 36 185 138 216 295`
).split('\n');

const [N, M] = stdin[0].trim().split(' ').map(Number);
const arr = stdin[1].trim().split(' ').map(Number);

const solution = (N, M, arr) => {
  const visited = Array(N).fill(false);
  let res = 0;
  let sum = 0;
  const dfs = (cnt) => {
    if (cnt === 3) {
      return M - res > M - sum && M - sum >= 0 ? (res = sum) : '';
    }
    for (let i = 0; i < N; i++) {
      //유망하지 않은 경우 1. 방문했을때,
      if (visited[i]) continue;
      //유망하지 않은 경우 2. 합이 M을 넘을때,
      sum += arr[i];
      if (sum > M) {
        sum -= arr[i];
        continue;
      }
      visited[i] = true;
      dfs(cnt + 1);
      sum -= arr[i]; // stack에 담지 않고, sum 으로 바로 수행하면서 check
      visited[i] = false;
    }
  };
  dfs(0);
  console.log(res);
};

solution(N, M, arr);
