---
title: "Speedometer Redesign"
date: "2011-11-11"
excerpt: "An analysis of speedometer design evolution in Chevrolet vehicles, exploring why most speedometers use multiples of 10 instead of 5, and the trade-offs between ideal behavior and actual driver habits."
tags: ["design", "user-experience", "automotive"]
author: "Kesava"
---

![Chevrolet Speedometer](/images/silverado.jpg)

In this [great post](http://annyas.com/chevrolet-speedometer-design/), Christian Annyas chronicles evolution of speedometer design in Chevrolets over the past few decades. The basic conceptual design hasn't changed much over the years. Some of them have got it really wrong like the horizontal unreadable ones from 1966 and 1970. But otherwise, they pretty much remain the same with different arc lengths and fonts, with one exception. The 1985 Silverado speedometer has speeds that end in 5s, while the rest of the speedometers are in multiples of 10.

## Design Trade-offs

My first reaction was the Silverado speedometer has the best design because most speed limits posted in the United States end in 5 (e.g. 25 in school zones and residential blocks, 35/45 on main/arterial streets, 55/65 on freeways). So this speedometer makes it so much easy for its drivers to make sure they are with in the speed limit. With multiples of 10 you always have to do an extra little computation step of reading between the markings on the dial.

That prompts a bigger question: **Why do most car makers make speedometers that have speeds posted in multiples of 10?** Is it because we use decimal system and we are so used to multiples of 10? There has to be a better reason than that. My guess is that – most drivers tend to add 5mph to the posted speed limit and make that their self-enforced speed limit (e.g. if the posted speed limit is 55, people tend to drive at upper limit of 59/60). A speedometer with multiples of 10 makes it easy for the drivers to keep track of this plus+5 speed, where as speedometer with 5s has the risk being a little over plus+5 because of possible parallax error while reading between the markings.

## The Verdict

So I guess the design choices boil down to what drivers **ought to do** (drive at speed limit) vs what drivers **tend to do** (drive at a revised speed limit of plus+5). The latter choice needs to win because that may prevent drivers from getting more speeding tickets and making up self-enforced speed limits that are more far off from the posted limits.

This is a classic example of designing for actual user behavior rather than ideal behavior – a principle that applies far beyond automotive design into all areas of user experience.
