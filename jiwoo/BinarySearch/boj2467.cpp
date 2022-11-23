#include <bits/stdc++.h>

using namespace std;
vector<int> v;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    int N;
    cin >> N;
    for (int i = 0; i < N; i++)
    {
        int a;
        cin >> a;
        v.push_back(a);
    }
    int left = 0; // 0번이 가장 작은 값 + 움직일 포인터
    int right = N-1; // 마지막이 가장 큰 값 + 움직일 포인터
    int leftans = left; // 지금까지 제일 적합한 값을 저장할 변수
    int rightans = right;

    while (left < right)
    {
        int lr = v[left] + v[right];
        int lrans = v[leftans] + v[rightans];
        if (lr == 0) // 0이면 바로 빠져나오기
        {
            leftans = left;
            rightans = right;
            break;
        }
        if (lr > 0) // 만약 left와 right를 더한 값이 0보다 크다면 양수쪽이 절대값이 더 크다는 뜻
        // 이미 배열이 정렬이 돼있다는걸 명심해야 됨
        // 즉, 오른쪽 포인터를 하나씩 줄이면서 움직여야 0에 가까워짐 ex) -5 1 3 10 이라면 왼쪽포인터를 조작해서는 절댓값이 작아질 수 없음.
        {
            if (abs(lrans) > abs(lr)) // 전에 찾은 결과보다 0에 가깝다면
            {
                leftans = left; // 그 변수값 갱신
                rightans = right;
                right--; // right를 조작해서 혹시나 더 좋은 결과가 있을지 확인
            }
            else
            {
                right--;
            }
        }
        else // 반대로 음수쪽이 큰 경우라면 right를 조작해서는 절댓값이 이전보다 커지기만 하기때문에 left조작
        {
            if (abs(lrans) > abs(lr))
            {
                leftans = left; // 갱신
                rightans = right;
                left++;
            }
            else
            {
                left++;
            }
        }
    }
    cout << v[leftans] << " " << v[rightans]; // 출력
    return 0;
}