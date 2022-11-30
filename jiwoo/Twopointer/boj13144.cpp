#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
	
    bool visit[100001] = {false};

    int N;
    long long ans = 0;
    int end = 0;;

    vector<int> v;

    cin >> N;    
    
    for (int i = 0; i < N; i++)
    {
        int a;
        cin >> a;
        v.push_back(a);
    }

    for (int i = 0; i < N; i++)
    {
        while (end < N)
        {
            if (visit[v[end]] == true)
            {
                ans = ans + (end - i);
                break;
            }
            if (end == N - 1)
            {
                ans = ans + (end - i + 1);
                break;
            }
            visit[v[end]] = true;
            end++;
        }
        visit[v[i]] = false;
    }

    cout << ans;
   
	return 0;
}