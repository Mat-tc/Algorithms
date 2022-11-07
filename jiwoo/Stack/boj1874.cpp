#include <bits/stdc++.h>
using namespace std;
int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
	
    int n;
    int s;
    cin >> n;
    stack<int> st;
    queue<char> q;
    int a = 0;
    int cnt = 1;
    for (int i = 0; i < n; i++)
    {
        cin >> s;
        while (st.empty() || st.top() < s)
        {
            st.push(cnt);
            q.push('+');
            cnt++;
        }
        if (st.top() == s)
        {
            st.pop();
            q.push('-');
        }
        else
        {
            a = 1;
            break;
        }
    }
    if (a == 0)
    {
        while (!q.empty())
        {
            cout << q.front() << "\n";
            q.pop();
        }
    }
    else
    {
        cout << "NO";
    }
	return 0;
}