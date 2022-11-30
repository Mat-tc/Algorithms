#include <bits/stdc++.h>

using namespace std;


int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N, K;

    int ans = 0;
    int end = 0;
    int cnt = 0;

    vector<int> S;

    cin >> N >> K;

    for (int i = 0; i < N; i++)
    {
        int a;
        cin >> a;
        S.push_back(a);
    }

    for (int i = 0; i < N; i++)
    {
        while (end < N)
        {
            if (S[end] % 2 == 1) // 홀수라면
            {
                cnt++;
            }
            if (cnt > K)
            {
                ans = max(ans, end - i - cnt + 1);
                cnt--;
                break;
            }
            if (end == N - 1)
            {
                ans = max(ans, end - i - cnt + 1);
            }
            end++;
        }
        if (S[i] % 2 == 1)
            cnt--;
    }

    cout << ans;

    return 0;
}