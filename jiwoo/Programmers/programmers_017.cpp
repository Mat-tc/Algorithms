#include <bits/stdc++.h>
// 택배 배달과 수거하기
using namespace std;

long long solution(int cap, int n, vector<int> deliveries, vector<int> pickups)
{
    long long answer = 0;

    queue<int> v1;
    queue<int> v2;
    int tmp1 = cap;
    int tmp2 = cap;
    for (int i = n - 1; i >= 0; i--)
    {
        if (deliveries[i] > 0)
        {
            if (tmp1 == cap)
            {
                v1.push(i + 1);
            }
            if (tmp1 > deliveries[i])
            {
                tmp1 = tmp1 - deliveries[i];
                deliveries[i] = 0;
            }
            else if (tmp1 == deliveries[i])
            {
                deliveries[i] = 0;
                tmp1 = cap;
            }
            else
            {
                deliveries[i] = deliveries[i] - tmp1;
                tmp1 = cap;
                for (int j = 0; j < deliveries[i] / tmp1; j++)
                {
                    v1.push(i + 1);
                }
                deliveries[i] = deliveries[i] % tmp1;
            }
        }
        if (pickups[i] != 0)
        {
            if (tmp2 == cap)
            {
                v2.push(i + 1);
            }
            if (tmp2 > pickups[i])
            {
                tmp2 = tmp2 - pickups[i];
                pickups[i] = 0;
            }
            else if (tmp2 == pickups[i])
            {
                pickups[i] = 0;
                tmp2 = cap;
            }
            else
            {
                pickups[i] = pickups[i] - tmp2;
                tmp2 = cap;
                for (int j = 0; j < pickups[i] / tmp2; j++)
                {
                    v2.push(i + 1);
                }
                pickups[i] = pickups[i] % tmp2;
            }
        }
    }

    while (!v1.empty() || !v2.empty())
    {
        if (!v1.empty() && !v2.empty())
        {
            int dest = max(v1.front(), v2.front());
            answer = answer + (long long)(dest * 2);
            v1.pop();
            v2.pop();
        }
        else if (!v1.empty() && v2.empty())
        {
            answer = answer + (long long)(v1.front() * 2);
            v1.pop();
        }
        else if (v1.empty() && !v2.empty())
        {
            answer = answer + (long long)(v2.front() * 2);
            v2.pop();
        }
    }
    
    return answer;
}
/*
long long solution(int cap, int n, vector<int> deliveries, vector<int> pickups)
{
    long long answer = 0;

    long long end = -1;
    int pos = 0;

    queue<int> delivery; // queue
    queue<int> pickup;   // queue

    while (1)
    {
        if ((deliveries[pos] != 0) || (pickups[pos] != 0))
            end = (long long)pos;
        int k = deliveries[pos];
        for (int i = 0; i < k; i++)
        {
            if (delivery.size() >= cap) // 택배차가 풀이면 맨 앞에 하나빼고 배달
            {

                deliveries[delivery.front()]++;
                delivery.pop();
            }
            deliveries[pos]--;
            delivery.push(pos);
        }
        k = pickups[pos];
        for (int i = 0; i < k; i++)
        {
            if (pickup.size() >= cap) // 택배차가 풀이면 맨 앞에 하나빼고 수거
            {
                pickups[pickup.front()]++;
                pickup.pop();
            }
            pickups[pos]--;
            pickup.push(pos);
        }
        pos++;
        if (pos < n)
            continue;
        else
        {
            while (!delivery.empty())
            {
                delivery.pop();
            }
            while (!pickup.empty())
            {
                pickup.pop();
            }
            if (end == -1)
                break;
            answer = answer + ((end + 1) * 2);
            // cout << end << "\n";
            end = -1;
            pos = 0;
        }
    }

    return answer;
}
*/
int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    vector<int> v1;
    v1.push_back(1);
    v1.push_back(0);
    v1.push_back(3);
    v1.push_back(1);
    v1.push_back(2);

    vector<int> v2;
    v2.push_back(0);
    v2.push_back(3);
    v2.push_back(0);
    v2.push_back(4);
    v2.push_back(0);

    long long a = solution(4, 5, v1, v2);
    return 0;
}