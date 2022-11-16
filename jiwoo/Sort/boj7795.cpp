#include <bits/stdc++.h>
using namespace std;

bool compare(int a,int b)
{
    return a > b;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int T;
    int N, M;
    int q;

    cin >> T;
    cin >> N >> M;

    while (T--)
    {
        vector<int> A;
        vector<int> B;
        
        int cnt = 0;
        for (int i = 0; i < N; i++)
        {
            cin >> q;
            A.push_back(q);
        }
        for (int i = 0; i < M; i++)
        {
            cin >> q;
            B.push_back(q);
        }
        sort(A.begin(), A.end(), compare);
        sort(B.begin(), B.end(), compare);
        for (int i = 0; i < N; i++)
        {
            for (int j = 0; j < M; j++)
            {
                if (A[i] > B[j])
                {
                    cnt = cnt + (M - j);
                    break;
                }
            }
        }
        cout << cnt << "\n";
    }

    return 0;
}