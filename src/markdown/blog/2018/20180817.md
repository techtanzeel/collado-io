---
title: "Moving collado.io"
date: "2018-08-17"
path: "/blog/2018/moving-collado-io"
tags: ["update"]
featured: "false"
excerpt: "After more than five years hosted at Squarespace, this very blog is taking its biggest leap forward and moving to its own, new place."
---

For more than five years I have been consistently jotting down thoughts and ideas at collado.io. Topics ranging from [product stories at iomando](/work/iomando), [the experience at Ironhack](/work/ironhack), [summaries of the books I liked](/tags/books) or just [random thoughts](/tags/idea) that kept me awake at night. They all have accounted for more than one hundred fifty entries so far.

What started as a way to crystalize what I learnt, has become a journey of discovery in itself. In the early days, writing meant to me no more than stitching words in front of the other, yet I started because I was afraid of forgetting the ideas on the books I was reading.

In other words, I wanted to create a backup drive for my brain, you know, just in case.

But soon I realized that the sole process of [sitting down and write](/blog/2018/war-of-art) was also teaching me how to think: broadening my perspective, structuring my reasoning and slowly smoothing my roughest thoughts out. An invaluable asset nowadays I couldn't live without.

Writing has profoundly changed the way I approach problems both in my personal and professional life.


## Squarespace
collado.io's content has always been hosted at Squarespace.

But, why Squarespace?

Simple, yet a little bit embarrassing. If you have ever wondered who has "clicked-bait" at one of those Squarespace codes the whole podcast tribe throw at you show after show during the ad break, wonder no more, you just met a "success story".

I kept hearing "the ads" — right at the time the thought of starting a blog wandered my mind, and the rest... well, I suppose the rest is how brand advertisement works. You just get 20% off your first month and stick with them for the next five years. They surely know a thing or two about LTV.

After these years, Squarespace has been an extremely reliable partner. Despite that if I were to go back in time and do it again maybe I'd choose another tool, I only have words of gratitude for the service and the team behind. During all these years they flawlessly kept the show up and running and never failed me, not even once.

I can't recommend them enough and I have nothing but admiration for their product. Unfortunately, my time with Squarespace has come to an end.


## Going Solo
collado.io is moving to a [new place](https://www.netlify.com/) accompanied by a [new partner](https://www.gatsbyjs.org/), and these are the reasons why:

* Gain (full) ownership over my content. At some point, I realized that my posts were, in a way, part of my small history. I trusted Squarespace and I was not paranoiac about privacy or control, but owning my content was personally important. Maintenance-wise, it is much easier to let Squarespace "do the magic", but I like the idea of self-hosting a bunch of markdown files, that could be moved around from one place to another without worrying much about walled gardens.
* Big plans for collado.io. Right now collado.io is just a personal blog that could be hosted elsewhere without the hassle of taking care of the entire site. It is reasonable to argue that, for the sole purpose of writing, Squarespace — or any other blogging platform, is a better bang for the bank. True, but collado.io has big plans for the future and wants to move beyond "basic blogging" and Squarespace was not the right tool for the job anymore.
* Learn by doing. During the last couple of years I've been devoting almost all my free time to coding. What started as a [naive exploration with Ruby](/blog/2016/ironhack-experience), that led me to [discover the world of data science](/blog/2018/udacity-dand), has become a [love story with Javascript](/blog/2018/udacity-rdnd), specially, React. The idea of "aligning" my largest side project (collado.io) with my newly acquired skills sounded like something I'd definitely wanted to do.

The simplicity and the beauty of running my own lightweight site, something I built myself, and the eagerness to learn throughout the process are the main drivers behind my decision.

A decision I know won't be easy: most of the posts have to be manually imported and rewritten in markdown, the site's management won't be as plug-and-play as it used to be, and devops or security are new areas I don't have any expertise or experience with... the list goes on and on.

This "move" will cost me a lot in terms of time and frustration, anyone who has learned to code knows exactly what I am talking about. But as with other ~~crazy~~ projects I [embarked in the past](/blog/2016/the-power-of-not-knowing), I know I will figure it out.

Above all, I am ultimately convinced the journey will be rewarding and, in the long run, I'll look back with proudness over what I did.


## The Move
Finally, if you made down here, I assume you are interested in the *how does this work* or *how it affects a random reader* at collado.io.

You can check out the detailed project roadmap in the [GitHub Board](https://github.com/MarcCollado/collado-io/projects/1) I set up in the site's repository, but oversimplifying, the move consists in four distinct parts:

1. Setting up the Gatsby site and achieving feature parity with Squarespace. This one is partially completed, because the Gatsby site is obviously up, but not all the Squarespace's features are yet available. I'm currently working on it; and expect to complete it by the end of Q3 2018.
2. Moving the content from Squarespace. Here it comes the painful, cumbersome part. I know there are ways to "automate" the process, but since the amount of content is not in the "thousands" and I derive (some) pleasure out of rereading stuff I wrote some years ago, I decided to do it "manually". I still moved some pieces from 2013 and 2018; and expect to complete the entire "moving" by the end of Q2 2019.
3. Sunsetting Squarespace. Until the end of Q3 2018 I will maintain both sites in parallel: the Squarespace site will remain live at [collado.io](collado.io) and the Gatsby site will live at [next.collado.io](next.collado.io). Starting Q4 2018 the Gatsby site will be moved to [collado.io](collado.io) and it will be the only one maintained and receiving new content. During this period (from the beginning of Q4 2018 until the end of Q2 2019) the Squarespace site will still be accessible at [archive.collado.io](archive.collado.io), but no longer receive new content. The Squarespace site will be finally phased out by the end of Q2 2019 when (2) is completed.
4. All in with Gatsby. Starting next week I will release the first Gatsby-only project (this one in particular won't be in Squarespace, despite being released before Q4 2018) which will keep me fairly busy until the end of (2). Once all the content has been moved to Gatsby I will start "unveiling" all the new projects I keep in the [backlog](https://github.com/MarcCollado/collado-io/projects/1) for collado.io.

Exciting times ahead for collado.io — stay tuned at its [GitHub repository](https://github.com/MarcCollado/collado-io).