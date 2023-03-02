#include <bits/stdc++.h>

using namespace std;

int dp(int x)
{
    if (x == 1) return 1;
    else if (x == 2) return 2;
    else if (x == 3) return 4;

    return dp(x - 1) + dp(x - 2) + dp(x - 3);
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int T;
    int n;
    cin >> T;
    for (int i = 0; i < T; i++)
    {
        cin >> n;
        cout << dp(n) << "\n";
    }

    return 0;
}