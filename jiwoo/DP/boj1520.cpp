#include <bits/stdc++.h>

using namespace std;

vector<vector<int>> m;

int visited[501][501];
int dp[501][501]; // dp는 한 좌표에 도착할 수 있는 누적 경로수를 뜻함.
int dx[4] = {-1,1,0,0};
int dy[4] = {0,0,-1,1};

int M, N, H;

void rec(int x, int y)
{
    if (visited[x][y] != 0) return ;
    visited[x][y] = 1;
    for (int i = 0; i < 4; i++)
    {
        int xx = dx[i] + x;
        int yy = dy[i] + y;
        if (xx >= 0 && xx < M && yy >= 0 && yy < N) // 상하좌우가 맵 범위에 맞는지 확인
        {
            if (m[xx][yy] > m[x][y]) // [xx][yy]는 상하좌우중 하나일텐데 그게 [x][y]보다 커야 내리막길임
            {
                rec(xx,yy); // [xx][yy]의 dp값을 [x][y]의 dp값에 더해주고 싶은데 그걸 알기위해선 [xx][yy]를 재귀 돌려봐야됨
                dp[x][y] = dp[x][y] + dp[xx][yy]; // 알아낸 후 더해줌
            }
        }
    }
}
// 큰 알고리즘은 다음과 같음.
// 맵에서 x,y라는 좌표까지 올 수 있는 방법은 그 좌표의 상하좌우좌표의 방법수를 합친 것과 같음
// 물론 상하좌우의 값들 중 (x,y)값보다 커야 (x,y)로 이동하는게 내리막길이 되니까 이 조건을 만족하는 것들만 카운트
int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    H = 0;
    cin >> M >> N;
    for (int i = 0; i < M; i++)
    {
        vector<int> n;
        for (int j = 0; j < N; j++)
        {
            int a;
            cin >> a;
            n.push_back(a);
        }
        m.push_back(n);
    }
    dp[0][0] = 1;
    rec(M-1,N-1);
    cout << dp[M-1][N-1];
    return 0;
}
