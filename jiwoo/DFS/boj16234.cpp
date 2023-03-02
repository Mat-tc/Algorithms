#include <bits/stdc++.h>

using namespace std;

int N, L, R;

int board[51][51];
int vis[51][51];
int subvis[51][51];
int dx[4] = {-1, 1, 0, 0};
int dy[4] = {0, 0, -1, 1};
int cnt = 1;
int flag = 1;
int ans = 0;
int sum = 0;
queue<pair<int, int>> q;

void init()
{
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N; j++)
        {
            if (subvis[i][j])
                board[i][j] = sum / cnt;
        }
    }
}

void dfs(int x, int y)
{
    if (vis[x][y])
        return;
    subvis[x][y] = 1;
    vis[x][y] = 1;
    sum += board[x][y];
    q.push(make_pair(x, y));
    for (int i = 0; i < 4; i++)
    {
        int dirx = dx[i] + x;
        int diry = dy[i] + y;
        if (dirx < 0 || dirx >= N || diry < 0 || diry >= N)
            continue;
        if (vis[dirx][diry])
            continue;
        else
        {
            if (abs(board[x][y] - board[dirx][diry]) >= L && abs(board[x][y] - board[dirx][diry]) <= R)
            {
                cnt++;
                flag = 1;
                dfs(dirx, diry);
            }
        }
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> N >> L >> R;

    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N; j++)
        {
            cin >> board[i][j];
        }
    }

    while (flag)
    {
        flag = 0;
        for (int i = 0; i < N; i++)
        {
            for (int j = 0; j < N; j++)
            {
                if (!vis[i][j])
                {
                    dfs(i, j);
                    // init();
                }
                while (!q.empty())
                {
                    board[q.front().first][q.front().second] = sum / cnt;
                    q.pop();
                }
                // memset(subvis, 0, sizeof(subvis));
                cnt = 1;
                sum = 0;
            }
        }
        if (flag)
            ans++;
        memset(vis, 0, sizeof(vis));
    }

    cout << ans;
    return 0;
}