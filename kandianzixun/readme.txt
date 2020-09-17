看点资讯项目
1.将jar包上传到阿里云服务器指定目录下，比如/jar下
2.使用本地的navicat连接云服务的mysql，给mysql创建briup用户，密码briup，如果已有briup用户则不用再次创建，注意要核对密码。
  在云服务器mysql创建数据库info，执行info.sql文件的内容。执行成功后，给briup用户授权info数据库的权限。
3.然后启动云服务的jar包，本项目默认使用的端口是7788，注意，如果7788端口被占用了，注意指定端口启动项目
  正常启动命令：java -jar xxx.jar
  指定端口启动命令：java -jar xxx.jar --server.port=8002
4.访问swagger页面
  ip:端口/swagger-ui.html
5.测试登录接口或者到token认证，在swagger页面认证身份，然后访问后台任意一个接口看看是否正常

6.打开cms-ui压缩包，更改内部的访问后台的地址
java -jar /root/jar/cms-0.0.1-SNAPSHOT.jar --server.port=7799
java -jar /Users/darksoul/Desktop/kandianzixun/cms-0.0.1-SNAPSHOT.jar --server.port=7788

GRANT ALL PRIVILEGES ON info.* to 'briup'@'%';


