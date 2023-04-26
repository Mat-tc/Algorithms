#include <bits/stdc++.h>

using namespace std;

int T;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    cin >> T;
    for (int i = 0; i < T; i++)
    {
        int ans = 0;
        int x1, x2, y1, y2;
        cin >> x1 >> y1 >> x2 >> y2;
        int n;
        cin >> n;
        for (int j = 0; j < n; j++)
        {
            int cx, cy, r;
            cin >> cx >> cy >> r;
            // 1. 두 점 다 r보다 큰 경우 = 큰 원 안에 두 점이 있는 경우 상관 x
            // 2. 두 점 다 r보다 작은 경우 = 경로상에 들어갈 필요 없는 경우 상관 x
            // 3. 한 점이 r 보다 작은 경우 = 무조건 통과해야함
            if (sqrt(pow(x1 - cx, 2) + pow(y1 - cy, 2)) < r && sqrt(pow(x2 - cx, 2) + pow(y2 - cy, 2)) > r)
            {
                ans++;
            }
            if (sqrt(pow(x1 - cx, 2) + pow(y1 - cy, 2)) > r && sqrt(pow(x2 - cx, 2) + pow(y2 - cy, 2)) < r)
            {
                ans++;
            }
        }
        cout << ans << "\n";
    }
    return 0;
}