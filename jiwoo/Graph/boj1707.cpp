#include <bits/stdc++.h>

using namespace std;
vector<vector<int>> vertics;
int color[20001] = {0}; // 1은 red 2는 blue
int vis[20001] = {0};
int flag = 0;
void DFS(int a)
{
    if (vis[a] != 0)
        return;
    vis[a] = 1;
    if (color[a] == 0)
    {
        color[a] = 1;
    }
    for (int i = 0; i < vertics[a].size(); i++)
    {
        if (color[a] == 1)
        {
            if (color[vertics[a][i]] == 1)
            {
                flag = 1;
                return;
            }
            color[vertics[a][i]] = 2;
        }
        else if (color[a] == 2)
        {
            if (color[vertics[a][i]] == 2)
            {
                flag = 1;
                return;
            }
            color[vertics[a][i]] = 1;
        }
        DFS(vertics[a][i]);
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int K; // 테스트케이스의 개수
    cin >> K;
    while (K--)
    {
        memset(vis, 0, sizeof(vis));
        memset(color, 0, sizeof(color));
        flag = 0;
        int V, E; // 정점의 개수 V 간선의 개수 E
        cin >> V >> E;
        vertics.assign(V + 1, vector<int>(0, 0));
        for (int i = 0; i < E; i++)
        {
            int u, v; // 인접한 두 정점의 번호 u, v
            cin >> u >> v;
            vertics[u].push_back(v);
            vertics[v].push_back(u);
        }
        for (int i = 1; i <= V; i++)
        {
            DFS(i);
        }
        if (flag == 0)
            cout << "YES\n"; // 이분 그래프일 때
        else
            cout << "NO\n";
    }

    return 0;
}