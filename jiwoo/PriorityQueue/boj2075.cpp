#include <bits/stdc++.h>

using namespace std;
priority_queue<int, vector<int>, greater<int>> pq;
int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N;
    int flag = 0;
    cin >> N;

    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N; j++)
        {
            int a;
            cin >> a;
            if (pq.size() <= N)
            {
                pq.push(a);
            }
            else
            {
                if (pq.top() < a)
                {
                    pq.pop();
                    pq.push(a);
                }
            }
        }
    }
    cout << pq.top();

    return 0;
}