---
title: 腿足式机器人三类主流关节驱动器性能对比
---

> 转载于：https://zhuanlan.zhihu.com/p/32267807

设计能符合高度动态性能(Highly Dynamics)要求的腿足式机器人（Legged Robots）的驱动器（Actuator）,一直都是目前机器人学术界的巨大挑战。

工业界常见的驱动器对于动态步行难以满足如下要求：

1.  大力矩输出密度；（High Torque Density）
2.  动态物理交互能力；(Dynamical Physical Interaction)

这篇文章会对目前学术界腿足式机器人常见的驱动器方案进行性能介绍与对比，并探讨未来的驱动器发展方向，也欢迎大家一起留言参与讨论，因为一个人的认知真的是很有限的，多人多行业的交流讨论很能碰撞出灵感的火花。

（注明：这里说的驱动器都是基于ElectroMagnetic的电机方案，新型的本体驱动器方案来自Mit Cheetah Group）

----

下图展示了腿足式机器人三种常见的驱动器设计方案：

1.  常规方案； 
2.  SEA ；
3.  本体驱动器；

![image_c9960204.png](https://www.liangtengyu.com:9998/images/image_c9960204.png)  对于腿足式机器人三种常见的基于ElectroMagnetic的力控驱动器方案

其基本要求是驱动器方案必须带力控，关于力控的意义请参见：[为什么我们在机器人运动控制中一直在强调力控？（Force/Torque Control）][Force_Torque Control]

关于这三种常见的驱动器设计方案特征及性能对比，我制作了如下的表格进行相关归纳整理：

![image_42a5d7bc.png](https://www.liangtengyu.com:9998/images/image_42a5d7bc.png)  ![image_f807ec63.png](https://www.liangtengyu.com:9998/images/image_f807ec63.png)  腿足式机器人（双足及四足）主流驱动器方案

相关讨论与备注：

1.  对于三种驱动器方案未来的发展趋势，是我个人的观点，见仁见智，欢迎大家讨论；
2.  即使我认为本体驱动器是未来正确的发展方向，但我现在仍然做的是SEA（老板是做SEA出身的原因，而且做的算比较好）。如果作为年轻的PhD，当自己的想法和老板发生冲突，该怎么处理？
3.  “本体驱动器”这个名称来自MIT Cheetah的“Proprioceptive Actuator”的直译，如果有更合适的中文翻译请告诉我，谢谢。
4.  对于知乎文章如何上传高清晰度的图片也希望有知道的能和我分享。（上面几张图上传上来都被知乎自动压缩了，清晰度质量很差）
5.  对于使用类似MIT Cheetah组本体驱动器方案搭建双足小人型，我知道有相关国内的组在做，但是这里不能列举，For some reason.
6.  表格注释中提及到的本体驱动器方案的IMF（冲击减缓系数）是SEA方案的90%，而常规方案（以HUBO为例）的IMF则是SEA方案的50%，具体可见文末参考文献。

--- 

而为了更好地直观体会关于制约本体驱动器方案发展的核心因素：驱动器输出密度，

我将MIT Cheetah组使用的两代本体驱动器方案和我们iit的SEA方案进行了相关参数的对比，表格结果如下：

![image_db6d5eaf.png](https://www.liangtengyu.com:9998/images/image_db6d5eaf.png)  
MIT的本体驱动器与IIT的SEA之间的性能对比

相关讨论与备注：

1.  首先需要申明的是驱动器的输出密度和电机输出密度是两个不同的概念；
2.  我们可以看到MIT自己做的电机性能确实极强，能量输出密度是Kollmorgen电机的4.2倍，是大扭矩输出电机Emoteq的3.2倍，而这个电机是来自于MIT电气学院Jeffery H. Lang那里。专业的电机得去找专业具有电机背景的人去做，这点很重要；
3.  对比驱动器输出密度，我们就可以知道目前SEA还能存在的意义，减速箱的引入实实在在地极大提升了驱动器这个整体的输出密度（我指的是密度，并不是输出扭矩，注意）。而大减速比减速箱的引入带来的静摩擦力与非线性则否认了用电流环做力控的方案，引出了后续一系列SEA相关的问题。

---

## 个人总结与相关挑战： 

1.  动态物理交互能力的孱弱（具体指IMF: Impact Mitigation Factor）是常规方案将会被取代的主要原因；
2.  目前“大扭矩”电机（Motor）输出密度的不足是SEA不能被完全取代的主要原因；
3.  如果大扭矩输出电机能力提升到目前的3倍（即输出密度到达约80N·m/kg）,SEA则将慢慢退出舞台。因为作者认为，SEA机械性能上的抗冲击和储能在本体驱动器方案的电机控制层面都能实现，系统的复杂性应该从机械层面移到电气层面；
4.  如果我们站地更高一点去看：所谓电机的普遍特性“高速低扭矩”其实并不太适合腿足式人型机器人的应用领域，而液压系统的特性则正好契合——波士顿动力。
5.  因为我不具有很专业的电机背景，所以不是很确定常规的电机方案：即铜质线圈+永磁体，是否已经到达了极限的输出密度（注意是密度）。如果想要飞跃性的提升电机的输出性能，电机是否需要革命性的改变，这确实是很大的挑战。（这里很希望具有专业电机背景的朋友能够讨论以下）

---

## 参考文献： 

1.  Wensing, Patrick M., Albert Wang, Sangok Seok, David Otten, Jeffrey Lang, and Sangbae Kim. "Proprioceptive actuator design in the MIT cheetah: Impact mitigation and high-bandwidth physical interaction for dynamic legged robots." IEEE Transactions on Robotics (2017).
2.  Lorenzo Baccelliere, Navvab Kashiri, Luca Muratore, Arturo Laurenzi, Małgorzata Kamedula, Alessio Margan, Stefano Cordasco, Jorn Malzahn, Nikos G. Tsagarakis. "Development of a Human Size and Strength Compliant Bi-ManualPlatform for Realistic Heavy Manipulation Tasks", IROS 2017


[Force_Torque Control]: https://zhuanlan.zhihu.com/p/31811242