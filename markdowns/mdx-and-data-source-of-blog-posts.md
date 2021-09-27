---
title: MDX and the data source of blog posts
createdBy: Jimmy Lin
createdAt: 2021-09-26 21:17
isDraft: true
subtitle: Here are some data source I consider to use in my blog posts.
---

# MDX and the data source of blog posts

Here are some data source I consider to use in my blog posts.

## TL;DR

| Source         | Support content     | Content stored | Online update | Github stars |
| -------------- | ------------------- | -------------- | ------------- | ------------ |
| MDX            | Anything            | As Markdown    | No            | 11.5k        |
| mdx-bundler    | Almost anything     | As Markdown    | Yes           | 0.7k         |
| react-markdown | Plain markdown only | As Markdown    | Yes           | 7.7k         |
| Quill          | Many but limited    | HTML-like text | Yes           | 30.9k        |

## What is MDX?

According to [https://mdxjs.com/](https://mdxjs.com/):

> MDX is an authorable format that lets you seamlessly write JSX in your Markdown documents.

That is to say, with MDX, you can write something like this:

```markdown
# Hello, **world**!

Below is an example of JSX embedded in Markdown.

<div style={{ padding: '20px', backgroundColor: 'tomato' }}>
  <h3>This is JSX</h3>
</div>
```
