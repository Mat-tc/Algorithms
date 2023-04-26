#include <bits/stdc++.h>

using namespace std;

bool cmp(pair<long long, long long> a, pair<long long, long long> b)
{
    if (a.second == b.second)
        return a.first < b.first;
    return a.second > b.second;
}

vector<string> solution(vector<vector<int>> line)
{
    vector<string> answer;

    vector<pair<long long, long long>> star;
    long long highx, highy, lowx, lowy;
    highx = -10000000000000001;
    highy = -10000000000000001;
    lowx = 10000000000000001;
    lowy = 10000000000000001;
    for (int i = 0; i < line.size(); i++)
    {
        for (int j = i + 1; j < line.size(); j++)
        {
            long long A = (long long)line[i][0];
            long long B = (long long)line[i][1];
            long long E = (long long)line[i][2];
            long long C = (long long)line[j][0];
            long long D = (long long)line[j][1];
            long long F = (long long)line[j][2];
            long long x, y;
            if ((A * D) - (B * C) == 0) // 평행
                continue;
            if (((B * F) - (E * D)) % ((A * D) - (B * C)) == 0 && ((E * C) - (A * F)) % ((A * D) - (B * C)) == 0)
            {
                x = ((B * F) - (E * D)) / ((A * D) - (B * C));
                y = ((E * C) - (A * F)) / ((A * D) - (B * C));
                star.push_back({x, y});
            }
            highx = max(x, highx);
            highy = max(y, highy);
            lowx = min(x, lowx);
            lowy = min(y, lowy);
        }
    }
    sort(star.begin(), star.end(), cmp);
   
    int seq = 0;
    for (long long i = highy; i >= lowy; i--)
    {
        string s = "";
        for (long long j = lowx; j <= highx; j++)
        {
            if (seq >= star.size())
            {
                s += ".";
                continue;
            }
            if (star[seq].first == j && star[seq].second == i)
            {
                s += "*";
                seq++;
            }
            else
                s += ".";
        }
        answer.push_back(s);
    }

    return answer;
}
int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    return 0;
}