<h1 align=center>
<img src="https://res.cloudinary.com/nataliebravo/image/upload/v1630406853/NFT/banner_npzzzz.png" />
</h1>

<div align="center">
  
![License](https://img.shields.io/badge/license-MIT-737CA1?style=flat-square) 
![Node_Badge](https://img.shields.io/badge/node-14.16.1-green?style=flat-square)
![Npm_Badge](https://img.shields.io/badge/npm-6.14.12-yellow?style=flat-square)
![React Badge](https://img.shields.io/badge/React-17.0.2-45b8d8?style=flat-square)
![Solidity_Badge](https://img.shields.io/badge/Solidity-%5E8.0.0-363636?style=flat-square)
![Truffle](https://img.shields.io/badge/Truffle-5.3.14-F0E8E0?style=flat-square)
[![Made by NatalieBravo](https://img.shields.io/badge/made%20by-NatalieBravo-blueviolet?style=flat-square)](https://www.linkedin.com/in/nataliebravo/)
</div>

# Summary

- [About](#about)
- [Preview](#preview)
- [Architecture and Client-side Flow](#architecture)
- [Built with](#technologies)
- [How to Use](#how-to-use)
- [TODO](#todo)
- [License](#license)

<a id='about'/>

## :information_source: About

Galerie is a NFT Marketplace that enables the creation, sale, and purchase of digital art as NFTs.


<a id='preview'/>

## :framed_picture: Preview

Check out how it looks:

<p align="center">
 <img alt="Homepage print"   src="https://res.cloudinary.com/nataliebravo/image/upload/v1630412771/NFT/galerie-homepage_kznhvx.png" >
<p />

<a id='architecture' />

## :information_source: Architecture and Client-side Flow

<p align="center">
  <img alt="Client-Flow"src="https://res.cloudinary.com/nataliebravo/image/upload/v1626701427/NFT/client-side-flow_iqhq9a.png">
<p />

<p align="center">
  <img alt="Architecture"src="https://res.cloudinary.com/nataliebravo/image/upload/v1626701440/NFT/arquitechure_hunzuw.png">
<p />


<a id='technologies'/>

## :gear: Built With

This project was developed with the following technologies:

#### **Frontend** <sub><sup>React + JavaScript</sup></sub>
  - [React](https://pt-br.reactjs.org/)
  - [Axios](https://github.com/axios/axios)
  - [Redux](https://redux.js.org/)
  - [Web3.js](https://web3js.readthedocs.io/en/v1.3.4/)
  - [Material UI](https://material-ui.com/pt/)

#### **Backend** <sub><sup>Express</sup></sub>
  - [Express](https://expressjs.com/pt-br/)
 
#### **Blockchain and Smart Contracts** <sub><sup>Solidity</sup></sub>
  - [Solidity](https://docs.soliditylang.org/)
  - [Truffle](https://www.trufflesuite.com/)
  - [Ganache](https://www.trufflesuite.com/ganache)


<a id='how-to-use'/>

## :joystick: How to Use

### Requirements

To run the application you'll need:
* [Git](https://git-scm.com)
* [Node](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
* [Truffle](https://www.trufflesuite.com/)
* [Ganache](https://www.trufflesuite.com/ganache)
* Clone the repository:
  * ```$ git clone https://github.com/BravoNatalie/NFT-Marketplace.git ```


Now go to project folder and run:


```bash
$ cd NFT-Marketplace

# install the dependencies
$ yarn

# run ganache
$ ganache-cli

# deploy de contracts on the blockchain
$ truffle migrate

# run the client-side
$ cd client
$ yarn
$ yarn start

# run the backend
$ cd backend
$ yarn
$ yarn start
```

<a id='todo'/>

## :page_with_curl: TODO

There are some things to be done in the project:
  - State persistence;
  - Revise front-end call to the buy and sell functions on the blockchain;
  - Error handling;
  - NFT cards to reflect the true information of price coming from the blockchain.

<a id='license'/>

## :page_with_curl: License

This project is under the **MIT license**. See the [LICENSE](https://github.com/BravoNatalie/NFT-Marketplace/blob/master/LICENSE) for more information.


## :mailbox_with_mail: Get in touch!

<p align="center">
<a href="https://www.linkedin.com/in/nataliebravo/" target="_blank" >
  <img alt="Linkedin - Natalie Bravo" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>
<a href="mailto:natalie.bravo@ice.ufjf.br" target="_blank" >
  <img alt="Email - Natalie Bravo" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
</a> 
<br/>
  Made with :coffee: and ❤️ by <b>Natalie Bravo</b>.
<p/>


准备工作
1、安装nodejs
2、安装yarn
3、安装truffle
4、安装ganache

环境：
truffle --version
Truffle v5.11.5 (core: 5.11.5)
Ganache v7.9.1
Solidity v0.5.16 (solc-js)
Node v18.20.2
Web3.js v1.10.0


我来帮您分析这个NFT市场项目的技术栈、功能业务流程以及如何运行启动。让我先查看项目的关键文件来了解详细信息。


[4 tools called]

现在让我查看智能合约和主要组件文件来了解业务流程：


[4 tools called]

让我再查看一些关键的前端页面和Redux配置：


[4 tools called]

现在让我创建一个任务列表来整理这个项目的分析：


[1 tool called]

基于我对项目代码的分析，让我为您详细介绍这个NFT市场项目的技术栈、功能业务流程以及如何运行启动。

## 🎨 项目概述

这是一个名为 **Galerie** 的去中心化NFT市场平台，允许用户创建、销售和购买数字艺术品作为NFT。

## ��️ 技术栈分析

### **前端技术栈**
- **React 17.0.2** - 主要前端框架
- **Material-UI 4.12.3** - UI组件库，提供现代化界面
- **Redux 4.0.5** - 状态管理
- **React Router 5.2.0** - 路由管理
- **Web3.js 1.4.0** - 区块链交互库
- **Axios 0.21.1** - HTTP客户端
- **React Dropzone** - 文件上传组件
- **Bootstrap 5.0.2** - CSS框架

### **后端技术栈**
- **Express.js 4.17.1** - Node.js后端框架
- **Multer 1.4.2** - 文件上传处理
- **CORS 2.8.5** - 跨域资源共享
- **UUID 8.3.2** - 唯一标识符生成

### **区块链技术栈**
- **Solidity ^0.8.0** - 智能合约开发语言
- **Truffle 5.4.0** - 智能合约开发框架
- **Ganache** - 本地区块链测试网络
- **OpenZeppelin Contracts 4.2.0** - 安全的智能合约库
- **Web3.js** - 前端与区块链交互

### **开发工具**
- **Node.js 14.16.1**
- **Yarn/NPM** - 包管理器
- **Git** - 版本控制


[1 tool called]

## �� 功能业务流程

### **核心功能模块**

#### 1. **NFT创建流程**
- 用户上传数字艺术品文件
- 填写NFT元数据（标题、描述、价格）
- 后端处理文件上传并生成元数据URL
- 调用智能合约mint函数创建NFT
- NFT自动授权给市场合约

#### 2. **NFT销售流程**
- NFT所有者将NFT上架到市场
- 设置销售价格（ETH）
- 市场合约验证所有权和授权
- 创建销售记录并发出事件

#### 3. **NFT购买流程**
- 浏览市场中的NFT列表
- 选择要购买的NFT
- 支付ETH购买NFT
- 自动转移NFT所有权
- 向卖家转账ETH

#### 4. **数据管理流程**
- 前端通过Web3.js与区块链交互
- 后端API管理NFT元数据和图片
- Redux管理应用状态
- 实时同步区块链数据

### **智能合约架构**

#### **ArtToken.sol** (ERC721 NFT合约)
- 继承OpenZeppelin的ERC721标准
- 实现NFT的铸造、转移、查询功能
- 存储NFT元数据URI
- 自动授权市场合约

#### **ArtMarketplace.sol** (市场合约)
- 管理NFT的销售和购买
- 处理ETH支付和NFT转移
- 维护销售记录和状态
- 实现权限控制和验证


[1 tool called]

## 🏗️ 项目架构设计

### **整体架构**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   前端 (React)   │    │   后端 (Express) │    │   区块链网络     │
│                 │    │                 │    │                 │
│ • 用户界面      │◄──►│ • API服务       │    │ • Ganache      │
│ • Web3交互      │    │ • 文件存储      │    │ • 智能合约      │
│ • 状态管理      │    │ • 元数据管理    │    │ • NFT交易       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### **前端架构**
- **组件化设计**: Header、Card、DropZone等可复用组件
- **页面路由**: Home、CreateNFT、Item详情页
- **状态管理**: Redux管理NFT数据、账户信息、合约实例
- **区块链集成**: Web3.js处理钱包连接和合约交互

### **后端架构**
- **RESTful API**: 处理NFT元数据和图片上传
- **文件管理**: Multer处理图片上传，存储在imgs目录
- **数据存储**: JSON文件存储NFT元数据
- **跨域支持**: CORS配置支持前端访问

### **智能合约架构**
- **模块化设计**: 分离NFT合约和市场合约
- **安全标准**: 使用OpenZeppelin安全合约库
- **事件驱动**: 通过事件通知前端状态变化
- **权限控制**: 严格的访问控制和验证机制


[1 tool called]

## �� 项目启动运行指南

### **环境要求**
- Node.js 14.16.1+
- Yarn 或 NPM
- Git
- Truffle 5.4.0+
- Ganache (本地区块链)

### **详细启动步骤**

#### **1. 克隆项目**
```bash
git clone https://github.com/BravoNatalie/NFT-Marketplace.git
cd NFT-Marketplace
```

#### **2. 安装依赖**
```bash
# 安装根目录依赖
yarn install

# 安装客户端依赖
cd client
yarn install

# 安装后端依赖
cd ../backend
yarn install
```

#### **3. 启动本地区块链**
```bash
# 启动Ganache (在终端新窗口)
ganache-cli
# 或者使用Ganache GUI应用
```

#### **4. 部署智能合约**
```bash
# 在项目根目录
truffle migrate
# 或者
truffle migrate --reset
```

#### **5. 启动后端服务**
```bash
# 在backend目录
cd backend
yarn start
# 服务将在 http://localhost:3333 运行
```

#### **6. 启动前端应用**
```bash
# 在client目录 (新终端窗口)
cd client
yarn start
# 应用将在 http://localhost:3000 运行
```

### **使用说明**

1. **连接钱包**: 确保MetaMask已安装并连接到本地网络
2. **创建NFT**: 点击"Mint your art"按钮上传艺术品并创建NFT
3. **浏览市场**: 在首页查看所有可用的NFT
4. **购买NFT**: 点击NFT卡片查看详情并购买

### **常见问题解决**

- **合约未部署**: 确保Ganache运行且网络ID匹配
- **MetaMask连接失败**: 检查网络配置和账户余额
- **图片上传失败**: 确保后端服务正在运行
- **交易失败**: 检查账户ETH余额是否充足


[1 tool called]

## 📋 项目特色功能

### **已实现功能**
- ✅ NFT创建和铸造
- ✅ NFT市场交易
- ✅ 文件上传和元数据管理
- ✅ 钱包集成 (MetaMask)
- ✅ 响应式用户界面
- ✅ 实时区块链数据同步

### **待完善功能** (根据README中的TODO)
- �� 状态持久化
- 🔄 买卖功能的错误处理
- �� 价格信息实时显示
- �� 撤回上架功能

## 💡 技术亮点

1. **去中心化架构**: 基于以太坊区块链，确保交易透明和安全
2. **模块化设计**: 前后端分离，智能合约独立部署
3. **用户体验**: Material-UI提供现代化界面
4. **安全性**: 使用OpenZeppelin标准合约，经过安全审计
5. **可扩展性**: 支持添加更多NFT类型和市场功能

这个项目是一个完整的NFT市场平台，集成了现代Web开发技术和区块链技术，为数字艺术品的交易提供了安全、透明的解决方案。




ganache的账户：

Available Accounts
==================
(0) 0x23693325E1D0B371F272D915675A13EaA72FFc6a (1000 ETH)
(1) 0xb9cb43F537238f4527f34C36C8792581aA010eEf (1000 ETH)
(2) 0x6392460d04a7BB0Ac3a337e3B76927B5826728E7 (1000 ETH)
(3) 0xB18Ded3B814135A9084A72c365B49FAbAaE85Bb8 (1000 ETH)
(4) 0x07229A064944d7eA4Da6D2f8608949C55D4767FC (1000 ETH)
(5) 0x5cB069506e8eCAC911f26C4858E3D32667EE860b (1000 ETH)
(6) 0x315cA23Dbd8567b4261d3EBb2Cc78Bd0A3f9EA27 (1000 ETH)
(7) 0x70FC648F28AE7b363710fB94A869f7f6cEacA33B (1000 ETH)
(8) 0x424a912875092762E646EC8D957ae6f1F5D39A84 (1000 ETH)
(9) 0x5c041F591909AE87489fab9459Aa8f0e06F9AA4b (1000 ETH)

Private Keys
==================
(0) 0x519404daccb5778971d6a26cf9d29cddf56c15bff545ed0778d3451a05a8ce6d
(1) 0x2ea95f9041da19dbee47ee9deab8ea54154170ef1cbbf5d8114ef0707c9fd471
(2) 0xf52f3743f9f48a2330d3def63b202643f1efb20347f46eae10debab031c1cafc
(3) 0xe8ad0aa8a41d2d6f90e6e04b1d5922bd9aaec2b1e3f9b4c24b65bbb83f3113fc
(4) 0x7ff5363135a6a47e7564711cd67eb6a10c1faa1195c42e9179ba216f2474cc7c
(5) 0x4a68ea0f24358be796c2d65f860ea612a215dd4e78404e9a2d138734bb7929d4
(6) 0xee10a491d99933dce6e4c08e45a02b1089ad19e8377a083109b88ba489aeff39
(7) 0xc65ef28db17c03419c62ed6e0e2ddd0652f618550943a4587521e07df84bfd63
(8) 0xb8adc4a30cc8d17e5447f490d6cc198c2e5b5718cb536a8ef9df49f1af05c3cf
(9) 0x7202dc7907983b9a831381574952eb2c3408db1ae7f616ad10a8bf8310ddf063

HD Wallet
==================
Mnemonic:      pistol subway cross wink find small original bunker guess tissue cycle picnic
Base HD Path:  m/44'/60'/0'/0/{account_index}

Default Gas Price
==================
2000000000

BlockGas Limit
==================
30000000

Call Gas Limit
==================
50000000

Chain
==================
Hardfork: shanghai
Id:       1337



Starting migrations...
======================
> Network name:    'development'
> Network id:      1337
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0xbb1ade5aa767fc1b7eb83af10e73e1abab3666bef23bf009d450049a7654de5d
   > Blocks: 0            Seconds: 0
   > contract address:    0x079C0E4059A9Cf579b53e23471b8e6C95DCE9Fe5
   > block number:        1
   > block timestamp:     1757074353
   > account:             0x1547f48E88Bee4a68553A1E44c221ff2d127A367
   > balance:             99.99947612575
   > gas used:            155222 (0x25e56)
   > gas price:           3.375 gwei
   > value sent:          0 ETH
   > total cost:          0.00052387425 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:       0.00052387425 ETH


2_deploy_contracts.js
=====================

   Replacing 'ArtToken'
   --------------------
   > transaction hash:    0xe1154713c34503aefdf2fdc0c5a76cca338e78f0bb71f6e7be5d9ccb70fdd4a2
   > Blocks: 0            Seconds: 0
   > contract address:    0x05A0b492E53f157f2384E59060652640Bd9E64f1
   > block number:        3
   > block timestamp:     1757074353
   > account:             0x1547f48E88Bee4a68553A1E44c221ff2d127A367
   > balance:             99.99445712568445574
   > gas used:            1533406 (0x1765de)
   > gas price:           3.17565137 gwei
   > value sent:          0 ETH
   > total cost:          0.00486956286466622 ETH


   Replacing 'ArtMarketplace'
   --------------------------
   > transaction hash:    0x17f85f8fe75900b2223fd70e927f3295d04d00794cf4d269a287654c6c7431e9
   > Blocks: 0            Seconds: 0
   > contract address:    0x28Eb0EE162fb6546Eb3156f0d7D085CCbbA6654E
   > block number:        4
   > block timestamp:     1757074353
   > account:             0x1547f48E88Bee4a68553A1E44c221ff2d127A367
   > balance:             99.992320964894364698
   > gas used:            682539 (0xa6a2b)
   > gas price:           3.129727078 gwei
   > value sent:          0 ETH
   > total cost:          0.002136160790091042 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.007005723654757262 ETH

Summary
=======
> Total deployments:   3
> Final cost:          0.007529597904757262 ETH



0xc0Ed46cE8A77185c10a5Dfa301F33e5653915778