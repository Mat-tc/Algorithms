#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int visit[3001] = {0};

    int N, d, k, c; // N : 벨트 위 접시의 수 d : 초밥 가짓수 k : 연속해서 먹는 접시의 수 c : 쿠폰 번호
    cin >> N >> d >> k >> c;

    vector<int> v;

    for (int i = 0; i < N; i++)
    {
        int a;
        cin >> a;
        v.push_back(a);
    }

    for (int i = 0; i < k - 1; i++)
    {
        v.push_back(v[i]);
    }

    int ans = 0;
    int end = 0;
    int cnt = 0;

    for (int i = 0; i < N; i++)
    {
        while (end < i + k)
        {
            if (visit[v[end]] == 0)
            {
                cnt++;
            }
            visit[v[end]]++;
            end++;
        }
        if (visit[c] == 0)
        {
            ans = max(ans, cnt + 1);
        }
        ans = max(ans, cnt);
        visit[v[i]]--;
        if (visit[v[i]] == 0)
        {
            cnt--;
        }
    }

    cout << ans;

    return 0;
}