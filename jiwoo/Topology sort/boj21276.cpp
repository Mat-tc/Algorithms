#include <bits/stdc++.h>

using namespace std;
int n, m, ind[1001], familyNum; // ind 는 진입차수
vector<int> g[1001], childName[1001];
map<string, int> idx; // 이름으로 번호찾기 쉬우려고
map<int, string> name; // 번호로 이름찾기 쉬우려고
vector<string> ancestor;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> n;
    for (int i = 0; i < n; i++)
    {
        string s;
        cin >> s;
        idx[s] = i;  
        name[i] = s; 
    }
    cin >> m;
    for (int i = 0; i < m; i++)
    {
        string a,b;
        cin >> a >> b;
        ind[idx[a]]++;
        g[idx[b]].push_back(idx[a]);
    }
    for (int i = 0; i < n; i++)
    {
        if (ind[i] == 0) // 진입차수가 0이라면 == 루트라면
        {
            ancestor.push_back(name[i]);
        }
    }
    cout << ancestor.size() << "\n";
    sort(ancestor.begin(),ancestor.end());
    for (auto i : ancestor)
    {
        cout << i << " ";
    }
    cout << "\n";
    for (int i = 0; i < ancestor.size(); i++)
    {
        queue<int> q;
        q.push(idx[ancestor[i]]);
        while (!q.empty())
        {
            int x = q.front();
            q.pop();
            for (int j = 0; j < g[x].size(); j++)
            {
                ind[g[x][j]]--;
                if (ind[g[x][j]] == 0)
                {
                    q.push(g[x][j]);
                    childName[x].push_back(g[x][j]);
                }
            }
        }
    }
    for (auto i : idx)
    {
        vector<string> v;
        cout << i.first << " ";
        cout << childName[i.second].size() << " ";
        for (auto j : childName[i.second])
        {
            v.push_back(name[j]);
        }
        sort(v.begin(),v.end());
        for (auto j : v)
        {
            cout << j << " ";
        }
        cout << "\n";
    }
    return 0;
}