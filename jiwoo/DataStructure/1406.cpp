#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N;
    int M;
    string s;
    char ch;

    stack<char> cursor;
    stack<char> tmp;

    cin >> s;
    N = (int)s.length();
    for (int i = 0; i < N; i++)
    {
        cursor.push(s[i]);
    }

    cin >> M;

    for (int i = 0; i < M; i++)
    {
        char cmd, c;
        cin >> cmd;

        if (cmd == 'L')
        {
            if (!cursor.empty())
            {
                tmp.push(cursor.top());
                cursor.pop();
            }
        }
        else if (cmd == 'D')
        {
            if (!tmp.empty())
            {
                cursor.push(tmp.top());
                tmp.pop();
            }
        }
        else if (cmd == 'B')
        {
            if (!cursor.empty())
            {
                cursor.pop();
            }
        }
        else if (cmd == 'P')
        {
            cin >> ch;
            cursor.push(ch);
        }
    }

    while (!cursor.empty())
    {
        tmp.push(cursor.top());
        cursor.pop();
    }

    while (!tmp.empty())
    {
        cout << tmp.top();
        tmp.pop();
    }

    return 0;
}