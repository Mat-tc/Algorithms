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
    // 더 숫자가 작은 부모로 병합
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
    long double distance;
    Edge(int a, int b, long double distance)
    {
        this->node[0] = a;
        this->node[1] = b;
        this->distance = distance;
    }
    bool operator<(Edge &edge)
    {
        return this->distance < edge.distance;
    }
};

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N, M;
    vector<Edge> v;
    vector<vector<int>> pos;
    vector<vector<int>> connected;
    cin >> N >> M;

    for (int i = 0; i < N; i++)
    {
        vector<int> a;
        int x, y;
        cin >> x >> y;
        a.push_back(x);
        a.push_back(y);
        pos.push_back(a);
    }

    for (int i = 0; i < M; i++)
    {
        vector<int> a;
        int x, y;
        cin >> x >> y;
        a.push_back(x);
        a.push_back(y);
        connected.push_back(a);
    }

    for (int i = 0; i < N; i++)
    {
        for (int j = i + 1; j < N; j++)
        {
            int a, b;
            if (pos[i][0] >= pos[j][0])
            {
                a = pos[i][0] - pos[j][0];
            }
            else
            {
                a = pos[j][0] - pos[i][0];
            }
            if (pos[i][1] >= pos[j][1])
            {
                b = pos[i][1] - pos[j][1];
            }
            else
            {
                b = pos[j][1] - pos[i][1];
            }
            long long aa = (long long)a * (long long)a;
            long long bb = (long long)b * (long long)b;
            long long ab = aa + bb;
            long double len = sqrt(ab);
            v.push_back(Edge(i + 1, j + 1, len));
        }
    }
    for (int i = 0; i < M; i++)
    {
        for (int j = 0; j < N; j++)
        {
            if (connected[i][0] == v[j].node[0] && connected[i][1] == v[j].node[1])
            {
                v[j].distance = 0;
            }
            else if (connected[i][0] == v[j].node[1] && connected[i][1] == v[j].node[0])
            {
                v[j].distance = 0;
            }
        }
    }

    sort(v.begin(), v.end());

    int set[N + 1];

    for (int i = 1; i <= N; i++)
    {
        set[i] = i;
    }

    long double sum = 0;

    for (int i = 0; i < v.size(); i++)
    {
        // 동일한 부모를 가리키지 않는 경우, 즉 사이클이 발생하지 않을 때만 선택
        if (!find(set, v[i].node[0], v[i].node[1]))
        {
            sum += v[i].distance;
            unionParent(set, v[i].node[0], v[i].node[1]);
        }
    }

    cout << fixed;
    cout.precision(2);
    cout << sum;

    return 0;
}