#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int v[401][401] = {0};
    int home[401][401] = {0};
    int V, E;
    cin >> V >> E;

    for (int i = 1; i <= V; i++)
    {
        for (int j = 1; j <= V; j++)
        {
            v[i][j] = 10000000;
            home[i][j] = 10000000;
        }
    }

    for (int i = 0; i < E; i++)
    {
        int a, b, c;
        cin >> a >> b >> c;
        v[a][b] = c;
    }
    int ans = 10000000;
    for (int k = 1; k <= V; k++)
    {
        for (int i = 1; i <= V; i++)
        {
            for (int j = 1; j <= V; j++)
            {
                if (v[i][j] > v[i][k] + v[k][j])
                {
                    v[i][j] = v[i][k] + v[k][j];
                }
                ans = min(ans,v[i][j] + v[j][i]);
            }
        }
    }

    if (ans == 10000000) ans = -1;
    cout << ans;
    return 0;
}