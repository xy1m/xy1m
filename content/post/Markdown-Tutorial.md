+++
categories = ["tools"]
date = "2016-03-17T09:24:23-04:00"
tags = ["markdown"]
title = "Markdown基本语法"

+++

> Markdown 是一种轻量级标记语言，创始人为約翰·格魯伯（John Gruber）。它允许人们“使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML(或者HTML)文档”。[3]这种语言吸收了很多在电子邮件中已有的纯文本标记的特性。

以上摘自维基百科，既然你已经看到了这篇文章，就不用过多介绍Markdown了
[John Gruber](https://daringfireball.net/projects/markdown/basics)

[header]:#header
[bold]:#bold
[blockquote]:#blockquote
[line]:#line
[unsorted-list]:#unsorted-list
[sorted-list]:#sorted-list
[image]:#image
[link]:#link
[reference-link]:#reference-link
[auto-link]:#auto-link
[code]:#code
[pre]:#pre
[escape]:#escape
[table]:#table
[other]:#other
[reference]:#reference

## 干货

1. [标题][header]
1. [粗体斜体][bold]
1. [引用][blockquote]
1. [分割线][line]
1. [无序列表][unsorted-list]
1. [有序列表][sorted-list]
1. [图片][image]
1. [链接][link]
1. [索引链接][reference-link]
1. [自动链接][auto-link]
1. [单行代码][code]
1. [多行代码][pre]
1. [转义符][escape]
1. [表格][table]
1. [其他][other]
1. [参考][reference]

<a class="h2" id="header" href="#header"><span class="fa fa-link"></span>标题</a>

标题前输入多个#对应级别的HTML标题，h1和h2可在标题的下一行加任意数量=或-实现

<p class="text-warning"><span class="fa fa-warning">#和标题之间空格不能少</p>

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

<a class="h2" id="bold" href="#bold"><span class="fa fa-link"></span>粗体 斜体</a>

**我是粗体**
_我是斜体_
**_我是粗斜体_**

```
**我是粗体**
_我是斜体_
**_我是粗斜体_**
```

<a class="h2" id="blockquote" href="#blockquote"><span class="fa fa-link"></span>引用</a>

> My life for AIUR

<a class="h2" id="line" href="#line"><span class="fa fa-link"></span>分割线</a>

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

<a class="h2" id="unsorted-list" href="#unsorted-list"><span class="fa fa-link"></span>无序列表</a>

<p class="text-warning"><span class="fa fa-warning">+-*和项目之间空格不能少</p>

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

<a class="h2" id="sorted-list" href="#sorted-list"><span class="fa fa-link"></span>有序列表</a>

<p class="text-warning"><span class="fa fa-warning">数字可无序，.和空格不能少</p>

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

<a class="h2" id="image" href="#image"><span class="fa fa-link"></span>图片</a>

![alt信息](/images/avatar.jpg "标题")
```
![alt信息](/images/avatar.jpg "标题")
```

<a class="h2" id="link" href="#link"><span class="fa fa-link"></span>链接</a>

[GitHub](http://github.com "Go to github")
```
[链接文字](链接地址 标题)
[GitHub](http://github.com "Go to github")
```

<a class="h2" id="reference-link" href="#reference-link"><span class="fa fa-link"></span>索引链接</a>

[Google][g]
[Yahoo][y]
![mole][m]

[g]:http://google.com "Google"
[y]:http://search.yahoo.com "Yahoo serach"
[m]:/images/avatar.jpg "mole"

```
[链接文字][索引id]
[索引id]:索引地址 "标题"

[Google][g]
[Yahoo][y]
![mole][m]

[g]:http://google.com "Google"
[y]:http://search.yahoo.com "Yahoo serach"
[m]:/images/avatar.jpg "mole"
```

<a class="h2" id="auto-link" href="#auto-link"><span class="fa fa-link"></span>自动链接</a>

尖括号或者直接输入地址

<http://google.com>
`<http://google.com>`

<a class="h2" id="code" href="#code"><span class="fa fa-link"></span>行内代码</a>

`System.out.println("Hello World");`

\`System.out.println("Hello World");\`

<a class="h2" id="pre" href="#pre"><span class="fa fa-link"></span>多行代码</a>

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

<a class="h2" id="escape" href="#escape"><span class="fa fa-link"></span>转义符</a>

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

<a class="h2" id="table" href="#table"><span class="fa fa-link"></span>表格</a>

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

<a class="h2" id="other" href="#other"><span class="fa fa-link"></span>其他</a>

可以写HTML，前后加空行

<a class="h2" id="reference" href="#reference"><span class="fa fa-link"></span>参考</a>

https://daringfireball.net/projects/markdown/basics
http://ibruce.info/2013/11/26/markdown/









