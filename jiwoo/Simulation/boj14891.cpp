#include <bits/stdc++.h>

using namespace std;

vector<deque<int>> gear(5);

int check[5]; // 방문했는지 검사
int rotation[5]; // 어디 방향으로 돌건지

void rot() // 회전하기
{
    for (int i = 1; i <= 4; i++)
    {
        if (rotation[i] == 0) // 안도는 경우
            continue;
        if (rotation[i] == 1) // 시계방향으로 도는 경우
        {
            int tmp = gear[i].back();
            gear[i].pop_back();
            gear[i].push_front(tmp);
        }
        else // 반시계방향으로 도는 경우
        {
            int tmp = gear[i].front();
            gear[i].pop_front();
            gear[i].push_back(tmp);
        }
    }
}

void rotate(int num, int dir)
{
    rotation[num] = dir;
    check[num] = 1;

    if (num - 1 >= 1 && check[num-1] == 0) // 내 왼쪽에 톱니바퀴가 있고 그 곳에 방문하지 않은 경우
    {
        if (dir == 0) // 안 도는 경우
        {
            rotate(num-1, 0);
        }
        else if (gear[num][6] == gear[num-1][2]) // 숫자가 같은 경우
        {
            rotate(num-1,0);
        }
        else //(gear[num][6] != gear[num-1][2]) 숫자가 다른 경우
        {
            rotate(num-1,-dir); // 반대방향으로 재귀
        }
    }
    if (num + 1 <= 4 && check[num+1] == 0) // 오른쪽에 톱니바퀴가 있고 그 곳에 방문하지 않은 경우
    {
        if (dir == 0)
        {
            rotate(num+1, 0);
        }
        else if (gear[num][2] == gear[num+1][6])
        {
            rotate(num+1,0);
        }
        else //(gear[num][2] != gear[num+1][6])        
        {
            rotate(num+1,-dir);
        }
    }
}


int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    char ch;
    int K;
    int num;
    int dir;
    int result = 0;
    int score = 1;

    for (int i = 1; i <= 4; i++)
    {
        for (int j = 0; j < 8; j++)
        {
            cin >> ch;
            gear[i].push_back(ch - '0'); // 입력받아서 dequeue에 저장
        }
    }

    cin >> K;

    for (int i = 0; i < K; i++)
    {
        cin >> num;
        cin >> dir;
        for (int i = 0; i <= 4; i++)
        {
            check[i] = 0; // check 초기화
        }
        rotate(num, dir); // 각 톱니바퀴가 어느 방향으로 돌건지만 확인
        rot(); // 실제로 돌리는 함수
    }

    for (int i = 1; i <= 4; i++)
    {
        if (gear[i][0] == 1)
            result += score;
        score = score * 2;
    }

    cout << result << "\n";
    return 0;
}
