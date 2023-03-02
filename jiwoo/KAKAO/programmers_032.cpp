#include <bits/stdc++.h>
// 쿼드압축 후 개수 세기
using namespace std;

int zero = 0;
int one = 0;
vector<vector<int>> copyV;
void quad(int x, int y, int size)
{
    bool zeroflag = false;
    bool oneflag = false;
    if (size == 1)
    {
        if (copyV[x][y] == 0)
            zero++;
        else
            one++;
        return;
    }
    for (int i = x; i < size + x; i++)
    {
        for (int j = y; j < size + y; j++)
        {
            if (copyV[i][j] == 0)
            {
                zeroflag = true;
            }
            else
            {
                oneflag = true;
            }
        }
    }
    if (zeroflag && !oneflag)
    {
        zero++;
        return;
    }
    else if (!zeroflag && oneflag)
    {
        one++;
        return;
    }
    quad(x, y, size / 2);
    quad(x + (size / 2), y, size / 2);
    quad(x, y + (size / 2), size / 2);
    quad(x + (size / 2), y + (size / 2), size / 2);
}

vector<int> solution(vector<vector<int>> arr)
{
    vector<int> answer;
    copyV.assign(arr.size(), vector<int>(arr.size()));
    copy(arr.begin(),arr.end(),copyV.begin());
    quad(0, 0, arr.size());

    answer.push_back(zero);
    answer.push_back(one);
    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    return 0;
}