#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    string s;
    int result = 0;
    int state = 0;
    vector<int> v;

    cin >> s;

    for (int i = 0; i < s.size(); i++)
    {
        if (s[i] == '(')
        {
            v.push_back(0);
            state = 0;
        }
        else if (s[i] == ')')
        {
            if (state == 0) // laser를 닫는 괄호다.
            {
                state = 1;
                v.pop_back();
                for (int j = 0; j < v.size(); j++)
                {
                    v[j]++;
                }
            }
            else if (state == 1) // pipe를 닫는 괄호다.
            {
                result += v.back() + 1;
                v.pop_back();
            }
        }
    }
    cout << result << "\n";
    return 0;
}