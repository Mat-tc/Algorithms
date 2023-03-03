#include <bits/stdc++.h>

using namespace std;
int mem[1001];

int dp(int x)
{
    if (x == 1) return 1;
    if (x == 2) return 2;
    if (mem[x] != 0)
        return mem[x];
    mem[x] = (dp(x-2) + dp(x-1)) % 10007;
    return mem[x];
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n;
    cin >> n;
    cout << dp(n);

    return 0;
}