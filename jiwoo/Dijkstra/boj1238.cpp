#include <bits/stdc++.h>

using namespace std;

int INF = 1000001;
int N, M, X;

vector<pair<int, int>> a[10001];
vector<pair<int, int>> b[10001];

int d1[1001][1001] = {0};
int d2[1001][1001] = {0};

void dijkstra1(int start)
{
    d1[start][0] = 0;
    priority_queue<pair<int, int>> pq;
    pq.push(make_pair(start, 0));

    while (!pq.empty())
    {
        int current = pq.top().first;

        int distance = -pq.top().second;
        pq.pop();

        if (d1[start][current] < distance)
            continue;
        for (int i = 0; i < a[current].size(); i++)
        {

            int next = a[current][i].first;

            int nextDistance = distance + a[current][i].second;

            if (nextDistance < d1[start][next])
            {
                d1[start][next] = nextDistance;
                pq.push(make_pair(next, -nextDistance));
            }
        }
    }
}

void dijkstra2(int start)
{
    d2[start][0] = 0;
    priority_queue<pair<int, int>> pq;
    pq.push(make_pair(start, 0));

    while (!pq.empty())
    {
        int current = pq.top().first;

        int distance = -pq.top().second;
        pq.pop();

        if (d2[start][current] < distance)
            continue;
        for (int i = 0; i < b[current].size(); i++)
        {

            int next = b[current][i].first;

            int nextDistance = distance + b[current][i].second;

            if (nextDistance < d2[start][next])
            {
                d2[start][next] = nextDistance;
                pq.push(make_pair(next, -nextDistance));
            }
        }
    }
}


int main(void)
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> N >> M >> X;
    for (int i = 0; i < M; i++)
    {
        int start, end, T;
        cin >> start >> end >> T;
        a[start].push_back(make_pair(end, T));
        b[end].push_back(make_pair(start, T));
    }

    for (int i = 1; i <= N; i++)
    {
        for (int j = 1; j <= N; j++)
        {
            d1[i][j] = INF;
            d2[i][j] = INF;
        }
    }
    dijkstra1(X);
    dijkstra2(X);
    int ans = 0;

    for (int i = 1; i <= N; i++)
    {
        if (i == X) continue;
        ans = max(ans, d1[X][i] + d2[X][i]);
    }

    cout << ans;
}