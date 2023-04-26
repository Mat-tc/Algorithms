#include <bits/stdc++.h>

using namespace std;

int N, K;
vector<vector<int>> v;
int selected[11];
vector<int> q;
int ans = 987654321;

void check()
{
    int time = 0;
    for (int i = 0; i < N - 1; i++)
    {
        time += v[q[i]][q[i + 1]];
    }
    ans = min(ans, time);
}

void sel(int cnt)
{
    if (cnt == N)
    {
        check();
        return;
    }
    for (int i = 0; i < N; i++)
    {
        if (selected[i])
            continue;
        q.push_back(i);
        selected[i] = 1;
        sel(cnt + 1);
        q.pop_back();
        selected[i] = 0;
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> N >> K;

    selected[K] = 1;
    q.push_back(K);

    for (int i = 0; i < N; i++)
    {
        vector<int> tmp;
        for (int j = 0; j < N; j++)
        {
            int a;
            cin >> a;
            tmp.push_back(a);
        }
        v.push_back(tmp);
    }

    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N; j++)
        {
            for (int k = 0; k < N; k++)
            {
                if (i == j)
                    continue;
                if (v[i][j] > v[i][k] + v[k][j])
                {
                    v[i][j] = v[i][k] + v[k][j];
                }
            }
        }
    }
    sel (1);
    
    cout << ans;
    return 0;
}