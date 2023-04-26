#include <bits/stdc++.h>

using namespace std;

int INF = 987654321;
int V, E, K;
int Dist[20001];
vector<pair<int, int>> weight[20001];

void Dijkstra()
{
    priority_queue<pair<int,int>> PQ;
    PQ.push(make_pair(0, K));
    Dist[K] = 0;
 
    while (!PQ.empty())
    {
        int Cost = -PQ.top().first;
        int Cur = PQ.top().second;
        PQ.pop();
 
        for (int i = 0; i < weight[Cur].size(); i++)
        {
            int Next = weight[Cur][i].first;
            int nCost = weight[Cur][i].second;
 
            if (Dist[Next] > Cost + nCost)
            {
                Dist[Next] = Cost + nCost;
                PQ.push(make_pair(-Dist[Next], Next));
            }
        }
    }
 
    for (int i = 1; i <= V; i++)
    {
        if (Dist[i] == INF) cout << "INF\n";
        else cout << Dist[i] << "\n";
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> V >> E >> K;
    
    for (int i = 1; i <= V; i++)
    {
        Dist[i] = INF;
    }

    for (int i = 0; i < E; i++)
    {
        int u, v, w;
        cin >> u >> v >> w;
        weight[u].push_back(make_pair(v, w));
    }
    
    Dijkstra();
    
    return 0;
}