#include <bits/stdc++.h>
// 마법의 엘리베이터
using namespace std;

int ans = 2147483647;

void rec(int storey, int stone)
{
    int one = storey % 10;
    if (storey < 6)
    {
        stone = stone + storey;
        ans = min(ans, stone);
    }
    else if (storey <= 10)
    {
        stone = 11 - storey + stone;
        ans = min(ans, stone);
    }
    else if (storey > 10)
    {
        rec(storey / 10, stone + one);
        rec((storey / 10) + 1, stone + 10 - one);
    }
}

int solution(int storey) {
    int answer = 0;

    rec(storey,0);
    answer = ans;
    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);



    return 0;
}