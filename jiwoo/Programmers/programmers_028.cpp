#include <bits/stdc++.h>
// 숫자 블록
using namespace std;

vector<int> solution(long long begin, long long end)
{
    vector<int> answer;

    for (long long i = begin; i <= end; i++)
    {
        int flag = 0;
        if (i == 1)
        {
            answer.push_back(0);
            continue;
        }
        for (int j = 2; j <= sqrt(i); j++)
        {
            if (i % j == 0 && (i / j) <= 10000000)
            {
                answer.push_back(i / j);
                flag = 1;
                break;
            }
        }
        if (flag == 0)
        {
            answer.push_back(1);
        }
    }
    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    return 0;
}