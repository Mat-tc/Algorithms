#include <bits/stdc++.h>
 
#define MAX 2000
using namespace std;

bool Visit[MAX][MAX];
int S;

int BFS()
{
    queue<pair<pair<int, int>, int> > Q; 
    Q.push(make_pair(make_pair(1, 0), 0)); // Q({1,0},0); display 1개 있고 clipboard에 0개 있는 상태
    Visit[1][0] = true;
 
    while (Q.empty() == 0)
    {
        int Dis = Q.front().first.first;
        int Clip = Q.front().first.second;
        int Time = Q.front().second;
        Q.pop();
 
        if (Dis == S) return Time;
        
        if (Dis > 0 && Dis < MAX)
        {
            if (Visit[Dis][Dis] == false) // 복사하기
            {
                Visit[Dis][Dis] = true;
                Q.push(make_pair(make_pair(Dis, Dis), Time + 1));
            }
 
            if (Visit[Dis - 1][Clip] == false) // 삭제하기
            {
                Visit[Dis - 1][Clip] = true;
                Q.push(make_pair(make_pair(Dis - 1, Clip), Time + 1));
            }
        }
 
        if (Clip > 0 && Dis+Clip < MAX) // 붙여넣기
        {
            if (Visit[Dis + Clip][Clip] == false)
            {
                Visit[Dis + Clip][Clip] = true;
                Q.push(make_pair(make_pair(Dis + Clip, Clip), Time + 1));
            }
        }
    }
}

 
int main(void)
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    cin >> S;
    cout << BFS() << "\n";
 
    return 0;
}
