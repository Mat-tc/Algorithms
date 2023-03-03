#include <bits/stdc++.h>
// 이모티콘 할인행사
using namespace std;

vector<int> answer;
vector<double> sale;

int ans = 0;
double price = 0;

void rec(vector<double> v, vector<vector<int>> users, vector<int> emoticons)
{
    if (v.size() == emoticons.size())
    {
        vector<double> priceV;
        int join = 0;  // 가입자수
        double sales = 0; // 매출액
        for (int j = 0; j < emoticons.size(); j++)
        {
            double za = (double)emoticons[j] * ((100 - v[j]) / 100);
            priceV.push_back(za);
        }
        for (int j = 0; j < 2; j++)
        {
            int tmpprice = 0;
            for (int k = 0; k < v.size(); k++)
            {
                if (users[j][0] <= v[k]) // 할인율을 만족한다면
                {
                    tmpprice += priceV[k];
                }
            }
            if (tmpprice >= users[j][1])
                join++;
            else
                sales += tmpprice;
        }
        if (ans < join)
        {
            ans = join;
            price = sales;
        }
        else if (ans == join)
        {
            price = max(price, sales);
        }
    }
    else
    {
        for (int i = 1; i < 5; i++)
        {
            v.push_back(sale[i]);
            rec(v, users, emoticons);
            v.pop_back();
        }
    }
}

void solution(vector<vector<int>> users, vector<int> emoticons)
{
    vector<double> v;

    for (int i = 0; i < 5; i++)
    {
        sale.push_back(i * 10);
    }
    
    rec(v, users, emoticons);

    answer.push_back(ans);
    answer.push_back(price);

}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    vector<vector<int>> users;
    vector<int> tmp;
    tmp.push_back(40);
    tmp.push_back(10000);
    users.push_back(tmp);
    tmp.clear();
    tmp.push_back(25);
    tmp.push_back(10000);
    users.push_back(tmp);

    vector<int> emoticons;
    emoticons.push_back(7000);
    emoticons.push_back(9000);

    solution(users,emoticons);

    for (int i = 0; i < 2; i++)
    {
        cout << answer[i] << "\n";
    }
    return 0;
}