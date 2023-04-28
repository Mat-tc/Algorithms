#include <bits/stdc++.h>

using namespace std;

vector<int> solution(int n)
{
    vector<int> answer;
    vector<vector<int>> v;

    int end = 0;
    for (int i = 1; i <= n; i++)
    {
        end = end + i;
    }

    for (int i = 1; i < 1002; i++)
    {
        vector<int> tmp;
        for (int j = 0; j < i; j++)
        {
            tmp.push_back(0);
        }
        tmp.push_back(-1);
        v.push_back(tmp);
    }

    int state = 1; // 1 아래진행 2 오른쪽진행 3 되돌아 올라오는진행
    int num = 1; // 채워넣을 숫자
    int x = 0; // 채워넣을 자리 x좌표
    int y = 0; // 채워넣을 자리 y좌표
    while (num <= end)
    {
        if (state == 1) // 밑으로 내려가는중
        {
            for (int i = 0; i < n; i++)
            {
                if (num > end)
                    break;
                if (v[x][y] == 0)
                {
                    v[x][y] = num;
                    x++;
                    num++;
                }
                else break;
            }
            state = 2;
            x--;
            y++;
        }
        else if (state == 2)
        {
            for (int i = 0; i < n; i++)
            {
                if (num > end)
                    break;
                if (v[x][y] == 0)
                {
                    v[x][y] = num;
                    y++;
                    num++;
                }
                else break;
            }
            y = y - 2;
            x--;
            state = 3;
        }
        else if (state == 3)
        {
            for (int i = 0; i < n; i++)
            {
                if (num > end)
                    break;
                if (v[x][y] == 0)
                {
                    v[x][y] = num;
                    x--;
                    y--;
                    num++;
                }
                else break;
            }
            x = x + 2;
            y++;
            state = 1;
        }
    }

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < v[i].size()-1; j++)
        {
            cout << v[i][j] << " ";
            answer.push_back(v[i][j]);
        }
        cout << "\n";
    }

    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    vector<int> a = solution(7);

    return 0;
}