#include <bits/stdc++.h>

using namespace std;

int calc(int i, int j)
{
    int ret;
    int num;

    if (abs(i) > abs(j))
        num = abs(i);
    else
        num = abs(j);

    int num2 = num * 2;

    if (i <= 0 && j > 0)
    {
        if (abs(i) > abs(j))
            ret = (num2 * num2) - num2 + 1 + (num - j);
        else
            ret = (num2 * num2) - num2 + 1 - (num + i);
    }
    else if (i <= 0 && j <= 0)
    {
        if (abs(i) > abs(j))
            ret = (num2 * num2 + 1) - (num + j);
        else
            ret = (num2 * num2 + 1) + (num + i);
    }
    else if (i > 0 && j <= 0)
    {
        if (abs(i) > abs(j))
            ret = num2 * (num2 + 1) + 1 + (num + j);
        else
            ret = num2 * (num2 + 1) + 1 - (num - i);
    }
    else if (i > 0 && j > 0)
    {
        if (abs(i) + 1 >= abs(j))
            ret = (i * 2 + 1) * (i * 2 + 1) - i + j;
        else
            ret = ((j - 1) * 2 + 1) * ((j - 1) * 2 + 1) - i + j;
    }
    return ret;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int r1, c1, r2, c2;
    queue<int> q;
    int maxnum = 0;
    cin >> r1 >> c1 >> r2 >> c2;

    for (int i = r1; i <= r2; i++)
    {
        for (int j = c1; j <= c2; j++)
        {
            int ij = calc(i, j);
            maxnum = max(maxnum, ij);
            q.push(ij);
        }
    }
    string snum = to_string(maxnum);
    int cnt = snum.size();
    
    for (int i = r1; i <= r2; i++)
    {
        for (int j = c1; j <= c2; j++)
        {
            int ijcnt = to_string(q.front()).size();
            while (cnt - ijcnt)
            {
                cout << " ";
                ijcnt++;
            }
            cout << q.front() << " ";
            q.pop();
        }
        cout << "\n";
    }
    return 0;
}