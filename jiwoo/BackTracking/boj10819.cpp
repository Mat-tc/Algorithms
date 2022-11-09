#include <bits/stdc++.h>

using namespace std;

int N;
vector<int> v;
int visit[9];
int n[9];
int result;

void dfs() {
	if (v.size() == N) {
		int tmp = 0;
		for (int i = 0; i < N-1; i++) {
			tmp += abs(v[i + 1] - v[i]);
		}
		result = max(result, tmp);
		return;
	}
	for (int i = 0; i < N; i++) {
		if (!visit[i]) {
			visit[i] = 1;
			v.push_back(n[i]);
			dfs();
			v.pop_back();
			visit[i] = 0;
		}
	}
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

	cin >> N;
	for (int i = 0; i < N; i++) {
		cin >> n[i];
	}

	dfs();

	cout << result << "\n";
}