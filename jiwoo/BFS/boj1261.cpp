#include <bits/stdc++.h>

using namespace std;

#define X first
#define Y second

int board[502][502];
int vis[502][502];
int minboard[502][502];

int dx[4] = { 1,0,-1,0 };
int dy[4] = { 0,1,0,-1 };

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    int n, m;
    
    string s;
    cin >> n;
    cin >> m;
    
    for (int i = 0; i < m; i++)
    {
        cin >> s;
        for (int j = 0; j < s.length(); j++)
        {
            board[i][j] = s[j];
        }
    }

    queue<pair<int, int>> Q;
    vis[0][0] = 1;
    
    Q.push({ 0,0 });
    while (!Q.empty())
    {
        pair<int, int> cur = Q.front();
        Q.pop();
        for (int dir = 0; dir < 4; dir++)
        {
            int nx = cur.X + dx[dir];
            int ny = cur.Y + dy[dir];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (vis[nx][ny]) continue;
            if (board[nx][ny])
            {
                minboard[nx][ny] = minboard[cur.X][cur.Y] + 1;
            }
            else
            {
                minboard[nx][ny] = minboard[cur.X][cur.Y];
            }
            Q.push({ nx, ny });
            vis[nx][ny] = 1;
        }
    }
    cout << minboard[n - 1][m - 1];
    return 0;
}