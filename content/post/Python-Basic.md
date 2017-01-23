+++
categories = ["language"]
date = "2016-03-21T14:32:43-04:00"
tags = ["language"]
title = "Python 2 Basic"
author="zhenpeng"
+++
> 
Python是一种简单易学，功能强大的编程语言，它有高效率的高层数据结构，简
单而有效地实现面向对象编程。Python简洁的语法和对动态输入的支持，再加上
解释性语言的本质，使得它在大多数平台上的许多领域都是一个理想的脚本语
言，特别适用于快速的应用程序开发。

> Python语言的创造者Guido van Rossum是根据英国广播公司的节目“蟒蛇飞行马戏”命名这个语言的，并非他本人特别喜欢蛇缠起它们的长身躯碾死动物觅食

## 简介
- 简单
  + Python是一种代表简单主义思想的语言。阅读一个良好的Python程序就感觉像是在读英语一样，尽管这个英语的要求非常严格！Python的这种伪代码本质是它最大的优点之一。它使你能够专注于解决问题而不是去搞明白语言本身。
- 易学
  + 就如同你即将看到的一样，Python极其容易上手。前面已经提到了，Python有极其简单的语法。
- 免费，开源
  + Python是FLOSS（自由/开放源码软件）之一。简单地说，你可以自由地发布这个软件的拷贝、阅读它的源代码、对它做改动、把它的一部分用于新的自由软件中。FLOSS是基于一个团体分享知识的概念。这是为什么Python如此优秀的原因之一——它是由一群希望看到一个更加优秀的Python的人创造并经常改进着的。
- 高层语言
  + 当你用Python语言编写程序的时候，你无需考虑诸如如何管理你的程序使用的内存一类的底层细节。
- 可移植
  + 由于它的开源本质，Python已经被移植在许多平台上（经过改动使它能够工作在不同平台上）。如果你小心地避免使用依赖于系统的特性，那么你的所有Python程序无需修改就可以在下述任何平台上面运行。这些平台包括Linux、Windows、FreeBSD、Macintosh、Solaris、OS/2、Amiga、AROS、AS/400、BeOS、OS/390、z/OS、Palm OS、QNX、VMS、Psion、Acom RISC OS、VxWorks、PlayStation、Sharp Zaurus、Windows CE甚至还有PocketPC！
- 解释性
  + 一个用编译性语言比如C或C++写的程序可以从源文件（即C或C++语言）转换到一个你的计算机使用的语言（二进制代码，即0和1）。这个过程通过编译器和不同的标记、选项完成。当你运行你的程序的时候，连接/转载器软件把你的程序从硬盘复制到内存中并且运行。而Python语言写的程序不需要编译成二进制代码。你可以直接从源代码 运行 程序。在计算机内部，Python解释器把源代码转换成称为字节码的中间形式，然后再把它翻译成计算机使用的机器语言并运行。事实上，由于你不再需要担心如何编译程序，如何确保连接转载正确的库等等，所有这一切使得使用Python更加简单。由于你只需要把你的Python程序拷贝到另外一台计算机上，它就可以工作了，这也使得你的Python程序更加易于移植。 
- 面向对象
  + Python即支持面向过程的编程也支持面向对象的编程。在 面向过程 的语言中，程序是由过程或仅仅是可重用代码的函数构建起来的。在 面向对象 的语言中，程序是由数据和功能组合而成的对象构建起来的。与其他主要的语言如C++和Java相比，Python以一种非常强大又简单的方式实现面向对象编程。
- 可扩展性
  + 如果你需要你的一段关键代码运行得更快或者希望某些算法不公开，你可以把你的部分程序用C或C++编写，然后在你的Python程序中使用它们。
- 可嵌入性
  + 你可以把Python嵌入你的C/C++程序，从而向你的程序用户提供脚本功能。
- 丰富的库
  + Python标准库确实很庞大。它可以帮助你处理各种工作，包括正则表达式、文档生成、单元测试、线程、数据库、网页浏览器、CGI、FTP、电子邮件、XML、XML-RPC、HTML、WAV文件、密码系统、GUI（图形用户界面）、Tk和其他与系统有关的操作。记住，只要安装了Python，所有这些功能都是可用的。这被称作Python的“功能齐全”理念。除了标准库以外，还有许多其他高质量的库，如wxPython、Twisted和Python图像库等等。

## 安装Python
- `yum install python`
- [官方网站](http://python.org/)
- `help(命令)` 获取帮助

## 基本概念
- `# 注释`
- Python 区分大小写

### 字面意义常量
- 字面具有意义，无法改变

### 4种数--整数，长整数，浮点数，复数
- 2是整数
- 长整数不过是大一点的整数
- 3.23和52.3E-4是浮点数，E表示10的幂
- (-5+4j)(2.3-4.6j)是复数

### 字符串
- 单引号，双引号
- 三引号可以指示多行字符串，其中自由使用单引号和双引号
- 特殊字符用转义符
- 反斜杠在结尾表示下一行继续，而不是新开始一行
- 自然字符串，不需要转义符特殊处理 r[R]"hello"
- unicode字符串 u[U]"hello"
- 字符串不可变
- 字面意义连级字符串 'Hello''World'=='Hello World'
- 没有char类型
- 正则用自然字符串处理

### 变量
- 变量首字符是字母或下划线
- 其他部分可以是数字
- 大小写敏感
- 数据类型 数，字符串，类
- 不需要声明定义数据类型，直接赋值
- 物理行是人看到的，逻辑行是Python看到的，默认Python希望一行处理一个语句，代码易读，如果物理行多余一个逻辑，使用分号，使用反斜杠是明确连接行为，圆括号，方括号，花括号是暗示连接，不需要反斜杠
- 缩进代表层次，1个TAB或者2个或者4个空格

## 运算符和表达式
### 运算符
- *两数相乘或者得到若干次数字符串
- /得到浮点数
- //整除
- <<左移>>右移
- ~按位反转 x按位反转 -(x+1) ~5=-6
- not and or 非，与，或 True False

### 运算符优先级
- 从左向右计算，从右向左赋值

## 控制流
控制流语句后面加:表示下面跟着一个语句块

- if elseif else
- while 可接 else
- for 可接 else
- range生成序列，range(n)代表[0,n-1]，range(x,y)代表[x,y-1],range(x,y,z) z代表步长
- 使用break后else不执行

## 函数
- 形参
- 局部变量作用范围是声明的代码块
- golbal变量是全局的 可以指定多个变量 global x,y,z

```
def func():
  global x
  print 'x is',x
  x=2
  print 'changed global x to',x
x=50
func()
print 'Value of x is',x

$ python func_global.py
x is 50
changed global x to 2
Value of x is 2
```

- 默认参数`def say(message, times=1)` 只有形参末尾参数可以有默认参数
- 关键参数通过命名给参数赋值`func(c=50,a=100)`
- return 跳出参数 或者 返回值
- pass 代表空语句块
- 没有返回值的return语句相当于 return None
- 文档字符串 DocString，适用于函数，模块，类，强烈建议有并且按照规范写
- DocString按惯例是一个多行字符串，首行大写字母开始，句号结尾，第二行空行，第三行详细描述
- `__doc__`文档字符串属性，help抓取函数`__doc__`属性

## 模块
模块基本是包含所有你定义的函数和变量的文件，以便重用，必须.py扩展名

```
#!/usr/bin/python
# Filename: using_sys.py
import sys
print 'The command line arguments are:'
for i in sys.argv:
print i
print '\n\nThe PYTHONPATH is', sys.path, '\n'

$ python using_sys.py we are arguments
The command line arguments are:
using_sys.py
we
are
arguments
The PYTHONPATH is ['/home/swaroop/byte/code', '/usr/lib/python23.zip',
'/usr/lib/python2.3', '/usr/lib/python2.3/plat-linux2',
'/usr/lib/python2.3/lib-tk', '/usr/lib/python2.3/lib-dynload',
'/usr/lib/python2.3/site-packages', '/usr/lib/python2.3/site-packages/gtk-2.0']
```

当Python执行import sys语句的时候，它在sys.path变量中所列目录中寻找sys.py模块。如果找到
了这个文件，这个模块的主块中的语句将被运行，然后这个模块将能够被你使用.初
始化过程仅在我们第一次输入模块的时候进行.脚本的名称总是sys.argv列表的第一个参数.
sys.path包含输入模块的目录名列表。我们可以观察到sys.path的第一个字符串是空的,这个
空的字符串表示当前目录也是sys.path的一部分，这与PYTHONPATH环境变量是相同的。这意
味着你可以直接输入位于当前目录的模块。否则，你得把你的模块放在sys.path所列的目录之
一。

### 字节编译的.pyc文件
输入一个模块相对来说是一个比较费时的事情，所以Python做了一些技巧，以便使输入模块更
加快一些。一种方法是创建字节编译的文件,这些文件以.pyc作为扩展名。字节编译的文件与
Python变换程序的中间状态有关,当你在下次从别的程序输入这个模块的时候,.pyc文件是十分有用的——它会快得多,因为一部分输入模块所需
的处理已经完成了,这些字节编译的文件也是与平台无关的。

### from..import
如果你想要直接输入argv变量到你的程序中（避免在每次使用它时打sys.），那么你可以使用
from sys import argv语句。如果你想要输入所有sys模块使用的名字，那么你可以使用from sys
import *语句。这对于所有模块都适用。一般说来，应该避免使用from..import而使用import语
句，因为这样可以使你的程序更加易读，也可以避免名称的冲突。

### 模块的`__name__`
python 模块有它的`__name__`，如果是`__main__`，说明被单独运行。

### 制造自己模块
模块放在输入它的程序同一个目录或者sys.path之一。

### dir()函数
你可以使用内建的dir函数来列出模块定义的标识符。标识符有函数、类和变量。
当你为dir()提供一个模块名的时候，它返回模块定义的名称列表。如果不提供参数，它返回当
前模块中定义的名称列表。

## 数据结构
- 3种内建数据结构，列表，元组，字典
- 列表，逗号分隔，可添加，删除，搜索，相当于链表['apple','mac']
- for..in用来遍历序列，del删除元素
- 元组和列表类似，但是不能修改，相当于数组('Java','Python')
- 元组最通常用在打印中`print '%s is %d years old' % (name, age)`
- 字典相当于Map，键值对{key:value,key1:value1} 无序，想要顺序，使用前排序
- in检验键值是否存在，或者使用dict类的has_key，items()返回元组列表，每个元组包含一对项目，键值对
- 列表，元组，字符串都是序列，具有索引和切片操作，索引获取特定项目，切片获取序列一部分
- 索引负数表示从序列结尾计算，apple[-1]表示最后一个元素
- 切片是序列名后跟方括号，方括号中一对可选数字，冒号分隔，数可选，冒号必须
- 第一个数字开始位置，第二个数结束位置，不指定第一个数，从序列首开始，不指定第二个参数，序列尾结束，开始位置包含在切片，结束位置不包含
- 注意引用，复制列表或者类似的序列，使用切片操作取得拷贝
- 列表赋值不是创建拷贝，需要使用切片建立序列拷贝
- 字符串方法 `"apple".startswith("a")==True,'a' in "apple"==True,"apple".find(a)==0,"-".join(["Hello","World"])`

## 编写Python脚本
```
#!/usr/bin/python
# Filename: backup_ver4.py
import os
import time
# 1. The files and directories to be backed up are specified in a list.
source = ['/home/swaroop/byte', '/home/swaroop/bin']
# If you are using Windows, use source = [r'C:\Documents', r'D:\Work'] or something like that
# 2. The backup must be stored in a main backup directory
target_dir = '/mnt/e/backup/' # Remember to change this to what you will be using
# 3. The files are backed up into a zip file.
# 4. The current day is the name of the subdirectory in the main directory
today = target_dir + time.strftime('%Y%m%d')
# The current time is the name of the zip archive
now = time.strftime('%H%M%S')
# Take a comment from the user to create the name of the zip file
comment = raw_input('Enter a comment --> ')
if len(comment) == 0: # check if a comment was entered
target = today + os.sep + now + '.zip'
else:
target = today + os.sep + now + '_' + \
comment.replace(' ', '_') + '.zip'
# Notice the backslash!
# Create the subdirectory if it isn't already there
if not os.path.exists(today):
os.mkdir(today) # make directory
print 'Successfully created directory', today
# 5. We use the zip command (in Unix/Linux) to put the files in a zip archive
zip_command = "zip -qr '%s' %s" % (target, ' '.join(source))
# Run the backup
if os.system(zip_command) == 0:
print 'Successful backup to', target
else:
print 'Backup FAILED'
```

## 面向对象编程
- 成员变量叫域，成员方法叫类的方法,域分为实例变量和类变量
- class 关键字创建，域和方法在一个缩进块中
- 类方法和函数只有一个区别，必须有额外第一个参数名称，调用不用赋值，python自动赋值，对象本身self
- self相当于this
- `obj.method(arg1,arg2) class.method(obj,arg1,arg2)`
- `__init__`相当于constructor
- 类变量所有实例共享，对象变量对象私有，self变量参考对象变量和方法，称为属性参考
- `__del__`相当于析构函数
- 所有类成员，数据成员和方法都是public的，双下划线前缀为private
- 惯例 只想在类或对象中使用，单下划线前缀
- 继承 基本诶名称作为元组跟在定义类名称之后，基本类的`__init__`使用self调用，这样就可以初始化对象的基本类部分，python不会自动调用基本类的constructor
- 继承元组中使用一个以上的类称作多重继承

## 输入输出

### 文件
使用File类的read，readline和write方法读写文件，对文件的读写能力依赖于开发文件的模式，完成文件操作，调用close
```
#!/usr/bin/python
# Filename: using_file.py
poem = '''\
Programming is fun
When the work is done
if you wanna make your work also fun:
use Python!
'''
f = file('poem.txt', 'w') # open for 'w'riting
f.write(poem) # write text to file
f.close() # close the file
f = file('poem.txt')
# if no mode is specified, 'r'ead mode is assumed by default
while True:
line = f.readline()
if len(line) == 0: # Zero length indicates EOF
break
print line,
# Notice comma to avoid automatic newline added by Python
f.close() # close the file
```
- r读模式，w写模式，a追加模式
- len(f.readline())==0 indicates EOF
- ,消除换行

### 存储器
- Python标准模块，称为pickle，在文件中存储Python对象，之后可以取出来。相当于Java中的持久化
- cPickle功能一致，用c编写的，更快
- import..as 可以使用更短模块名称

```
#!/usr/bin/python
# Filename: pickling.py
import cPickle as p
#import pickle as p
shoplistfile = 'shoplist.data'
# the name of the file where we will store the object
shoplist = ['apple', 'mango', 'carrot']
# Write to the file
f = file(shoplistfile, 'w')
p.dump(shoplist, f) # dump the object to a file
f.close()
del shoplist # remove the shoplist
# Read back from the storage
f = file(shoplistfile)
storedlist = p.load(f)
print storedlist
```

## 异常
### try..except
```
#!/usr/bin/python
# Filename: try_except.py
import sys
try:
s = raw_input('Enter something --> ')
except EOFError:
print '\nWhy did you do an EOF on me?'
sys.exit() # exit the program
except:
print '\nSome error/exception occurred.'
# here, we are not exiting the program
print 'Done'
```
- try..except相当于Java中的try exception
- 可以接else语句，没有异常时执行
- raise引发异常，相当于throw，指明名称和异常对象，Error或者Exception的子类

```
#!/usr/bin/python
# Filename: raising.py
class ShortInputException(Exception):
'''A user-defined exception class.'''
def __init__(self, length, atleast):
Exception.__init__(self)
self.length = length
self.atleast = atleast
try:
s = raw_input('Enter something --> ')
if len(s) < 3:
raise ShortInputException(len(s), 3)
# Other work can continue as usual here
except EOFError:
print '\nWhy did you do an EOF on me?'
except ShortInputException, x:
print 'ShortInputException: The input was of length %d, \
was expecting at least %d' % (x.length, x.atleast)
else:
print 'No exception was raised.'
```

### try..finally
```
#!/usr/bin/python
# Filename: finally.py
import time
try:
f = file('poem.txt')
while True: # our usual file-reading idiom
line = f.readline()
if len(line) == 0:
break
time.sleep(2)
print line,
finally:
f.close()
print 'Cleaning up...closed the file'
```

## Python标准库

### sys模块
sys模块包含系统对应功能, sys.stdin,sys.stdout,sys.stderr对应标准输入，输出，错误流

```
#!/usr/bin/python
# Filename: cat.py
import sys
def readfile(filename):
'''Print a file to the standard output.'''
f = file(filename)
while True:
line = f.readline()
if len(line) == 0:
break
print line, # notice comma
f.close()
# Script starts from here
if len(sys.argv) < 2:
print 'No action specified.'
sys.exit()
if sys.argv[1].startswith('--'):
option = sys.argv[1][2:]
# fetch sys.argv[1] but without the first two characters
if option == 'version':
print 'Version 1.2'
elif option == 'help':
print '''\
This program prints files to the standard output.
Any number of files can be specified.
Options include:
--version : Prints the version number
--help : Display this help'''
else:
print 'Unknown option.'
sys.exit()
else:
for filename in sys.argv[1:]:
readfile(filename)
```

### os模块
包含普遍操作系统功能，对平台无关很重要

- os.name windows->nt,linux/unix->posix
- os.getcwd() 当前工作目录
- os.getenv(),os.putenv()读取和设置环境变量
- os.listdir()返回指定目录下的所有文件和目录名
- os.remove()删除文件
- os.system()运行shell命令
- os.linesep当前平台终止符
- os.path.split()返回目录名和文件名`os.path.split('/home/apple.txt')->('/home','apple.txt')`
- os.path.isfile() os.path.isdir()判断文件和路径
- os.path.exists()判断路径是否存在

## 更多Python内容

### 特殊方法
- `__init__(self...)` 新建对象调用
- `__del__(self)` 删除对象调用
- `__str__(self)` print语句或者str()调用
- `__lt__(self,other)` 运算符<调用，类似+>都有特殊方法
- `__getitem__(self,key)`使用x[key]索引操作符调用
- `__len(self)__`内建len()函数调用

### 单语句块
语句块只包含一句，可以在条件或者循环语句同一行指明

### 列表综合
从已有列表导出一个新的列表

```
#!/usr/bin/python
# Filename: list_comprehension.py
listone = [2, 3, 4]
listtwo = [2*i for i in listone if i > 2]
print listtwo
```

### 函数中接收元组和列表
使用函数接受元组或者字典参数，可以加\*和\*\*前缀
由于args变量前有\*前缀，多余参数会作为元组存储在args上，如果使用的是\*\*前缀，多余参数被认为是字典的键值对

```
>>> def powersum(power, *args):
... '''Return the sum of each argument raised to specified power.'''
... total = 0
... for i in args:
... total += pow(i, power)
... return total
...
>>> powersum(2, 3, 4)
25
>>> powersum(2, 10)
100
```

### lambda形式
lambda用来创建新的函数对象，运行时返回

```
#!/usr/bin/python
# Filename: lambda.py
def make_repeater(n):
return lambda s: s*n
twice = make_repeater(2)
print twice('word')
print twice(5)
```

### exec 和 eval
- exec用来执行字符串或者文件中的python语句
- eval 用来计算存储在字符串中的有效python表达式

### assert
- 和Java类似，assert验证某个条件为真，如果为假，触发AssertError

### repr函数
- 取得对象的规范字符串表示，\`完成相同功能

## 接下来学什么

- Python标准库是一个丰富的库，在大多数时候，你可以在这个库中找到你所需的东西。
这被称为Python的“功能齐全”理念。我强烈建议你在开始开发大型Python程序之前浏
览一下Python标准文档。
- Python.org——Python编程语言的官方主页。你可以在上面找到Python语言和解释器的最
新版本。另外还有各种邮件列表活跃地讨论Python的各方面内容。
- comp.lang.python是讨论Python语言的世界性新闻组。你可以把你的疑惑和询问贴在这个
新闻组上。可以使用Google群在线访问这个新闻组，或加入作为新闻组镜像的邮件列
表。
- 《Python实用大全》是一个极有价值的秘诀和技巧集合，它帮助你解决某些使用Python
的问题。这是每个Python用户必读的一本书。
- 《迷人的Python》是David Mertz编著的一系列优秀的Python相关文章。
- 《深入理解Python》是给有经验的Python程序员的一本很优秀的书。如果你已经完整地
阅读了本书，那么我强烈建议你接下来阅读《深入理解Python》。它覆盖了包括XML处
理、单元测试和功能性编程在内的广泛的主题。
- Jython是用Java语言实现的Python解释器。这意味着你可以用Python语言编写程序而同时
使用Java库！Jython是一个稳定成熟的软件。如果你也是一个Java程序员，我强烈建议你
尝试一下Jython。
- IronPython是用C#语言实现的Python解释器，可以运行在.NET、Mono和DotGNU平台
上。这意味着你可以用Python语言编写程序而使用.NET库以及其他由这三种平台提供的
库！IronPython还只是一个前期alpha测试软件，现在还只适合用来进行试验。Jim
Hugunin，IronPython的开发者，已经加入了微软公司，将在将来全力开发一个完整版本
的IronPython。
- Lython是Python语言的Lisp前段。它类似于普通的Lisp语言，会被直接编译为Python字节码，这意味着它能与我们普通的Python代码协同工作。
- 另外还有很多很多的Python资源。其中比较有趣的有Daily Python-URL!，它使你保持与Python的最新进展同步。另外还有Vaults of Parnassus、ONLamp.com Python DevCenter、dirtSimple.org、Python Notes等等。

## 参考
《Python简明教程》






