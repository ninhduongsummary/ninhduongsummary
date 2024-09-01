https://ninhduongsummary.github.io/ninhduongsummary/



### tags

- offline: các hoạt động offline/off (không hoạt động/ít hoạt động)
- livestream
- event: hoạt động sự kiện
- online: hoạt đông liên quan đến nhãn hàng, đối tác 
- nds: hoạt động riêng/sản phẩm riêng của ND 
- vlog


### category: 

- Daily : bài hằng ngày 
- Summary: bài tổng hợp
- Mine: bài viết cá nhân
- Highlight: quan trọng

### post 

https://github.com/ninhduongsummary/ninhduongsummary/tree/main/src/content/posts


### template 

```


---
title: Tin trong ngày dd/mm/yyyy
published: yyyy-mm-dd
description: "Tin trong ngày dd/mm/yyyy"
# image: "./cover.jpeg"
tags: ["online"]
category: Daily
draft: false
---

### Tóm tắt 


### Story

<video width="200" controls>
  <source type="video/mp4" src="" >
</video>


<img width="200" src="" />

### Threads 



```



### Git 

```
git add -A && git commit -m "commit all" && git push 

git reset HEAD~1 

```

### ffmpeg

```
ffmpeg -i input.mp4 -c:v libx265 -vtag hvc1 -c:a copy input_low.mp4


ffmpeg -i input.mp4 -vf fps=1 input_image/input_to_png%d.png


ffmpeg -i input.mov -qscale 0 output.mp4

```


### Setup 



https://docs.astro.build/en/guides/deploy/github/


### Facebook 

https://developers.facebook.com/docs/plugins/embedded-posts?locale=vi_VN

