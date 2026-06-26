# simulator_16 macOS 打包说明

这份说明用于在 Mac 上把 `simulator_16` 打成可运行的桌面应用。

## 1. 准备环境

- macOS 12 或更高版本
- 已安装 Node.js 20+ 或 22+
- 已安装 npm

可先检查：

```bash
node -v
npm -v
```

## 2. 进入项目目录

```bash
cd /你的路径/wdc16
```

## 3. 给脚本执行权限

```bash
chmod +x build-mac.sh
```

## 4. 直接执行打包

```bash
./build-mac.sh
```

默认会生成 Apple Silicon 版本（arm64）。

输出目录通常是：

```bash
dist/
```

## 5. 如果你想打 Intel Mac 版本

运行：

```bash
npm install
npm run build:mac:x64
```

## 6. 产物说明

生成结果会类似：

- `dist/simulator_16-darwin-arm64/`
- 或 `dist/simulator_16-darwin-x64/`

里面会有 `simulator_16.app`。

## 7. 第一次打开如果被系统拦截

如果 macOS 提示应用来源不明，可以：

1. 在 Finder 中找到 `simulator_16.app`
2. 右键
3. 选择“打开”
4. 再点一次“打开”

## 8. 可选：压缩后发给别人

```bash
cd dist
zip -r simulator_16-mac-arm64.zip simulator_16-darwin-arm64
```

如果你打的是 Intel 版，就把目录名换成 `simulator_16-darwin-x64`。
