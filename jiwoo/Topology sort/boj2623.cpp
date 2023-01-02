#include <bits/stdc++.h>

using namespace std;

int indeg[1002] = {
    0,
};
vector<int> g[1002];
queue<int> q;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    vector<int> ans;
    int N, M;
    cin >> N >> M;

    for (int i = 0; i < M; i++)
    {
        vector<int> pd;
        int a;
        cin >> a;
        for (int j = 0; j < a; j++)
        {
            int b;
            cin >> b;
            pd.push_back(b);
        }
        for (int j = 0; j < pd.size(); j++)
        {
            for (int k = j + 1; k < pd.size(); k++)
            {
                g[pd[j]].push_back(pd[k]);
                indeg[pd[k]]++;
            }
        }
    }
    for (int i = 1; i <= N; i++)
    {
        if (indeg[i] == 0)
            q.push(i);
    }
    while (!q.empty())
    {
        int Num = q.front();
        q.pop();
        ans.push_back(Num);

        for (int i = 0; i < g[Num].size(); i++)
        {
            int Next = g[Num][i];
            indeg[Next]--;

            if (indeg[Next] == 0)
                q.push(Next);
        }
    }
    if (ans.size() != N)
        cout << 0;
    else
    {
        for (int i = 0; i < ans.size(); i++)
            cout << ans[i] << "\n";
    }

    return 0;
}