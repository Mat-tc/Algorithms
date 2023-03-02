#include <bits/stdc++.h>

using namespace std;

int DP[100001] = {0};
int weight[101] = {0};
int value[101] = {0};

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N, K;
    cin >> N >> K;

    for (int i = 1; i <= N; i++)
    {
        cin >> weight[i] >> value[i];
    }
    
    for (int i = 1; i <= N; i++)
    {
        for (int j = K; j >= 0; j--)
        {
            if (j >= weight[i])
                DP[j] = max(DP[j], DP[j - weight[i]] + value[i]);
        }
    }

    cout << DP[K];
    return 0;
}