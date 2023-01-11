#include <bits/stdc++.h>

using namespace std;

int flag = 0;
// 접두사와 접미사 일치하는 최대 일치 길이 테이블 구하기
vector<int> makeTable(string fs) { // fs : 검색할 문자열
	int fsSize = fs.size();
	vector<int>	table(fsSize, 0); // 0으로 초기화
	int j = 0; 
	for (int i = 1; i < fsSize; i++) {
		// 일치하지 않으면
		while (j > 0 && fs[i] != fs[j]) { 
			j = table[j - 1];
		}
		// 일치하면
		if (fs[i] == fs[j]) {
			table[i] = ++j;
		}
	}
	return table;
}

// ws : 검색을 당하는 문자열, fs : 검색할 문자열
void KMP(string ws, string fs) { 
	vector<int> table = makeTable(fs);
	int j = 0;
	for (int i = 0; i < ws.size(); i++) {
		// 일치하지 않는 경우 (단, j > 0)
        if (ws[i] >='0' && ws[i] <='9')
            continue;
		while (j > 0 && ws[i] != fs[j]) {
			j = table[j - 1];
		}
		// 일치한 경우
		if (ws[i] == fs[j]) {
			if (j == fs.size() - 1) { // 문자열이 완전히 일치하면
                flag = 1;
                break;
				j = table[j];
			}
			else {
				j++;
			}
		}
	}
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    string S, K;
    cin >> S >> K;
    
    vector<int> table = makeTable(S);
    KMP(S, K);
    cout << flag;
    return 0;
}