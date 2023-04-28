#include <bits/stdc++.h>

#define MAX 16
#define INF 987654321

using namespace std;

int N, ans = INF;
int w[MAX][MAX];
int dp[MAX][1 << MAX];

int tsp(int cur, int visited)
{
    if (visited == (1 << N) - 1) // 모든 도시를 방문한 경우
    { 
        if (w[cur][0] == 0)
            return INF; // 시작 도시로 돌아갈 수 없는 경우
        else
            return w[cur][0]; // 시작 도시로 돌아갈 수 있는 경우
    }

    if (dp[cur][visited] != -1)
        return dp[cur][visited]; // 이미 계산한 경우

    int ret = INF;

    for (int i = 0; i < N; i++)
    {
        if (visited & (1 << i))
            continue; // 이미 방문한 도시인 경우
        if (w[cur][i] == 0)
            continue; // 갈 수 없는 경우
        ret = min(ret, tsp(i, visited | (1 << i)) + w[cur][i]);
    }
    return dp[cur][visited] = ret; // 계산 결과 저장
}

int main()
{
    memset(dp, -1, sizeof(dp));

    cin >> N;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cin >> w[i][j];
        }
    }

    ans = tsp(0, 1);
    cout << ans << "\n";
    return 0;
}