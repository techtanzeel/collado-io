---
title: "Magis 1.0"
date: "2018-12-12"
path: "/blog/2018/magis-10"
tags: ["udacity", "product", "tech", "coding"]
featured: "false"
excerpt: "Introducing Magis 1.0, with a new name, continuous deployment, user authentication, real-time database... and an inconsequential, but exhausting data model refactor."
---

Early November I shared the [story behind a handful of tweaks](/blog/2018/would-you-rather-refactor) I made to the Would You Rather app, [Udacity's React Nanodegree](/blog/2018/udacity-rdnd) second project based on React & Redux.

That was quite a refactor, auditing each component of the code base (while reducing its "waist" by more than 30%) and making sure I was applying the best practices and new cool things I kept on learning after the Nanodegree.

By the end of the post, I also mentioned that from now on I'd try to be more consistent and incremental with its development, [documenting the roadmap](https://github.com/MarcCollado/magis/projects/1), properly adding issues to the project and working on it on a more regular basis, rather than doing massive, one-off pushes.

Well, here's take two, brought to you by a couple of vacation days I got for myself right after the [Valencia Marathon](https://www.strava.com/activities/1996244257). And while not sure "incremental" is the best word to describe it, working on it felt so good that I've decided to change its name (for a cooler one, more on that in a moment) and start versioning the thing to put a little bit of sanity to its future development.

That being said, let's once and for all stop the drumroll and jump straight into what's new.

First of all, a new name 🎉

I know this has nothing to do with a novel feature or an improvement to the app's performance, but what's the deal with an exceptional product if you don't have a ~~proper~~ fancy way to name it, huh? So I got my act together and started with the fundamentals.

And because you don't want your, or any product for that matter, to be named Would You Rather... I set aside ten minutes of my life in the search of a new name. And oh, boy, we have "the" name. The Would You Rather project is now called Magis, and I'm sure you're gonna love it 😂

Wait, what? Magis? Yes, Magis, which is the Latin word for "rather" — how cool is that?

Truth be told though, originally, I went for *Prius*, which is also a synonym for "rather", but it quickly won my heart because of the car-related notation. Nonetheless, after consulting with a friend that knows a great deal of Latin, she pointed out that *Prius*, despite being also used to manifest preference, had a more restricted applicability for time-bound transformations.

Long story short, [Magis it is](https://github.com/MarcCollado/magis).

And, now that we've got the fundamentals right, we can move to more interesting stuff, which brings us to the fact that Magis is also [live](https://magis.netlify.com).

Despite my devops skills do not stretch beyond GitHub continuous deployment through Netlify, I'd say I've learned a thing or two about that while [publishing this very site](/blog/2018/collado-io-live). In other words, I've reused all the acquired knowledge to get this project its place on the Internets.

Netlify supports plenty of functionality, but the continuous deployment means that it has a direct connection to its [GitHub repository](https://github.com/MarcCollado/magis) and all the commits to master are immediately deployed. For the rest of us, this simply means the project is now live in its latest version and accessible for anybody to check out and play with it — which inevitably leads us to the next update.

Magis is now able to handle user authentication, creating and managing users through Twitter & GitHub OAuth, which in combination with its continuous deployment means that you can create users and interact with the product yourself, in real-time.

![Magis User Authentication](./magis-auth.jpg "Magis is now able to create and manage users through Twitter & GitHub OAuth")

This new feature is supported by [Google Firebase](https://firebase.google.com/), a comprehensive mobile development platform I discovered thanks to Wes Bos' [React For Beginners course](https://reactforbeginners.com/) — which I couldn't recommend enough to React newcomers.

Finally, and also enabled through the Firebase stack, Magis now sports a real-time, [WebSocket-powered](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) database — which feels like black magic if you're used to working with Node.js & MongoDB for the backend.

Buff... that was quite an update: new name, continuous deployment, user authentication, and a real-time database... but, before we wrap this up, there's *one more thing*.

Actually, the trickiest *thing* of the entire update. Which is, in turn, frustrating, because this is something the average user [won't ever see or notice](http://www.folklore.org/StoryView.py?project=Macintosh&story=Signing_Party.txt).

As you might recall, the app state was maintained through [Redux](https://redux.js.org/), because the feature was a required specification of the project's rubric.

Therefore, a desirable feature would be to maintain the Redux store and the real-time database in-sync — so the app's UI gets instantaneously updated, but also keeps a copy of the user data in the cloud, away from the client.

In an "ideal world" this wouldn't pose any problem since the only thing one ought to do is to just update the reducers to include a final callback to sync the store with the remote database upon change on the data layer.

Yet I've learned this world was far from ideal, the hard way. It looks like [Firebase doesn't play nice with arrays](https://firebase.googleblog.com/2014/04/best-practices-arrays-in-firebase.html), and this becomes a problem if your entire Redux store data model is overrun with arrays...

Thus, one last honorable mention, the last feature of this update: cover to cover refactor of the entire Redux store. And pardon me if that seemed irrelevant, but I needed to get it out to the world, so at least, it won't go unnoticed hereafter.