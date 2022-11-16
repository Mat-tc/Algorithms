#include <bits/stdc++.h>
using namespace std;

vector<int> order;
map<int,int> m; // map은 key를 기준으로 value값을 다루기 쉽고 key 중복을 허용하지 않기 때문에 사용했음.

bool compare(pair<int,int> a, pair<int,int> b)
{
    if (a.second > b.second) // 빈도가 높다면 높은 것 먼저
        return true;
    else if (a.second == b.second) // 같다면 order벡터를 이용해서 순서가 빠른 애가 먼저
    {
        for (int i = 0; i < order.size(); i++)
        {
            if (order[i] == a.first)
                return true;
            else if (order[i] == b.first)
                return false;
        }
    }
    else
        return false;
}


int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
	
    int N;
    int a;
    int C;
    
    cin >> N;
    cin >> a;

    //입력받아서 map에 저장하고 순서 체크할 벡터도 따로 만들어줌
    for (int i = 0;  i < N; i++)
    {
        cin >> C;
        m[C]++;
        order.push_back(C);
    }

    // map을 value(빈도)기준으로 정렬하기 위해서 다른벡터에 옮김
    vector<pair<int,int>> v(m.begin(),m.end());

    sort(v.begin(),v.end(),compare); // map의 데이터들이 복사된 벡터를 정렬

    for (int i = 0;  i < v.size(); i++)
    {
       for (int j = 0; j < v[i].second; j++)
       {
            cout << v[i].first << " "; // 빈도정렬된 벡터 출력
       }
    }
	return 0;
}