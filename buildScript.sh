# 编译脚本 buildScript.sh

# 更新依赖

logDate=$(date +"%Y-%m-%d-%H-%M")

echo "更新依赖"

npm install

echo "编译项目"

npm run build

echo "设置权限"

chown -R www:www dist/[^.]*

echo "运行结束"