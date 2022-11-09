#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int x, y;
    int maxnum = 0;
    int maxtmp = 0;
    int array[101] = {300001};
    int ans = 0;
    cin >> x;
    cin >> y;
    
    for (int i = 0; i < x; i++)
    {
        cin >> array[i];    
    }
    sort(array,array + x);
    
    for (int i = 0; i < x - 2; i++)
    {
        for (int j = i+1; j < x - 1; j++)
        {
            for (int k = j+1; k < x; k++)
            {
                if (array[i] + array[j] + array[k] > y)
                {
                    break;
                }
                else if (maxnum == y)
                {
                    cout << maxnum;
                    return 0;
                }
                else
                {
                    if (ans < array[i] + array[j] + array[k])
                    {
                        ans = array[i] + array[j] + array[k];
                    }
                }
            }
        }
    }
    cout << ans;
   return 0;
}