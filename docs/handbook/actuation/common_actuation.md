---
title: 用于机器人应用的常见驱动器(伺服单元)汇总介绍与功能比较
---

> 转载于：https://zhuanlan.zhihu.com/p/39034543

鉴于知乎上有很多同行给我留言：询问机器人关节驱动器（伺服单元）的相关事宜——包括驱动器的购买推荐与相关功能指标。正好我最近在阅读paper的时候看到一篇来自卡尔斯鲁厄理工大学（KIT）Prof. Tamim相关类似的工作，所以在他的工作基础上，写一篇关于当前应用于机器人领域的常见驱动器的种类介绍与功能性比较的文章。

因为篇幅的限制不会去具体深入每个驱动器的特点和类型，如果有对某款驱动器有具体兴趣的同行，可以详细地去查询下文中列出的相应驱动器的官网或学术文章来源。

## 汇总 

![20230222135725](https://robook-1313535466.cos.ap-guangzhou.myqcloud.com/20230222135725.png)
> 常见机器人驱动器（伺服单元）的汇总与功能介绍

如上的表格是常见的12种驱动器的汇总与功能比较（我已经尽我最大的努力去提高上传图片的清晰度，但知乎会自动压缩上传图片的大小，抱歉），相关功能指标需要解释和补充如下：

 *  自锁装置：机械层面上锁死驱动器输出端位移的装置，对于保持机器人未通电状态下的位姿很有帮助——从我个人的机器人维护经验来看，不具备驱动器自锁装置的机器人，意味着绝大多数时刻你需要用起重设备或者“你自己的肩膀”去支撑机器人的重量，对日常维护和修理带来不便；
 *  滑环: 滑环（Slip Ring）是一种集成于中空走线驱动器中能够自由旋转的金属环，其作用是固定信号线和电源线，使得驱动器输出端能够无限圈地自由旋转。滑环的引入，对于将单圈式输出的传统机器人关节驱动器向更多应用场合的推广，提供了潜力和可能；
 *  陀螺仪：即IMU，我们可以看到只有KIT的SAC在驱动器的单元层面就集成了陀螺仪。通常我们一般在机器人的质心处集成陀螺仪，但并不会集成到每个驱动单元的层面，KIT的这个驱动器成本估计不菲
 *  集成控制器：这里的集成控制器主要是指电气层面上，即相应的驱动和通信电路。

## 来源 

* 【1】至【6】为部分常见的商业驱动器的链接，有些会自动跳转到公司的主页面，可能需要你再仔细去寻找相关产品的Datasheet。

    【1】Robotics Dynamixel Pro Series： <https://link.zhihu.com/?target=http%3A//www.robotis.us/dynamixel-pro/>

    【2】Harmonic Drive CanisDrive： <https://link.zhihu.com/?target=https%3A//harmonicdrive.de/de/startseite/>

    【3】RoboDrive RD50/70/85-HD: <https://link.zhihu.com/?target=https%3A//www.tq-robodrive.com/>

    【4】Kinova Actuators K-58/K-75: <https://link.zhihu.com/?target=https%3A//www.kinovarobotics.com/en>

    【5】Schunk Powercube PDU PR PSM: <https://link.zhihu.com/?target=https%3A//schunk.com/it_en/gripping-systems/series/pdu/>

    【6】ETH ANYdrive: <https://link.zhihu.com/?target=http%3A//www.rsl.ethz.ch/robots-media/actuators/anydrive.html>

* 【7】至【12】为来自各个科研单位驱动器的相关来源信息，除了来自iit的驱动器以外，主要体现就以科研论文为主——相对来说从科研论文中提取关键信息较为繁琐。

    【7】iit Tree Robotics——意大利技术研究院（iit）: <https://link.zhihu.com/?target=http%3A//treerobotics.eu/>

    【8】Robosimian Actuator——美国宇航局喷气推进实验室（NASA JPL）: <https://link.zhihu.com/?target=http%3A//www.dtic.mil/get-tr-doc/pdf%3FAD%3DADA603513>

* 注：此链接为顶刊Journal of Field Robotics的论文“Mobile Manipulation and Mobility as Manipulation Design and Algorithms of RoboSimian”的下载链接。

    【9】NREC Drive Joint——卡内基梅隆大学（CMU ）: <https://link.zhihu.com/?target=http%3A//www.ri.cmu.edu/pub_files/2015/3/rob21569.pdf>

* 注：此链接为顶刊Journal of Field Robotics的论文“CHIMP, the CMU Highly Intelligent Mobile Platform”的下载链接。

【10】DLR LWR III Joint Unit——德国宇航局（DLR）: <https://link.zhihu.com/?target=http%3A//citeseerx.ist.psu.edu/viewdoc/download%3Fdoi%3D10.1.1.1024.5166%26rep%3Drep1%26type%3Dpdf>

* 注：此链接为论文“The DLR lightweight robot - Design and Control Concepts for Robots in Human Environments”的下载链接，因为DLR和KUKA有很深的合作关系，所以通过这篇文章也可以大致了解KUKA机械臂驱动器的结构和原理。

【11】ARMAR-4 Sensor-Actuator Unit——卡尔斯鲁厄理工学院（KIT）: <https://link.zhihu.com/?target=http%3A//h2t.anthropomatik.kit.edu/pdf/Asfour2013.pdf>

* 注：此链接为论文"ARMAR-4: A 63 DOF Torque Controlled Humanoid Robot"的下载链接，KIT较为早期的工作：63个自由度的双足人形——系统集成的密集程度给KIT跪下了。

【12】KIT SAC Unit——卡尔斯鲁厄理工学院（KIT）: <https://link.zhihu.com/?target=http%3A//h2t.anthropomatik.kit.edu/pdf/Rader2017.pdf>

* 注：此链接为论文"Highly Integrated Sensor-Actuator-Controller Units for Modular Robot Design"的下载链接。属于KIT比较新的工作（2017年的AIM的文章），作者阅读完这篇文章后，觉得应该算是代表当前学术圈巅峰工程能力和应用水平，推荐阅读。

关于更多的机器人驱动器种类或者信息，欢迎随时留言和作者交流——Communication benefits all!