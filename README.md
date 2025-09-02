# 文章审查系统

## 项目概述
这是一个基于无服务器架构的文章审查系统，允许用户提交他们的文章并进行审查与评分。使用云服务提供的无状态函数来处理用户请求，确保高可扩展性和低维护成本。

## 特性
- 用户注册和登录
- 文章提交和编辑
- 审查和评分机制
- 实时通知和更新
- 数据存储在无服务器数据库中

## 技术栈
- AWS Lambda
- DynamoDB
- API Gateway
- Cognito
- S3 (用于存储文章文件)

## 如何运行
1. Clone this repository.
2. 配置AWS凭证。
3. 部署无服务器函数。
4. 通过API Gateway访问系统。

## 贡献
欢迎贡献！请遵循下面的步骤：
1. Fork此仓库。
2. 创建你的分支 (`git checkout -b feature-xxx`)
3. 提交你的修改 (`git commit -m 'Add some feature'`)
4. Push到分支 (`git push origin feature-xxx`)
5. 创建Pull Request。

## 许可证
此项目采用 MIT 许可证，详情请见 LICENSE 文件。