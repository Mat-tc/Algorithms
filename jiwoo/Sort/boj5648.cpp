#include <bits/stdc++.h>
using namespace std;

vector<string> v;

bool compare(string a, string b)
{
    if (a.size() < b.size())
        return true;
    else if (a.size() == b.size())
        return a < b;
    else
        return false;
}

void reverse()
{
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

    reverse();
    sort(v.begin(),v.end(),compare);

    for (int i = 0;  i < N; i++)
    {
       cout << v[i] << "\n";
    }

	return 0;
}