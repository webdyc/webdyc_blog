# 编译脚本 buildScript.sh

# logUpdatePath="buildScript.sh"

# logBuildPath="docs/.vuepress/dist"

# 更新依赖
echo "进入脚本"
logDate=$(date +"%Y-%m-%d-%H-%M")

# if [ ! -d "$logUpdatePath" ]; then

# mkdir -p $logUpdatePath

# fi

# if [ ! -d "$logBuildPath" ]; then

# mkdir -p $logBuildPath

fi

echo "更新依赖"

npm install

echo "编译项目"

npm run build

echo "设置权限"

chown -R www:www docs/.vuepress/dist/[^.]*

echo "运行结束"