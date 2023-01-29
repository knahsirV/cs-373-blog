---
title: A retrospective on my third-week
description: Here are some thoughts about how my third week went, what I'm looking forward to in the future and some of my favorite things from the week.
date: 01/29/2023
image: https://live.staticflickr.com/65535/49385963027_e722fcd443_b.jpg
---

# What I did this past week

I mostly spent this week working on the assignments for my classes. I spent Monday finishing up the Collatz project. For some reason, no matter what type of caching I did, my iterative solution always seemed to time out, so I switched to a recursive solution, which immediately did the trick. Just to see what would happen, I used two meta caches, one that had the first 1000 precomputed cycle lengths, and another that had the max cycle length for each range (1:1000, 1001: 2000, 2001:3000, etc.). Using a combination of these two caches made my solution incredibly fast, especially on my laptop, where it took 0.016 seconds to complete all 20 of my test cases, one of which was a range of all numbers possible for this project, 1:1,000,000. I also spent Monday at the Austin Central Library with my roommates, as I mentioned I planned on doing in my last post. The entire building is really pretty and is such a wonderful place to get work done. With 6 floors of open space, you're sure to find a spot that you like. I highly recommend going if you're able to make the bus ride out there from campus. Unfortunately, I once again forgot to take pictures so at the top is a picture of the library that I found online. Aside from that, I managed to get most of my cloud computing assignment done, with only a couple of error checks left, as well as most of my MIS and accounting work done as well. Overall it was a pretty productive week.

# Things that were in the way

There wasn't anything in the way of my personal life. With this being a fairly relaxing week, I don't have much to complain about. I was a little stuck on how to get my Collatz project any faster until I decided to convert it to a recursive solution. I also had a little trouble with getting started on my cloud computing assignment, but that was more due to me being lazy and not caring to sit down and go through the required documentation. Aside from that, I didn't have any major issues this week.

# Plans for next week

I don't have major plans for the next week. I imagine it's going to be fairly similar to this week, though I am a little ahead with my work so I might use the free time to start on a personal project of some sort. *Antman and the Wasp: Quantumania* comes out in theaters this week, and being the Marvel and DC fanboy that I am, I absolutely cannot wait to watch it. This is the first movie in phase 5 of the MCU, and how it does is going to set a precedent for how the rest of this may be. I'm particularly interested in the villain of this movie, Kang the Conqueror, as he's being set up as the next "big bad" after Thanos. From what we've seen so far, he seems pretty intimidating, and I hope that stays the same way.

# Thoughts on Paper #3: Continuous Integration

This paper was interesting to me since I thought I knew the general purpose of a Continous Integration environment, though further analysis made it so much clearer the benefits of developing and deploying in one. I feel that for the project, Collatz, having automated deployment was not one we had to worry about. The point of automating our builds may apply, you may have seen with the Collatz pipelines not properly building if mypy or pylint errors exist. However, deployment is not yet something we have had to take into consideration since our code is not hosted anywhere and is instead meant to run locally. That said, I suspect for the rest of the projects, this will not be the case and continuous deployment may be a requirement as [art of our learning.

# My experience with exceptions & types

Though the idea of exceptions is nothing new to us as computer science students, learning about the logical flow when exceptions are raised and handled was especially useful. Until now, I was only really aware of try-catch blocks as a means of controlling the flow of logical execution, but the use of the else and finally clauses in tandem with the try-catch block was something I had never seen before. I'm sure I'll be using this in the future, and I'm glad I learned about it now. Using these techniques in the future will help me write more robust code that is less likely to break, as well as code that more gracefully handles errors and exits.

# Happiest part of the week

On Friday, a few of my friends and I tried out a small Italian restaurant up north called [*Cucina on 35th*](https://cucina35.com/). The food tasted great, and the service was nothing to complain about. What made my night, however, was when they asked my gluten-free friend if he wanted to try their gluten-free bread, since they were giving us fresh bread with olive oil while we waited for our food. The bread that most of us had was typical of any Italian restaurant, so my gluten-free friend said yes, assuming that he would get the same thing, but with gluten-free ingredients. Instead, he got two slices of toast that didn't even look toasted. The contrast between our two meals was so stark that I couldn't help but laugh. I'm aware laughing at his disappointment is a little mean, but watching the absolute shock on his face when he saw his bread was so funny. I'm glad he was able to laugh about it, though, despite his food not being what he expected.

# Pick-of-the-week

When using a code editor, I strongly recommend using a font that comes with ligatures so that it's easier to read and just looks better in general. For example, typing out the less than sign and equal sign will show up as "≤" in your editor. The code itself isn't actually changing, and its just the font that makes it appear that way. I use Fira Code, which is a free font that comes with ligatures.  You can download it [here](https://github.com/tonsky/FiraCode)