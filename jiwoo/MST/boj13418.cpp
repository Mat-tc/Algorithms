#include <bits/stdc++.h>

using namespace std;

// 부모 노드를 가져옴
int getParent(int set[], int x)
{
    if (set[x] == x)
        return x;
    return set[x] = getParent(set, set[x]);
}

// 부모 노드를 병합
void unionParent(int set[], int a, int b)
{
    a = getParent(set, a);
    b = getParent(set, b);
    // 더 루트 숫자가 작은 부모로 병합
    if (a < b)
        set[b] = a;
    else
        set[a] = b;
}

// 같은 부모를 가지는지 확인
int find(int set[], int a, int b)
{
    a = getParent(set, a);
    b = getParent(set, b);
    if (a == b)
        return 1;
    else
        return 0;
}

// 간선 클래스 선언
class Edge
{
public:
    int node[2];
    int distance;
    Edge(int a, int b, int distance)
    {
        this->node[0] = a;
        this->node[1] = b;
        this->distance = distance;
    }
    bool operator <(Edge &edge)
    {
        return this->distance < edge.distance;
    }
};

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N, M;

    vector<Edge> v1;
    vector<Edge> v2;

    cin >> N >> M;
    for (int i = 0; i <= M; i++)
    {
        int A, B, C;
        cin >> A >> B >> C;
        v1.push_back(Edge(A, B, C)); // 0이 오르막
        if (C == 0)
            C = 1;
        else if (C == 1)
            C = 0;
        v2.push_back(Edge(A, B, C)); // 1이 오르막
    }

    sort(v1.begin(), v1.end());
    sort(v2.begin(), v2.end());

    // 각 정점이 포함된 그래프의 루트초기화
    int set1[N+1]; // << 씨ㅡ발
    int set2[N+1];
    for (int i = 0; i <= N; i++)
    {
        set1[i] = i;
        set2[i] = i;
    }

    int hardcnt = 0;
    int easycnt = 0;
    for (int i = 0; i < v1.size(); i++)
    {
        // 동일한 부모를 가리키지 않는 경우, 즉 사이클이 발생하지 않을 때만 선택
        if (!find(set1, v1[i].node[0], v1[i].node[1]))
        {
            if (v1[i].distance == 0) // 오르막길이면 카운트++
            {
                hardcnt++;
            }
            unionParent(set1, v1[i].node[0], v1[i].node[1]);
        }

        if (!find(set2, v2[i].node[0], v2[i].node[1]))
        {
            if (v2[i].distance == 1)
            {
                easycnt++;
            }
            unionParent(set2, v2[i].node[0], v2[i].node[1]);
        }
    }
    cout << pow(hardcnt,2) - pow(easycnt,2) << "\n";

    return 0;
}