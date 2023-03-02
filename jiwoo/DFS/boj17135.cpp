#include <bits/stdc++.h>

using namespace std;

int board[16][16];
int b_copy[16][16];
int archer[16];
int vis[16][16];
queue<pair<int, int>> enemy;
int dx[4] = {0, -1, 0}; // 왼위오
int dy[4] = {-1, 0, 1};
int N, M, D;
int ans = 0;

void bfs(int x, int y)
{
    queue<pair<int, int>> q;
    q.push(make_pair(x, y));
    vis[x][y] = 1;
    while (!q.empty())
    {
        pair<int, int> qp = q.front();
        if (b_copy[qp.first][qp.second])
        {
            if (abs(x + 1 - qp.first) + abs(y - qp.second) <= D)
            {
                b_copy[qp.first][qp.second] = 2;
                enemy.push(qp);
                break;
            }
        }
        q.pop();
        for (int i = 0; i < 3; i++)
        {
            int nx = dx[i] + qp.first;
            int ny = dy[i] + qp.second;
            if (nx < 0 || nx >= N || ny < 0 || ny >= M)
                continue;
            if (!vis[nx][ny])
            {
                q.push(make_pair(nx, ny));
                vis[nx][ny] = 1;
            }
        }
    }
}

int play()
{
    int count = 0;
    copy(&board[0][0], &board[0][0] + 256, &b_copy[0][0]);
    for (int i = N - 1; i >= 0; i--)
    {
        for (int j = 0; j < M; j++)
        {
            if (archer[j])
            {
                bfs(i, j);
                memset(vis, 0, sizeof(vis));       
            }
        }
        while (!enemy.empty())
        {
            if (b_copy[enemy.front().first][enemy.front().second] == 2)
            {
                b_copy[enemy.front().first][enemy.front().second] = 0;
                count++;
            }
            enemy.pop();
        }
    }
    return count;
}

void comb(int cnt, int idx)
{
    if (cnt == 3)
    {
        ans = max(ans, play());
        return;
    }
    for (int i = idx; i < M; i++)
    {
        archer[i] = 1;
        comb(cnt + 1, i + 1);
        archer[i] = 0;
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> N >> M >> D;

    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < M; j++)
        {
            int a;
            cin >> board[i][j];
        }
    }

    comb(0, 0);

    cout << ans;

    return 0;
}