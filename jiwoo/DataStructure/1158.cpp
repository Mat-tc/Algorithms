#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N, K;
    int cnt = 0;
    
    queue<int> q;

    cin >> N;
    cin >> K;

    for (int i = 1; i <= N; i++)
    {
        q.push(i);
    }

    cout << "<";

    while (!q.empty())
    {
        cnt++;
        if (cnt == K && q.size() != 1)
        {
            cout << q.front() << ", ";
            cnt = 0;
        }
        else if (cnt == K)
        {
            cout << q.front() << ">";
            cnt = 0;
        }
        else
        {
            q.push(q.front());
        }
        q.pop();
    }

    return 0;
}