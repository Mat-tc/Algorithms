#include <bits/stdc++.h>

using namespace std;

long long N, P, Q;
map<long long,long long> m;

long long seq(long long i)
{
    if (m.find(i) != m.end()) // 맵에 있었다 이미 내가 메모이제이션해놨다
        return m[i];
    m.insert({i,seq(floor(i/P))+seq(floor(i/Q))});
    return seq(floor(i/P)) + seq(floor(i/Q));
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> N >> P >> Q;
    m.insert({0,1});

    cout << seq(N);

    return 0;
}