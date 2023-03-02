#include <bits/stdc++.h>

using namespace std;

vector<int> g[501];
int ind[501];
int times[501];
int mintimes[501];

void dp(int i, int ret)
{
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N;
    queue<int> q;
    cin >> N;

    for (int i = 1; i <= N; i++)
    {
        int A, B;
        cin >> A;
        times[i] = A;
        while (true)
        {
            cin >> B;
            if (B == -1)
                break;
            g[B].push_back(i);
            ind[i]++;
        }
    }

    for (int i = 1; i <= N; i++) // 우선 차수가 0인 애만 q에 삽입
    {
        if (ind[i] == 0)
        {
            q.push(i);
        }
    }

    while (!q.empty())
    {
        int node = q.front();
        q.pop();
        for (int i = 0; i < g[node].size(); i++)
        {
            int nextNode = g[node][i];
            {
                mintimes[nextNode] = max(mintimes[nextNode], mintimes[node] + times[node]);
            }
            ind[nextNode]--;
            if (ind[nextNode] == 0)
            {
                q.push(nextNode);
            }
        }
    }

    for (int i = 1; i <= N; i++)
    {
        cout << times[i] + mintimes[i] << "\n";
    }

    return 0;
}