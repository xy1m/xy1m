+++
title = "Markdown Basic"
date = "2016-03-17T09:24:23-04:00"
author = "zhenpeng"

categories = ["tools"]
tags = ["markdown"]
keywords = ""
+++
> Markdown 是一种轻量级标记语言，创始人为約翰·格魯伯（John Gruber）。它允许人们“使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML(或者HTML)文档”。[3]这种语言吸收了很多在电子邮件中已有的纯文本标记的特性。

<!--more-->
以上摘自维基百科，既然你已经看到了这篇文章，就不用过多介绍Markdown了
[John Gruber](https://daringfireball.net/projects/markdown/basics)

## 标题
标题前输入多个#对应级别的HTML标题，h1和h2可在标题的下一行加任意数量=或-实现

一级标题
=
二级标题
-
# 标题1
### 标题3
###### 标题6
```
一级标题
===================
二级标题
--------------------
# 标题1
### 标题3
###### 标题6
```

## 粗体/斜体

**我是粗体**
_我是斜体_
**_我是粗斜体_**
```
**我是粗体**
_我是斜体_
**_我是粗斜体_**
```

## 引用
> My life for AIUR

```
> My life for AIUR
```

## 分割线
3个或以上的短横线、星号或者下划线实现。短横线和星号之间可以输入任意空格
* * *
***
*****
- - -
---------------------------------------

```
* * *
***
*****
- - -
---------------------------------------
```

## 无序列表

* 项目1
* 项目2
  - 项目3
  + 项目4

```
* 项目1
* 项目2
  - 项目3
  + 项目4
```

## 有序列表

1. 项目1
1. 项目2
	* 项目3
	* 项目4

```
1. 项目1
1. 项目2
	* 项目3
	* 项目4
```

## 图片
![alt信息](/img/logo.png "标题")
```
![alt信息](/img/logo.png "标题")
```

## 链接

[GitHub](http://github.com "Go to github")
```
[链接文字](链接地址 标题)
[GitHub](http://github.com "Go to github")
```

## 索引链接

[Google][g]
[Yahoo][y]
![mole][m]

[g]:http://google.com "Google"
[y]:http://search.yahoo.com "Yahoo serach"
[m]:/img/logo.png "mole"

```
[链接文字][索引id]
`[索引id]:索引地址 标题`

[Google][g]
[Yahoo][y]
![mole][m]

`[g]:http://google.com "Google"`
`[y]:http://search.yahoo.com "Yahoo serach"`
`[m]:/img/logo.png "mole"`
```

## 自动链接
尖括号或者直接输入地址

<http://google.com>
`<http://google.com>`

## 行内代码

`System.out.println("Hello World");`

\`System.out.println("Hello World");\`

## 多行代码

```
	```
	public static void main(String args[]){
		System.out.println("Hello World");
	}
	```
	或者4个空格或者1个Tab
	public static void main(String args[]){
		System.out.println("Hello World");
	}
```

## 转义符

\\ 反斜杠
\` 反引号
\* 星号
\_ 下划线
\{\} 大括号
\[\] 中括号
\(\) 小括号
\# 井号
\+ 加号
\- 减号
\. 英文句号
\! 感叹号

```
\\ 反斜杠
\` 反引号
\* 星号
\_ 下划线
\{\} 大括号
\[\] 中括号
\(\) 小括号
\# 井号
\+ 加号
\- 减号
\. 英文句号
\! 感叹号
```

## 表格

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

## 其他
可以写HTML，前后加空行

## 参考
https://daringfireball.net/projects/markdown/basics
http://ibruce.info/2013/11/26/markdown/









