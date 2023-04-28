#include <bits/stdc++.h>
// 프렌즈4블록

using namespace std;

int solution(int m, int n, vector<string> board)
{
    int answer = 0;
    while (true)
    {
        set<pair<int, int>> posset;
        for (int i = 0; i < m - 1; ++i)
        {
            for (int j = 0; j < n - 1; ++j)
            {
                if (board[i][j] &&
                    board[i][j] == board[i][j + 1] &&
                    board[i][j] == board[i + 1][j] &&
                    board[i][j] == board[i + 1][j + 1])
                {
                    posset.insert({i, j});
                    posset.insert({i, j + 1});
                    posset.insert({i + 1, j});
                    posset.insert({i + 1, j + 1});
                }
            }
        }
        if (posset.size())
        {
            answer += (int)posset.size();
        }
        else
        {
            break;
        }
        for (auto &e : posset)
        {
            board[e.first][e.second] = 0;
        }
        for (int i = 0; i < n; ++i)
        {
            int a = -1;
            int b = -1;
            for (int j = m - 1; j >= 0; --j)
            {
                if (!board[j][i])
                {
                    if (a == -1)
                    {
                        a = j;
                    }
                }
                else
                {
                    if (a != -1)
                    {
                        if (b == -1)
                        {
                            b = j;
                        }
                    }
                }
                if (a != -1 && b != -1)
                {
                    while (b >= 0 && board[b][i])
                    {
                        swap(board[a][i], board[b][i]);
                        a--;
                        b--;
                    }
                    j = b;
                    b = -1;
                }
            }
        }
    }
    return answer;
}
int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    return 0;
}
