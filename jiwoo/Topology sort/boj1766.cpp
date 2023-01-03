#include <bits/stdc++.h>

using namespace std;

vector<int> g[32001];
int ind[32001] = {0,};
int vis[32001] = {0,};

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    queue<int> q;
    int N, M;
    cin >> N >> M;

    for (int i = 0; i < M; i++)
    {
        int a, b;
        cin >> a >> b;
        g[a].push_back(b);
        ind[b]++;
    }
    
    for (int i = 1; i <= N; i++)
    {
        if (ind[i] == 0 && vis[i] == 0) 
        {
            vis[i] = 1;
            q.push(i);
            for (int j = 0; j < g[i].size(); j++)
            {
                ind[g[i][j]]--;
            }
            i = 0;
        }
    }
    
    while (!q.empty())
    {
        cout << q.front() << " ";
        q.pop();
    }

    return 0;
}