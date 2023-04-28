#include <bits/stdc++.h>

using namespace std;

int H, W;
int block[501][501];
int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> H >> W;
    int ans = 0;
    for (int i = 0; i < W; i++)
    {
        int a;
        cin >> a;
        for (int j = H - 1; j >= H - a; j--)
        {
            block[j][i] = 1;
        }
    }

    for (int i = 0; i < H; i++)
    {
        int state = 0;
        int tmp = 0;
        for (int j = 0; j < W; j++)
        {

            if (block[i][j] == 1 && state == 0)
            {
                state = 1;
                continue;
            }
            if (block[i][j] == 0 && state == 1)
            {
                tmp++;
                continue;
            }
            if (block[i][j] == 1 && state == 1)
            {
                ans += tmp;
                tmp = 0;
                continue;
            }
        }
    }
    cout << ans;
    return 0;
}