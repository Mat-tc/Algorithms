#include <bits/stdc++.h>

using namespace std;

vector<int> v[101];
int vis[101];

void dfs(int a)
{
    for (int i = 0; i < v[a].size(); i++)
    {
        if (vis[v[a][i]] == 0)
        {
            vis[v[a][i]] = 1;
            dfs(v[a][i]);
        }
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N;
    cin >> N;
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N; j++)
        {
            int a;
            cin >> a;
            if (a == 1)
            {
                v[i].push_back(j);
            }
        }
    }
    for (int i = 0; i < N; i++)
    {
        memset(vis, 0, sizeof(vis));
        dfs(i);
        for (int j = 0; j < N; j++)
        {
            if (vis[j] == 0) cout << "0 ";
            else cout << "1 ";
        }
        cout << "\n";
    }

    return 0;
}