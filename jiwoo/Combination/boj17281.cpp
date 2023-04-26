#include <bits/stdc++.h>

using namespace std;

int N;
int result[51][10];
vector<int> v;
int player[10];
int ans = 0;

int play()
{
    int score = 0;
    int turn = 1;
    int field[3];
    for (int i = 1; i <= N; i++)
    {
        int out = 3;

        while (out)
        {
            if (turn > 9)
                turn = 1;
            if (result[i][v[turn - 1]] == 0)
            {
                out--;
            }
            else if (result[i][v[turn - 1]] == 1)
            {
                if (field[2] == 1)
                    score++;
                field[2] = field[1];
                field[1] = field[0];
                field[0] = 1;
            }
            else if (result[i][v[turn - 1]] == 2)
            {
                if (field[2] == 1)
                    score++;
                if (field[1] == 1)
                    score++;
                field[2] = field[0];
                field[1] = 1;
                field[0] = 0;
            }
            else if (result[i][v[turn - 1]] == 3)
            {
                if (field[2] == 1)
                    score++;
                if (field[1] == 1)
                    score++;
                if (field[0] == 1)
                    score++;
                field[2] = 1;
                field[1] = 0;
                field[0] = 0;
            }
            else if (result[i][v[turn - 1]] == 4)
            {
                if (field[2] == 1)
                    score++;
                if (field[1] == 1)
                    score++;
                if (field[0] == 1)
                    score++;
                score++;
                field[2] = 0;
                field[1] = 0;
                field[0] = 0;
            }
            turn++;
        }
        field[2] = 0;
        field[1] = 0;
        field[0] = 0;
    }
    return score;
}

void comb(int cnt)
{
    if (cnt == 8)
    {
        ans = max(ans, play());
        return;
    }
    for (int i = 2; i <= 9; i++)
    {
        if (player[i])
            continue;
        player[i] = 1;
        v.push_back(i);
        if (v.size() == 3)
        {
            v.push_back(1);
            comb(cnt + 1);
            v.pop_back();
        }
        else
        {
            comb(cnt + 1);
        }
        v.pop_back();
        player[i] = 0;
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> N;

    for (int i = 1; i <= N; i++)
    {
        for (int j = 1; j <= 9; j++)
        {
            cin >> result[i][j];
        }
    }
    comb(0);
    cout << ans;
    return 0;
}