#include <bits/stdc++.h>

using namespace std;

int arr[501][501];

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N, M;
    cin >> N >> M;

    int ans = 0;

    for (int i = 0; i < M; i++)
    {
        int a, b;
        cin >> a >> b;
        arr[a][b] = 1;
    }

    for (int k = 1; k <= N; k++)              
        for (int i = 1; i <= N; i++)             
            for (int j = 1; j <= N; j++)         
                if (arr[i][k] && arr[k][j]) 
                    arr[i][j] = 1;

    for (int i = 1; i <= N; i++)
    {
        int cnt = 0;
        for (int j = 1; j <= N; j++)
        {
            cnt = cnt + arr[i][j] + arr[j][i];
        }
        if (cnt == N - 1)
            ans++;
    }

    cout << ans;

    return 0;
}
