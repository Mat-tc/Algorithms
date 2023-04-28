#include <bits/stdc++.h>
// 테이블 해시 함수
using namespace std;

int Scol;

bool cmp(vector<int> a, vector<int> b)
{
    if (a[Scol] < b[Scol])
    {
        return true;
    }
    else if (a[Scol] > b[Scol])
    {
        return false;
    }
    else
    {
        if (a[0] > b[0])
        {
            return true;
        }
        else
            return false;
    }
    return true;
}

int solution(vector<vector<int>> data, int col, int row_begin, int row_end)
{
    int answer = 0;
    Scol = col-1;
    
    sort(data.begin(), data.end(), cmp);

    int a = row_begin;
    int x = 0;
    for (int i = 0; i < data[a-1].size(); i++)
    {
        x = x + (data[a-1][i] % a);
    }

    int y;

    for (int i = row_begin+1; i <= row_end; i++)
    {
        int y = 0;
        for (int j = 0; j < data[i-1].size(); j++)
        {
            y = y + (data[i-1][j] % i);
        }
        x = x ^ y;
    }

    return x;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    vector<vector<int>> v;
    vector<int> tmp;
    tmp.push_back(2);
    tmp.push_back(2);
    tmp.push_back(6);
    v.push_back(tmp);
    tmp.clear();

    tmp.push_back(1);
    tmp.push_back(5);
    tmp.push_back(10);
    v.push_back(tmp);
    tmp.clear();

    tmp.push_back(4);
    tmp.push_back(2);
    tmp.push_back(9);
    v.push_back(tmp);
    tmp.clear();

    tmp.push_back(3);
    tmp.push_back(8);
    tmp.push_back(3);
    v.push_back(tmp);
    tmp.clear();

    int a = solution(v,2,2,3);

    return 0;
}