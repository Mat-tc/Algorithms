#include <bits/stdc++.h>
using namespace std;

vector<pair<int,int>> v;

bool compare(pair<int,int> a, pair<int,int> b)
{
    if (a.first == b.first) // x가 같다면 y를 기준으로 오름차순
    {
        return a.second < b.second;
    }
    else // 아니면 x 기준
    {
         return a.first < b.first;
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
	
    int N;
    int x;
    int y;
    cin >> N;

    for (int i = 0;  i < N; i++)
    {
        cin >> x >> y;
        v.push_back(pair<int,int>(x,y));
    }

    sort(v.begin(),v.end(),compare);

    for (int i = 0;  i < N; i++)
    {
        cout << v[i].first << " " << v[i].second << "\n";
    }

	return 0;
}