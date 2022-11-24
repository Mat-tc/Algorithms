#include <bits/stdc++.h>

using namespace std;
vector<int> v;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    int M,N;
    int L;
    int ans = 0;
    cin >> M >> N;
    for (int i = 0; i < N; i++)
    {
        cin >> L;
        v.push_back(L);
    }

    int sh = 1; // short
    int lo = *max_element(v.begin(), v.end()); // long
    
    while (sh <= lo) // 이분탐색
    {
        int mid = (sh + lo) / 2;
        int cnt = 0;
        for (int i = 0; i < N; i++)
        {
            cnt = cnt + (v[i] / mid);
        }
        if (cnt >= M)
        {
            ans = mid;
            sh = mid + 1;
        }
        else
        {
            lo = mid - 1;
        }
    }

    cout << ans;
    return 0;
}