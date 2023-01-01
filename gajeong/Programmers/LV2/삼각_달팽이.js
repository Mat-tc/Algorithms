function solution(n) {
  var answer = [];

  const visit = Array(n + 1).fill(false);
  const res = Array.from({ length: n + 1 }, () => []);
  let max = 0;
  console.log(max);
  let idx = 1;
  //초기 세팅
  for (let i = 1; i <= n; i++) {
    res[i].push(idx);
    idx++;
    max += i;
  }
  visit[n] = true;
  visit[1] = true;
  for (let i = 1; i < n; i++) {
    res[n].push(idx);
    idx++;
  }

  //false 역행, true 순행
  let status = false;
  let j = n - 1;
  let i = n;
  while (idx < max + 1) {
    if (visit[j] == true && status) {
      for (i; i < k - 1; i++) {
        if (!res[j - 1][i]) {
          res[j - 1][i] = idx;
          idx++;
        } else {
          break;
          status = false;
          i;
        }
      }
    }
    if (visit[j] == true && !status) {
    }

    if (status == false) {
      node[i][j] = idx;
      idx++;
      i--;
      j--;
    }
    if (status == true) {
      node[i][j] = idx;
      idx++;
      i++;
    }
  }
  console.log(res);

  return answer;
}

solution(5);
