#include <bits/stdc++.h>

using namespace std;

vector<vector<int>> m;

int visited[501][501];
int dp[501][501];
int dx[4] = {-1,1,0,0};
int dy[4] = {0,0,-1,1};

int M, N, H;

void dfs(int x, int y)
{
    if (visited[x][y] != 0) return ;
    visited[x][y] = 1;
    for (int i = 0; i < 4; i++)
    {
        int xx = dx[i] + x;
        int yy = dy[i] + y;
        if (xx >= 0 && xx < M && yy >= 0 && yy < N) // 상하좌우 범위
        {
            if (m[xx][yy] > m[x][y])
            {
                dfs(xx,yy);
                dp[x][y] = dp[x][y] + dp[xx][yy];
            }
        }
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    H = 0;
    cin >> M >> N;
    for (int i = 0; i < M; i++)
    {
        vector<int> n;
        for (int j = 0; j < N; j++)
        {
            int a;
            cin >> a;
            n.push_back(a);
        }
        m.push_back(n);
    }
    dp[0][0] = 1;
    dfs(M-1,N-1);
    cout << dp[M-1][N-1];
    return 0;
}
