#include <bits/stdc++.h>

using namespace std;

int N;
vector<int> v;
int visit[9];
int n[9];
int result;

void dfs() {
	if (v.size() == N) // 탈출조건 
    {
		int tmp = 0;
		for (int i = 0; i < N-1; i++) {
			tmp += abs(v[i + 1] - v[i]); 
		}
		result = max(result, tmp);
		return;
	}

	for (int i = 0; i < N; i++) // 백트래킹 재귀호출구조
    {
		if (!visit[i]) {
			visit[i] = 1; // i번 인덱스에 있는 값은 방문했다고 표시
			v.push_back(n[i]); //벡터에 그 값을 넣어놓음
			dfs(); // 재귀호출
			v.pop_back();
			visit[i] = 0;
		}
	}
}
// 처음엔 20 1 15 8 4 10 순서로 들어가서 최댓값갱신
// 20 1 15 8 10 4
// 20 1 15 4 8 10 이런식으로 들어가서 모든 경우의 수 탐색

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

	cin >> N; // N개 입력받고
	for (int i = 0; i < N; i++) {
		cin >> n[i]; // 받아서 배열에 저장
	}

	dfs();

	cout << result << "\n";
}