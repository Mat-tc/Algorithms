#include <bits/stdc++.h>

using namespace std;
//vector<vector<int>> v;

// 부모 노드를 가져옴 
int getParent(int set[], int x) {
	if(set[x] == x) return x;
	return set[x] = getParent(set, set[x]);
} 

// 부모 노드를 병합 
void unionParent(int set[], int a, int b) {
	a = getParent(set, a);
	b = getParent(set, b);
	// 더 숫자가 작은 부모로 병합
	if(a < b) set[b] = a;
	else set[a] = b;
} 

// 같은 부모를 가지는지 확인
int find(int set[], int a, int b) {
	a = getParent(set, a);
	b = getParent(set, b);
	if(a == b) return 1;
	else return 0;
}
 

// 간선 클래스 선언 
class Edge {
public:
	int node[2];
	long long distance;
	Edge(int a, int b, long long distance) {
		this->node[0] = a;
		this->node[1] = b;
		this->distance = distance;
	}
	bool operator <(Edge &edge) {
		return this->distance < edge.distance;
	}
};

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N;
    cin >> N;
    vector<Edge> v;

    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N; j++)
        {
            long long a;
            cin >> a;
            if (i >= j) continue;
            v.push_back(Edge(i, j, a));
        }
    }

    sort(v.begin(), v.end());

    // 각 정점이 포함된 그래프가 어디인지 저장 
	int set[N];
	for(int i = 0; i < N; i++) {
		set[i] = i;
	}
	
	// 거리의 합을 0으로 초기화 
	long long sum = 0;
	for(int i = 0; i < v.size(); i++) {
		// 동일한 부모를 가리키지 않는 경우, 즉 사이클이 발생하지 않을 때만 선택 
		if(!find(set, v[i].node[0], v[i].node[1])) {
			sum += v[i].distance; 
			unionParent(set, v[i].node[0], v[i].node[1]);
		}
	}

    cout << sum;

    return 0;
}