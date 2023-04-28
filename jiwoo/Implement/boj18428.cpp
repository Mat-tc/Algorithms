#include <bits/stdc++.h>

using namespace std;

int N;
char arr[7][7];
int vis[7][7];
vector<pair<int, int>> tpos;
bool ans = false;

void play()
{
    for (int i = 0; i < tpos.size(); i++)
    {
        int y = tpos[i].first;
        int x = tpos[i].second;
        int dir = 0;
        while (dir < 4)
        {
            if (dir == 0)
            {
                for (int j = 1; y + j < N; j++)
                {
                    if (arr[y + j][x] == 'S')
                        return;
                    if (arr[y + j][x] == 'O' || y + j >= N)
                        break;
                }
            }
            else if (dir == 1)
            {
                for (int j = -1; y + j >= 0; j--)
                {
                    if (arr[y + j][x] == 'S')
                        return;
                    if (arr[y + j][x] == 'O' || y + j < 0)
                        break;
                }
            }
            else if (dir == 2)
            {
                for (int j = 1; x + j < N; j++)
                {
                    if (arr[y][x + j] == 'S')
                        return;
                    if (arr[y][x + j] == 'O' || x + j >= N)
                        break;
                }
            }
            else if (dir == 3)
            {
                for (int j = -1; x + j >= 0; j--)
                {
                    if (arr[y][x + j] == 'S')
                        return;
                    if (arr[y][x + j] == 'O' || x + j < 0)
                        break;
                }
            }
            dir++;
        }
    }
    ans = true;
}

void make_comb(int y, int x, int cnt)
{
    if (ans)
        return;
    if (cnt == 3)
    {
        play();
        return;
    }
    for (int i = y; i < N; i++)
    {
        for (int j = x; j < N; j++)
        {
            if (arr[i][j] == 'X')
            {
                arr[i][j] = 'O';
                make_comb(i, j, cnt + 1);
                arr[i][j] = 'X';
            }
        }
        x = 0;
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> N;

    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N; j++)
        {
            cin >> arr[i][j];
            if (arr[i][j] == 'T')
            {
                tpos.push_back({i, j});
            }
        }
    }
    make_comb(0, 0, 0);
    if (ans)
        cout << "YES";
    else
        cout << "NO";
    return 0;
}