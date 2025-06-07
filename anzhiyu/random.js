var posts=["posts/62142.html","posts/27630.html","posts/29402.html","posts/3083.html","posts/26403.html","posts/22073.html","posts/26480.html","posts/44647.html","posts/26479.html","posts/8.html","posts/38994.html","posts/41657.html","posts/26479.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };