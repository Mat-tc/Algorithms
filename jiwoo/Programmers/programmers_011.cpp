#include <bits/stdc++.h>
// 택배상자
using namespace std;

int solution(vector<int> order) {
    int answer = 0;

    vector<int> st;
    int seq = 0;

    for (int i = 0; i < order.size(); i++)
    {
        st.push_back(i + 1);
        while (st.back() == order[seq])
        {
            st.pop_back();
            answer++;
            seq++;
            if (seq == order.size()) break;
        }
    }

    return answer;
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    return 0;
}