# 编译脚本 buildScript.sh

logUpdatePath="log/update"

logBuildPath="log/build"

# 更新依赖

logDate=$(date +"%Y-%m-%d-%H-%M")

if [ ! -d "$logUpdatePath" ]; then

mkdir -p $logUpdatePath

fi

if [ ! -d "$logBuildPath" ]; then

mkdir -p $logBuildPath

fi

echo "更新依赖"

npm install

echo "编译项目"

npm run build

echo "设置权限"

chown -R www:www dist/[^.]*

echo "运行结束"
————————————————
版权声明：本文为CSDN博主「weixin_39951295」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_39951295/article/details/111857257