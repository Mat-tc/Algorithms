#include <bits/stdc++.h>

// 줄 서는 방법

using namespace std;

vector<long long> fac;
vector<int> vis;
void init(void)
{
    long long a = 1;
    for (long long i = 1; i < 21; i++)
    {
        a = a * i;
        fac.push_back(a);
        vis.push_back(i);
    }
}

vector<int> solution(int n, long long k)
{
    vector<int> answer;
    fac.push_back(1);
    init();

    for (long long i = n; i > 0; i--)
    {
        int num;
        if (k % fac[i - 1] == 0)
        {
            num = (int)(k / fac[i - 1]) - 1;
            k = fac[i - 1];
        }
        else
        {
            num = (int)(k / fac[i - 1]);
            k = k % fac[i - 1];
        }
        answer.push_back(vis[num]);
        vis.erase(vis.begin() + num);
    }

    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    return 0;
}