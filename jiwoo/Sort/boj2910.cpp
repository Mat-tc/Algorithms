#include <bits/stdc++.h>
using namespace std;

vector<int> order;
map<int,int> m;

bool compare(pair<int,int> a, pair<int,int> b)
{
    if (a.second > b.second)
        return true;
    else if (a.second == b.second)
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
    for (int i = 0;  i < N; i++)
    {
        cin >> C;
        m[C]++;
        order.push_back(C);
    }

    vector<pair<int,int>> v(m.begin(),m.end());

    sort(v.begin(),v.end(),compare);

    for (int i = 0;  i < v.size(); i++)
    {
       for (int j = 0; j < v[i].second; j++)
       {
            cout << v[i].first << " ";
       }
    }
	return 0;
}