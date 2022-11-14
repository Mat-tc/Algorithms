#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    int N;
    int Rec;
    int a;

    vector<int> frame; // 사진틀 : 앞자리일수록 가장 오래 게시된 사진
    int arr[101] = {};

    int minV = 10000;
    int minIdx;

    cin >> N; // 사진틀의 개수
    cin >> Rec; // 총 추천 횟수

    for (int i = 0; i < Rec; i++)
    {
        cin >> a;
        if (frame.size() < N) // 아직 빈 사진틀이 있다면
        {
            if (find(frame.begin(), frame.end(), a) == frame.end())
            {
                frame.push_back(a); //사진틀에 추가
            }
            arr[a]++; // 각 후보마다 추천횟수 따로 저장
        }
        else // 빈 사진틀이 없다면 가장 추천횟수 낮은사람 없애야 되니까
        {
            if (find(frame.begin(), frame.end(), a) == frame.end())
            {
                for (int j = 0; j < N; j++)
                {
                    if (arr[frame[j]] < minV) // for문 돌면서 누가 제일 추천횟수낮은지 검사
                    {
                        minV = arr[frame[j]];
                        minIdx = j; // 앞에서부터 검사하기 때문에 만약 추천횟수 같은 사람이 있더라도 가장 오래된 사람이 아웃
                    }
                }
                arr[frame[minIdx]] = 0;
                frame.erase(frame.begin() + minIdx);
                frame.push_back(a);
                minV = 10000;
            }
            arr[a]++;
        }
    }

    sort(frame.begin(),frame.end()); // 정렬 후 출력

    for (int i = 0; i < frame.size(); i++)
    {
        cout << frame[i] << " ";
    }

    return 0;
}
