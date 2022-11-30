#include <bits/stdc++.h>

using namespace std;

vector<int> solution(int n, vector<int> info) {
    vector<double> tmpans;
    vector<int> answer(11);
    vector<int> error;
    
    error.push_back(-1);

    int arrow = n;
    double score = 0;
    int LionScore = 0;
    int ApeachScore = 0;
    int idx;
    for (int i = 10; i >= 0; i--)
    {
        if (info[i] > 0)
        {
            ApeachScore = ApeachScore + (10 - i);
            tmpans.push_back(((10 - i) * 2) / (double)(info[i] + 1));
        }
        else
        {
            tmpans.push_back((10 - i) / (double)(info[i] + 1));
        }
        
    }

    while (arrow > 0)
    {
        idx = max_element(tmpans.begin(), tmpans.end())-tmpans.begin();
        if (arrow - (info[10-idx] + 1) >= 0)
        {
            answer[10-idx] = info[10-idx] + 1;
            arrow = arrow - (info[10-idx] + 1);
            LionScore = LionScore + idx;
            if (info[10-idx] > 0)
            {
                ApeachScore = ApeachScore - idx;
            }
            tmpans[idx] = -1;
        }
        else
        {
            tmpans[idx] = -1;
        }
    }

    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    vector<int> ans = solution(5,)

    for (int i = 0; i < 11; i++)
    {
        cout << 
    }

    return 0;
}
