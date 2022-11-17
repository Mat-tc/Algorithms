#include <bits/stdc++.h>

using namespace std;

bool cmp(pair<int, int> a, pair<int, int> b)
{
    return a.first < b.first;
}

// ex) 1월 3일은 365일 중 3일째되는 날임.
int days(int month, int day, int left)
{
    if (month == 1)
        return left + day;
    else if (month == 2)
        return days(month - 1, 0, 31 + left + day);
    else if (month == 3)
        return days(month - 1, 0, 28 + left + day);
    else if (month == 4)
        return days(month - 1, 0, 31 + left + day);
    else if (month == 5)
        return days(month - 1, 0, 30 + left + day);
    else if (month == 6)
        return days(month - 1, 0, 31 + left + day);
    else if (month == 7)
        return days(month - 1, 0, 30 + left + day);
    else if (month == 8)
        return days(month - 1, 0, 31 + left + day);
    else if (month == 9)
        return days(month - 1, 0, 31 + left + day);
    else if (month == 10)
        return days(month - 1, 0, 30 + left + day);
    else if (month == 11)
        return days(month - 1, 0, 31 + left + day);
    else if (month == 12)
        return days(month - 1, 0, 30 + left + day);
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    vector<int> v_30(30);
    vector<int> v_31(31);
    vector<int> v_28(28);
    vector<pair<int, int>> v;

    int from = 60; // 최소 이 날짜 전에는 펴야함 기본값 3월 1일.
    int to = 0; // 그 꽃이 언제까지 피어있는지

    int ans = 0;
    int N;
    int a;
    cin >> N;
    
    for (int i = 0; i < N; i++)
    {
        vector<int> period;
        for (int j = 0; j < 4; j++)
        {
            cin >> a;
            period.push_back(a);
        }
        // 기간을 입력받아서 days함수로 보내면 'OO월 OO일'이 'OO일'로 계산되어 나옴.
        // 언제부터 언제까지 피어있는지를 v(int,int) 형식으로 저장 앞이 from 뒤가 to
        v.push_back(pair<int, int>(days(period[0], period[1], 0), (days(period[2], period[3], 0))));
    }
    // from을 기준으로 오름차순 정렬을 함
    sort(v.begin(), v.end(), cmp);
    
    int cnt = N;
    while (cnt-- && to < 335) // N번 이상 돌면 답이 없는 경우 || 11월 30일 이후에 지는 꽃을 찾은 경우
    {
        for (int i = 0; i < N; i++)
        {
            if (v[i].first <= from) // 처음기준 (from = 3월 1일) 전에 피는 꽃이라면
            {
                to = max(to, v[i].second); // 그 꽃의 to와 현재 to 중 큰 애를 저장
                // ex) 똑같이 3월 1일전에 피는 꽃이라면 더 늦게 지는 꽃을 선택한다는 뜻.
            }
            // 3월 1일 이후에 피는 꽃은 의미가 없으니 브레이크 || N이 끝까지 갔으면 break;
            if (v[i].first > from || i == N - 1)
            {
                // 이제 3월 1일전에 피는 꽃이 아닌 찾은 꽃이 지기전에 피는 꽃들을 확인해야하니 갱신 from값 갱신
                from = to; 
                ans++;
                break;
            }
        }
    }
    if (to < 335) // 답이 없는 경우 0 리턴
        ans = 0;
    cout << ans; // 답 출력
    return 0;
}