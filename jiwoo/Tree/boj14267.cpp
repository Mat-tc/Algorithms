#include <bits/stdc++.h>

using namespace std;

vector <int> vec[100001];
int comp[100001] = {0};
int n,m;

void dfs(int a)
{
    for (int i = 0; i < vec[a].size(); i++) {
		comp[vec[a][i]] += comp[a]; // vec[a][i]는 a의 직속후배중 i번째 사람을 뜻함 comp[~~]는 a의 직속후배중 i번째 사람의 칭찬수치
        // 즉 직속후배의 칭찬수치는 본인의 칭찬수치에 직속상사의 칭찬수치를 더해준것
        dfs(vec[a][i]); // dfs돌리기
	}
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n,m;
    cin >> n >> m;

    for (int i = 1; i <= n; i++)
    {
        int a;
        cin >> a;
        if (i == 1) continue;
		vec[a].push_back(i); // a의 직속후배는 i임.
    }

    for (int i = 0; i < m; i++)
    {
        int j, w;
        cin >> j >> w; // 칭찬받은사람 번호, 칭찬수치
        comp[j] = comp[j] + w;
    }

    dfs(1); 

    for (int i = 1; i <= n; i++)
    {
        cout << comp[i] << " ";
    }

    return 0;
}