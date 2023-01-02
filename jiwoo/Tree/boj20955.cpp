#include <bits/stdc++.h>

using namespace std;
vector<int> vec[100001];
vector<int> vis;
int cnt = 0;
void dfs(int a)
{
    if (vis[a] != 0) {
        cnt++;
        return ;
    }
    vis[a] = 1;
    for (int i = 0; i < vec[a].size(); i++)
    {
        dfs(vec[a][i]);
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N,M;
    cin >> N >> M;

    for (int i = 0; i < N; i++)
    {
        vis.push_back(0);
    }
    for (int i = 0; i < M; i++)
    {
        int u,v;
        cin >> u >> v;
        vec[u].push_back(v);
    }
    int i = 1;
    
    while(1)
    {
        if (i == N) break;
        if (vis[i] == 0)
        {
            cnt++;
            dfs(i);
        }
        i++;
    }

    cout << cnt-1;
    return 0;
}