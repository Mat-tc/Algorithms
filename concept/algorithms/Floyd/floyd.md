# 플로이드-와샬 알고리즘

## 🧐플로이드 - 워셜 알고리즘이란 ?

모든 노드 간 최단 경로를 구하는 알고리즘

- 다익스트라 알고리즘과 다르게 음의 간선도 사용 가능

### 🔍 플로이드 - 워셜 알고리즘 과정

1. 모든 노드 간의 최단 거리를 구해야 하므로, 2차원 인접 행렬로 구성

2. 여러라운드로 진행되면, 라운드마다 각 경로에서 새로운 중간 노드로 사용할 수 있는 노드를 선택하고, 더 짤은 길이를 선택하여 줄이는 과정 반복

3. 초기 2차원 행렬로 값 세팅 시, 특정 노드간의 연결 간선이 없다면 INF 로 표시

```javascript
// * 문제에서 주어진 세로 N, 가로 M 를 이용한 초기 셋팅
const [V, M] = input[0].split(' ').map(Number);
const INF = V * 10000 + 1;
const map = Array.from(Array(V + 1), () => Array(V + 1).fill(INF));

// 플로이드 워셜

for (let middle = 1; middle <= V; middle++) {
  for (let start = 1; start <= V; start++) {
    for (let end = 1; end <= V; end++) {
      if (start == middle || start == end || middle == end) continue;
      map[start][end] = Math.min(
        map[start][end],
        map[start][middle] + map[middle][end]
      );
    }
  }
}
```
