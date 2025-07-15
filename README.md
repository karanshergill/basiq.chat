# Hardware
- Minimum 12GB RAM (16GB+ preferred)
- Quad-Core CPU
- 80GB+ SSD

# OS
- Ubuntu 24.04.2 LTS (Noble Numbat)

# Core Tools
- git, curl, unzip, make, build-essential, python3, g++

# Installation

```shell
sudo apt update
```
```shell
sudo apt install git curl unzip make build-essential python3 g++
```

# Deployment User
```shell
adduser deploy
```
```shell
usermod -aG sudo deploy
```
```shell
su - deploy
```

# Framework, Tools and Dependencies
- NVM 0.40.3
- Node: 22.16.0
- Meteor: 3.3

## NVM
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

## Node.js
```shell
nvm install 22.16.0
```

## Yarn
```
npm install -g yarn
```

## Deno
```shell
curl -fsSL https://deno.land/install.sh | sh
```

## Meteor
```shell
curl https://install.meteor.com/?release=3.0 | sh
```

# Git
```shell
git clone https://github.com/karanshergill/basiq.chat
```
```shell
cd basiq.chat
```




## Node.js and Yarn
```shell
nvm install x.x.x
```
```shell
node -v
```