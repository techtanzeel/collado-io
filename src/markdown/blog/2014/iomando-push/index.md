---
title: "iomando Is Now Able To Push"
date: "2014-01-13"
path: "/blog/2014/iomando-push"
tags: ["iomando", "update", "product", "tech"]
featured: "false"
excerpt: "Introducing iomando 2.0.1, the ~~not that~~ minor update that brings along push synchronization across the board. The feature that nobody will see, but everybody will notice."
---

It's been more than a month since we [introduced iomando 2.0](/blog/2013/iomando-20), alongside a [revamped electronic unit](/blog/2013/iomando-20-hardware). If you haven't read it, we also attempted to unpack some features in a "[behind-the-scenes](/blog/2014/iomando-20-behind)" type of post.

Despite iomando 2.0 brought a handful of new features, there was "one more thing", though, we were extremely excited about, but left out from the release because by the time it wasn't fully baked.

But now, it is.

Yesterday, we issued an update to our apps, 2.0.1, a minor one. The kind of point one that usually addresses some boring combination of "bug fixes and performance improvements" nobody pays attention to.

Yet this one was different. It contained a hidden gem that you might never actually "see", but something you'll definitely "notice". A feature we've been praising for a long, long time.

For quite a while, we've been working to improve the communication flow between the server, the electronic unit, and the smartphone app. Since the very beginning, we've been introducing new features that made the product faster, more secure and more reliable. But there was still a loose end, waiting to be solved.

The actions our users made were not computed in real time. Which was, ultimately, the reason why this existed 👇

![iomando 2.0.1 — pull to refresh](./iomando-pull.gif "We are moving on from pull to refresh, now it all happens smoothly, in real time, no user action required")

As an oversimplified picture of the issue, here's an example: every time an admin made an edit to the management console — or the new mobile management tool released with iomando 2.0, the change was recorded on the server, but it was not sent to the affected devices.

So ADMIN wanted to update permissions for a given USER, and change her open schedule to start at 6pm instead of 8pm. So far ADMIN would make the change, but the USER's app wouldn't get this new schedule immediately, automatically.

This wouldn't, in any case, lead to a potential security breach, because the truth would always be held in the server — the truth is in the cloud, they say. But it could be inconvenient from a user perspective since the app wouldn't display the right information sometimes.

All this happened because we used to rely on the apps to retrieve, or pull, the information "manually", producing some synchronization troubles when something like the aforementioned situation occurred. Which was more often than we wanted to admit.

The "one more thing" — that arrives more than a month late, is the kind of "thing" that will solve once for all these situations. To summarize the feature introduced with iomando 2.0.1: our communications layer will stop working on a pull basis, to start instead, pushing things around, in real time.

iomando 2.0.1 officially supports push communications.

This means that all the changes in the server side are pushed immediately to the devices, and boy it is fast. As always, there is no user intervention required, it should all work smoothly as soon as the update is installed in each device.