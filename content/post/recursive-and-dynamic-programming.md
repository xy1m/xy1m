+++
title = "Recursive And Dynamic Programming"
date = 2017-09-05T12:40:59-07:00
author = "zhenpeng"

tags = []
categories = []
keywords = ""
+++
<!--more-->
## Pattern
Usually comes with nth, first n, compute all

## How to Approach

### Bottom-Up
- Start with one element
### Top-Down
- Start from N to N-1
### Half and half
- Compute first half and last half, then merge
- Binary search
- Merge sort

## Recursive vs Iterative
All recursive problem can be done with iterative solution

### Iterative
- not intuit
- more complex

### Recursive
- space inefficient
- O(n) memory usage, n is the deepth of call layers

## Dynamic Programming and Memoization
Dynamic Programming= Recursive + Cache

### Fibonacci

#### Recursive solution
- Time O(2^n)
- Space O(1)

```
    public int f1(int i) {
        if (i == 0) return 0;
        if (i == 1) return 1;
        return f1(i - 1) + f1(i - 2);
    }
```

#### DP solution
- Time O(n)
- Space O(n)

```
    public int f2(int i, int[] memo) {
        if (i == 0 || i == 1) return i;
        if (memo[i] == 0) {
            memo[i] = f2(i - 1, memo) + f2(i - 2, memo);
        }
        return memo[i];
    }
```

#### Iterative solution
- Time O(n)
- Space O(1)

```
    public int f3(int n) {
        if (n == 0 || n == 1) return n;
        int a = 0;
        int b = 1;
        for (int i = 2; i < n; i++) {
            int c = a + b;
            a = b;
            b = c;
        }
        return a + b;
    }
```