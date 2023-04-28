#include <bits/stdc++.h>
// 롤케이크 자르기
using namespace std;


int solution(vector<int> topping)
{
    int answer = 0;

    int chul[10001] = {0};
    int dong[10001] = {0};

    int chulcnt = 0;
    int dongcnt = 0;
    int cnt = 0;
    for (int i = 0; i < topping.size(); i++)
    {
        if (dong[topping[i]] == 0)
            dongcnt++;
        dong[topping[i]]++;
    }
    if (chulcnt == dongcnt)
        answer++;
    for (int i = 0; i < topping.size(); i++)
    {
        dong[topping[i]]--;
        if (chul[topping[i]] == 0)
            chulcnt++;
        chul[topping[i]]++;
        if (dong[topping[i]] == 0)
            dongcnt--;
        if (chulcnt == dongcnt)
            answer++;
    }

    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    return 0;
}