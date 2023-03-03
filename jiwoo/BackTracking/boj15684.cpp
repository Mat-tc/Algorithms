#include <bits/stdc++.h>

using namespace std;

int N, M, H;
int ans = 2000000000;
bool drawn[12][30];

bool Play()
{
    for (int i = 1; i < N; i++)
    {
        int pos = i;
        for (int j = 1; j <= H; j++)
        {
            if (drawn[pos - 1][j])
            {
                pos--;
            }
            else if (drawn[pos][j])
            {
                pos++;
            }
        }
        if (i != pos) // ex) 1번은 1번으로 와야됨 -> 그게 안됐으면 return false
            return false;
    }
    return true; //다 잘됐으면 true 리턴
}

void Draw(int idx, int cnt)
{
    if (cnt > 3) // 3 초과면 리턴
    {
        return;
    }
    if (Play()) // true 리턴됐으면 우선 조건에는 부합했다는 뜻
    {
        ans = min(ans, cnt); // 최소 카운트를 저장
        return;
    }
    for (int i = idx; i <= H; i++) // 높이만큼 돌면서
    {
        for (int j = 1; j < N; j++) // N-1까지만 확인하면 N은 확인안해도 됨
        {
            if (drawn[j][i]) // 이미 그려져 있다면 패스
                continue;
            if (drawn[j-1][i]) // 바로 왼쪽에 그려져있으면 그 자리는 가로선 못그으니까 패스
                continue;
            if (drawn[j+1][i]) // 오른쪽도 동일한 이유로 패스
                continue;

            drawn[j][i] = true; // 그렸다고 drawn에 추가하고
            Draw(i, cnt + 1); // 카운트는 1증가, 현재 높이부터 Draw진행하면 되니까 높이 매개변수는 i를 줌
            drawn[j][i] = false; 
        }
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    // 기본 알고리즘은 이러함 -> 가로선 놓을 수 있는 모든 경우의 수를 탐색할 건데 3을 초과하면 어차피 -1이니까
    // 3까지만 확인
    // 경우의 수마다 사다리게임을 진행해서 조건에 부합하는지 확인

    cin >> N >> M >> H;
    if (M == 0)
    {
        cout << 0;
        return 0;
    }

    for (int i = 0; i < M; i++)
    {
        int a, b;
        cin >> a >> b;
        drawn[b][a] = true;
    }

    Draw(1, 0);

    if (ans == 2000000000)
        cout << -1;
    else
        cout << ans;

    return 0;
}