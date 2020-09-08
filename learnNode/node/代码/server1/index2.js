let http = require('http');
// 创建server对象
let server = http.createServer();
//路径模块
let path = require('path');
//fs模块
let fs = require('fs');


server.on('request',(req,res)=>{
    //解析路径,将请求的路径地址解析成对象
    let urlObj = path.parse(req.url)
    console.log(urlObj)

    if(req.url=="/"){
        res.setHeader('content-type','text/html;charset=utf-8');
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>老陈-烧烤！</h1>
                <img src="./static/a.png" alt="">
                <img src="./static/sk.jpg" alt="">
            </body>
            </html>
        `)
    }else if(urlObj.dir=="/static"){
        // 设置响应头，告诉浏览器，返回的内容类型
        res.setHeader('content-type',getContentType(urlObj.ext));
        // 读取文件给到浏览器
        let rs = fs.createReadStream('./static/'+urlObj.base);
        // 将读取的文件给到响应对象
        rs.pipe(res)
    }else{
        res.end('404 not found')
    }
})


function getContentType(extName){
    switch(extName){
        case ".png":
            return "image/png";
        case '.jpg':
            return 'image/jpeg';
        case ".css":
            return 'text/css;charset=utf-8';
        case '.json':
            return 'text/json;charset=utf-8';
        case '.html':
            return 'text/html;charset=utf-8';
        case '.js':
            return 'text/javascript;charset=utf-8'

    }
}

// 启动服务器，监听服务器端口
server.listen(3000,function(){
    console.log('服务器已启动：',"http://127.0.0.1:3000")
})