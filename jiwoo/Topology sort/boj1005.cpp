#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int T;
    cin >> T;
    for (int i = 0; i < T; i++)
    {
        vector<int> v[1010];
        int times[1001];
        int ind[1001];
        int mintimes[1001];
        // 초기화
        for (int j = 0; j < 1001; j++)
        {
            v[j].clear();
        }
        memset(times,0,sizeof(times));
        memset(mintimes,0,sizeof(mintimes));
        memset(ind,0,sizeof(ind));
        queue<int> q;
        int N, K, W;

        cin >> N >> K;

        for (int j = 1; j <= N; j++)
        {
            cin >> times[j];
        }

        for (int j = 0; j < K; j++)
        {
            int X, Y;
            cin >> X >> Y;
            v[X].push_back(Y);
            ind[Y]++;
        }

        cin >> W;
        for (int j = 1; j <= N; j++)
        {
            if (ind[j] == 0)
            {
                q.push(j);
            }
        }
        
        while (!q.empty())
        {
            int curnode = q.front();
            q.pop();
            for (int j = 0; j < v[curnode].size(); j++)
            {
                int nextnode = v[curnode][j];
                mintimes[nextnode] = max(mintimes[nextnode], mintimes[curnode] + times[curnode]);
                ind[nextnode]--;
                if (ind[nextnode] == 0)
                    q.push(nextnode);
            }
        }
        cout << mintimes[W] + times[W] << "\n";

        
    }
    return 0;
}