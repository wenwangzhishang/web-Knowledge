---
title: 浏览器缓存机制
category: 前端杂谈
order: 3
---


web缓存描述 ：
Web 缓存是可以自动保存常见文档副本的 HTTP 设备。当 Web 请求抵达缓存时， 如果本地有“已缓存的”副本，就可以从本地存储设备而不是原始服务器中提取这 个文档。（此结论来自http权威指南）
缓存的优缺点：
优点：

缓存减少了冗余的数据传输，节省了你的网络费用。
缓存缓解了网络瓶颈的问题。不需要更多的带宽就能够更快地加载页面。
缓存降低了对原始服务器的要求。服务器可以更快地响应，避免过载的出现。
缓存降低了距离时延，因为从较远的地方加载页面会更慢一些。

缺点：

缓存中的数据可能与服务器的数据不一致；
消耗内存；

缓存验证概述：
缓存可分为强缓存和协商缓存。
   
1，浏览器进行资源请求时，会判断response headers是否命中强缓存，如果命中，直接从本地读取缓存，不会向服务器发送请求，
       
2，当强缓存没有命中时，会发送请求到服务端，判断协商缓存是否命中，如果命中，服务器将请求返回，不会返回资源，告诉浏览器从本地读取缓存。如何不命中，服务器直接返回资源  
区别： 强缓存命中，不会请求服务器，直接请求缓存；协商缓存命中，会请求服务器，不会返回内容，然后读取缓存；

缓存的处理流程
from memory cache 和 from disk cache的区别
from memory cache：字面理解是从内存中，其实也是字面的含义，这个资源是直接从内存中拿到的，不会请求服务器一般已经加载过该资源且缓存在了内存当中，当关闭该页面时，此资源就被内存释放掉了，再次重新打开相同页面时不会出现from memory cache的情况
from disk cache：同上类似，此资源是从磁盘当中取出的，也是在已经在之前的某个时间加载过该资源，不会请求服务器但是此资源不会随着该页面的关闭而释放掉，因为是存在硬盘当中的，下次打开仍会from disk cache 

from memory cache代表使用内存中的缓存，from disk cache则代表使用的是硬盘中的缓存，浏览器读取缓存的顺序为memory –> disk。

访问https://heyingye.github.io/ –> 200 –> 关闭博客的标签页 –> 重新打开https://heyingye.github.io/ –> 200(from disk cache) –> 刷新 –> 200(from memory cache)

我们需要了解内存缓存(from memory cache)和硬盘缓存(from disk cache)，如下:

内存缓存(from memory cache)：内存缓存具有两个特点，分别是快速读取和时效性：

快速读取：内存缓存会将编译解析后的文件，直接存入该进程的内存中，占据该进程一定的内存资源，以方便下次运行使用时的快速读取。

时效性：一旦该进程关闭，则该进程的内存则会清空。

硬盘缓存(from disk cache)：硬盘缓存则是直接将缓存写入硬盘文件中，读取缓存需要对该缓存存放的硬盘文件进行I/O操作，然后重新解析该缓存内容，读取复杂，速度比内存缓存慢。

在浏览器中，浏览器会在js和图片等文件解析执行后直接存入内存缓存中，那么当刷新页面时只需直接从内存缓存中读取(from memory cache)；而css文件则会存入硬盘文件中，所以每次渲染页面都需要从硬盘读取缓存(from disk cache)。

以下是缓存实现的四种方式
强缓存
强缓存又分为Expires 和 Cache-Control
Expires,该值是一个GMT时间格式个字符串，浏览器进行第一次请求时，服务器会在返回头部加上Expires，下次请求，如果在这个时间之前则命中缓存，



app.get('/', (req, res) => {  

    const cssContent = path.join(__dirname, './html/index.html');  

    fs.readFile(cssContent, function(err, data) { 

          res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());  

        res.end(data);  

    })  

});  

复制代码Cache-Control ，该值是利用max-age判断缓存的生命周期，是以秒为单位，如何在生命周期时间内，则命中缓存

app.get('/', (req, res) => {
    const cssContent = path.join(__dirname, './html/index.html');
    fs.readFile(cssContent, function(err, data) {
        res.setHeader("Cache-Control", "max-age=0");
        res.end(data);
    })
});

复制代码命中缓存：

协商缓存
协商缓存利用Last-Modified , If-Modified-Since 和 ETag , If-None-Match来实现
Last-Modified , If-Modified-Since
Last-Modified： 表示为为实体头部部分，response返回，表示为资源的最后更新时间

If-Modified-Since：通过比较两次的时间判断，资源在请求期间是否有修改，假如没有修改，则命中协商缓存，浏览器从缓存中读取资源，如果没有命中，资源有过修改，返回新的Last-Modified时间和服务器资源
    app.get('/', (req, res) => {
    const cssContent = path.join(__dirname, './html/index.html')
    fs.stat(cssContent, (err, start) => {
        if (req.headers['if-modified-since'] === start.mtime.toUTCString()) {
            res.writeHead(304, 'Not Modified');
            res.end();
        } else {
            fs.readFile(cssContent, function (err, data) {
                let lastModified = start.mtime.toUTCString();
                res.setHeader('Last-Modified', lastModified);
                res.writeHead(200, 'OK');
                res.end(data);
            })
        }
    })

});
复制代码ETag , If-None-Match
有些情况下仅判断最后修改日期来验证资源是否有改动是不够的：
1，存在周期性重写某些资源，但资源实际包含的内容并无变化；
2，被修改的信息并不重要，如注释等；
3，Last-Modified无法精确到毫秒，但有些资源更新频率有时会小于一秒。

ETag:为相应头部字段，表示资源内容的唯一标识，随服务器response返回；

If-None-Match: 服务器比较请求头中的If-None-Match和当前资源中的etag是否一致，来判断资源是否修改过，如果没有修改，则命中缓存，浏览器从缓存中读取资源，如果修改过，服务器会返回新的etag，并返回资源；
app.get('/home', (req, res) => {  

    const cssContent = path.join(__dirname, './html/index.html')

    fs.stat(cssContent, (err, start) => {

        let etag = md5(cssContent);

        if (req.headers['if-none-match'] === etag) {

            res.writeHead(304, 'Not Modified');

            res.end();

        } else {

            fs.readFile(cssContent, function (err, data) {

                res.setHeader('Etag', etag);

                res.writeHead(200, 'OK');

                res.end(data);

            })

        }

    })

});
复制代码不推荐使用 Expires 首部，它指定的是实际的过期日期而不是秒数。HTTP 设计者 后来认为，由于很多服务器的时钟都不同步，或者不正确，所以最好还是用剩余秒 数，而不是绝对时间来表示过期时间。
ETag解决了Last-Modified使用时可能出现的资源的时间戳变了但内容没变及如果再一秒钟以内资源变化但Last-Modified没变的问题，感觉ETag更加稳妥。
补充：根据浏览器缓存策略，Expire和Cache-Control用回车、后退、F5刷新会跳过本地缓存，每次都会从服务器中获数据。

参考：https://mp.weixin.qq.com/s/d2zeGhUptGUGJpB5xHQbOA




