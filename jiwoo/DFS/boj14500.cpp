#include <bits/stdc++.h>

using namespace std;

int board[501][501];
int vis[501][501];
int dx[4] = {-1, 1, 0, 0};
int dy[4] = {0, 0, -1, 1};
int ans = 0;
int N, M;

void sol(int cnt, int x, int y, int cur)
{
    if (cnt == 4)
    {
        ans = max(ans, cur);
        return;
    }
    for (int i = 0; i < 4; i++)
    {
        if (dx[i] + x < 0 || dx[i] + x >= N || dy[i] + y < 0 || dy[i] + y >= M)
        {
            continue;
        }
        if (vis[dx[i] + x][dy[i] + y])
            continue;
        else
        {
            vis[x][y] = 1;
            sol(cnt + 1, dx[i] + x, dy[i] + y, cur + board[dx[i] + x][dy[i] + y]);
        }
    }
    vis[x][y] = 0;
}

void fuckyou(int cnt, int x, int y, int cur)
{
    if (cnt == 2)
    {
        priority_queue<int> pq;
        for (int i = 0; i < 4; i++)
        {
            if (dx[i] + x < 0 || dx[i] + x >= N || dy[i] + y < 0 || dy[i] + y >= M)
            {
                continue;
            }
            if (vis[dx[i] + x][dy[i] + y])
                continue;
            else
            {
                pq.push(board[dx[i] + x][dy[i] + y]);
            }
        }
        cur += pq.top();
        pq.pop();
        if (pq.empty())
            return ;
        cur += pq.top();
        pq.pop();
        ans = max(ans, cur);
        return;
    }
    for (int i = 0; i < 4; i++)
    {
        if (dx[i] + x < 0 || dx[i] + x >= N || dy[i] + y < 0 || dy[i] + y >= M)
        {
            continue;
        }
        if (vis[dx[i] + x][dy[i] + y])
            continue;
        else
        {
            vis[x][y] = 1;
            fuckyou(cnt + 1, dx[i] + x, dy[i] + y, cur + board[dx[i] + x][dy[i] + y]);
        }
    }
    vis[x][y] = 0;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> N >> M;

    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < M; j++)
        {
            int a;
            cin >> a;
            board[i][j] = a;
        }
    }
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < M; j++)
        {
            sol(1, i, j, board[i][j]);
            fuckyou(1, i, j, board[i][j]);
        }
    }

    cout << ans;

    return 0;
}