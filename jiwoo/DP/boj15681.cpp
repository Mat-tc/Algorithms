#include <bits/stdc++.h>

using namespace std;
vector<int> v[100001];
int vis[100001] = {0};
int ver[100001];

int dfs(int n)
{
    if (ver[n] != 0) return ver[n]; // 이미 정점계산했었으면
	vis[n] = true;
	int ret = 1;
	for (int i = 0; i < v[n].size(); i++) {
		int next = v[n][i];
		if (vis[next]) continue;
		ret += dfs(next); // 내 서브트리의 정점의수 = 자기자신 + 바로 밑의 서브트리의 정점의수
	}
	ver[n] = ret;
	return ret;
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
        v[U].push_back(V);
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