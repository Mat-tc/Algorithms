#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int vec[251][251] = {0};
    int n, m;
    cin >> n >> m;

    for (int i = 0; i < 251; i++)
    {
        for (int j = 0; j < 251; j++)
        {
            vec[i][j] = 1000000;
        }
    }

    for (int i = 0; i < m; i++)
    {
        int u, v, b;
        cin >> u >> v >> b;
        vec[u][v] = 0;
        vec[v][u] = 0;
        if (b == 0)
        {
            vec[v][u] = 1;
        }
    }

    for (int k = 1; k <= n; k++)
    {
        for (int i = 1; i <= n; i++)
        {
            for (int j = 1; j <= n; j++)
            {
                if (i == j)
                    vec[i][j] = 0;
                vec[i][j] = min(vec[i][j],vec[i][k] + vec[k][j]);
            }
        }
    }

    int k;
    cin >> k;
    for (int i = 0; i < k; i++)
    {
        int s, e;
        cin >> s >> e;
        cout << vec[s][e] << "\n";
    }

    return 0;
}