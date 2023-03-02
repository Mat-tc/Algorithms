#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int x, y;
    int maxnum = 0;
    int maxtmp = 0;
    int array[101] = {300001};
    int ans = 0;
    cin >> x; // 몇 장
    cin >> y; // target
    
    for (int i = 0; i < x; i++)
    {
        cin >> array[i]; // 바닥에 깔려있는 카드들을 입력받아 배열에 저장
    }
    sort(array, array + x); // 정렬
    
    for (int i = 0; i < x - 2; i++) // 3장의 카드를 골라야 되니까 
    {
        for (int j = i+1; j < x - 1; j++)
        {
            for (int k = j+1; k < x; k++)
            {
                if (array[i] + array[j] + array[k] > y) // y를 넘으면 그 조합은 X
                {
                    break;
                }
                else if (maxnum == y) // y와 같으면 Best 바로 출력
                {
                    cout << maxnum;
                    return 0;
                }
                else
                {
                    if (ans < array[i] + array[j] + array[k])
                    {
                        ans = array[i] + array[j] + array[k]; // max값 갱신
                    }
                }
            }
        }
    }
    cout << ans;
    return 0;
}