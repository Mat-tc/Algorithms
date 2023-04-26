#include <bits/stdc++.h>
// 멀쩡한 사각형
using namespace std;

long long gcd(long long w, long long h)
{
    long long ans = 1;

    long long a = w;
    while (a)
    {
        if ((w % a == 0) && (h % a == 0))
        {
            ans = (w * h) - (w + h - a);
            break;
        }
        a--;
    }

    return ans;
}

long long solution(int w, int h)
{
    long long answer = 0;
    long long lw = (long long)w;
    long long lh = (long long)h;

    if (w == 0 || h == 0)
        return 0;

    if (w < h)
        answer = gcd(lw, lh);
    else
        answer = gcd(lh, lw);

    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    return 0;
}