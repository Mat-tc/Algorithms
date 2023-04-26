#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    vector<string> v;
    vector<string> v1;
    vector<string> v2;

    v.push_back("AABAAA");
    v.push_back("BABABB");
    v.push_back("BABBAAAB");
    v.push_back("BABAAABAABBABBA");

    v1.push_back("AA");
    v1.push_back("BAB");
    v1.push_back("BAAAA");
    v1.push_back("ABBABB");
    v1.push_back("AABBBBABBAAAA");

    v2.push_back("AABAABAAB");
    v2.push_back("AABBBAABBB");
    v2.push_back("AABBBABBABABBBAAABBBABBBA");

    string str = "(AAB+|BAB+A)+";

    int cnt = 0;
    int cnt1 = 0;
    int cnt2 = 0;

    for (int i = 0; i < v.size(); i++)
    {
        if (regex_match(v[i], regex(str)))
            cnt++;
    }
    cout << cnt << "\n";

    for (int i = 0; i < v.size(); i++)
    {
        if (regex_match(v1[i], regex(str)))
            cnt1++;
    }
    cout << cnt1 << "\n";
    
    for (int i = 0; i < v.size(); i++)
    {
        if (regex_match(v2[i], regex(str)))
            cnt2++;
    }
    cout << cnt2 << "\n";

    return 0;
}