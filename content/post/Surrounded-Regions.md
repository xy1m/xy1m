+++
author = "zhenpeng"
date = "2016-02-04T00:13:52-05:00"
tags = ["leetcode","string"]
categories =["algorithms"]
title = "Surrounded Regions"
keywords = ""
+++
Given a 2D board containing 'X' and 'O', capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.
<!--more-->
For example,

```
X X X X
X O O X
X X O X
X O X X
```
After running your function, the board should be:

```
X X X X
X X X X
X X X X
X O X X
```

```
public class Solution {
    public void solve(char[][] board) {
        //left top to right down
        int n=board.length;
        if(n==0){
            return;
        }
        int m=board[0].length;
        if(n<=2||m<=2){
            return;
        }
        for(int i=0;i<n;i++){
            if(board[i][0]=='O'){
                board[i][0]='P';
            }
            if(board[i][m-1]=='O'){
                board[i][m-1]='P';
            }
        }
        for(int i=0;i<m;i++){
            if(board[0][i]=='O'){
                board[0][i]='P';
            }
            if(board[n-1][i]=='O'){
                board[n-1][i]='P';
            }
        }
        for(int i=1;i<n-1;i++){
            trigger(board,i,1);
            trigger(board,i,m-2);
        }
        for(int i=1;i<m-1;i++){
            trigger(board,1,i);
            trigger(board,n-2,i);
        }
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(board[i][j]=='O'){
                    board[i][j]='X';
                }else if(board[i][j]=='P'){
                    board[i][j]='O';
                }
            }
        }
        
    }
    public void trigger(char[][] board,int i,int j){
        int n=board.length;
        int m=board[0].length;
        if(board[i][j]=='O'){
            if(board[i][j-1]=='P'||board[i][j+1]=='P'||board[i-1][j]=='P'||board[i+1][j]=='P'){
                board[i][j]='P';
                trigger(board,i+1,j);
                trigger(board,i-1,j);
                trigger(board,i,j+1);
                trigger(board,i,j-1);
            }
        }
    }
    
}
```
