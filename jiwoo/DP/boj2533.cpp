#include <bits/stdc++.h>

using namespace std;

vector<vector<int>> vec(1000001);
int dp[1000001][2];
bool visited[1000001];

void sol(int x)
{
    visited[x] = true;
    dp[x][0] = 1; // dp[x][0]은 내가 얼리어답터일 경우 총 필요한얼리어답터수 [x][1]은 내가 아닐경우
    for (int i = 0; i < vec[x].size(); i++)
    {
        int child = vec[x][i];
        if (visited[child]) continue;
        sol(child);
        dp[x][1] += dp[child][0];
        dp[x][0] += min(dp[child][1], dp[child][0]);
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N;
    cin >> N;
    int u, v;
    for (int i = 0; i < N - 1; i++)
    {
        cin >> u >> v;
        vec[u].push_back(v);
        vec[v].push_back(u);
    }
    sol(1);
    cout << min(dp[1][0],dp[1][1]);

    return 0;
}