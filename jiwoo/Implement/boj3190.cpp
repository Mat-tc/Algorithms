#include <bits/stdc++.h>

using namespace std;

int N, K, L;
int board[102][102];
int state = 1; // 1 - 오 , 2 - 밑, 3 - 왼, 4 - 위
int snake[101][101];
int ans = 0;
int seq = 0;
vector<pair<int, char>> v;

void play()
{
    deque<pair<int,int>> dq;
    board[1][1] = 2;
    int hx = 1;
    int hy = 1;
    int tailx = 1;
    int taily = 1;
    dq.push_front(make_pair(1,1));
    while (true)
    {
        ans++;
        if (state == 1)
        {
            hy++;
            dq.push_front(make_pair(hx,hy));
            tailx = dq.back().first;
            taily = dq.back().second;
            if (hy > N || board[hx][hy] == 2)
            {
                break;
            }
            if (board[hx][hy] == 1)
            {
                board[hx][hy] = 2;
            }
            else
            {
                board[hx][hy] = 2;
                board[tailx][taily] = 0;
                dq.pop_back();
            }
        }
        else if (state == 2)
        {
            hx++;
            dq.push_front(make_pair(hx,hy));
            tailx = dq.back().first;
            taily = dq.back().second;
            if (hx > N || board[hx][hy] == 2)
            {
                break;
            }
            if (board[hx][hy] == 1)
            {
                board[hx][hy] = 2;
            }
            else
            {
                board[hx][hy] = 2;
                board[tailx][taily] = 0;
                dq.pop_back();                
            }
        }
        else if (state == 3)
        {
            hy--;
            dq.push_front(make_pair(hx,hy));
            tailx = dq.back().first;
            taily = dq.back().second;
            if (hy < 1 || board[hx][hy] == 2)
            {
                break;
            }
            if (board[hx][hy] == 1)
            {
                board[hx][hy] = 2;
            }
            else
            {
                board[hx][hy] = 2;
                board[tailx][taily] = 0;
                dq.pop_back();
            }
        }
        else if (state == 4)
        {
            hx--;
            dq.push_front(make_pair(hx,hy));
            tailx = dq.back().first;
            taily = dq.back().second;
            if (hx < 1 || board[hx][hy] == 2)
            {
                break;
            }
            if (board[hx][hy] == 1)
            {
                board[hx][hy] = 2;
            }
            else
            {
                board[hx][hy] = 2;
                board[tailx][taily] = 0;
                dq.pop_back();
            }
        }
        if (seq < L)
        {
            if (v[seq].first == ans)
            {
                if (v[seq].second == 'L')
                {
                    if (state == 1)
                        state = 4;
                    else if (state == 2)
                        state = 1;
                    else if (state == 3)
                        state = 2;
                    else if (state == 4)
                        state = 3;
                }
                else
                {
                    if (state == 1)
                        state = 2;
                    else if (state == 2)
                        state = 3;
                    else if (state == 3)
                        state = 4;
                    else if (state == 4)
                        state = 1;
                }
                seq++;
            }
        }
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> N >> K;
    for (int i = 0; i < K; i++)
    {
        int x, y;
        cin >> x >> y;
        board[x][y] = 1;
    }
    cin >> L;
    for (int i = 0; i < L; i++)
    {
        int X;
        char C;
        cin >> X >> C;
        v.push_back(make_pair(X, C));
    }
    play();
    cout << ans;

    return 0;
}