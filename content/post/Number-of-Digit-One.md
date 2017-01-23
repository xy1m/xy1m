+++
date = "2016-02-04T00:17:36-05:00"
tags = ["leetcode","math"]
categories =["algorithms"]
title = "Number of Digit One"
author="zhenpeng"
+++
Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.
<!--more-->
For example:

Given n = 13,
Return 6, because digit 1 occurred in the following numbers: 1, 10, 11, 12, 13.

```
public class Solution {
    public int countDigitOne(int n) {
        long count=0;
        long factor=1;
        while(n/factor!=0){
            long high=n/factor/10;
            long low=n%factor;
            long cur=n/factor%10;
            if(cur>=2){
                count+=(high+1)*factor;
            }else if(cur==1){
                count+=high*factor;
                count+=low+1;
            }else{
                count+=high*factor;
            }
            factor*=10;
        }
        return (int)count;
    }
}
```