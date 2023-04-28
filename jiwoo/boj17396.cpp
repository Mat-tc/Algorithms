#include <bits/stdc++.h>

using namespace std;

int N, M;
long long INF = 30000000000;
vector<int> ward;
long long dist[100001];
vector<pair<int, long long>> v[100001];

void dijkstra()
{
    priority_queue<pair<int, long long>, vector<pair<int, long long>>, greater<pair<int, long long>>> pq;
    pq.push({0, 0});
    while (!pq.empty())
    {
        int cur = pq.top().first;
        long long cost = pq.top().second;
        pq.pop();
        if (dist[cur] < cost) // 왜???
            continue;
        for (int i = 0; i < v[cur].size(); i++)
        {
            int next = v[cur][i].first;
            long long ncost = v[cur][i].second + cost;
            if (dist[next] > ncost)
            {
                dist[next] = ncost;
                pq.push({next, ncost});
            }
        }
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> N >> M;

    for (int i = 0; i < N; i++)
    {
        int a;
        cin >> a;
        if (i != N - 1)
            ward.push_back(a);
        else
            ward.push_back(0);
    }

    for (int i = 1; i < N; i++)
    {
        dist[i] = INF;
    }

    for (int i = 0; i < M; i++)
    {
        int a, b;
        long long t;
        cin >> a >> b >> t;
        if (ward[b] != 1 && ward[a] != 1)
        {
            v[a].push_back({b, t});
            v[b].push_back({a, t});
        }
    }

    dijkstra();

    if (dist[N - 1] != INF)
        cout << dist[N - 1];
    else
        cout << -1;
    return 0;
}