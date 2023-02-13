---
title: Looking back on week 5
description: Here are some thoughts about how my fifth week went, what I'm looking forward to in the future and some of my favorite things from the week.
date: 02/12/2023
image: https://images.unsplash.com/photo-1601579112934-17ac2aa86292?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2336&q=80
---

# What I did this past week

I mostly spent this week working on the assignments for my classes. After the IDB project was announced in class, my group and I met up to brainstorm ideas for our specific application. Our product makes it easy for college students to plan events close to their campus. From birthday parties to club outings or just general social events, Campus Eats and Treats allows students to find fun activities and good meals at a comfortable distance away. We've done all of the project setup and just need to complete the base requirements for phase one. Other than that, I started examining what I need to accomplish for my cloud computing assignment, which involved DynamoDB. Overall, this week was failing normal, and the winter freeze the week before was a great break to get me refreshed. I suspect things will start to get more hectic going into the next week.

# Things that were in the way

The only obstacle I really felt this week was in coming up with a good idea for the IDB project. It was a bit difficult coming up with three source of data that not only were cohesive with one another, but also had an API, and came together in an original idea that was different enough from projects of previous semesters. I think we've finally settled on a good idea, and I'm excited to see how it turns out. Other than that there were no major roadblocks that I encountered this week.

# Plans for next week

I don't have major plans for the next week. My main priorities are finishing phase one of the IDB project and studying for a geology exam that I have on thursday. __I know that I said this next part in my previous blog post, but turns out I got the dates wrong, so it's actually true for this week.__ *Antman and the Wasp: Quantumania* comes out in theaters this week, and being the Marvel and DC fanboy that I am, I absolutely cannot wait to watch it. This is the first movie in phase 5 of the MCU, and how it does is going to set a precedent for how the rest of this may be. I'm particularly interested in the villain of this movie, Kang the Conqueror, as he's being set up as the next "big bad" after Thanos. From what we've seen so far, he seems pretty intimidating, and I hope that stays the same way.

# Thoughts on Paper #5: The Single Responsibility Principle

After reading this paper, I feel that the single responsibility principle is an important concept that can change how we approach the creation of an application. I think its very easy to fall into a trap of burrowing yourself into a hole as you code by just coupling together every feature and responsibility, making it difficult to keep track of state changes between different parts that may be inhibiting one another. Adhering to the single responsibility principle helps ensure a more robust app from the start. I'll be sure to keep this in mind as I continue to work on any project.

# My experience with iterators, reduce, and operators

I thought it was very interesting to see how iterators are used under the hood of Python to make it easier to work with lists. I've never really thought about how the for loop works, and it was interesting to see how it's implemented. One thing that particularly stood out to me was how there is no hasNext method for iterators in Python, and that you instead have to catch the StopIteration exception. I found the reduce function to be a really neat way to perform the same operation on an iterable until its reduced to a single value. Of course this can be done with a for loop, but the reduce function is a lot more concise and easier to read. Similarly, I found it really cool how the different operators can be used as functions. It certainly makes it easier to read and understand what's going on in the code.

# Happiest part of the week

My Saturday was pretty great. I got to sleep in, I got a decent amount of work done, and I got caught up with a new show called *The Last of Us* on HBO Max. The show is amazing and I strongly recomend it if you aren't watching it yet. I also started the first episode of the final season of *The Flash*, and I genuinely cannot wait for this season to be over. The only reason I still watch it is because I've already been watching it for so long that it feel like it would be blasphemous to stop. On top of that, the Flash is one of my favorite DC characters, and I just love seeing stuff from the comics get adapted into live action. In the evening, my parents came over to visit, and we walked around Zilker Park, followed by a nice dinner at a Thai place called Titaya's. The picture at the top of this post is a stock image from Zilker park, since I once again forgot to take a picture in the moment. It was nice catching up with my parents, as there's only so much you can talk about over the phone. After they left, I went to a friend's birthday party and had a great time.

# Pick-of-the-week

This will be probably more helpful for the second phase of the IDB project, but when setting up your React application, don't use create-react-app. Instead, I recommend using Vite instead. It's a lot faster and easier to set up, and it's a lot more customizable. I've used both, and I can say that Vite is a lot better. Moreover, the build time for Vite is a lot faster, so you'll see your changes instantly. I'll be using it for the IDB project, and I strongly suggest you do too.