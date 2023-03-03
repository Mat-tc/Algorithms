#include <bits/stdc++.h>

using namespace std;
vector<int> v;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    int N;
    cin >> N;
    for (int i = 0; i < N; i++)
    {
        int a;
        cin >> a;
        v.push_back(a);
    }
    int left = 0;
    int right = N-1;
    int leftans = left;
    int rightans = right;

    while (left < right)
    {
        int lr = v[left] + v[right];
        int lrans = v[leftans] + v[rightans];
        if (lr == 0)
        {
            leftans = left;
            rightans = right;
            break;
        }
        if (lr > 0)
        {
            if (abs(lrans) > abs(lr))
            {
                leftans = left;
                rightans = right;
                right--;
            }
            else
            {
                right--;
            }
        }
        else
        {
            if (abs(lrans) > abs(lr))
            {
                leftans = left;
                rightans = right;
                left++;
            }
            else
            {
                left++;
            }
        }
    }
    cout << v[leftans] << " " << v[rightans];
    return 0;
}