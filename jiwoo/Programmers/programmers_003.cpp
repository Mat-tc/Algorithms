#include <bits/stdc++.h>

using namespace std;

// fees[0] : 기본 시간 fees[1] : 기본 요금 fees[2] 단위 시간 fees[3] 단위 요금
// 시각, 차량, 내역
// 차량번호 순서대로 주차요금을 정수 배열에 return

vector<int> solution(vector<int> fees, vector<string> records)
{
    vector<int> answer;
    map<string, int> money;
    map<string, string> inMap; // (carnum,HM)

    for (int i = 0; i < records.size(); i++)
    {
        stringstream ss(records[i]);
        string HM, carnum, inout;
        ss >> HM >> carnum >> inout;
        if (HM == "23:59" && inMap.empty())
        {
            money[carnum] = money[carnum] + fees[1];
            continue;
        }
        if (inout == "IN")
        {
            inMap.insert({carnum, HM});
        }
        else if (inout == "OUT")
        {
            // inM에서 carnum찾아서 시간뺀다음에 요금확인후 answer 갱신
            string inHM = inMap[carnum];
            int inH = stoi(inHM.substr(0, 2));
            int inM = stoi(inHM.substr(3, 2));
            int outH = stoi(HM.substr(0, 2));
            int outM = stoi(HM.substr(3, 2));
            if (money.find(carnum) != money.end())
            {
                if (fees[0] >= (outH - inH) * 60 + (outM - inM))
                {
                    money[carnum] = money[carnum] + fees[1];
                }
                else
                {
                    money[carnum] = money[carnum] + fees[1] + (ceil((double)(((outH - inH) * 60 + (outM - inM)) - fees[0]) / (double)fees[2])) * fees[3];
                }
                inMap.erase(carnum);
            }
            else
            {
                if (fees[0] >= (outH - inH) * 60 + (outM - inM))
                {
                    money.insert({carnum, fees[1]});
                }
                else
                {
                    money.insert({carnum, fees[1] + (ceil((double)(((outH - inH) * 60 + (outM - inM)) - fees[0]) / (double)fees[2])) * fees[3]});
                }
                inMap.erase(carnum);
            }
        }
    }

    for (auto iter = money.begin(); iter != money.end(); iter++)
    {
        answer.push_back(iter->second);
    }

    return answer;
}



int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    return 0;
}