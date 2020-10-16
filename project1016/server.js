// 기존의 http 모듈만으로 구축했던 서버에는 기능상 부족한 점이 많다.
var http=require("http");
var fs=require("fs");

var server=http.createServer(function(request, response){
    fs.readFile("./list.html", "utf-8", function(error, data){
        if(error){
            console.log("list.html reading error", error);
        }else{
            response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
            response.end(data);
        }
    });
});

server.listen(8888, function(){
    console.log("The Server is running at 8888 port...");
});
