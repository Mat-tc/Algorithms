#include <bits/stdc++.h>

using namespace std;

int vis[100001];
int de[100001];
vector<int> ro[100001];

vector<int> solution(int n, vector<vector<int>> roads, vector<int> sources, int destination)
{
    vector<int> answer;

    for (int i = 0; i < roads.size(); i++)
    {
        ro[roads[i][0]].push_back(roads[i][1]);
        ro[roads[i][1]].push_back(roads[i][0]);
    }

    queue<pair<int, int>> q;
    
    q.push({destination, 0});
    vis[destination] = 1;

    while (!q.empty())
    {
        int cur = q.front().first;
        int dest = q.front().second;
        q.pop();
        de[cur] = dest;

        for (int i = 0; i < ro[cur].size(); i++)
        {
            int next = ro[cur][i];
            if (vis[next] == 0)
            {
                q.push({next, dest + 1});
                vis[next] = 1;
            }
        }
    }

    for (int i = 0; i < sources.size(); i++)
    {
        if (sources[i] == destination)
        {
            answer.push_back(0);
            continue;
        }
        if (de[sources[i]] == 0)
            answer.push_back(-1);
        else
            answer.push_back(de[sources[i]]);
    }

    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    return 0;
}