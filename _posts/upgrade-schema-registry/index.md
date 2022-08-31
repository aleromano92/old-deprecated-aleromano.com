---
title: 'Upgrade Azure Schema Registry Without Downtime'
excerpt: 'Be careful updating apps due to breaking changes. Get inspired from what I did.'
date: '2022-08-31T00:00:00.666Z'
tags: ['azure', 'code']
author:
  name: Alessandro Romano
  picture: '../assets/blog/authors/aleromano.jpg'
---

## CONTEXT 🗒️

We use **Azure Schema Registry** so apps that need to produce and consume relevant events agree on an AVRO Schema.
Doing so guarantees you won't fail on an unexpected property name or a nullable field you thought was mandatory.

> If the producer is able to emit an event based on a Schema of the registry, the consumer will read it correctly.

We started using the `Standard` version not knowing there was a hard limit on the number of AVRO schemas versions you can have for Schema Group: 25.
And you can have only 1 Schema Group.
`Standard` costs 25 euro/month, `Premium` 900 euro/month.

But the problem here is we didn't decide to spare some money: we didn't read carefully the limit of the `Standard` plan nor did we study how hard the upgrade is. _SPOILER_: you cannot do a hot upgrade, you must create a new `Premium` Schema Registry.

We created a Producer and 2 Consumers before hitting the limit

## TRY & FALLBACK 🦾

We started from the consumers so we could upgrade the producer on its own and at different times.

It is crucial not to temporally bind the deployment of producer and consumers: should you roll back one of them, you are forced to roll back the 3 of them 😐

We modified the consumers so they try to deserialize the event from Schema Registry Premium first. If it fails, we fall back to the Standard one. If the Standard fails too, it's a rightful error ✅

Here's the diff:

```diff
PUT THE CODE HERE
```

The test consisted in just deploying it and observing It always enters the fallback branch.

We were able to update the Producer after 2 weeks: as soon as no other message was serialized with the `Standard` Registry, we removed the try&fallback code from the consumers ✂️

## SUCCEED

- try to limit updates' scope and not have too many systems depending on each other ⛓️
- always try the upgrade in a Test environment 🦺
- when you plan on using a new Cloud Service, make sure you know the limit of the chosen plan and how hard is to upgrade 🤓
- discuss your migration strategy with a colleague or someone you respect so you may catch some flaw in your logic 🧑‍🤝‍🧑

> DAJE.