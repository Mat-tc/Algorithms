#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    int T;
    cin >> T;
    string S;
    for (int i = 0; i < T; i++)
    {
        cin >> S;
        int r = S.length() - 1;
        int cnt = 1;
        if (r == 0) // 길이가 1일 때
        {
            cout << "1 1" << "\n";
            continue;
        }
        for (int i = 0; i <= S.length() / 2; i++)
        {
            if (S[i] != S[r])
            {
                cout << "0 " << cnt << "\n";
                break;
            }
            if (i >= r-1 && S.length() % 2 != 0) // 
            {
                cout << "1 " << cnt << "\n";
            }
            else if (i >= r-1 && S.length() % 2 != 1)
            {
                cout << "1 " << cnt + 1 << "\n";
                break;
            }
            r--;
            cnt++;
        }
    }
    return 0;
}
