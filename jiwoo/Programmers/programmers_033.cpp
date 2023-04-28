#include <bits/stdc++.h>
// 영어 끝말잇기
using namespace std;

vector<int> solution(int n, vector<string> words)
{
    vector<int> answer;
    int cnt = 1;
    int mannum = 1;
    for (int i = 0; i < words.size(); i++)
    {
        for (int j = 0; j < i; j++)
        {
            if (words[j] == words[i])
            {
                answer.push_back(mannum);
                answer.push_back(cnt);
                return answer;
                // 탈락
            }
        }
        if (i != 0)
        {
            if (words[i][0] != words[i - 1][words[i - 1].size() - 1])
            {
                answer.push_back(mannum);
                answer.push_back(cnt);
                return answer;
            }
        }
        mannum++;
        if (mannum > n)
        {
            mannum = 1;
            cnt++;
        }
    }
    if (answer.empty())
    {
        answer.push_back(0);
        answer.push_back(0);
    }
    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    return 0;
}