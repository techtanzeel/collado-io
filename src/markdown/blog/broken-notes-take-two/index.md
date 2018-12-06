---
title: "Broken Notes — Take Two"
date: "2018-11-21"
path: "/blog/2018/broken-notes-take-two"
tags: ["design", "product"]
featured: "false"
excerpt: "In this second attempt, I distill the problems behind the note-taking experience from a product perspective, rather than taking an unreasonably opinionated approach, as I did in the first post."
---

Last week I shared [some thoughts](/blog/2018/broken-notes) about my frustrations around note-taking apps. Particularly, how most of them failed at organizing content, unable to create meaningful structures of domain knowledge from all the input the user had supplied over time.

Inadvertently, the post took a slightly philosophical turn, discussing the fundamental structure of note-taking apps and how I thought those should change in order to solve for *my* needs.

Rereading the whole thing, I believe I should have thought it twice before hitting the "publish" button. Besides being a little bit self-centered, the post suffers from the classic rookie mistake of prematurely jumping into possible solutions, without even considering the most fundamental aspects of the problem.

Rather than detailing the distinct problems that would give grounds for the existence of the product I was proposing in the first place, I just went straight to what I thought I wanted.

Consequentially, most of the feedback I've got revolved around the idea that the problem was not sufficiently understood, that I didn't get to the ultimate why. Because of this, in this "take two" I want to dive deeper, list my current struggles and distill the problem until it becomes crystal clear.


## Idle Input
Let's open with the basics. They say the best camera is not the one with more features nor the most expensive, rather the one that is always with you. The one that when the moment unexpectedly appears, it is ready to capture it. The smartphone is the best example of *the* thing that's with you all the time, ready to take action.

Notes are no different. Ideas fly by. A smart line in a meeting, an inspiring insight from a podcast during a commute... you think you'll remember, but you won't.

My personal experience tells me that the friction of opening the preferred notes app, creating a new note, giving it a title, writing the content, tagging it... is enough to prevent me from capturing that thought. It is not that much work, but enough, at least for me, to not do it most of the time.

This is the main reason why dozens of ideas end up constantly falling through the cracks. I'm lazy enough not to save them. I've played around with voice notes, a dedicated `#SaveForLater` tag... yet nothing worked, the pain remained.

My assumption though points to another direction: I want to think this is not a problem of effort, rather a circumstantial one.

In other words, what bothers me is that I have to input a piece of content into a medium which it doesn't belong to. Then I'm worried about stupid things like "am I formatting this the as I always do?" or "should I categorize this as a quote or an idea?" thus not focusing on the capturing itself, rather in the peripheral tasks that surround it.

A note is a blank canvas, it can be anything. The problem is that in my mind, I want it to work in a certain way, I want it to be the camera that's always with me, but now, I feel stuck with a tool that simply put was not designed to get the job done.

> If the input mechanism was optimized enough, with its fields already matching my mental data layer (author, source URL, media type) then adding content will turn into a delightful experience.


## Storing Content
Moving on from the capturing, this second problem deals with the storing of the already captured content. Along those lines, an endless (still ongoing) personal fight of mine has always been mapping out the way my brain "thinks" to an existing software tool. Believe me, I have tried, many, many times, but never succeeded.

Not to go through the full list, but as an example here are a few things a note should be able to capture and later store in a comprehensible way.

* Text input — this is the main idea
* Context (optional) — any related issue or theme that helps contextualize the idea
* Author/s
* Related author/s
* Source URL — which could autogenerate the media type
  * Media type — book, movie, podcast, tweet, article, blog post
* Tags — if it clearly belongs to a distinct descriptive topic

Tried to recreate something like this across categories, notes that grouped ideas, tags in multiple dimensions, such as topics, types of content, media sources... nothing worked. I even have mapped out the experience in diagrams, flows, and how it'd all fit with my inherited content.

Usually, after that, a part of me is convinced that this is *the one*, that it should work out this time around.

Truth be told, there is invariably a ~~sweet~~ delusional period of time while I'm convinced that I have nailed it for once and for all. Yet a few weeks later the whole thing starts cracking all over the place.

Then I'm left with dozens of notes captured in a new platform, the one I thought it'd be *the one*, but it wasn't. Which leads to the next problem.


## Silos Of Content
This one, in particular, is not a problem with note-taking apps themselves, rather a problem of mine. Having tried so many options, I ended up with my notes scattered around several apps and services — Evernote, Vesper, Ulysses, Bear, Apple Notes...

While this might not bother other people, it produces me a lot of mental anxiety. I have a list where I keep all the non-urgent things I'd like to do someday. These are essentially valueless but nice-to-have tasks such as digitize old pictures or clean up the attic storage.

Yet the first thing on that list is and has been for many years, to consolidate all my notes in a single platform. Up until this day I have never dared to start. Not only because it is *a lot* of work, but more important, because I'm afraid a new product will come up and all this effort would have been in vain.

> Summing it up, the problem with these two last sections is that no app has been able to neatly map the idea of "external brain" into a software product.

Which on the other hand, I totally understand. A note-taking app is an extremely malleable product that can be turned into almost anything. Narrowing it down to such rare use case would only hurt its market potential — in a market that's already pretty saturated.


## JIT Information
All note-taking apps are also usually great content storing mechanisms. But because a note can be turned into anything, the "file system" is totally disconnected from the note format and limits itself to folders, categories or tags.

While this might work when the stored content has the exact same hierarchy and format, I think the models fall apart when we want to abstract away the content from the file structure.

In other words, this classic file-based approach makes content really easy to search — which is great for OS file management — but really hard to find when you need it.

> Easy to search, hard to find.

Most of the time, all the content is not required. Instead what I envision are kind of sparks, cues, that lead me to the idea. The way my mind (and hopefully others, too) works is that the ideas are already passively stored, but the ability to search for it is not.

Say I want to pull out ideas about strength training. I don't want to be handed a book. I just want to recall all the instances or bites I have been absorbing over time: a quote, the main idea on a book, the takeaway from a podcast or even a highlight from a movie.

From those bites, my brain can take it from there and quickly start constructing the speech.

---

Well, that was a lot... at least I hope it has shed some more light to the idea and my struggles with the note-taking experience and the creation of an external brain for the curious minds.

It seems that lately I can't take this thought off my head, and really, every day that goes by I'm truly thinking of creating this thing, seriously.