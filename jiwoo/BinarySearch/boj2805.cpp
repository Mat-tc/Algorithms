#include <bits/stdc++.h>

using namespace std;

vector<int> h;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    int N, M;
    int a;
    int ans = 0;
    cin >> N >> M;
    
    for (int i = 0; i < N; i++)
    {
        cin >> a; 
        h.push_back(a);
    }
    int left = 0;
    int right = *max_element(h.begin(),h.end());

    while (left <= right)
    {
        int height = (left + right) / 2;
        long long tmp = 0;
        for (int i = 0; i < N; i++)
        {
            if (h[i] > height)
                tmp = tmp + (h[i] - height);
        }
        if (tmp >= M)
        {
            ans = height;
            left = height + 1;
        }
        else
        {
            right = height - 1;
        }
    }

    cout << ans;

    return 0;
}