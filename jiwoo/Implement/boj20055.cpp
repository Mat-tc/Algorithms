#include <bits/stdc++.h>

using namespace std;

int N, K;
vector<int> v;
vector<int> robot;
int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int ans = 0;
    int cnt = 0;
    cin >> N >> K;

    for (int i = 0; i < 2 * N; i++)
    {
        int a;
        cin >> a;
        v.push_back(a);
        if (i < N)
            robot.push_back(0);
    }

    while (cnt < K)
    {
        cnt = 0;
        rotate(robot.begin(), robot.end() - 1, robot.end());
        rotate(v.begin(), v.end() - 1, v.end());
        if (robot[N - 1] == 1)
            robot[N - 1] = 0;
        for (int i = N - 1; i > 0; i--)
        {
            if (robot[i] == 0 && robot[i - 1] == 1 && v[i] > 0)
            {
                robot[i] = 1;
                robot[i - 1] = 0;
                v[i]--;
            }
        }
        if (robot[N - 1] == 1)
            robot[N - 1] = 0;
        if (v[0] > 0)
        {
            robot[0] = 1;
            v[0]--;
        }
        for (int i = 0; i < 2 * N; i++)
        {
            if (v[i] == 0)
                cnt++;
        }
        ans++;
    }
    cout << ans;

    return 0;
}