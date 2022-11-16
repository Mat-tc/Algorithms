#include <bits/stdc++.h>
using namespace std;

vector<int> v;

bool compare(int a, int b)
{
    return a > b;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
	
    int N;
    int n;
    cin >> N;
    

    for (int i = 0;  i < N; i++)
    {
        cin >> n;
        v.push_back(n);
    }

    sort(v.begin(),v.end(),compare);

    for (int i = 0;  i < N; i++)
    {
        cout << v[i] << "\n";
    }

	return 0;
}