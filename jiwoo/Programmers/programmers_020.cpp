#include <bits/stdc++.h>
// 우박수열 정적분
using namespace std;

vector<int> v;
vector<double> area;
int rec(int a, int cnt) // recursion
{
    if (a <= 1)
        return cnt + 1;
    if (a % 2 == 0)
    {
        v.push_back(a / 2);
        return rec((a / 2), cnt + 1);
    }
    else
    {
        v.push_back((a * 3) + 1);
        return rec(((a * 3) + 1), cnt + 1);
    }
}

vector<double> solution(int k, vector<vector<int>> ranges)
{
    vector<double> answer;
    v.push_back(k);

    int size = rec(k, 0);

    v.push_back(1);
    area.push_back(0);
    for (int i = 1; i < size; i++)
    {
        if (v[i] > v[i - 1])
        {
            area.push_back(area[i - 1] + (double)(v[i] - v[i - 1]) / 2 + (double)(v[i - 1]));
        }
        else
        {
            area.push_back(area[i - 1] + (double)(v[i - 1] - v[i]) / 2 + (double)(v[i]));
        }
    }
    size--;
    double size = (double)size;
    for (int i = 0; i < ranges.size(); i++)
    {
        if (size+ranges[i][1]<ranges[i][0])
        {
            answer.push_back(-1.0);
            continue;
        }
        answer.push_back(area[size+(double)ranges[i][1]]-(double)area[ranges[i][0]]);
    }
    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    int a = 5;
    cout << rec(5, 0);
    return 0;
}