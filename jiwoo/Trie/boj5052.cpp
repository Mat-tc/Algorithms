#include <bits/stdc++.h>

using namespace std;

const int NUM_ALPHABETS = 10;
int toIndex(char ch) { return ch - '0'; }

struct TrieNode
{
    TrieNode *children[NUM_ALPHABETS];
    // unordered_map<string, TrieNode*> children;
    bool isEnd;

    TrieNode() : children(), isEnd(false) {}

    void Insert(string &key, int index)
    {
        if (index == key.length())
            isEnd = true;
        else
        {
            int next = toIndex(key[index]);
            if (children[next] == nullptr)
                children[next] = new TrieNode;
            children[next]->Insert(key, index + 1);
        }
    }

    bool Find_3(string &key, int depth)
    { // 완전히 일치하는 단어 단위로만 찾고 true 를 리턴하게끔 한 함수
        if (depth == key.length())
            return true;
        if (isEnd)
        {
            return false;
        }
        int next = toIndex(key[depth]);
        return children[next]->Find_3(key, depth + 1);
    }
};

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    int t;
    cin >> t;
    for (int i = 0; i < t; i++)
    {
        TrieNode T;
        vector<string> vs;
        int n;
        int flag = 0;
        cin >> n;
        for (int i = 0; i < n; i++)
        {
            string s;
            cin >> s;
            T.Insert(s, 0);
            vs.push_back(s);
        }
        for (int i = 0; i < n; i++)
        {
            if (T.Find_3(vs[i],0) == false)
            {
                flag = 1;
            }
        }
        
        if (flag == 0)
            cout << "YES\n";
        else
            cout << "NO\n";
    }

    return 0;
}