#include <bits/stdc++.h>

using namespace std;

int INF = 987654321;
int N,M;
vector<string> b_copy;
int dx[4] = {-1, 1, 0, 0}; // 왼/오/위/밑 순서
int dy[4] = {0, 0, -1, 1};
int vis[101][101];
int ans = INF;
// int state : 0 정지상태 1 왼 2 오 3 위 4 밑;

void play(int y, int x, int cnt, int state)
{
    if ((vis[y][x] == 1 && state != 0) || vis[y][x] == 2)
        return;
    vis[y][x]++;
    if (b_copy[y][x] == 'G' && (dy[state] + y < 0 || dy[state] + y >= N || dx[state] + x < 0 || dx[state] + x >= M))
    {
        ans = min(ans, cnt);
        return;
    }
    else if (b_copy[y][x] == 'G' && b_copy[y + dy[state]][x + dx[state]] == 'D')
    {
        ans = min(ans, cnt);
        return;
    }
    if (state == 0)
    {
        for (int i = 0; i < 4; i++)
        {
            state = i + 1;
            if (dy[i] + y < 0 || dy[i] + y >= N || dx[i] + x < 0 || dx[i] + x >= M)
            {
                continue;
            }
            if (b_copy[dy[i] + y][dx[i] + x] == 'D')
            {
                continue;
            }
            if (b_copy[dy[i] + y][dx[i] + x] == '.')
                play(dy[i] + y, dx[i] + x, cnt + 1, state);
        }
    }
    else
    {
        if (dy[state] + y < 0 || dy[state] + y >= N || dx[state] + x < 0 || dx[state] + x >= M)
        {
            return;
        }
        else if (b_copy[dy[state] + y][dx[state] + x] == 'D')
        {
            return;
        }
        play(dy[state] + y, dx[state] + x, cnt, state);
    }
}
int solution(vector<string> board)
{
    int answer = 0;
    N = board.size();
    M = board[0].size();
    b_copy.assign(board.begin(), board.end());
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < M; j++)
        {
            if (board[i][j] == 'R')
            {
                play(i,j,0,0);
                break;
            }
        }
    }
    
    answer = ans;
    if (ans == INF) answer = -1;
    return answer;
}
int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    return 0;
}