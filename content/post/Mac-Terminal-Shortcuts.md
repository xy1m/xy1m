+++
title = "Mac Terminal Shortcuts"
date = "2017-03-10T03:16:32-08:00"
author = "zhenpeng"

categories = ["tools"]
tags = ["tools","mac","terminal"]
keywords = "Mac terminal tricks and tips, useful command"
+++

# Navigate and Operation
## Alt + Left or Right Escape + B or F
Move cursor between separate words
## Control + W
Delete word before cursor
## Escape + T
Swap two wors before cursor
## Control + A
Take cursor to the begining of the line
## Control + E
Take cursor to the end of the line
## Control + U
Clear everything before cursor
## Control + K
Clear everything after cursor
## Control + H
Equals delete
## Control + F
Same with right arrow
## Control + B
Same with left arrow

---
# Search
## Control + R
Search previous command
## !!
Execute last command
## History + number
Show last n(the number you set) commands

---
# Process
## Control + C
Kill command
## Control + D
Kill session
## Control + Z
Suspends current job in the background

---
# Shortcuts
## Command + N
Open a new window
## Command + T
Open a new tab
## Command + C
Copy
## Command + V
Paste
## Command + A
Select all
## Shift + Command + A
Select output of last command
## Alt + Command + V
Paste escaped text
## Control + Command + V
Paste selection
## Control + Command + F
Full screen
## Command + L
Clear last output
## Command + K
Clear whole output
## Shift + Command + M
Add bookmark
## Shift + Control + Command + M
Add bookmark with name
## Command + F
Find
## Command + G
Find next
## Command + + or -
Addjust size
## Command + D
Split Pane 
## Command + Up or Down
Jump between commands 
## Alt + Command + Up or Down
Jump to top or bottom

---
# Tips
clipboard works with Control + V
## Copy command output to clipboard
`pwd | pbcopy`
## Copy content of file to clipboard
`pbcopy < /etc/passwd`

## Paste clipboard to command
`pbpaste | ls`
## Paste clipboard to file
`pbpaste > 1.txt`

