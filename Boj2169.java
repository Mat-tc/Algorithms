import java.util.Scanner;

public class Boj2169 {
    public static void main(String[] args) {
        Scanner sc = '5 5
        10 25 7 8 13
        68 24 -78 63 32
        12 -69 100 -29 -25
        -16 -22 -57 -33 99
        7 -76 -11 77 15';
        int n,m;
        n= sc.nextInt();
        m =sc.nextInt();
        int[][] a = new int[n+1][m+1];
        for(int i=1;i<=n;i++){
            for(int j=1;j<=m;j++){
                a[i][j] = sc.nextInt();
            }
        }

        int[][] dp = new int[n+1][m+1];
        int[][] temp = new int[m+2][2];


        for(int i=1;i<=m;i++){
            dp[1][i] = dp[1][i-1]+a[1][i];
        }
        if(n>1){
            for(int i=2;i<=n;i++){
                // left to right
                temp[0][0] = dp[i-1][1];
                for(int j=1;j<=m;j++){
                    temp[j][0] = Math.max(temp[j-1][0],dp[i-1][j])+a[i][j];
                }
                // right to left
                temp[m+1][1] = dp[i-1][m];
                for(int j=m;j>=1;j--){
                    temp[j][1] = Math.max(temp[j+1][1],dp[i-1][j])+a[i][j];
                }

                for(int j=1;j<=m;j++){
                    dp[i][j] = Math.max(dp[i-1][j],Math.max(temp[j-1][0],temp[j+1][1]))+a[i][j];
                }
            }
        }
        System.out.println(dp[n][m]);
    }
}