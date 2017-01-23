+++
date = "2016-02-04T00:16:24-05:00"
tags = ["leetcode","dynamic programming"]
categories =["algorithms"]
title = "Range Sum Query 2D Immutable"
author="zhenpeng"
+++
Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

The above rectangle (with the red border) is defined by (row1, col1) = (2, 1) and (row2, col2) = (4, 3), which contains sum = 8.
<!--more-->
Example:
```
Given matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
sumRegion(1, 1, 2, 2) -> 11
sumRegion(1, 2, 2, 4) -> 12
```

**Note**:

1. You may assume that the matrix does not change.
1. There are many calls to sumRegion function.
1. You may assume that row1 ≤ row2 and col1 ≤ col2.

```
public class NumMatrix {
    int[][] p=null;
    public NumMatrix(int[][] matrix) {
        int n=matrix.length;
        if(n==0){
            return;
        }
        int m=matrix[0].length;
        if(m==0){
            return;
        }
        p=new int[n+1][m+1];
        for(int i=0;i<=n;i++){
            p[i][0]=0;
        }
        for(int i=0;i<=m;i++){
            p[0][i]=0;
        }
        for(int i=1;i<=n;i++){
            for(int j=1;j<=m;j++){
                p[i][j]=p[i-1][j]+p[i][j-1]-p[i-1][j-1]+matrix[i-1][j-1];
            }
        }
    }

    public int sumRegion(int row1, int col1, int row2, int col2) {
        if(p==null){
            return 0;
        }
        return p[row2+1][col2+1]-p[row2+1][col1]-p[row1][col2+1]+p[row1][col1];
    }
}


// Your NumMatrix object will be instantiated and called as such:
// NumMatrix numMatrix = new NumMatrix(matrix);
// numMatrix.sumRegion(0, 1, 2, 3);
// numMatrix.sumRegion(1, 2, 3, 4);
```

