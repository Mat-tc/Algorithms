#include <bits/stdc++.h>
#define INF 2000000
using namespace std;

vector<pair<int, int>> edge[4001];
int fox[4001][4001];
pair<int,int> wolf1[4001][4001];

void dijkstrafox(int start)
{
    fox[start][1] = 0;
    priority_queue<pair<int, int>> pq;
    pq.push(make_pair(start, 0));

    while (!pq.empty())
    {
        int current = pq.top().first;

        int distance = -pq.top().second;
        pq.pop();

        if (fox[start][current] < distance)
            continue;
        for (int i = 0; i < edge[current].size(); i++)
        {
            int next = edge[current][i].first;

            int nextDistance = distance + edge[current][i].second;

            if (nextDistance < fox[start][next])
            {
                fox[start][next] = nextDistance;
                pq.push(make_pair(next, -nextDistance));
            }
        }
    }
}

void dijkstrawolf(int start)
{
    wolf1[start][1].first = 0;
    wolf1[start][1].second = 0;

    priority_queue<pair<int, int>> pq;
    pq.push(make_pair(start, 0));

    while (!pq.empty())
    {
        int current = pq.top().first;

        int distance = -pq.top().second;
        pq.pop();

        if (wolf1[start][current].first < distance && wolf1[start][current].second < distance)
            continue;
        for (int i = 0; i < edge[current].size(); i++)
        {
            int next = edge[current][i].first;

            int nextDistancefast = distance + edge[current][i].second/2;
            int nextDistanceslow = distance + edge[current][i].second*2;


            if (nextDistancefast < wolf1[start][next].first)
            {
                wolf1[start][next].first = nextDistancefast;
                pq.push(make_pair(next, -nextDistancefast));
            }
        }
    }
}


int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N, M;
    cin >> N >> M;

    for (int i = 1; i <= N; i++)
    {
        for (int j = 1; j <= N; j++)
        {
            if (i == j)
            {
                fox[i][j] = 0;
                wolf1[i][j].first = 0;
                wolf1[i][j].second = 0;
                continue;
            }
            fox[i][j] = INF;
            wolf1[i][j].first = INF;
            wolf1[i][j].second = INF;
            }
    }

    for (int i = 0; i < M; i++)
    {
        int a, b, d;
        cin >> a >> b >> d;
        edge[a].push_back(make_pair(b, d*2));
        edge[b].push_back(make_pair(a, d*2));
    }

    dijkstrafox(1);
    dijkstrawolf(1);

    return 0;
}
