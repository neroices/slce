---
title: "Turn Off Annoying Rotation Suggestions on Android"
description: "Sick of accidentally hitting rotation suggestions? Here's a breezy guide to ditch those pesky prompts and take back control of your navigation."
published: 2024-05-11
tags: [notes]
category: Others
draft: false
---

![Screenshot](./screenshot.jpg)

This guide will help you ditch those rotation suggestion pop-ups on your Android device. There are two ways to do it, depending on whether you're a tech whiz with a rooted phone or a regular user.

**For Regular Folks:**

1. Head over to the Play Store and download [SetEdit](https://play.google.com/store/apps/details?id=by4a.setedit22).
2. Open ADB Shell, and run this command: 

   ```
   pm grant by4a.setedit22 android.permission.WRITE_SECURE_SETTINGS
   ```
3. Open Setedit and find `Secure Table`. Tap to add a new setting called `show_rotation_suggestions`. Set the value to `0`. Basically, you're telling your phone `show_rotation_suggestions = nope!`. Hit `Done` to save.

**For Rooted Phones:**

1. Type `su` in the terminal and press Enter.
2. Type this code and press Enter:
   ```
   settings put secure show_rotation_suggestions 0
   ```
   That's it! You've successfully silenced those pesky rotation suggestions.

Now you can freely flip your phone without any judgmental pop-ups telling you how to hold it! 