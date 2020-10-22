# 使用 TypeScript 编写 Screeps 脚本的项目

## Start
### 自动编译 TypeScript
> tsc --init 初始化 tsconfig.json
>
> Webstorm >> preferences >> Languages & Framework >> TypeScript 
- [x] Recompile on changes

### 账号登录
1. 在项目根目录中添加文件 .screeps.json
2. 添加账号信息
```json
{
  "email": "email",
  "password": "password",
  "branch": "default",
  "ptr": "ptr"
}
```
