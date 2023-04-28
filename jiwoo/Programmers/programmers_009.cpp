#include <bits/stdc++.h>
// 숫자카드 나누기
using namespace std;

int solution(vector<int> arrayA, vector<int> arrayB)
{
    int answer = 0;
    int size = arrayA.size();
    int a = max(arrayA[0], arrayB[0]);
    int flag = 0; // 1은 조건 1 2는 조건 2

    while (a)
    {
        for (int i = 0; i < size; i++)
        {
            if (i == 0)
            {
                if (arrayA[i] % a == 0 && arrayB[i] % a != 0)
                {
                    flag = 1;
                    if (size == 1) return a;
                    continue;
                }
                else if (arrayA[i] % a != 0 && arrayB[i] % a == 0)
                {
                    flag = 2;
                    if (size == 1) return a;
                    continue;
                }
                else
                {
                    break;
                }
            }
            if ((arrayA[i] % a == 0 && arrayB[i] % a != 0) && flag == 1)
            {
                if (i == size - 1) return a;
                continue;
            }
            else if ((arrayA[i] % a != 0 && arrayB[i] % a == 0) && flag == 2)
            {
                if (i == size - 1) return a;
                continue;
            }
            else break;
        }
        a--;
    }
    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    return 0;
}