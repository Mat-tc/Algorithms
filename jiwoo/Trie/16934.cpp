#include <bits/stdc++.h>

using namespace std;

const int NUM_ALPHABETS = 26;
int toIndex(char ch) { return ch - 'a'; }

struct TrieNode
{
    TrieNode *children[NUM_ALPHABETS];
    // unordered_map<string, TrieNode*> children;
    int cnt;
    bool isEnd;
    TrieNode() : children(), isEnd(false), cnt(0){}

	void Insert(string& key, int index) {
		if (index == key.length())
        {
			isEnd = true;
            cnt++;
        }
		else {
			int next = toIndex(key[index]);
			if (children[next] == nullptr)
				children[next] = new TrieNode;
			children[next]->Insert(key, index + 1);
		}
	}

	int Find_1(string& key, int depth) {   // 접두사로서 검색 되더라도 true 를 리턴하게끔 한 함수
		if (depth == key.length())
        {
            return cnt + 1;
        }
        if (isEnd == false && depth != 0)
        {
            isEnd = true;
            return 0;
        }
		int next = toIndex(key[depth]);
		if (children[next] == nullptr)
			return 0;
		return children[next]->Find_1(key, depth + 1);
	}

	bool Find_2(string& key, int depth) {  // 완전히 일치하는 단어 단위로만 찾고 true 를 리턴하게끔 한 함수
		if (depth == key.length() && isEnd) 
			return true;
		if (depth == key.length() && !isEnd) 
			return false;
		int next = toIndex(key[depth]);
		if (children[next] == nullptr)
			return false;
		return children[next]->Find_2(key, depth + 1);
	}
};

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N;
    cin >> N;
    TrieNode t;
    for (int i = 0; i < N; i++)
    {
        string s;
        cin >> s;
        t.Insert(s, 0);
        for (int j = 0; j <= s.size(); j++)
        {
            string ns = s.substr(0,j);
            if (t.Find_1(ns,0) == 0)
            {
                cout << ns << "\n";
                break;
            }
            else if (j == s.size())
            {
                cout << s + (to_string(t.Find_1(ns,0))) << "\n";
                break;
            }
        }
    }

    return 0;
}