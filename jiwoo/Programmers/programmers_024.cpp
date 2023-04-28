#include <bits/stdc++.h>
// 예상 대진표
using namespace std;

int solution(int n, int a, int b)
{
    int answer = 0;
    while (a != b)
    {
        answer++;
        a = (a + 1) / 2;
        b = (b + 1) / 2;
    }
    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    return 0;
}