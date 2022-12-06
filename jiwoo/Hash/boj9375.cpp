#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int testcase;
    cin >> testcase;


    for (int i = 0; i < testcase; i++)
    {
        int n;
        map<string,int> m;
        cin >> n;
        for (int i = 0; i < n; i++)
        {
            string name, category;
            cin >> name >> category;

            if (m.find(category) == m.end())
            {
                m.insert({category,1});
            }
            else
            {
                m[category]++;
            }
        }

        int cnt = 1;
        for (auto i : m)
        {
            cnt = cnt * (i.second + 1);
        }
        cnt--;
        cout << cnt << "\n";
    }

    return 0;
}