#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N, Q;
    long long pos = 0;
    cin >> N >> Q;
    vector<int> A;
    map<int,int> m;

    while (N--)
    {
        int a;
        cin >> a;
        A.push_back(a); // 1이 명소 0은 X
    }

    int count = 0;
    for (int i = 0; i < A.size(); i++)
    {
        
        if (A[i] == 0)
        {
            m.insert({i,-1});
            count++;
        }
        else
        {
            int back = i - 1; // 뒤로 돌아가기 위한 변수
            int ct = 0;
            m.insert({i,0});
            while (ct != count)
            {
                ct++;
                m[back] = ct;
                back--;
            }
            count = 0;
        }
        if (i == A.size()-1 && count != A.size()-1)
        {
            int ct = m[i] + 1;
            while (A[i] == 0)
            {
                m[i] = ct;
                ct++;
                i--;
            }
            break;
        }
    }

    while (Q--)
    {
        int a;
        cin >> a;
        if (a == 1)
        {
            int i;
            cin >> i;
            if (A[i-1] == 1)
            {
                A[i-1] = 0;
            }
            else
            {
                A[i-1] = 1;
            }
        }
        if (a == 2)
        {
            long long x;
            cin >> x;
            pos = pos + x;
            if (pos >= A.size())
            {
                pos = pos % A.size();
            }
        }
        if (a == 3)
        {            
            cout << m[pos] << "\n";
        }
    }

    return 0;
}