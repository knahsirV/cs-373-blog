---
title: Thinking about Week 10
description: Here are some thoughts about how my tenth week went, what I'm looking forward to in the future, and some of my favorite things from the week.
date: 03/26/2023
image: https://images.unsplash.com/photo-1608889175638-9322300c46e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80
---

# What I did this past week

This week was fairly relaxed overall. I mostly worked on added searching, sorting, and filtering functionality to my group's IDb project. My work has been on the frontend, and I am finished with 2 out of my 3 models, and need to add a means of searching throughout all three models. I expect to be done by either today or Monday, allowing others in my group plenty of time to make tests and make sure the application is good to go.

# Things that were in the way

There wasn't much that was in the way this week. I did have to spend some time figuring out to have all of the different dropdowns and search bars work lay out nicely on the page, but I was able to figure it out. I also had to spend some time taking all the filters, whose values were all stored in their own state variables and have their own onChange functions, and combine them into one object so that there was much redundant code.

# Plans for next week

I plan to finish up the project phase the IDB project, study for my geology exam on Thursday, and work more on my assignment for my cloud computing class. I expect it to be a fairly busy week, but nothing too crazy.

# Thoughts on Paper #10. Why getter and setter methods are evil

One sentence in the paper that really stood out to me was: "Don't ask for the information you need to do the work; ask the object that has the information to do the work for you". I think this aligns with the concept of encapsulation in object-oriented programming. By asking the object to perform the work instead of requesting the information and doing the work outside of the object, we are leveraging the object's internal state and behavior to achieve the desired outcome. This can lead to cleaner, more maintainable code that is easier to reason about and less prone to errors. I think this is a good way to think about getter and setter methods, and I will try to keep this in mind when writing code in the future.

# My experience with regexps, project, and cross join

Though I've worked with regexps before, I've almost always just fiddled around with them until they give me the output I desire. I liked that we wen't through and got to understand what each aspect actually meant. Project and cross join were cool because of how we're slowly building up to using the relational algebra in SQL.

# Happiest part of the week

A while back for my birthday, my roommated got me a Lego Infinity Gauntlet set. I finally got around to building it this week, and it was a lot of fun. I've always loved Legos and I feel like I'm a kid again every time I play with them.

# Pick-of-the-week

For the IDB project, I strongly recommend using the useState dependency array to avoid having to create unecessary event listening functions for every filter change. Having a single event listener that updates the state of all the filters at once is much cleaner and easier to reason about. 
