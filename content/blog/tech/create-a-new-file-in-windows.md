---
title: Windows Equivalent of Linux Touch Command
date: "2019-09-01T22:40:32.169Z"
description: How to Create and Delete Files and Directories from Windows Command Prompt.
---

On windows machine, you tried using touch filename.txt and you get an error; 
>'touch' is not recognized as an internal or external command, operable program or batch file.
and the first question that comes to your mind is **"What the Heck!, why is this not working? Do I need to create these files by hand (and modify them to change the timestamp) in order to implement this sort of command?"**

![Touch Command Error](../images/touchcommand.png)

The answer is **"That doesn't seem very node-ish"**
There are windows equivalent of using "touch",

>Windows doesn’t have a native "touch" equivalent, which is a native Linux program that allows you to create empty files and change timestamps.

Below are some of the equivalent commands that you can use to create a file on Windows CMD using 'filename.txt' as an example;

![Echo Windows Command](../images/echocommand.png)

- touch>filename.txt
- copy nul filename.txt
- copy con filename.txt, hit enter, then hit ctrl+z
- cat>filename.txt, hit enter, then hit ctrl+c
- echo > filename.txt
- fsutil file createnew filename.txt 0
- nul > filename.txt
- notepad filename.txt
- bash -c "touch filename.txt"