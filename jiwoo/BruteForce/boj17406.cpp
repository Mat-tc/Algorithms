#include <bits/stdc++.h>

using namespace std;

int N, M, K;
int arr[51][51];
int arrcopy[51][51];
vector<int> rcs[3];
int selected[7];

int calc()
{
    int sum;
    int minsum = 987654321;
    for (int i = 1; i <= N; i++)
    {
        sum = 0;
        for (int j = 1; j <= M; j++)
        {
            sum += arrcopy[i][j];
        }
        minsum = min(minsum, sum);
    }
    return minsum;
}
void rotate(int a)
{
    int cnt = rcs[2][a];
    int curx = rcs[0][a] - rcs[2][a];
    int cury = rcs[1][a] - rcs[2][a];
    for (int i = 0; i < rcs[2][a]; i++)
    {
        int curx = rcs[0][a] - rcs[2][a] + i;
        int cury = rcs[1][a] - rcs[2][a] + i;
        int tmp = arrcopy[curx][cury];
        for (int j = 0; j < cnt * 2; j++)
        {
            arrcopy[curx + j][cury] = arrcopy[curx + j + 1][cury];
        }
        for (int j = 0; j < cnt * 2; j++)
        {
            arrcopy[curx + (cnt * 2)][cury + j] = arrcopy[curx + (cnt * 2)][cury + j + 1];
        }
        for (int j = cnt * 2; j > 0; j--)
        {
            arrcopy[curx + j][cury + cnt * 2] = arrcopy[curx + j - 1][cury + cnt * 2];
        }
        for (int j = cnt * 2; j > 1; j--)
        {
            arrcopy[curx][cury + j] = arrcopy[curx][cury + j - 1];
        }
        arrcopy[curx][cury + 1] = tmp;
        cnt--;
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int ans = 987654321;
    vector<int> np;
    cin >> N >> M >> K;

    for (int i = 1; i <= N; i++)
    {
        for (int j = 1; j <= M; j++)
        {
            cin >> arr[i][j];
        }
    }

    for (int i = 0; i < K; i++)
    {
        int r, c, s;
        cin >> r >> c >> s;
        rcs[0].push_back(r);
        rcs[1].push_back(c);
        rcs[2].push_back(s);
        np.push_back(i);
    }

    do
    {
        copy(&arr[0][0], &arr[0][0] + (51 * 51), &arrcopy[0][0]);
        for (auto it = np.begin(); it != np.end(); ++it)
        {
            rotate(*it);
        }
        ans = min(ans, calc());
    } while (next_permutation(np.begin(), np.end()));

    cout << ans;

    return 0;
}