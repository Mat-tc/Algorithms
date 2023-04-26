#include <bits/stdc++.h>

using namespace std;

int solution(vector<vector<int>> board, vector<vector<int>> skill)
{
    int answer = 0;

    int N, M;
    N = board.size();
    M = board[0].size();
    int b_copy[1002][1002];

    for (auto turn : skill)
    {
        int type = turn[0];
        int startx = turn[1];
        int starty = turn[2];
        int endx = turn[3];
        int endy = turn[4];
        int degree = turn[5];

        if (type == 1)
        {
            b_copy[startx][starty] -= degree;
            b_copy[endx + 1][endy + 1] -= degree;
        }
        else if (type == 2)
        {
            b_copy[startx][starty] += degree;
            b_copy[endx + 1][endy + 1] += degree;
        }
    }

    for (int i = 0; i <= N; i++)
    {
        for (int j = 0; j <= M; j++)
        {
            b_copy[i][j + 1] = b_copy[i][j] + b_copy[i][j + 1];
        }
    }
    for (int i = 0; i <= N; i++)
    {
        for (int j = 0; j <= M; j++)
        {
            b_copy[i + 1][j] = b_copy[i][j] + b_copy[i + 1][j];
        }
    }
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < M; j++)
        {
            board[i][j] += b_copy[i][j];
            if (board[i][j] > 0) answer++;
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