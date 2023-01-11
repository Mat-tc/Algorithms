#include <bits/stdc++.h>

using namespace std;

long long INF = 10000000001;
vector<pair<int, int>> edge[100005]; // 간선 정보입니다.
vector<long long> d[100001];
vector<long long> dist;

void dijkstra(int start)
{
    d[start][0] = 0;
    priority_queue<pair<int, long long>> pq;
    pq.push(make_pair(start, 0));

    while (!pq.empty())
    {
        int current = pq.top().first;

        long long distance = -pq.top().second;
        pq.pop();

        if (d[start][current] < distance)
            continue;
        for (int i = 0; i < edge[current].size(); i++)
        {

            int next = edge[current][i].first;

            long long nextDistance = distance + edge[current][i].second;

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

    int N, M, K;
    cin >> N >> M >> K;

    for (int i = 0; i <= N; i++)
    {
        for (int j = 0; j <= N; j++)
        {
            if (i == j)
            {
                d[i].push_back(0);
                continue;
            }
            d[i].push_back(INF);
        }
        dist.push_back(INF);
    }

    for (int i = 0; i < M; i++)
    {
        int U, V, C;
        cin >> U >> V >> C;
        edge[V].push_back(make_pair(U, C));
    }

    vector<int> v;
    for (int i = 0; i < K; i++)
    {
        int a;
        int maxidx = 0;
        cin >> a;
        dijkstra(a);
        for (int j = 0; j < d[a].size(); j++)
        {
            dist[j] = min(d[a][j], dist[j]);
        }
    }
    int maxidx = 1;

    for (int i = 1; i <= N; i++)
    {
        if (dist[i] > dist[maxidx])
        {
            maxidx = i;
        }
    }

    cout << maxidx << "\n"
         << dist[maxidx];

    return 0;
}