#include <bits/stdc++.h>
// 멀리 뛰기
using namespace std;

vector<long long> v;

long long solution(int n) {
    long long answer = 0;
    if (n < 3) return n;
    long long a = 1;
    long long b = 2;
    
    for (int i = 3; i <= n; i++)
    {
        int tmp;
        tmp = b;
        b = a + b;
        a = tmp;
    }
    answer = b % 1234567;

    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    return 0;
}