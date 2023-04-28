#include <bits/stdc++.h>

using namespace std;

int n, q;
vector<string> queryType;
vector<int> students1;
vector<int> students2;
int parent[100001];

int getParent(int x)
{
    if (parent[x] == x)
        return x;
    return parent[x] = getParent(parent[x]);
}

int unionParent(int a, int b)
{
    a = getParent(a);
    b = getParent(b);
    if (a < b)
        parent[b] = a;
    else
        parent[a] = b;
}

int findParent(int a, int b)
{
    a = getParent(a);
    b = getParent(b);
    if (a == b)
        return 1;
    return 0;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> n >> q;

    for (int i = 0; i < n; i++)
    {
        parent[i] = i;
    }

    for (int i = 0; i < q; i++)
    {
        string s;
        cin >> s;
        queryType.push_back(s);
    }

    for (int i = 0; i < q; i++)
    {
        int a;
        cin >> a;
        students1.push_back(a);
    }

    for (int i = 0; i < q; i++)
    {
        int a;
        cin >> a;
        students2.push_back(a);
    }

    for (int i = 0; i < q; i++)
    {
        if (queryType[i] == "Friend")
        {
            unionParent(students1[i], students2[i]);
        }
        else if (queryType[i] == "Total")
        {
            int students1_parent = getParent(students1[i]);
            int students2_parent = getParent(students2[i]);
            int cnt1 = 0;
            int cnt2 = 0;
            if (findParent(students1[i], students2[i]))
            {
                for (int i = 0; i < n; i++)
                {
                    if (parent[i] == students1_parent)
                        cnt1++;
                }
            }
            else
            {
                for (int i = 0; i < n; i++)
                {
                    if (parent[i] == students1_parent)
                        cnt1++;
                }
                for (int i = 0; i < n; i++)
                {
                    if (parent[i] == students2_parent)
                        cnt2++;
                }
            }
            cout << cnt1 + cnt2 << "\n";
        }
    }

    return 0;
}
