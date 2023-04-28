#include <bits/stdc++.h>

using namespace std;
// 0 이면 우하향대각선 1이면 우상향대각선 2면 빈칸
int n;
int board[7];
int parent[50];
int ans = 0;
vector<string> grid;

int getParent(int x)
{
    if (parent[x] == x)
        return x;
    return parent[x] = getParent(parent[x]);
}

void unionParent(int a, int b)
{
    a = getParent(a);
    b = getParent(b);
    if (a < b)
        parent[b] = a;
    else
        parent[a] = b;
}

int findParent(int a, int b)
{
    a = getParent(a);
    b = getParent(b);
    if (a == b)
        return 1;
    return 0;
}

bool play(int a)
{
    for (int i = 0; i < a; i++)
    {
        if (board[i] == board[a])
            return false;
        if (findParent((i * (n + 1)) + board[i], (a * (n + 1)) + board[a]))
            return false;
    }
    return true;
}

void nqueen(int x)
{
    if (x == n + 1)
    {
        ans++;
        return;
    }

    for (int i = 0; i <= n; i++)
    {
        board[x] = i;
        if (play(x))
        {
            nqueen(x + 1);
        }
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> n;

    for (int i = 0; i < 50; i++)
    {
        parent[i] = i;
    }

    for (int i = 0; i < n; i++)
    {
        string s;
        cin >> s;
        grid.push_back(s);
    }

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (grid[i][j] == '0')
            {
                unionParent((i * (n + 1)) + j, ((i + 1) * (n + 1)) + (j + 1));
            }
            else if (grid[i][j] == '1')
            {
                unionParent((i * (n + 1)) + j + 1, ((i + 1) * (n + 1)) + j);
            }
        }
    }
    nqueen(0);
    cout << ans;

    return 0;
}