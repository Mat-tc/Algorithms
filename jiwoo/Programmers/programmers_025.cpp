#include <bits/stdc++.h>
// 시소 짝꿍
using namespace std;

long long solution(vector<int> weights)
{
    long long answer = 0;
    long long size = weights.size();
    sort(weights.begin(), weights.end());
    for (long long i = 0; i < size - 1; i++)
    {
        for (long long j = i + 1; j < size; j++)
        {
            if (weights[i] == weights[j])
            {
                answer++;
                continue;
            }
            if (weights[j] * 2 == weights[i] * 3)
                answer++;
            else if (weights[j] * 2 == weights[i] * 4)
                answer++;
            else if (weights[j] * 3 == weights[i] * 4)
                answer++;
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