#include <bits/stdc++.h>
// 혼자 놀기의 달인
using namespace std;

int vis[101] = {0};

bool cmp(int a, int b)
{
    return (a > b);
}

int solution(vector<int> cards)
{
    int answer = 0;
    priority_queue<int> pq;

    int cnt = 0;
    vector<int> v;
    for (int i = 0; i < cards.size();)
    {
        if (vis[cards[i] - 1] == 0)
        {
            vis[cards[i] - 1] = 1;
            v.push_back(i);
            i = cards[i] - 1;
            cnt++;
        }
        else
        {
            pq.push(cnt);
            cnt = 0;
            i++;
        }
    }

    int a, b;
    if (pq.empty())
        return 0;
    a = pq.top();
    pq.pop();
    if (pq.empty())
        return 0;
    b = pq.top();
    answer = a * b;

    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    return 0;
}