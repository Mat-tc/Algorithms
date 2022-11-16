#include <bits/stdc++.h>
using namespace std;

vector<string> v;

bool compare(string a, string b)
{
    if (a.size() < b.size()) // 길이가 짧은 애가 낮은 숫자임
        return true;
    else if (a.size() == b.size()) // 길이가 같을 때 string 그대로 비교하면 알아서 오름차순으로 정렬됨
        return a < b;
    else
        return false;
}

void reverse()
{
    // 문자열 뒤집기
    for (int i = 0; i < v.size(); i++)
    {
        int end = v[i].size()-1;
        char tmp;
        for (int j = 0 ; j < v[i].size() / 2; j++)
        {
            tmp = v[i][j];
            v[i][j] = v[i][end];
            v[i][end] = tmp;
            end--;
        }
        // 만약 0이 맨 앞에 오면 없애줌
        while (v[i][0] == '0')
        {
            v[i].erase(v[i].begin());
        }
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
	
    int N;
    string s;
    cin >> N;

    for (int i = 0;  i < N; i++)
    {
        cin >> s;
        v.push_back(s);
    }

    reverse(); // 문자열 뒤집고
    sort(v.begin(),v.end(),compare); // 조건에 맞게 정렬

    for (int i = 0;  i < N; i++)
    {
       cout << v[i] << "\n";
    }

	return 0;
}