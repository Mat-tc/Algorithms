#include <bits/stdc++.h>

// 코딩테스트 공부

using namespace std;
// alp = 알고력 cop = 코딩력
// problems의 원소는 [alp_req, cop_req, alp_rwd, cop_rwd, cost]의 형태
//                  필요한 alp / 필요한 cop / 보상 alp / 보상 cop / 걸리는 시간



int solution(int alp, int cop, vector<vector<int>> problems)
{
    int answer = 0;
    int targetalp = 0;
    int targetcop = 0;

    for (auto i : problems)
    {
        targetalp = max(i[0], targetalp);
        targetcop = max(i[1], targetcop);
    }

    int reqalp = targetalp - alp;
    int reqcop = targetcop - cop;
    
    while (alp < targetalp || cop < targetcop)
    {
        for (auto i : problems)
        {
            
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