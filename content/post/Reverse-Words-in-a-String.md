+++
title = "Reverse Words in a String"
date = "2016-02-04T00:15:13-05:00"
author = "zhenpeng"

tags = ["leetcode","string"]
categories =["algorithms"]
keywords = ""
+++
Given an input string, reverse the string word by word.
<!--more-->
For example,

Given s = `"the sky is blue"`,

return `"blue is sky the"`.

Update (2015-02-12):
For C programmers: Try to solve it in-place in O(1) space.

**Clarification:**

- What constitutes a word?
 + A sequence of non-space characters constitutes a word.
- Could the input string contain leading or trailing spaces?
 + Yes. However, your reversed string should not contain leading or trailing spaces.
- How about multiple spaces between two words?
 + Reduce them to a single space in the reversed string.

```
public class Solution {
    public String reverseWords(String s) {
        String[] arr=s.split(" ");
        StringBuilder sb=new StringBuilder();
        for(int i=arr.length-1;i>=0;i--){
            if(!arr[i].trim().equals("")){
                if(sb.length()!=0){
                    sb.append(" ");
                }
                sb.append(arr[i]);
            }
        }
        return sb.toString();
    }
    public String reverse(String s){
        if(s!=null){
            char[] ch=s.toCharArray();
            int l=0,r=ch.length-1;
            while(l<r){
                char c=ch[l];
                ch[l]=ch[r];
                ch[r]=c;
                l++;
                r--;
            }
            return new String(ch,0,ch.length);
        }
        return null;
    }
}
```
