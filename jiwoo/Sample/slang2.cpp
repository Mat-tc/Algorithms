#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    vector<string> words;
    vector<string> dic;
    string result = "";
    int k = 2;

    dic.push_back("slang");
    dic.push_back("badword");

    /*
    dic.push_back("abcde");
    dic.push_back("cdefg");
    dic.push_back("efgij");
    */

    string chat = "badword ab.cd bad.ord .word sl.. bad.word";
    // chat = ".. ab. cdefgh .gi. .z.";

    stringstream ss(chat);
    ss.str(chat);
    string a;

    while (ss >> a)
    {
        words.push_back(a); // 공백을 기준으로 문자열을 나누어 words에 추가
    }
    for (auto word : words)
    {
        cout << word << ;
    }
    for (int i = 0; i < words.size(); i++)
    {
        string pat = "";
        for (int j = 0; j < words[i].size(); j++)
        {
            if (words[i][j] >= 'a' && words[i][j] <= 'z')
            {
                pat += (words[i][j] + "");
            }
            else
            {
                pat += ".{1,";
                pat += (k + "");
                pat += "}";
            }
        }
        bool flag = false;
        cout << pat << "\n";
        for (int j = 0; j < dic.size(); j++)
        {
            if (regex_match(dic[j], regex(pat)))
            {
                flag = true;
                break;
            }
        }
        if (flag)
        {
            for (int k = 0; k < words[i].size(); k++)
            {
                result += "#";
            }
        }
        else
        {
            result += words[i];
        }
        if (i != words.size() - 1)
        {
            result += " ";
        }
    }

    cout << result << "\n";

    return 0;
}