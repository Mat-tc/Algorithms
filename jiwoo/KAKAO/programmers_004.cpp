#include <bits/stdc++.h>
// 성격 유형 검사하기 2022 KAKAO TECH INTERNSHIP
using namespace std;

string solution(vector<string> survey, vector<int> choices) {
    string answer = "";
    map<string, int> m;

    m.insert({"R",0});
    m.insert({"T",0});
    m.insert({"C",0});
    m.insert({"F",0});
    m.insert({"J",0});
    m.insert({"M",0});
    m.insert({"A",0});
    m.insert({"N",0});

    for (int i = 0; i < choices.size(); i++)
    {
        if (choices[i] < 4)
        {
            m[survey[i].substr(0,1)] = m[survey[i].substr(0,1)] + (4 - choices[i]);
        }
        else if (choices[i] > 4)
        {
            m[survey[i].substr(1,1)] = m[survey[i].substr(1,1)] + (choices[i]-4);
        }
    }

    if (m["R"] < m["T"])
        answer = answer + "T";
    else
        answer = answer + "R";
    if (m["C"] < m["F"])
        answer = answer + "F";
    else
        answer = answer + "C";
    if (m["J"] < m["M"])
        answer = answer + "M";
    else
        answer = answer + "J";
    if (m["A"] < m["N"])
        answer = answer + "N";
    else
        answer = answer + "A";

    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    vector<string> s;
    vector<int> c;

    s.push_back("TR");
    s.push_back("RT");
    s.push_back("TR");
    c.push_back(7);
    c.push_back(1);
    c.push_back(3);

    cout << solution(s,c);
    
    return 0;
}