#include <bits/stdc++.h>

using namespace std;

struct Trie {
    bool finish; // 끝나는 지점을 표시해줌
    Trie* next[26]; // 26가지 알파벳에 대한 트라이

    // 생성자
    Trie() : finish(false) {
        memset(next, 0, sizeof(next));
    }

    // 소멸자
    ~Trie() {
        for (int i = 0; i < 26; i++)
            if (next[i])
                delete next[i];
    }

    // 트라이에 문자열 삽입
    void insert(const char* key) {
        if (*key == '\0')
            finish = true; // 문자열이 끝나는 지점일 경우 표시
        else {
            int curr = *key - 'a';
            if (next[curr] == NULL)
                next[curr] = new Trie(); // 탐색이 처음되는 지점일 경우 동적할당
            next[curr]->insert(key + 1); // 다음 문자 삽입
        }
    }

    // 트라이에서 문자열 찾기
    bool find(const char* key) {
        if (*key == '\0') return true; // 문자열이 끝나는 위치를 반환
        int curr = *key - 'a';
        if (next[curr] == NULL) return false; // 찾는 값이 존재하지 않음
        return next[curr]->find(key + 1); // 다음 문자를 탐색
    }
};

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N, M;
    Trie t;
    
    cin >> N >> M;
    for (int i = 0; i < N; i++)
    {
        string s;
        cin >> s;
    
        const char *chars = s.c_str();
        t.insert(chars);
    }

    int cnt = 0;

    for (int i = 0; i < M; i++)
    {
        string s;
        cin >> s;

        const char *chars = s.c_str();
        if (t.find(chars) == true)
        {
            cnt++;
        }
    }

    cout << cnt;
    return 0;
}