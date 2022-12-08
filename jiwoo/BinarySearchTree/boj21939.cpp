#include <bits/stdc++.h>

using namespace std;
multiset<pair<int,int>> m;
map<int,int> mm;

bool cmp(const pair<int,int>& a, const pair<int,int>& b) {
	if (a.second == b.second) return a.first < b.first;
	return a.second < b.second;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N;
    cin >> N;
    while (N--)
    {
        int P, L;
        cin >> P >> L;
        m.insert({L,P});
        mm.insert({P,L});
    }
    int M;
    cin >> M;

    while (M--)
    {
        string cmd;
        int P, L, x;
        cin >> cmd;
        if (cmd == "recommend")
        {
            cin >> x;
            if (x == 1) // 가장 어려운 문제의 번호 출력 중복있으면 문제번호 큰 순
            {
                cout << prev(m.end())->second << "\n";
            }
            else // 가장 쉬운 문제의 번호 출력 중복있으면 문제번호 작은 순
            {
                cout << m.begin()->second << "\n";
            }
        }
        if (cmd == "add")
        {
            cin >> P >> L;
            m.insert({L,P});
            mm.insert({P,L});
        }
        if (cmd == "solved")
        {
            cin >> P;
            m.erase({mm[P],P});
            mm.erase(P);
        }
    }

    return 0;
}