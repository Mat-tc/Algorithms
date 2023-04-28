#include <bits/stdc++.h>
// [카카오 인턴] 보석 쇼핑
using namespace std;

vector<int> solution(vector<string> gems)
{
    vector<int> answer;

    if (gems.size() == 1)
    {
        answer.push_back(1);
        answer.push_back(1);
        return answer;
    }

    map<string, int> m;
    set<string> s;
    queue<string> q1;
    queue<string> q2;

    for (int i = 0; i < gems.size(); i++)
    {
        s.insert(gems[i]);
    }

    int size = s.size();

    int cnt = 0;
    int flag = 0;
    int start = 0;
    int end = gems.size() + 1;
    for (int i = 0; i < gems.size(); i++)
    {
        if (cnt != size)
        {
            if (m.find(gems[i]) == m.end())
            {
                m.insert(make_pair(gems[i], i));
                cnt++;
            }
        }
        else
        {
            m[gems[i]] = i;
            while (!q1.empty())
            {
                if (q1.front() != gems[i])
                {
                    q2.push(q1.front());
                }
                q1.pop();
            }
            while (!q2.empty())
            {
                q1.push(q2.front());
                q2.pop();
            }
            q1.push(gems[i]);
        }
        if (cnt == size)
        {
            if (i - m[q1.front()] < end - start)
            {
                start = m[q1.front()];
                end = i;
            }
        }
    }

    answer.push_back(start + 1);
    answer.push_back(end + 1);
    return answer;
}
int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    return 0;
}