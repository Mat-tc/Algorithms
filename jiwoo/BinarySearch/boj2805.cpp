#include <bits/stdc++.h>

using namespace std;

vector<int> h;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    int N, M;
    int a;
    int ans = 0;
    cin >> N >> M;
    
    for (int i = 0; i < N; i++)
    {
        cin >> a; 
        h.push_back(a); // 배열에 넣어놓기
    }
    int left = 0; // 가장 작은 나무의 높이는 0
    int right = *max_element(h.begin(),h.end()); // 가장 큰 나무의 높이

    while (left <= right) 
    {
        int height = (left + right) / 2; // 이분탐색
        long long tmp = 0; // int로 하면 오버플로우발생할 수 있음
        for (int i = 0; i < N; i++)
        {
            if (h[i] > height) // 내가 자를 높이보다 나무가 크면
                tmp = tmp + (h[i] - height); // 그 나무를 height만큼 잘라냈을 때 남은 나무의 길이를 저장
        }
        if (tmp >= M) // 내가 가져가야할 나무의 길이 이상이라면 우선 조건은 충족함 그 값을 ans에 저장
        {
            ans = height;
            left = height + 1; // 하지만 혹여나 덜베도 될지 확인하기 위해 범위 좁혀보기
        }
        else
        {
            right = height - 1; // 내가 필요한 나무길이만큼 안나온거면 height를 더 작게 해줘야됨
            // left는 이미 초기값이 0이어서 left를 조작해서 제일 작을 경우는 확인했었음
            // 더 이상 height를 작게해줄 수 있는 방법은 right를 작게해주는 것밖에 없음
        }
    }

    cout << ans;

    return 0;
}