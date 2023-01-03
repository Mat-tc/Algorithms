#include <bits/stdc++.h>

using namespace std;

int v[101][101] = {0};
int item[101] = {0};
int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    int ans = 0;
    int n, m, r;
    cin >> n >> m >> r;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            if (i == j)
                continue;
            v[i][j] = 16;
        }
    }
    for (int i = 1; i <= n; i++)
    {
        int t;
        cin >> t;
        item[i] = t;
    }

    for (int i = 0; i < r; i++)
    {
        int a, b, l;
        cin >> a >> b >> l;
        v[a][b] = l;
        v[b][a] = l;
    }

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            for (int k = 1; k <= n; k++)
            {
                if (v[j][i] + v[i][k] < v[j][k])
                {
                    v[j][k] = v[j][i] + v[i][k];
                }
            }
        }
    }

    for (int i = 1; i <= n; i++)
    {
        int tmp = 0;
        for (int j = 1; j <= n; j++)
        {
            if (v[i][j] <= m)
                tmp = tmp + item[j];
        }
        ans = max(ans, tmp);
    }
    cout << ans;

    return 0;
}