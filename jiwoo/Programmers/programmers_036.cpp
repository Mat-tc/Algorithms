#include <bits/stdc++.h>
// 튜플
using namespace std;

bool cmp(const pair<int, int> &a, const pair<int, int> &b)
{
    if (a.second == b.second)
        return a.first > b.first;
    return a.second > b.second;
}

vector<int> solution(string s)
{
    vector<int> answer;
    map<int, int> m;
    int flag = 0;
    int num = 0;
    for (int i = 1; i < s.size() - 1; i++)
    {
        if (s[i] == '{')
        {
            flag = 1;
        }
        if (s[i] == '}')
        {
            flag = 0;
            if (num != 0)
            {
                if (m.find(num) == m.end())
                {
                    m.insert({num, 1});
                }
                else
                {
                    m[num]++;
                }
            }
        }
        if (flag == 1 && s[i] >= '0' && s[i] <= '9')
        {
            num = (s[i] - '0') + num * 10;
        }
        else if (flag == 1 && s[i] == ',')
        {
            if (m.find(num) == m.end())
            {
                m.insert({num, 1});
            }
            else
            {
                m[num]++;
            }
            num = 0;
        }
    }

    vector<pair<int, int>> vec(m.begin(), m.end());
    sort(vec.begin(), vec.end(), cmp);

    for (int i = 0; i < vec.size(); i++)
    {
        answer.push_back(vec[i].first);
    }

    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    return 0;
}