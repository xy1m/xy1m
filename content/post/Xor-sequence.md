+++
categories = ["algorithms"]
date = "2016-08-01T18:20:14-07:00"
tags = ["bit","hackerrank"]
title = "Xor sequence"
author="zhenpeng"
+++

We can easily find a pattern `F(n)=0^1^...^n`

So for `F(L)^F(L+1)^...^F(R)` should look like below
```
F(L)=0^...^L;
F(L+1)=0^...^L^(L+1);
F(L+2)=0^...^L^(L+1)^L(+2);
...
F(R)=0^...^L^(L+1)^(L+2)...^R;
```

There is another import pattern that every 4 odd xor is 0, and every 4 even xor is also 0, R is always in the formula because it only appears once, so is (R-2) appear 3 times and so on.

**Guess what?**

If (R-L+1) is odd, then result is `0^1^...^L^(L+2)^(L+4)^...^R`,that's `0^...^(L-2)^L^(L+2)^...^R`^`0^...^(L-3)^(L-1)`,
else `(L+1)^(L+3)^...^R`, that's `0^...^(L-1)^(L+1)^...R`^`0^...^(L-1)`

We define a function xor2(I really don't good at naming `:(`) means how many numbers(who are with same parity) with N then %4 and then calculate the result, we don't care about the parity of L or R, so the result should be `xor2(R)^xor2(L-1)`

```
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int Q = in.nextInt();
        StringBuilder sb=new StringBuilder();
        for(int a0 = 0; a0 < Q; a0++){
            long L = in.nextLong();
            long R = in.nextLong();
            sb.append(xor2(R)^xor2(L-1)).append("\n");
        }
        System.out.println(sb.toString());
    }
    
    public static long xor2(long n){
        long res=0;
        for(int i=0;i<(n+1)%8;i+=2){
            res^=n-i;
        }
        return res;
    }
}
```





