#include <bits/stdc++.h>

using namespace std;

vector<string> curmap;
vector<string> futuremap;

int dx[4] = {1, 0, -1, 0};
int dy[4] = {0, 1, 0, -1};
int R, C;
int cnt = 0;

void eraseLine(int cnt)
{
    while (find(futuremap[cnt].begin(), futuremap[cnt].end(), 'X') == futuremap[cnt].end())
    {
        futuremap.erase(futuremap.begin() + cnt);
        R--;
        if (cnt > 0)
            cnt--;
    }
}

void eraseLine2(int cnt)
{
    string tmp;
    while (1)
    {
        for (int i = 0; i < R; i++)
        {
            if (futuremap[i][cnt] == 'X')
                return;
        }
        for (int i = 0; i < R; i++)
        {
            if (cnt == 0)
                futuremap[i].erase(0,1);
            else
                futuremap[i].erase(cnt,cnt+1);
        }
        C--;
        if (cnt > 0)
            cnt--;
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    char ch;
    string s;

    cin >> R;
    cin >> C;

    for (int i = 0; i < R; i++)
    {
        cin >> s;
        curmap.push_back(s);
    }

    for (int i = 0; i < R; i++)
    {
        for (int j = 0; j < C; j++)
        {
            if (curmap[i][j] == 'X')
            {
                for (int dir = 0; dir < 4; dir++)
                {
                    int x = i + dx[dir];
                    int y = j + dy[dir];
                    if (x >= 0 && x < R && y >= 0 && y < C)
                    {
                        if (curmap[x][y] == 'X')
                            cnt++;
                    }
                }
                if (cnt < 2)
                    s[j] = '.';
                else
                    s[j] = 'X';
            }
            else
                s[j] = '.';
            cnt = 0;
        }
        futuremap.push_back(s);
    }
    eraseLine(0);
    eraseLine(R - 1);
    
    eraseLine2(0);
    eraseLine2(C-1);

    for (int i = 0; i < R; i++)
    {
        cout << futuremap[i];
        cout << "\n";
    }

    return 0;
}
