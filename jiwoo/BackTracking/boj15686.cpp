#include <bits/stdc++.h>

#define INF 900000

using namespace std;

int Answer = 200000000;

vector<pair<int, int>> homes;
vector<pair<int, int>> chicks;
vector<pair<int, int>> combv;

bool Select[13];
int N, M;
int chickencnt = 0;

int Calc()
{
    int total = 0;
    for (int i = 0; i < homes.size(); i++)
    {
        int dist = 200000000;
        int x = homes[i].first; // 집의 x좌표
        int y = homes[i].second; // 집의 y좌표
        for (int j = 0; j < combv.size(); j++) // 지금까지 저장해놓은 치킨 집 경우의 수 벡터
        {
            int xx = combv[j].first; // combv의 x좌표
            int yy = combv[j].second; // comv의 y좌표 
            int d = abs(xx - x) + abs(yy - y); // 치킨거리 계산
            dist = min(dist, d); // 집에서 가장 짧은 거리에 있는 치킨 집 확인
        }
        total = total + dist; // 치킨거리를 총합에 더함
    }
    return total;
}

void Comb(int idx, int cnt)
{
    if (cnt == M) // 종료 조건 : 카운트가 M개일 때 Calc()로 보내서 도시의 치킨거리를 계산
    {
        Answer = min(Answer, Calc()); // 지금까지 알아낸 치킨거리보다 좋은 수가 있다면 그걸로 저장
        return;
    }
    else
    {
        for (int i = idx; i < chickencnt; i++) // 치킨 집 돌면서 모든 경우의 수 확인
        {
            if (Select[i]) // 이미 고른 거면 패스
                continue;
            Select[i] = true;
            combv.push_back(chicks[i]); // 조합에 넣고
            Comb(i, cnt + 1);
            Select[i] = false;
            combv.pop_back();
        }
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> N >> M;
    int a;

    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N; j++)
        {
            cin >> a;
            if (a == 1)
            {
                homes.push_back(make_pair(i, j)); // 1이면 위치를 집 벡터에 저장
            }
            if (a == 2)
            {
                chicks.push_back(make_pair(i, j)); // 2면 위치를 치킨 벡터에 저장
                chickencnt++; // 총 치킨집 카운트
            }
        }
    }

    Comb(0, 0);

    cout << Answer;

    return 0;
}