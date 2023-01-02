#include <bits/stdc++.h>

using namespace std;
vector<int> v[100001];
int vis[100001] = {0};
int ver[100001] = {0};

int dfs(int n)
{
    if (ver[n] != 0) return ver[n];
	vis[n] = true; 
	int tmp = 1; // 본인 포함
	for (int i = 0; i < v[n].size(); i++) {
		int next = v[n][i]; // v[3]기준 v[3]의 원소 {1,2,4}를 다 DFS로 돌림
		if (vis[next]) continue;
		tmp += dfs(next); // ex) v[3]는 v[1], v[2], v[4]를 다 더한 거니까  
	}
	ver[n] = tmp;
	return tmp;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N,R,Q;
    cin >> N >> R >> Q;

    for (int i = 0; i < N - 1; i++)
    {
        int U, V;
        cin >> U >> V;
        v[U].push_back(V); // v[1] = {3} v[3] = {1,2,4} 이렇게 넣고
        v[V].push_back(U);
    }

    ver[R] = dfs(R);
    for (int i = 0; i < Q; i++) {
        int a;
		cin >> a;
		cout << ver[a] << '\n';
	}

    return 0;
}