#include <bits/stdc++.h>
// 귤 고르기
using namespace std;

bool cmp(int a, int b)
{
    return a < b;
}

int solution(int k, vector<int> tangerine) {
    int answer = 0;
    sort(tangerine.begin(),tangerine.end());
    priority_queue<int> q;
    int n;
    n = tangerine[0];
    int cnt = 1;
    for (int i = 1; i < tangerine.size(); i++)
    {
        if (n == tangerine[i])
        {
            cnt++;
            if (i == tangerine.size()-1)
                q.push(cnt);
        }
        else
        {
            q.push(cnt);
            n = tangerine[i];
            cnt = 1;
        }
    }
    while (!q.empty() && k > 0)
    {
        k = k - q.top();
        answer++;
        q.pop();
    }
    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    vector<int> v;
    v.push_back(2);
    v.push_back(3);
    /*
    v.push_back(2);
    v.push_back(5);
    v.push_back(4);
    v.push_back(5);
    v.push_back(2);
    v.push_back(3);
    */
    int a = solution(2,v);

    return 0;
}