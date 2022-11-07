#include <bits/stdc++.h>
using namespace std;

int* A;
int* tmp;
int N, cnt = 0, K = 0, result = -1;

void merge(int A[], int p, int q, int r) // 문제 알고리즘 그대로 구현
{
    int i = p, j = q + 1, t = 1;
  
    while (i <= q && j <= r)
    {
        if (A[i] <= A[j])
            tmp[t++] = A[i++];
        else
            tmp[t++] = A[j++];
    }
    while (i <= q) 
        tmp[t++] = A[i++];

    while (j <= r) 
        tmp[t++] = A[j++];

    i = p, t = 1;
    while (i <= r) 
    {
        A[i++] = tmp[t++];
        cnt++;
        if (cnt == K)
        {
            result = A[i - 1];
            break;
        }
    }
}

void merge_sort(int A[], int p, int r) // 문제 알고리즘 그대로 구현
{
    if (p < r)
    {
        int q = (p + r) / 2;
        merge_sort(A, p, q);
        merge_sort(A, q + 1, r);
        merge(A, p, q, r);
    }
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> N >> K;

    A = new int[N + 1];
    tmp = new int[N + 1];

    for (int i = 0; i < N; i++)
        cin >> A[i];

    merge_sort(A, 0, N - 1);

    cout << result;

    delete[] A;
    delete[] tmp;

    return 0;
}