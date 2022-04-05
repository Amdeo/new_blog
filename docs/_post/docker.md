---
title: docker
date: 2022-04-05 00:05:19
permalink: /pages/60340c/
categories:
  - _post
tags:
  - 
---

### 更新一个或多个容器的配置

```bash
docker update [OPTIONS] CONTAINER [CONTAINER...]
```

**OPTIONS 说明**

| 名称                  | 描述                                                       |
| :-------------------- | :--------------------------------------------------------- |
| `--blkio-weight`      | 阻塞IO (相对权重)，介于10到1000之间，0表示禁用（默认禁止） |
| `--cpu-period`        | 限制CPU CFS（完全公平的调度程序）期限                      |
| `--cpu-quota`         | 限制CPU CFS（完全公平的调度程序）配额                      |
| `--cpu-rt-period`     | `API 1.25+`，将CPU实时时间限制为微秒                       |
| `--cpu-rt-runtime`    | `API 1.25+`，将CPU实时运行时间限制为微秒                   |
| `--cpu-shares`, `-c`  | CPU份额（相对权重）                                        |
| `--cpus`              | `API 1.29+`，CPU数量                                       |
| `--cpuset-cpus`       | 允许执行的CPU（0-3，0,1）                                  |
| `--cpuset-mem`        | 允许执行的MEM（0-3，0,1）                                  |
| `--kernel-memory`     | 内核内存限制                                               |
| `--memory-swap`       | 交换限制等于内存加交换，“-1”以启用无限交换                 |
| `--memory-reservatio` | 内存软限制                                                 |
| `--memory`, `-m`      | 内存限制                                                   |
| `--pids-limit`        | `API 1.40+`，调节容器pids限制（-1表示无限制）              |
| `--restart`           | 容器退出时重新启动策略以应用                               |
