#include <bits/stdc++.h>

using namespace std;

vector<int> v;
int mem[301]; // 메모이제이션, 시간초과 막기 위함

// 3개의 계단이 연속되지않아야 하기 때문에 x번째 계단이 가질 수 있는 가장 큰 값은
// x - 2에서 두 칸 뛰던가 or x - 3의 dp값에 x - 1값을 더한 후 한 칸뛰던가
// 그림을 보고 이해하는게 더 좋을 듯
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
