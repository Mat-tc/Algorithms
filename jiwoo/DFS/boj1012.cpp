#include <bits/stdc++.h>

using namespace std;

int T;
int M, N, K;
int dx[4] = {-1, 1, 0, 0};
int dy[4] = {0, 0, -1, 1};
int vis[51][51];
int field[51][51];

void dfs(int y, int x)
{
    if (vis[y][x])
        return;
    vis[y][x] = 1;
    for (int i = 0; i < 4; i++)
    {
        if (dy[i] + y < 0 || dy[i] + y >= N || dx[i] + x < 0 || dx[i] + x >= M)
            continue;
        if (field[dy[i] + y][dx[i] + x])
            dfs(dy[i] + y, dx[i] + x);
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> T;
    for (int i = 0; i < T; i++)
    {
        int cnt = 0;
        cin >> M >> N >> K;

        for (int j = 0; j < N; j++)
        {
            memset(field[j], 0, sizeof(field[j]));
            memset(vis[j], 0, sizeof(vis[j]));
        }

        for (int j = 0; j < K; j++)
        {
            int x, y;
            cin >> x >> y;
            field[y][x] = 1;
        }
        for (int j = 0; j < N; j++)
        {
            for (int l = 0; l < M; l++)
            {
                if (vis[j][l] == 0 && field[j][l])
                {
                    cnt++;
                    dfs(j, l);
                }
            }
        }
        cout << cnt << "\n";
    }
    return 0;
}