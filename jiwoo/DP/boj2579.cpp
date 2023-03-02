#include <bits/stdc++.h>

using namespace std;

vector<int> v;
int mem[301];

int dp(int x)
{
    if (x == 0) return v[0];
    if (x == 1) return v[1];
    if (x == 2) return v[1] + v[2];

    if (mem[x] != 0)
        return mem[x];
    if (dp(x-2) >= dp(x-3) + v[x-1]) 
    {
        mem[x] = v[x] + dp(x-2);
        return mem[x];
    }
    else 
    {
        mem[x] = v[x] + dp(x-3) + v[x-1];
        return mem[x];
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N;
    int score;
    cin >> N;
    v.push_back(0);
    for (int i = 0; i < N; i++)
    {
        cin >> score;
        v.push_back(score);
    }

    cout << dp(N);
    return 0;
}
