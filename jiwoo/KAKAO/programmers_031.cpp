#include <bits/stdc++.h>
// 방금 그 곡
using namespace std;

vector<string> split(string input, char delimiter)
{
    vector<string> result;
    stringstream ss(input);
    string tmp;

    while (getline(ss, tmp, delimiter))
        result.push_back(tmp);

    return result;
}

string solution(string m, vector<string> musicinfos)
{
    string answer = "(None)";
    vector<vector<string>> splitS;
    vector<int> ans;
    vector<int> pt;
    int cnt = 0;
    for (int i = 0; i < m.size(); i++)
    {
        if (m[i] == '#')
            cnt++;
    }

    for (int i = 0; i < musicinfos.size(); i++)
    {
        int start = stoi(musicinfos[i].substr(0, 2)) * 60 + stoi(musicinfos[i].substr(3, 2));
        int end = stoi(musicinfos[i].substr(6, 2)) * 60 + stoi(musicinfos[i].substr(9, 2));
        int playtime = end - start; // 재생시간 계산
        pt.push_back(playtime);

        vector<string> tmpS = split(musicinfos[i], ','); // ',' 기준으로 잘라서 벡터에 넣어두기
        splitS.push_back(tmpS);

        string result = "";

        if (playtime < m.size()-cnt) // 재생시간이 들은음악길이보다 짧을때
        {
            ans.push_back(0);
            continue;
        }
        int sharp = 0;
        for (int j = 0; j < tmpS[3].size(); j++)
        {
            if (tmpS[3][j] == '#')
            {
                sharp++;
            }
        }

        if (tmpS[3].size() - sharp < playtime) // 반복재생인 경우
        {
            // 음악 이어 붙이기
            for (int k = 0; k < playtime / (tmpS[3].size() - sharp); k++)
            {
                for (int l = 0; l < tmpS[3].size(); l++)
                {
                    result = result + tmpS[3][l];
                }
            }

            for (int k = 0; k < playtime % (tmpS[3].size()-sharp); k++)
            {
                result = result + tmpS[3][k];
            }

            if (result.find(m) == string::npos) // 포함 여부 확인
                ans.push_back(1);
            else
                ans.push_back(0);
        }
        else // 반복재생이 아닌경우
        {
            for (int k = 0; k < playtime; k++)
            {
                result = result + tmpS[3][k];
            }

            if (result.find(m) == string::npos)
                ans.push_back(1);
            else
                ans.push_back(0);
        }
    }

    int maxpt = 0;

    for (int i = 0; i < ans.size(); i++)
    {
        cout << ans[i];
        if (ans[i] == 1) // 포함되는데
        {
            if (pt[i] > maxpt) // 재생시간이 가장 긴
            {
                maxpt = pt[i];
                answer = splitS[i][2];
            }
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