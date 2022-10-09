---
title: 为什么我们在机器人运动控制中一直在强调力控？（Force/Torque Control）
---


之前介绍波士顿动力（Boston Dynamic Institute）Atlas2的文章和一系列SEA驱动器介绍的文章中，很多人都留言问到了：

1.  “为什么你一直在提力控？力控为什么这么重要？”
2.  “位置控制（Position Control）与力控（Force/Torque Control）的应用比较”

第一个问题如果你去问机器人行业的人，基本上是属于一个共识即：“未来的机器人运动控制领域，必须引入力控，纯位置控制是没有前途的。”

在写这篇文章之前，我试图去找一些关于力控应用及重要性的学术大佬们的行业发展Review Paper来做参考，但并没有找到很合适，似乎对于这个“共识”，大佬们不太屑于写Review，其实就有点像“为什么我们现在需要电脑（计算机）来做科研”这样的的类似命题。

因此，以下内容为我一家之言，欢迎大家讨论、批评与补充！

## 力控的应用背景： 

在目前的工业界（诸如生产机械臂装配）几乎都在使用着传统的位置控制，比较典型的就是：机器人沿着事先规划好的轨迹在封闭、确认的空间中运动。或者有些时候，机器人得到从视觉系统（Vision System）的反馈，这样就能使得位置控制的机器人具备一定适应外界可变环境的能力。

但是在某些应用场合中——更加精确地控制施加在末端执行器（End-Effector）的力比控制末端执行器的位置更加重要时，力控就必须得到引入，即：单单将关节目标位置（Target Position）作为控制输出量远远不能达到应用的要求，必须引入力矩/力控制输出量，或者将力矩/力作为闭环反馈量引入控制。

[![image_6f22e0fd.png](http://markdown.liangtengyu.com:9999/images//image_6f22e0fd.png)https://www.zhihu.com/video/922549438768087040][image_6f22e0fd.png_http_markdown.liangtengyu.com_9999_images_image_6f22e0fd.png_https_www.zhihu.com_video_922549438768087040]

实例1：这个工业机械臂做不规则表面抛光（Polish），需要严苛控制末端抛光件与表面的接触力大小，因此需要用到末端执行器的力反馈，进行Hybrid Position/Force Control。(1981年的Marc Raribert已经占领这个山头)

[![image_48feadf3.png](http://markdown.liangtengyu.com:9999/images//image_48feadf3.png)https://www.zhihu.com/video/922562020879007744][image_48feadf3.png_http_markdown.liangtengyu.com_9999_images_image_48feadf3.png_https_www.zhihu.com_video_922562020879007744]

实例2：Atlas在不规则且未知的雪地路面行走（locomotion），路面情况没有做事先的建模预测（Perception），而且蓬松雪地这样的路况，没有办法预先做到精确的建模。简单来说：如果使用纯位控，你没有办法规划出一条合适的位置轨迹（Position Trajectory），必须引入力控，做实时的动态控制（Dynamic Control）。

力反馈测量：

目前机器人行业（Motor Based），我个人总结大致分为以下三个方向做硬件层面的力传感器与力反馈测量：

1.  电流环（Current loop）：通过电机的电流闭环做力闭环反馈控制，适用于直驱电机（Direct Drive Motor）或者带小减速比（Reduction Ratio小于10）的应用场景，诸如小型阻抗控制的人机交互的机械臂和小型四足，像MIT Cheetah等；
2.  力/力矩传感器（Force Torque Sensor）: 直接使用商用的六维力/力矩传感器，比如说典型的ATI或者Robotiq公司，封面图就是ATI的FT Sensor。而在人型机器人之中，通常将力/力矩传感器安装在(1)脚掌与踝关节之间；(2)机械手与腕关节之间——实例1中，力/力矩传感器就安装在打磨圆盘和腕关节之间，测量末端执行器（机械手或者脚掌）与外界环境交互的受力情况；
3.  弹性体（Compliant Structure）: 设计弹性体集成在驱动器对外输出端之前，往往会形成SEA，通过弹性体形变测量力矩，往往适用于人型机器人集成度较高和驱动器输出力矩要求较高的应用场合。（可参考上一篇文章[Strain Gauge or Encoder Based? 关于SEA力矩测量原理选择的浅谈][Strain Gauge or Encoder Based_ _SEA]）

无力/力矩传感器的力控：

有没有可能在没有任何力传感器的情况下做力控呢？(Sensor-less Torque Control)

这是个很有趣的问题，答案是”有“！（前提条件是你必须至少有位置控制QAQ）

实现方法如下：首先你必须有一个具备弹性体性能的末端执行器（Compliant End-Effector），并且弹性体的形变与受力关系是很明确的。因此在这里，你将控制的位置轨迹是弹性体的形变轨迹（Deformation Trajectory），而这一个形变轨迹则是根据你想要产生的力（Desired Force）来生成的，间接的产生力控。

学术界有很多人走这个方向，你不妨去GoogleSchloar搜索Sensor-less Torque Control，会出现一大批文章，其中还不乏高引论文。但是作者认为，这个方向是完全要被淘汰的，无异于饮鸠止渴，这里就不贴那些论文的链接了。

这种方法的缺点如下：

1.  与末端执行器发生交互的对象，其位置和形状必须是已知的；
2.  交互对象的表面必须是”绝对“刚度；
3.  末端执行器的弹性体性能必须是一个方向上的；

这3个严苛的条件任意一个不满足，就可以打出”GG“了。

位置控制&力/力矩控制：

那我们还需要位置控制么？

这个问题是显而易见的，位置控制是一直需要的，所谓的共识是：”必须引入力/力矩控制，未来的控制需要有两个控制量，纯位置控制是要被淘汰的“

我们再回到例子1，那个工业机械臂做表面抛光的应用场景：

实际上这个应用属于Hybrid Position/Force Control，由Marc Raibert提出于1981年，力控只需要存在在与抛光表面垂直的方向上，即严格控制末端执行器与抛光表面的接触力，但对于其他方向的运动，是不存在需要力控要求的，单纯的位置控制就可以实现。而当抛光工序结束的时候，控制器又要切回纯位置控制，将机械臂收回，未来的控制器是需要具备在位控和力控两种scheme之前灵活切换的能力。

总结：

回到文章的标题：

问：为什么我们在机器人运动控制中一直在强调力控？

答：因为未来机器人的运动应用要求：是需要走进人类的实际生活的，即：

1.  是需要与安全地与人类做物理上的交互（Human Robot Physical Interaction）
2.  是需要做到柔顺的阻抗控制（Impedance Control）
3.  是需要具备在未知环境（Un-perceptive environment）中的运动的能力
4.  是需要具备快速的动态控制（Dynamical Control）调整能力

而以上的所有，都离不开——力/力矩控制。

## 参考文献： 

Raibert, Marc H., and John J. Craig. "Hybrid position/force control of manipulators." Journal of Dynamic Systems, Measurement, and Control 102, no. 127 (1981): 126-133.


[image_6f22e0fd.png_http_markdown.liangtengyu.com_9999_images_image_6f22e0fd.png_https_www.zhihu.com_video_922549438768087040]: https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/922549438768087040
[image_48feadf3.png_http_markdown.liangtengyu.com_9999_images_image_48feadf3.png_https_www.zhihu.com_video_922562020879007744]: https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/922562020879007744
[Strain Gauge or Encoder Based_ _SEA]: https://zhuanlan.zhihu.com/p/31735854