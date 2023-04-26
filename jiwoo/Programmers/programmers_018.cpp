#include <bits/stdc++.h>
// 유사 칸토어 비트열
using namespace std;

long long solution(int n, long long l, long long r) {
    long long answer = 0;
    
    for (long long i = l; i <= r; i++)
    {
        long long ip = i-1;
        if (ip % 5 == 2) continue;

        while (ip / 5)
        {
            ip = ip / 5;
            if (ip % 5 == 2) break;
        }
        if (ip % 5 != 2)
            answer++;
    }

    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    long long cnt = solution(2, 4, 17);
    cout << cnt;

    return 0;
}