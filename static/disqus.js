(function() { 
    var d = document, s = d.createElement('script');
    s.innerText = `(function() { 
    var d = document, s = d.createElement('script');
    s.src = 'https://cp-janque-com.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})()`;
    (d.head || d.body).appendChild(s);
})();