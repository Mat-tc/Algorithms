#include <bits/stdc++.h>
using namespace std;

int N, M;
vector<string> v;
int dx[4] = {1, -1, 0, 0};
int dy[4] = {0, 0, 1, -1};
int vis[1001][1001][2];

int ans = 0;
int flag = 0;
queue<tuple<int, int, int>> q;

void bfs()
{
    q.push(make_tuple(0, 0, 0));
    while (!q.empty())
    {
        if (flag)
            break;
        ans++;
        int size = q.size();
        for (int i = 0; i < size; i++)
        {
            int cury = get<0>(q.front());
            int curx = get<1>(q.front());
            int a = get<2>(q.front());
            q.pop();
            if (cury == N - 1 && curx == M - 1)
            {
                flag = 1;
                break;
            }
            vis[a][cury][curx] = 1;
            for (int i = 0; i < 4; i++)
            {
                int ny = dy[i] + cury;
                int nx = dx[i] + curx;

                if (ny >= N || ny < 0 || nx >= M || nx < 0)
                    continue;

                if (v[ny][nx] == '0')
                {
                    if (vis[a][ny][nx] == 0)
                    {
                        q.push(make_tuple(ny, nx, 1));
                    }
                }
                else if (v[ny][nx] == '1')
                {
                    if (vis[0][ny][nx] == 0)
                    {
                        q.push(make_tuple(ny, nx, 1));
                    }
                }
            }
        }
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> N >> M;
    for (int i = 0; i < N; i++)
    {
        string s;
        cin >> s;
        v.push_back(s);
    }

    if (flag)
        cout << ans;
    else
        cout << -1;
    return 0;
}