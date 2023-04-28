#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    int N, K;
    cin >> N >> K;
    int left = 1;
    int right = K * K;
    int mid;
    int ans;
    while (left <= right)
    {
        mid = (left + right) / 2;
        int sum = 0;
        for (int i = 1; i <= N; i++)
        {
            int cnt;
            cnt = min(N, mid / i);
            sum += cnt;
        }
        if (sum < K)
        {
            left = mid + 1;
        }
        else (sum >= K)
        {
            right = mid - 1;
        }
    }
    cout << left;
    return 0;
}