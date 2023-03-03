/*#include <bits/stdc++.h>

using namespace std;

#define X first
#define Y second

int vis[100001];

int n = 100001;


int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    queue<pair<int, int>> Q;
    int sec = 0;
    int N;
    int K;

    cin >> N;
    cin >> K;
    
    if (N == K)
    {
        cout << 0;
        return 0;
    }
    Q.push({N, 0});
    while (!Q.empty())
    {
        int cur = Q.front().X;
        int cursec = Q.front().Y;
        Q.pop();
        int back = cur - 1;
        int front = cur + 1;
        int tp = cur * 2;
        if (back == K || front == K || tp == K)
        {
            cout << cursec + 1;
            return 0;
        }
        if (back > 0 && vis[back] != 1)
        {
            Q.push({ back,cursec+1});
            vis[back] = 1;
        }
        if (front < n && vis[front] != 1)
        {
            Q.push({ front,cursec+1});
            vis[front] = 1;
        }
        if (tp < n && vis[tp] != 1)
        {
            Q.push({tp,cursec+1});
            vis[tp] = 1;
        }
    }
    return 0;
}
*/