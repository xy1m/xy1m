+++
date = "2016-02-03T22:28:08-05:00"
tags = ["leetcode","math","string"]
categories =["algorithms"]
title = "Inter to English Words"
author="zhenpeng"
+++
Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 2^31 - 1.
<!--more-->
For example,

123 -> `"One Hundred Twenty Three"`

12345 -> `"Twelve Thousand Three Hundred Forty Five"`

1234567 -> `"One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"`

```
public class Solution {
    //0-19的字典
    private String[] dic_0_19={"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};
    //20-90之间整十位的字典
    private String[] dic_20_90={"", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
    //大数位字典
    private String[] big={"Thousand","Million","Billion"};
    public String numberToWords(int num) {
        //百位
        String res=convertHundred(num%1000);
        //千，百万，十亿
        for(int i=0;i<3;i++){
            num=num/1000;
            if(num%1000>0){
                String leftStr=convertHundred(num%1000)+" "+big[i];
                //处理空格
                if(res.length()!=0){
                    res=leftStr+" "+res;
                }else{
                    res=leftStr;
                }
            }
        }
        return res.length()==0?"Zero":res;
    }
    
    //返回小于1000的结果
    public String convertHundred(int num){
        StringBuilder sb=new StringBuilder();
        int huns=num/100;
        int ten=num%100;
        int tens=ten/10;
        int digit=ten%10;
        
        String hundredStr,tenStr,digitStr;
        if(huns>0){
            sb.append(dic_0_19[huns]).append(" ").append("Hundred");
        }
        if(ten>0){
            if(huns>0){
                sb.append(" ");
            }
            if(ten<20){
                sb.append(dic_0_19[ten]);
            }else{
                if(tens>0){
                    sb.append(dic_20_90[tens]);
                }
                if(digit>0){
                    if(tens>0){
                        sb.append(" ");
                    }
                    sb.append(dic_0_19[digit]);
                }
                
            }
        }
        return sb.toString();
        
    }
}
```