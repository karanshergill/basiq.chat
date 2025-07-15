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
adduser karan
```
```shell
usermod -aG sudo karan
```
```shell
su - karan
```

## Node.js and Yarn
```shell
nvm install x.x.x
```
```shell
node -v
```