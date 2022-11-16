#include <bits/stdc++.h>
using namespace std;

vector<pair<int, pair<int,string>>> v;

bool compare(pair<int,pair<int,string>> a,pair<int,pair<int,string>> b)
{
    if (a.second.first == b.second.first) // 나이가 같다면 등록순
    {
        return a.first < b.first;
    }

    else if (a.second.first != b.second.first) // 나이가 다르다면 나이순
    {
        return a.second.first < b.second.first;
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
	
    int N;
    int age;
    string name;
    cin >> N;

    for (int i = 0;  i < N; i++)
    {
        cin >> age >> name;
        v.push_back(pair<int,pair<int,string>>(i,pair<int, string>(age,name)));
    }

    sort(v.begin(),v.end(),compare);

    for (int i = 0;  i < N; i++)
    {
        cout << v[i].second.first << " " << v[i].second.second <<"\n";
    }

	return 0;
}