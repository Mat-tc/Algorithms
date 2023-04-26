#include <bits/stdc++.h>
// 후보키
using namespace std;

int bitcnt(int a)
{
    int cnt = 0;
    while (a)
    {
        if (a & 1)
            cnt++;
        a = a >> 1;
    }
    return cnt;
}

bool cmp(int a, int b)
{
    return bitcnt(a) > bitcnt(b);
}

bool check(vector<vector<string>> relation, int rowsize, int colsize, int subset)
{
    // 두 개 튜플을 골라서 비교하는 방식으로 모든 튜플을 서로 비교할 거다
    for (int a = 0; a < rowsize - 1; a++) // 얘랑
    {
        for (int b = a + 1; b < rowsize; b++) // 얘를 비교할 거다
        {
            bool isSame = true; // 하나라도 다르면 튜플을 서로 구분할 수 있는거니까 우선 기본 값 true
            for (int k = 0; k < colsize; k++) // 속성별로 확인할 거다
            {
                if ((subset & 1 << k) == 0)
                    continue;
                if (relation[a][k] != relation[b][k])
                {
                    isSame = false;
                    break;
                }
            }
            if (isSame)
                return false;
        }
    }
    return true;
}

int solution(vector<vector<string>> relation)
{
    int answer = 0;
    int rowsize = relation.size();
    int colsize = relation[0].size();
    vector<int> cand;

    for (int i = 1; i < 1 << colsize; i++)
    {
        if (check(relation, rowsize, colsize, i)) // 비트를 활용해 조합을 생성
            cand.push_back(i);
    }

    sort(cand.begin(), cand.end(), cmp);
    while (!cand.empty())
    {
        int n = cand.back();
        cand.pop_back();
        answer++;
        for (vector<int>::iterator it = cand.begin(); it != cand.end();)
        {
            if ((n & *it) == n)
                it = cand.erase(it); // erase는 삭제성공시 다음 요소의 주소를 리턴해주기 때문에
                                    // 만약 이렇게 안하면 it가 빈 곳을 가리킴
            else
                it++;
        }
    }

    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    return 0;
}