#include <bits/stdc++.h>
// 점 찍기
using namespace std;

long long solution(int k, int d)
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    long long lk = (long long)k;
    long long ld = (long long)d;
    int cnt = 0;
    long long tmpx = 0;
    int a = 0;
    long long lldd = ld * ld;
    for (long long x = ld; x >= 0; x--)
    {
        if (pow(x * lk, 2) * 2 <= lldd)
        {
            cnt = pow((x + 1),2);
            tmpx = x;
            break;
        }
    }
    for (long long x = tmpx + 1; x * lk <= ld; x++)
    {
        for (long long y = 0; y * lk <= ld; y++)
        {
            if (pow((x * lk), 2) + pow((y * lk), 2) <= lldd)
            {
                a++;
            }
            else
                break;
        }
    }
    a *= 2;
    cnt += a;
    long long answer = cnt;
    return answer;
}