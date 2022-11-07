#include <bits/stdc++.h>

using namespace std;

void hanoi(int n, int start, int to, int work)
{
    if (n == 1)
        cout << start << " " << to << "\n";
    else
    {
        hanoi(n - 1, start, work, to);
        cout << start << " " << to << "\n";
        hanoi(n - 1, work, to, start);
    }
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int num;
    cin >> num;
    cout << (1 << num) - 1 << "\n"; // 2의 n승은 shift연산으로 구할 수 있음 pow는 큰 수 오차발생

    hanoi(num, 1, 3, 2);
}