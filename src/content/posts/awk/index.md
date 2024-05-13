---
title: 'awk'
description: "`awk` in a nutshell"
published: 2024-05-13
tags: [notes]
category: Others
draft: false
---

`awk` is a powerful text processing tool that allows you to manipulate and analyze text files, typically in structured formats such as CSV or log files. `awk` excels at processing textual data by breaking it down into records and fields, making it easy to perform operations like searching, filtering, and transforming data.

### Basic Usage:

The basic syntax of an `awk` command is:

```
awk 'pattern { action }' filename
```

- **pattern**: Specifies a condition that must be met for the action to be performed. If no pattern is provided, the action is performed on every input record.
- **action**: Defines the action to be taken when the pattern matches. This can be any valid `awk` statement or set of statements.


Let's dive into some practical examples to see `awk` in action:

#### 1. Digging into users and groups
Get user and group info from a password file or filter users in a specific group:

```bash
awk -F: '{print $1, $4}' /etc/passwd
```

The `-F` option defines the field separator (`:` in this case). `$1` refers to the first field (username) and `$4` refers to the fourth field (group id) on each line.

#### 2. Generating reports

1. ```bash
   df -h | awk '{print $1, $5}'
   ```

   This command uses `df -h` to display disk usage in a human-readable format. The output is then piped to `awk`, which prints only the first and fifth fields: the filesystem name (`$1`) and the percentage of used space (`$5`).

2. ```bash
   ps -eo pid,user,comm | awk '$1 > 1000 {print $0}'
   ```

   This command lists running processes with their PIDs, usernames, and commands. The output is piped to `awk`, which filters to show processes with PIDs greater than 1000 using the condition `$1 > 1000`, and then prints the entire line (`$0`). This is useful for identifying recently initiated processes.

#### 3. Analyzing Log Files

Consider a log file `void.log` containing entries like:

```
192.168.1.1 - void - [13/May/2024:11:22:33] "GET /index.html HTTP/1.1" 200 1234
192.168.1.2 - void - [13/May/2024:11:22:33] "POST /login HTTP/1.1" 401 5678
```

To count the number of successful (`200`) and failed (`401`) requests, we can use `awk`:

```bash
awk '{ status[$9]++ } END { print "Successful requests:", status[200]; print "Failed requests:", status[401] }' void.log
```

Output:
```
Successful requests: 1
Failed requests: 1
```

Here's the drill:
- `'{ status[$9]++ }'`: Sets up an array `status` where keys are HTTP status codes and counts each status.
- `END { print "Successful requests:", status[200]; print "Failed requests:", status[401] }'`: Prints counts of successful and failed requests at the file's end.

These are just a few examples. With `awk`'s built-in functions and operators, you can accomplish far more complex text manipulation tasks, such as:

* **Performing mathematical operations on numeric data in text files**
* **Concatenating or splitting fields**
* **Validating data based on specific patterns**