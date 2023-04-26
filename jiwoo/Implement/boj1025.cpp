#include <bits/stdc++.h>

using namespace std;

int N, M;
int ans = -1;
vector<vector<int>> v;

int is_squared(int a)
{
    if (a == 0) return 0;
    unsigned int temp;
    switch (a & 0x0f)
    {
    case 0:
    case 1:
    case 4:
    case 9:
    {
        temp = (unsigned int)(sqrt((double)a) + 0.5);
        if (temp * temp == a)
        {
            return a;
        }
        else
            return -1;
    }
    default:
        return -1;
    }
}

void calc(int y, int x, int ii, int jj)
{
    int a = v[y][x];
    int tmp = is_squared(a);
    if (tmp != -1)
    {
        ans = max(ans, tmp);
    }
    if (ii == 0 && jj == 0)
        return;
    for (int i = 0; i < 9; i++)
    {
        y = y + ii;
        x = x + jj;
        if (y >= N || x >= M || y < 0 || x < 0)
            break;
        a = a * 10 + v[y][x];
        if (v[y][x] == 0 || v[y][x] == 1 || v[y][x] == 4 || v[y][x] == 5 || v[y][x] == 6 || v[y][x] == 9)
        {
            int tmp = is_squared(a);
            if (tmp != -1)
            {
                ans = max(ans, tmp);
            }
        }
    }
}

void make_num(int y, int x)
{

    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < M; j++)
        {
            calc(y, x, i, j);
        }
    }

    for (int i = 0; i < N; i++)
    {
        for (int j = -1; j > -M; j--)
        {
            calc(y, x, i, j);
        }
    }

    for (int i = -1; i > -N; i--)
    {
        for (int j = 0; j < M; j++)
        {
            calc(y, x, i, j);
        }
    }

    for (int i = 0; i > -N; i--)
    {
        for (int j = 0; j > -M; j--)
        {
            calc(y, x, i, j);
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

        string a;
        cin >> a;
        vector<int> tmp;
        for (int j = 0; j < M; j++)
        {
            tmp.push_back(a[j]-'0');
        }
        v.push_back(tmp);
    }

    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < M; j++)
        {
            make_num(i, j);
        }
    }

    cout << ans;
    return 0;
}