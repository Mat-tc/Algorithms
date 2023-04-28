#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int T;
    cin >> T;
    string str = "(100+1+|01)+";
    for (int i = 0; i < T; i++)
    {
        string a;
        cin >> a;
        if (regex_match(a, regex(str)))
            cout << "YES\n";
        else
            cout << "NO\n";
    }
    return 0;
}