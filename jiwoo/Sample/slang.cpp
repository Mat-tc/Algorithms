#include <bits/stdc++.h>

using namespace std;

vector<string> dic;
string chat;
vector<string> words;
string result;
int k;

bool dfs(string cur, string dicword, int curpos, int dicpos) // '.'이 나오면 그 자리에 맞는 알파벳으로 대체했다고 치고 k개까지 검사하는 방식으로 비속어인지 확인 비속어면 true 아니면 false
{
    for (int i = curpos; i < cur.size(); i++)
    {
        if (cur.size() > dicword.size()) // dicword 사이즈보다 길이가 긴 단어는 false;
            break;
        if (cur[i] == dicword[dicpos]) // 비교해서 같으면 다음 글자로 넘어감
        {
            dicpos++;
        }
        else if (cur[i] == '.') // . 이라면 최대 k개만큼 대체 가능하고 그 중 한 번만 통과해도 됨
        {
            if (i == cur.size() - 1 && dicword.size() - dicpos <= k) // 마지막이 .으로 끝나는 경우에 조건 부합하는지 검사
                return true;
            for (int j = 1; j <= k; j++) // 1부터 최대 k개만큼을 재귀로 하나하나 확인
            {
                if (dfs(cur, dicword, i + 1, dicpos + j))
                    return true;
            }
        }
        else
            break;
        if (i == cur.size() - 1) // 마지막까지 이상없었으면 true 리턴
            return true;
    }
    return false;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    k = 2;

    dic.push_back("slang");
    dic.push_back("badword");

    /*
    dic.push_back("abcde");
    dic.push_back("cdefg");
    dic.push_back("efgij");
    */

    chat = "badword ab.cd bad.ord .word sl.. bad.word";
    // chat = ".. ab. cdefgh .gi. .z.";

    stringstream ss(chat);
    ss.str(chat);
    string a;
    while (ss >> a)
    {
        words.push_back(a); // 공백을 기준으로 문자열을 나누어 words에 추가
    }

    int flag;
    for (auto cur : words)
    {
        flag = 0;
        for (auto dicword : dic)
        {
            if (dfs(cur, dicword, 0, 0)) // dfs함수로 비속어인지 아닌지 확인
            {
                flag = 1;
                break;
            }
        }
        if (flag) // 비속어니까 #으로 대체
        {
            for (int i = 0; i < cur.size(); i++)
            {
                result += "#"; 
            }
        }
        else // 비속어가 아니니까 그대로 result에 추가
        {
            result += cur;
        }
        if (cur != words[words.size() - 1]) // 마지막 글자가 아니라면 공백 추가
        {
            result += " ";
        }
    }

    cout << result << "\n";

    return 0;
}