---
title: "iomando: Prologue"
date: "2013-01-04"
path: "/blog/2013/iomando-prologue"
tags: ["business", "iomando"]
---

[iomando](/iomando) is a mobile product that provides cloud-managed keyless access solutions for mobile devices. Which in plain English means opening doors and stuff with your phone. The service enables its users to easily access and manage their spaces using a smartphone — instead of keys or remote controls. Thus providing a better experience and defining a whole new category when it comes to interact with accesses.

I co-founded the company back in 2011 and led the product team until 2015. By the end of 2017, iomando was acquired by [Citibox](https://citibox.com) — a Spanish startup that helps you receive goods when you are away.

This is the very first article of [the iomando series](/iomando), a recollection of posts where I explain the story behind the company from a product perspective.


## How It All Started
It was spring of 2011 in Barcelona and my last semester of college. That year I was also working part-time as a Product Manager at [Tech Data](https://www.techdata.com) and about to turn twenty-four.

Before diving into the story it is necessary to appropriately frame it within the context of the current time. By the end of 2011 mobile was already getting noticeable traction, but it was not ubiquitous — at least in Spain.

Mobile was already perceived as a potential enabler for new businesses and opportunities, but its preliminary applications were still fragile and inconsistent. It was a no-brainer that something huge was about to happen in the space, but back then, it lacked shape and the *how* was still far from clear.

> Just for technological reference, the iPhone 4S was the first mainstream device that supported Bluetooth 4.0, a key component of the yet to be called, Internet of Things (IoT). Nowadays it seems BLE has been around forever, but this iPhone was first introduced in October 2011.

Everybody seemed to envision a bright future for the IoT and *what would be possible* was a hot topic in the media. Sadly, still few understood how to build sustainable businesses models out of mobile technologies and a lot of companies were struggling to find ways to fit mobile in their current business strategy.

This is important because nowadays most of this stuff has been already figured out. Back in 2011, it was not. It is fairly easy to connect these dots looking backwards, but some of the markets as we know them, were partially locked because of technology constraints, and the IoT was definitely one of them.


## The Catalyst
I still could not articulate how, but at some point in time it was clear to me that certain trends were about to merge and the mobile industry would lead the way.

I'm sure back then this clarity looked more like a draft than an ordered list, but these are the main bullets that articulated the reasoning behind my hunch:

* Always connected: we were just starting to grasp the endless implications of having a permanently connected device with us all the time.
* Personal device: those devices brought with them something truly new, the sense of ownership. Smartphones came with you all the time and were moving the technology closer to us. The idea of *my device* was something we had not seen during the PC era.
* Interaction between physical and digital: the combination of the two firsts points defined the frontier between the physical world and personal digital experiences. In a way, our biological capabilities could be enhanced by these devices.
* Feature inheritance: mobile technologies were matching some features from single function devices. In most cases, they were even doing a better job than their former replacements, thanks to the software capabilities.
* Ephemeralization: I've always admired [Fuller's work](https://en.wikipedia.org/wiki/Buckminster_Fuller) and I'm 100% sold to the idea doing more with less as a byproduct of technological advancement. Mobile seemed to me the highest exponent of this trend.
* Mobile digital hub: the idea of [digital hub](https://www.youtube.com/watch?v=SYMTy6fchiQ) Steve Jobs introduced back in Macworld 2001, seemed to be moving away from computers and forming around mobile.


## The Starting Point
Despite the fact all the data pointed directly towards a whole new set of experiences powered by mobile technologies, the truth is that I did not even know where to start. The facts were there and they provided a solid foundation to build upon, but the link between *what was happening* and *what could be done* was still blurry.

Because of that, I started to explore: I bought myself an Arduino board and tinkered with it every night after work. I build some crappy applications mostly for fun.

I distinctly remember a cool hack that buzzed an alarm when the temperature of the house raised above a certain threshold, kind of a reminder to turn on the air conditioner. Unfortunately I was never able to hook it up with the thermostat in order to work full circle. I tried hard, though.

Among all the useless stuff I built, there was a tiny electronic board featuring a Wi-Fi module and a relay that could be triggered through TCP/IP from a local network. With this device and a local network, you could control anything you wanted: from the alarm, the garage door, to the irrigation system. It was some kind of rudimentary home automation system, but it was a cool idea at the time.


## Enter Mobile Technologies
I was really excited with the early prototypes, I did not have a clue where that was going, but neither I asked nor wondered. I knew I was having a lot of fun and this kept me going.

But then something incredible happened.

I just realized that mobile was the missing key to unlock the next step of my tiny project and quickly realized the full potential of the idea.

Now I see it as a perfect, clean and direct causation. Certainly back then it was not much of a revelation, but more of an iterative process. But inevitably, those paths had to converge at some point, and they certainly did.

On one end, you had the PC, that was limiting the "switching experience" because in order to interact with something you must go to the PC, turn it on, run the program, log in, find the device and pull the trigger. The process was not natural, it created a bunch of artificial steps in order to make that happen.

> It was great as an experiment, but definitely not great for something you actually want to use everyday.

On the other end, you had the electronic device[^1] you installed next to "the thing" you wanted to gain control over. It had to be connected to a Wi-Fi network in order to "talk" with the PC. That was a problem because you were always depending on the availability of the network, which was not ubiquitous.

The hack was constrained by design. It was constrained because it had anchors on both sides, it did not belong in there. It felt incomplete and out of place, as if we already had the recipe but not yet the ingredients.

It turned out mobile was the key to solve both.

First, a GSM module stacked in the main board solved the location constraint. Because of the GSM the device was not depending on any Wi-Fi or external connection. You could just plug it anywhere and it was already working.

Then I built a dead simple web-based mobile app, so the other end could be mobile, too. That solved the mobility side of the equation.

Also thanks to the sense ownership and the always connected nature of mobile, the experience of triggering the switch was, still far from being a product, but fast and delightful.

At the end of the day, I ended up with some kind of autonomous switch that could enable or control anything from a mobile device, without the need of any of configuration on the other side: plug&play.


## Co-Founder
At that point, by the end of 2011, I had no idea what could potentially be done with that invention. I guessed it might had some commercial applications, sure, but still I couldn't foresee a clear use for it. It was something like "I have build this thing that could be potentially great, but I'm not sure what the next steps should be".

I showed it to many friends and colleagues. Everyone thought it was cool, but no one knew what to make of it. It wasn't until one of my closest friends at college — and who later would become co-founder of the company, started to get really interested in the device and starting working together.

> We never talked about starting a business, though. We simply enjoyed discussing and trying to figure out the potential applications. Looking back, I have to admit that without him I wouldn't have had the courage start any of this.

We spend endless afternoons in his garage tinkering with the device. We considered several applications for it, but we weren't experts in any particular field, just two recent engineering grads. It was hard to seek problems without a deep understanding of the underlying industries, we weren't insiders.


## Solving a Problem
Over time I have come to realize that meaningful products are all about identifying real problems. So when it comes to build a great product you have to really understand the problem first, and only then, deliver the best experience in order to solve it.

This way you are not constrained when it comes to identifying the problem, because you start with a clean slate and you are not [biased](https://en.wikipedia.org/wiki/Confirmation_bias) by what could be done with the thing you have already build.

> iomando was (unintentionally) designed the other way around. We build something cool and then we had to look for a problem that could be addressed with that piece of technology. Definitely not the way it should be, but we were lucky enough to find a space where our technology was able to grow despite our ingenuity. That's not the playbook for the best products to reach the market, because your ability to choose a problem is constrained by the frontiers your product has already defined.

Back then though, we weren't thinking in terms of *solving a real problem* we just focused on *let's see what we can do with this*. We just wanted to give utility and meaning to the device we just created.

We weren't looking for real problems or user needs because we didn't know that was an important part of building a great product or company. We were blinded by the functionality, by the short term, and ultimately, we only wanted to put that thing in the hands of people.

At this point there's no clear moment (at least that I can remember) where we said "hey, we're going to use this thing to open doors!". It was not a personal itch nor our life's calling, but the low hanging fruit of the technology, that seemed to make a lot of sense.

Again, there's no magic or "aha" moment here, just this process of discovery that led to ask ourselves: "wouldn't it be great if we build a business out of it?", and that's exactly what we did.


## Enter iomando technologies
At the very end of 2011, we were both in a situation of unstable equilibrium: with secure jobs, but extremely excited about the prospect of starting a company. The problem though, is we had never started such thing before, and we were scared as hell.

We were scared about the idea of leaving the job, but we also knew that if we didn't devote ourselves to the project, it would eventually fade away. So in an attempt to perpetuate the flow we were in, we decided to formalize the paperwork and create the society iomando technologies sl.

![iomando first logo](./iomando-first-logo.jpg "iomando first logo")

We still didn't know exactly how the business model based on that technology would work. We had a solution to open doors with a mobile phone, but we also thought that *only open doors* felt incomplete. We were convinced that it was not possible to monetize and build a sustainable business out of a system to *just* open doors. We thought that we weren't tapping the big opportunity that could be build on top of a mobile service to open doors on demand, but we still hadn't a clear vision for that.

> Looking back we had the stupid assumption that a mobile service to open doors was a weak foundation to build upon. Despite no one was building something similar and it could potentially solve a real problem, we dismissed the idea because we felt we ought to build something bigger, with greater impact (whatever that meant). And the truth is that we ended up building something that nobody wanted.

Early 2012 we shifted our focus and started exploring other business models around the technology that we thought were more attractive. We flirted with park sharing because we were convinced that we could surface a hidden supply of empty spots within communal spaces.

---
[^1]: Back then it was the actual Arduino board.
