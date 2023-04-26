#include <bits/stdc++.h>

using namespace std;

vector<int> picks_copy;
vector<string> minerals_copy;

int ans = 987654321;

void dfs(int idx, int ret)
{
    if (minerals_copy.size() == idx || (picks_copy[0] == 0 && picks_copy[1] == 0 && picks_copy[2] == 0))
    {
        ans = min(ans, ret);
        return;
    }

    for (int i = 0; i < 3; i++)
    {
        if (picks_copy[i] != 0)
        {
            picks_copy[i]--;
            int tmp = 0;
            for (int j = 0; j < 5; j++)
            {
                if (idx + j >= minerals_copy.size())
                {
                    ans = min(ans, ret + tmp);
                    picks_copy[i]++;
                    return;
                }
                if (i == 0)
                {
                    if (minerals_copy[idx + j] == "diamond")
                    {
                        tmp += 1;
                    }
                    else if (minerals_copy[idx + j] == "iron")
                    {
                        tmp += 1;
                    }
                    else if (minerals_copy[idx + j] == "stone")
                    {
                        tmp += 1;
                    }
                }
                else if (i == 1)
                {
                    if (minerals_copy[idx + j] == "diamond")
                    {
                        tmp += 5;
                    }
                    else if (minerals_copy[idx + j] == "iron")
                    {
                        tmp += 1;
                    }
                    else if (minerals_copy[idx + j] == "stone")
                    {
                        tmp += 1;
                    }
                }
                else if (i == 2)
                {
                    if (minerals_copy[idx + j] == "diamond")
                    {
                        tmp += 25;
                    }
                    else if (minerals_copy[idx + j] == "iron")
                    {
                        tmp += 5;
                    }
                    else if (minerals_copy[idx + j] == "stone")
                    {
                        tmp += 1;
                    }
                }
            }
            dfs(idx + 5, ret + tmp);
            picks_copy[i]++;
        }
    }
}

int solution(vector<int> picks, vector<string> minerals)
{
    int answer = 0;
    
    picks_copy.assign(picks.begin(), picks.end());
    minerals_copy.assign(minerals.begin(), minerals.end());

    dfs(0, 0);

    answer = ans;

    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    return 0;
}