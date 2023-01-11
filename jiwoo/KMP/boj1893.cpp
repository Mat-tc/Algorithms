#include <bits/stdc++.h>

using namespace std;

// 접두사와 접미사 일치하는 최대 일치 길이 테이블 구하기
vector<int> makeTable(string fs)
{ // fs : 검색할 문자열
    int fsSize = fs.size();
    vector<int> table(fsSize, 0); // 0으로 초기화
    int j = 0;
    for (int i = 1; i < fsSize; i++)
    {
        // 일치하지 않으면
        while (j > 0 && fs[i] != fs[j])
        {
            j = table[j - 1];
        }
        // 일치하면
        if (fs[i] == fs[j])
        {
            table[i] = ++j;
        }
    }
    return table;
}

// ws : 검색을 당하는 문자열, fs : 검색할 문자열
int KMP(string ws, string fs)
{
    int cnt = 0;
    vector<int> table = makeTable(fs);
    int j = 0;
    for (int i = 0; i < ws.size(); i++)
    {
        // 일치하지 않는 경우 (단, j > 0)
        while (j > 0 && ws[i] != fs[j])
        {
            j = table[j - 1];
        }
        // 일치한 경우
        if (ws[i] == fs[j])
        {
            if (j == fs.size() - 1)
            { // 문자열이 완전히 일치하면
                j = table[j];
                cnt++;
            }
            else
            {
                j++;
            }
        }
    }
    return cnt;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N;
    cin >> N;
    for (int i = 0; i < N; i++)
    {
        vector<int> ans;
        string A, W, S;
        cin >> A >> W >> S;
        vector<int> tonum;
        for (int j = 0; j < S.size(); j++)
        {
            for (int k = 0; k < A.size(); k++)
            {
                if (S[j] == A[k])
                {
                    tonum.push_back(k);
                    break;
                }
            }
        }

        for (int j = 0; j < A.size(); j++)
        {
            for (int k = 0; k < S.size(); k++)
            {
                int idx = tonum[k] - j;
                if (idx < 0)
                {
                    idx = idx + A.size();
                }
                S[k] = A[idx];
            }
            vector<int> table = makeTable(S);
            int cnt = KMP(S, W);
            if (cnt == 1)
                ans.push_back(j);
        }
        if (ans.size() == 0)
            cout << "no solution\n";
        else if (ans.size() == 1)
            cout << "unique: " << ans[0] << "\n";
        else if (ans.size() > 1)
        {
            cout << "ambiguous: ";
            for (int j = 0; j < ans.size(); j++)
            {
                cout << ans[j] << " ";
            }
            cout << "\n";
        }
    }

    return 0;
}