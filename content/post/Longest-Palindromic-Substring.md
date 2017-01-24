+++
author = "zhenpeng"
date = "2016-02-04T00:17:00-05:00"
tags = ["leetcode","string"]
categories =["algorithms"]
title = "Longest Palindromic Substring"
keywords = ""
+++
Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.
<!--more-->
```
public class Solution {
    public String longestPalindrome(String s) {
        if(s==null||s.equals("")){
            return "";
        }
        String p=expendPalindrome(s,0,0);
        for(int i=0;i<s.length();i++){
            String p1=expendPalindrome(s,i,i);
            if(p1.length()>p.length()){
                p=p1;
            }
            String p2=expendPalindrome(s,i,i+1);
            if(p2.length()>p.length()){
                p=p2;
            }
        }
        return p;
    }
    public String expendPalindrome(String s,int l,int r){
        int n=s.length();
        while(l>=0&&r<=n-1&&s.charAt(l)==s.charAt(r)){
            l--;
            r++;
        }
        return s.substring(l+1,r);
    }
}
```