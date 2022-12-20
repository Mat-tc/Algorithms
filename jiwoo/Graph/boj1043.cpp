#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    vector<vector<int>> v;
    int people[51] = {0};
    int vis[51]= {0};
    int cnt = 0;
    int N, M;
    cin >> N >> M;
    int P, A;
    cin >> P;

    for (int i = 0; i < P; i++)
    {
        cin >> A;
        people[A] = 1;
    }

    for (int i = 0; i < M; i++)
    {
        int a,b;
        vector<int> tmp;
        cin >> a;
        for (int j = 0; j < a; j++)
        {
            cin >> b;
            tmp.push_back(b);
        }
        v.push_back(tmp);
    }

    for (int k = 0; k < M; k++)
    {
        for (int i = 0; i < M; i++)
        {
            int flag = 0;
            if (vis[i] == 1) continue;
            for (int j = 0; j < v[i].size(); j++)
            {
                if (people[v[i][j]] == 1) 
                {
                    flag = 1;
                    break;
                }
            }
            if (flag == 1)
            {
                vis[i] = 1;
                cnt++;
                for (int j = 0; j < v[i].size(); j++)
                {
                    people[v[i][j]] = 1;
                }
            }
        }
    }
    cout << (M - cnt);
    return 0;
}