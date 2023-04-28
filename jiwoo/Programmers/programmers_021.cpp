#include <bits/stdc++.h>
// 무인도여행
using namespace std;

int vis[101][101] = {0};

int dx[4] = {0, 0, 1, -1}; // 동서남북
int dy[4] = {1, -1, 0, 0};

int dfs(int cnt, vector<string> maps, int x, int y)
{
    vis[x][y] = 1;
    cnt = cnt + (maps[x][y] - '0');
    for (int i = 0; i < 4; i++)
    {
        if ((x + dx[i] >= 0 && x + dx[i] < maps.size()) && (y + dy[i] >= 0 && y + dy[i] < maps[0].size()))
        {
            if (vis[x + dx[i]][y + dy[i]] == 0 && maps[x + dx[i]][y + dy[i]] != 'X')
            {
                cnt = cnt + dfs(0, maps, x + dx[i], y + dy[i]);
            }
        }
    }
    return cnt;
}

vector<int> solution(vector<string> maps)
{
    vector<int> answer;
    for (int i = 0; i < maps.size(); i++)
    {
        for (int j = 0; j < maps[0].size(); j++)
        {
            if (maps[i][j] != 'X' && vis[i][j] == 0)
            {
                int a = dfs(0, maps, i, j);
                answer.push_back(a);
            }
        }
    }
    if (answer.empty()) answer.push_back(-1);
    sort(answer.begin(),answer.end());
    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    vector<string> a;
    a.push_back("X591X");
    a.push_back("X1X5X");
    a.push_back("X231X");
    a.push_back("1XXX1");
    vector<int> ans = solution(a);
    return 0;
}