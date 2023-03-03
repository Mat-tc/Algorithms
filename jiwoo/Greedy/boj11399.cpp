#include <bits/stdc++.h>

using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    vector<int> v;
    int N;
    int a;
    int tmp = 0;
    int ans = 0;
    cin >> N;
    for (int i = 0; i < N; i++)
    {
        cin >> a;
        v.push_back(a);
    }
    while(v.size())
    {
        tmp = tmp + *min_element(v.begin(),v.end());
        ans = ans + tmp;
        v.erase(min_element(v.begin(),v.end()));
    }

    cout << ans;
    return 0;
}