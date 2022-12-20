#include <bits/stdc++.h>
// 디펜스 게임
using namespace std;

int solution(int n, int k, vector<int> enemy) {
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    int answer = 0;
    vector<int> v;
    priority_queue<int,vector<int>,less<int>> pq;
    
    for (int i = 0; i < enemy.size(); i++)
    {
        pq.push(enemy[i]);
        if (enemy[i] <= n)
        {
            n = n - enemy[i];
        }
        else if (enemy[i] > n && k > 0 && !pq.empty())
        {
            n = n + pq.top();
            pq.pop();
            n = n - enemy[i];
            k--;
        }
        else if (enemy[i] > n && k <= 0)
        {
            break;
        }
        answer++;
    }
    return answer;
}