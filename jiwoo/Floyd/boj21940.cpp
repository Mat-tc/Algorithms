#include <bits/stdc++.h>

using namespace std;

int v[201][201] = {0};
int city[201] = {0};

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N, M, K;
    cin >> N >> M;

    for (int i = 1; i <= N; i++)
    {
        for (int j = 1; j <= N; j++)
        {
            if (i == j)
                continue;
            v[i][j] = 3001;
        }
    }

    for (int i = 0; i < M; i++)
    {
        int from, to, t;
        cin >> from >> to >> t;
        v[from][to] = t;
    }

    cin >> K;

    for (int i = 0; i < K; i++)
    {
        int a;
        cin >> a;
        city[a] = 1;
    }

    for (int k = 1; k <= N; k++)
    {
        for (int i = 1; i <= N; i++)
        {
            for (int j = 1; j <= N; j++)
            {
                if (v[i][j] > v[i][k] + v[k][j])
                    v[i][j] = v[i][k] + v[k][j];
            }
        }
    }
    
    for (int i = 1; i <= N; i++)
    {
        for (int j = 1; j <= N; j++)
        {
            cout << v[i][j] << " ";
        }
        cout << "\n";
    }
    
    int maxarr[201] = {0};
    int minval = 10000;

    for (int i = 1; i <= N; i++)
    {
        int maxval = 0;
        for (int j = 1; j <= N; j++)
        {
            if (city[j] == 0)
                continue;
            
            if (v[j][i] + v[i][j] > maxval)
            {
                maxval = v[j][i] + v[i][j];
            }
        }
        maxarr[i] = maxval;
        minval = min(minval, maxval);
    }
    for (int i = 1; i <= N; i++)
    {
        if (maxarr[i] == minval)
        {
            cout << i << " ";
        }
    }

    return 0;
}