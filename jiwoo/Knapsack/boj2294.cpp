#include <bits/stdc++.h>

using namespace std;

int n, k;
int ans = 987654321;
int dp[100001];
int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> n >> k;

    for (int i = 0; i <= k; i++)
    {
        dp[i] = 987654321;
    }

    for (int i = 1; i <= n; i++)
    {
        int a;
        cin >> a;
        dp[a] = 1;
        for (int j = a + 1; j <= k; j++)
        {
            dp[j] = min(dp[j], dp[a] + dp[j - a]);
            // cout << a << " " << dp[j] << "\n";
        }
    }

    if (dp[k] == 987654321)
    {
        cout << -1;
    }
    else
    {
        cout << dp[k];
    }

    return 0;
}