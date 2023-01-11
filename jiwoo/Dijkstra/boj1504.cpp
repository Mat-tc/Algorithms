#include <bits/stdc++.h>

using namespace std;

int INF = 300000000;
vector<pair<int, int>> edge[10001]; // 간선 정보입니다.

int d[801][801] = {0}; // 최소 비용입니다.

void dijkstra(int start)
{
    d[start][0] = 0;
    priority_queue<pair<int, int>> pq;
    pq.push(make_pair(start, 0));

    while (!pq.empty())
    {
        int current = pq.top().first;

        int distance = -pq.top().second;
        pq.pop();

        if (d[start][current] < distance)
            continue;
        for (int i = 0; i < edge[current].size(); i++)
        {

            int next = edge[current][i].first;

            int nextDistance = distance + edge[current][i].second;

            if (nextDistance < d[start][next])
            {
                d[start][next] = nextDistance;
                pq.push(make_pair(next, -nextDistance));
            }
        }
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int ans = -1;
    int N, E;
    cin >> N >> E;

    for (int i = 1; i <= N; i++)
    {
        for (int j = 1; j <= N; j++)
        {
            if (i == j) 
            {
                d[i][j] = 0;
                continue;
            }
            d[i][j] = INF;
        }
    }

    for (int i = 0; i < E; i++)
    {
        int a, b, c;
        cin >> a >> b >> c;
        edge[a].push_back(make_pair(b, c));
        edge[b].push_back(make_pair(a, c));
    }

    int v1, v2;
    cin >> v1 >> v2;

    dijkstra(1);
    dijkstra(v1);
    dijkstra(v2);

    if (d[1][v1] + d[v1][v2] + d[v2][N] > d[1][v2] + d[v2][v1] + d[v1][N])
    {
        if ((d[1][v2] == INF || d[v2][v1] == INF) || d[v1][N] == INF)
        {
            ans = -1;
        }
        else
        {
            ans = d[1][v2] + d[v2][v1] + d[v1][N];
        }
    }
    else if (d[1][v1] + d[v1][v2] + d[v2][N] < d[1][v2] + d[v2][v1] + d[v1][N])
    {
        if ((d[1][v1] == INF || d[v1][v2] == INF) || d[v2][N] == INF)
        {
            ans = -1;
        }
        else
        {
            ans = d[1][v1] + d[v1][v2] + d[v2][N];
        }
    }
    else
    {
        if ((d[1][v1] == INF && d[v1][v2] != INF && d[v2][N] != INF) || d[1][v1] != INF & d[v1][v2] != INF & d[v2][N] != INF)
        {
            ans = d[1][v1] + d[v1][v2] + d[v2][N];
        }
        else
        {
            ans = -1;
        }
    }

    cout << ans;

    return 0;
}