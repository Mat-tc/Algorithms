#include <bits/stdc++.h>

using namespace std;

// k진수에서 소수 개수 구하기 2022 KAKAO BLIND RECRUITMENT
#include <bits/stdc++.h>

using namespace std;

bool isprime(long long num)
{
    if (num < 2)
        return false;
    for (long long i = 2; i * i <= num; i++)
    {
        if (num % i == 0) return false;
    }
    return true;
}

string base(int n, int k)
{
    string make_base = "";

    for (int i = n; i > 0;)
    {
        make_base = to_string(i % k) + make_base;
        i /= k;
    }

    return make_base;
}

int solution(int n, int k)
{
    int answer = 0;
    
    string st = base(n, k);
    string tmp = "";
    queue<char> q;

    for (int i = 0; i < st.size(); i++)
    {
        if (st[i] != '0')
        {
            q.push(st[i]);
        }
        else
        {
            if (!q.empty())
            {
                while (!q.empty())
                {
                    tmp = tmp + q.front();
                    q.pop();
                }
                if (isprime(stoll(tmp)))
                    answer++;
                tmp.clear();
            }
        }
    }
    if (!q.empty())
    {
        while (!q.empty())
        {
            tmp = tmp + q.front();
            q.pop();
        }
        if (isprime(stoll(tmp)))
            answer++;
    }
    
    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    return 0;
}