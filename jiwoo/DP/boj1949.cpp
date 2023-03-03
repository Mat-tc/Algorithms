#include <bits/stdc++.h>

using namespace std;

vector<int> town;
vector<int> road[10001];
int dp[10001][2];
bool visited[10001];
int ans = 0;
int N;

void dfs(int a)
{
    dp[a][0] = 0;
    dp[a][1] = town[a];

    for (int i = 0; i < road[a].size(); i++)
    {
        if(visited[road[a][i]]) continue;
        dfs(road[a][i]);

        dp[a][0] = dp[a][0] + max(dp[next][0],dp)
    }
}



int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    town.push_back(0);

    cin >> N;

    for (int i = 0; i < N; i++)
    {
        int a;
        cin >> a;
        town.push_back(a);
    }

    for (int i = 0; i < N - 1; i++)
    {
        int a, b;
        cin >> a >> b;
        road[a].push_back(b);
        road[b].push_back(a);
    }


    return 0;
}
