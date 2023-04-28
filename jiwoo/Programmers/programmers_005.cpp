#include <bits/stdc++.h>
// 성격 유형 검사하기 2022 KAKAO TECH INTERNSHIP
using namespace std;

int solution(vector<int> queue1, vector<int> queue2) {
    int answer = -1;

    queue<int> que1;
    queue<int> que2;

    long long q1 = 0;
    long long q2 = 0;
    long long sum = 0;
    long long cnt = 0;

    for (int i = 0; i < queue1.size(); i++)
    {
        que1.push(queue1[i]);
        que2.push(queue2[i]);
        q1 = q1 + queue1[i];
        q2 = q2 + queue2[i];
    }
    
    sum = q1 + q2;

    if (sum % 2 == 1 || *max_element(queue1.begin(),queue1.end()) > (sum / 2) || *max_element(queue2.begin(),queue2.end()) > (sum / 2))
        return -1;

    while (q1 != q2)
    {
        if (q1 > q2)
        {
            q1 = q1 - que1.front();
            q2 = q2 + que1.front();
            que2.push(que1.front());
            que1.pop();
        }
        else if (q2 > q1)
        {
            q2 = q2 - que2.front();
            q1 = q1 + que2.front();
            que1.push(que2.front());
            que2.pop();
        }
        cnt++;
        if (cnt > (queue1.size()*3))
            return -1;
    }
    answer = cnt;
    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    vector<int> v1;
    vector<int> v2;

    v1.push_back(9);
    v1.push_back(4);
    v1.push_back(3);
    v2.push_back(1);
    v2.push_back(3);

    cout << solution(v1,v2);

    return 0;
}