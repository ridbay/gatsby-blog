---
title: Windows Equivalent of Linux Touch Command
date: "2019-09-01T22:40:32.169Z"
description: This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter.
---

## In case you have been using Linux all this time to create files and now is the time to get something done in windows 
and there is a need to create a file, You launch the windows command prompt and as usual you typed in " touch fileName.txt" and
you're welcomed with the "'touch' is not recognized as an internal or external command,
operable program or batch file.".
You'd be like "What the Heck!, why is this not working?"
It's because you're on windows, some commands are different.

>Windows doesn’t have a native “touch” equivalent, which is a native Linux program that allows you to create empty files and change timestamps.

Below are some of the equivalent commands that you can use to create a file on Windows CMD using 'filename.txt' as an example;

- touch>filename.txt
- copy nul filename.txt
- copy con filename.txt, hit enter, then hit ctrl+z
- cat>filename.txt, hit enter, then hit ctrl+c
- echo > filename.txt
- fsutil file createnew filename.txt 0
- nul > filename.txt
- notepad filename.txt
- bash -c "touch filename.txt"