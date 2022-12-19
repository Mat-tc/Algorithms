#include <bits/stdc++.h>

using namespace std;

map<int, vector<int>> com;
bool vis[101] = {
    false,
};
int cnt = 0;

void rec(int a)
{
    if (com[a].empty())
        return;
    for (int i = 0; i < com[a].size(); i++)
    {
        if (vis[com[a][i]] == false)
        {
            vis[com[a][i]] = true;
            cnt++;
            rec(com[a][i]);
        }
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int C, N;
    cin >> C >> N;

    while (N--)
    {
        int a, b;
        cin >> a >> b;
        auto it = com.find(a);
        if (it != com.end())
        {
            com[a].push_back(b);
        }
        else
        {
            vector<int> v;
            v.push_back(b);
            com.insert({a, v});
        }
        it = com.find(b);
        if (it != com.end())
        {
            com[b].push_back(a);
        }
        else
        {
            vector<int> v;
            v.push_back(a);
            com.insert({b, v});
        }
    }
    vis[1] = true;
    rec(1);

    cout << cnt;

    return 0;
}