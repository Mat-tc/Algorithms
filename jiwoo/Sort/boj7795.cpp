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
        vector<int> A; // A의 크기들이 담긴 벡터
        vector<int> B; // B의 크기들이 담긴 벡터
        
        int cnt = 0; // 쌍의 개수 저장할 변수

        // 입력받아서 벡터에 크기 저장
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

        // 내림차순으로 정렬
        sort(A.begin(), A.end(), compare);
        sort(B.begin(), B.end(), compare);

        // for문 돌면서 A[i]가 B[j]보다 커지는 기점으로 나머지는 다 A가 크다는 거니까 그만큼 cnt 올리고 브레이크
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

        // cnt 출력
        cout << cnt << "\n";
    }

    return 0;
}