#include <bits/stdc++.h>

using namespace std;

int N;
int member[21];
int n[21][21];
int result = 10000;

void dfs(int idx, int cnt) {
	if (cnt == N/2) { // 탈출조건
		int start_stats = 0; 
        int link_stats = 0;
        vector<int> start;
        vector<int> link;
        for (int i = 1; i <= N; i++)
        {
            if (member[i] == 1)
            {
                start.push_back(i);
            }
            else
            {
                link.push_back(i);
            }
        }
        for (int i = 0; i < N/2; i++)
        {
            for (int j = 0; j < N/2; j++)
            {
                start_stats += n[start[i]][start[j]];
                link_stats += n[link[i]][link[j]];
            }
        }
		result = min(result, abs(start_stats-link_stats));
		return;
	}
	for (int i = idx; i <= N; i++) // 백트래킹 재귀호출구조 idx로 안하면 
                                 //ex) 1번 2번이 같은 팀 됐을 경우, 2번 1번이 같은 팀 됐을 경우 필요없는 검사
    {
		if (member[i] == 0) {
			member[i] = 1;
			dfs(i, cnt+1);
			member[i] = 0;
		}
	}
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    // 입력받아서 배열에 저장
	cin >> N; 
    for (int i = 1; i <= N; i++)
    {
        for (int j = 1; j <= N; j++)
        {
            cin >> n[i][j];
        }
    }

	dfs(1,0);

	cout << result << "\n";
}