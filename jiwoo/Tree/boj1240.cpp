#include <bits/stdc++.h>

using namespace std;
vector<pair<int,int>> dis[1003]; // dis[from] from에서 출발 pair<to, 거리>
int dist[1003] = { 0, }; // BFS돌릴때만 잠시 저장할 거리

int bfs(int from, int to)
{
    int sum = 0;
    memset(dist,-1,sizeof(dist)); // -1로 초기화
    queue<int> q;
    q.push(from); 
    dist[from] = 0; 
    while (!q.empty()) { 
		int cur = q.front(); 
		q.pop(); 
		for (auto it : dis[cur]) { 
			if (dist[it.first] != -1) continue; 
			dist[it.first] = dist[cur] + it.second; // 계속 누적 3에서 2 거리를 알고 싶으면 3과 4의 거리 + 4와 1의 거리 + 1과 2의 거리
			q.push(it.first); 
		}
	}

    return dist[to];
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N,M;

    cin >> N >> M;

    for (int i = 0; i < N-1; i++)
    {
        int a, b, c;
        cin >> a >> b >> c;
        dis[a].push_back({ b,c }); // a와 b사이 거리 c
        dis[b].push_back({ a,c });
    }

    for (int i = 0; i < M; i++) {
		int a, b;
		cin >> a >> b;
		cout << bfs(a, b) << "\n";
	}

    return 0;
}