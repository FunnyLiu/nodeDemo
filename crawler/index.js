const Crawler = require('crawler')

let c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($("title").text());
        }
        done();
    }
});
c.queue('http://www.baidu.com/')
//use local proxy for get network package
c.queue([{uri:'http://www.baidu.com/',proxy:'http://127.0.0.1:8888'}])
