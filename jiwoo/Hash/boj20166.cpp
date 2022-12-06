#include <bits/stdc++.h>

using namespace std;

int dx[8] = {-1, 1, 0, 0, -1, -1, 1, 1}; // 상 하 좌 우 좌상단 우상단 좌하단 우하단
int dy[8] = {0, 0, -1, 1, -1, 1, -1, 1};
int N, M, K;
vector<string> v;
map<string, int> m;

void rec(int x, int y, string s)
{
    if (s.size() > 5)
        return;
    if (m.find(s) != m.end())
    {
        m[s]++;
    }
    else
    {
        m.insert({s, 1});
    }
    for (int i = 0; i < 8; i++)
    {
        int tmpx = x + dx[i];
        int tmpy = y + dy[i];
        if (tmpx == -1)
            tmpx = N - 1;
        if (tmpx == N)
            tmpx = 0;
        if (tmpy == -1)
            tmpy = M - 1;
        if (tmpy == M)
            tmpy = 0;
        s.push_back(v[tmpx][tmpy]);
        rec(tmpx, tmpy,s);
        s.pop_back();
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> N >> M >> K;

    for (int i = 0; i < N; i++)
    {
        string s;
        cin >> s;
        v.push_back(s);
    }

    for (int x = 0; x < N; x++)
    {
        for (int y = 0; y < M; y++)
        {
            string s;
            s.push_back(v[x][y]);
            rec(x,y,s);
        }
    }

    for (int i = 0; i < K; i++)
    {
        string s;
        cin >> s;
        int ans = m[s];
        cout << ans << "\n";
    }

    return 0;
}
