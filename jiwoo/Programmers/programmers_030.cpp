#include <bits/stdc++.h>
//  인사고과
using namespace std;

bool cmp(vector<int> a, vector<int> b)
{
    if (a[0] == b[0])
        return a[1] < b[1];
    return a[0] > b[0];
}

int solution(vector<vector<int>> scores)
{
    int answer = 1;

    int size = scores.size();

    if (size == 1)
    {
        return answer;
    }

    vector<vector<int>> v1; // [0] 내림차순
    vector<vector<int>> v2;

    // 벡터복사
    v1.resize(size);
    v2.resize(size);
    copy(scores.begin(), scores.end(), v1);
    copy(scores.begin(), scores.end(), v2);

    int cnt1 = 0;
    int cnt2 = 0;
    
    // 내림차순 오름차순 정렬
    sort(v1.begin(),v1.end(),cmp);

    for (int i = 1; i < size; i++)
    {
        if (v1[i - 1][1] > v1[i - 1][1])
        {
            if (scores[0][0] == v2[i][0] && scores[0][1] == v2[i][1])
                return -1;
            else if (scores[0][0] + scores[0][1] >= v1[i][0] + v1[i][1])
            {
                cnt1--;
            }
            v1.erase(v1.begin() + i);
            cnt1++;
            i--;
        }
    }

    for (int i = 1; i < size; i++)
    {
        if (scores[0][0] + scores[0][1] >= scores[i][0] + scores[i][1])
        {
            cnt2++;
        }
    }

    answer = size - cnt1 - cnt2;

    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    vector<vector<int>> v;
    vector<int> v2;
    v2.push_back(2);
    v2.push_back(2);
    v.push_back(v2);
    v2.clear();

    v2.push_back(1);
    v2.push_back(4);
    v.push_back(v2);
    v2.clear();

    v2.push_back(3);
    v2.push_back(2);
    v.push_back(v2);
    v2.clear();

    v2.push_back(3);
    v2.push_back(2);
    v.push_back(v2);
    v2.clear();

    v2.push_back(2);
    v2.push_back(1);
    v.push_back(v2);
    v2.clear();

    int a = solution(v);
    cout << a;

    return 0;
}