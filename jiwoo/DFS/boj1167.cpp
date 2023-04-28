#include <bits/stdc++.h>

using namespace std;

struct Node
{
    int ver;
    int dist;
};
int V;
vector<Node> v[100001];
int vis[100001];
int maxdist = 0;
int maxidx;
void dfs(int a, int sum)
{
    if (vis[a])
        return;
    if (maxdist < sum)
    {
        maxdist = sum;
        maxidx = a;
    }
    vis[a] = 1;
    for (int i = 0; i < v[a].size(); i++)
    {
        dfs(v[a][i].ver, v[a][i].dist + sum);
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> V;

    for (int i = 1; i <= V; i++)
    {
        int x;
        cin >> x;
        while (true)
        {
            int a, b;
            cin >> a;
            if (a == -1)
                break;
            cin >> b;
            v[x].push_back({a, b});
        }
    }

    dfs(1, 0);
    memset(vis, 0, sizeof(vis));
    maxdist = 0;
    dfs(maxidx, 0);
    cout << maxdist;
    return 0;
}