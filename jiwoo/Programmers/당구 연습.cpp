#include <bits/stdc++.h>

using namespace std;

vector<int> solution(int m, int n, int startX, int startY, vector<vector<int>> balls)
{
    vector<int> answer;
    for (int k = 0; k < balls.size(); k++)
    {
        int mindist = 987654321;

        int a, b, tmp;

        if (startY != balls[k][1] || startX < balls[k][0]) // 왼쪽 벽
        {
            a = startX + balls[k][0];
            b = abs(startY - balls[k][1]);
            tmp = pow(a, 2) + pow(b, 2);

            mindist = min(tmp, mindist);
        }

        if (startX != balls[k][0] || startY < balls[k][1]) // 아래 벽
        {
            a = abs(startX - balls[k][0]);
            b = startY + balls[k][1];
            tmp = pow(a, 2) + pow(b, 2);

            mindist = min(tmp, mindist);
        }

        if (startY != balls[k][1] || startX > balls[k][0]) // 오른쪽 벽
        {
            a = (m - startX) + (m - balls[k][0]);
            b = abs(startY - balls[k][1]);
            tmp = pow(a, 2) + pow(b, 2);

            mindist = min(tmp, mindist);
        }

        if (startX != balls[k][0] || startY > balls[k][1]) // 위 벽
        {
            a = abs(startX - balls[k][0]);
            b = (n - startY) + (n - balls[k][1]);
            tmp = pow(a, 2) + pow(b, 2);

            mindist = min(tmp, mindist);
        }

        answer.push_back(mindist);
    }

    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    return 0;
}