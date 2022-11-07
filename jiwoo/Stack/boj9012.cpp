#include <bits/stdc++.h>
using namespace std;
int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
	
    int n;
    string s;
    cin >> n;
    for(int i = 0; i < n; i++)
    {
        cin >> s;
        stack<char> st;
        for (int j = 0; j < s.length(); j++)
        {
            if (s[j] == '(')
            {
                st.push(s[j]);
            }
            else if (!st.empty() && s[j] == ')')
            {
                st.pop();
            }
            else
            {
                cout << "NO" << "\n";
                break;
            }
            if (j == s.length()-1)
            {
                if (st.empty())
                {
                    cout << "YES" << "\n";
                }
                else
                {
                    cout << "NO" << "\n";
                }
            }
        }
    }
	return 0;
}