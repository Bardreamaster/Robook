---
title: 离合器在机器人关节驱动器中的应用介绍
---

> 转载于：https://zhuanlan.zhihu.com/p/53098159

通过这篇短文，你能够大致了解：

 *  为什么需要在腿足式机器人关节驱动器中集成离合器
 *  离合器方案对比其他方案(SEA/PEA & VCT)有何优势
 *  典型的带离合器的关节驱动器(Clutched Elastic Actuators)设计方案
 *  现阶段此方案是否对腿足式(双足)机器人有实用价值

> 参考文献：  
> 1. Plooij, Michiel, Wouter Wolfslag, and Martijn Wisse. " Clutched elastic actuators." IEEE/ASME Transactions on Mechatronics 22, no. 2 (2017): 739-750.  
> 2. Malzahn, Jörn, Vishnu Dev Amara, and Nikolaos Tsagarakis. "Continuously Controllable Series Clutches for Efficient Robot Actuation." In 2018 IEEE International Conference on Robotics and Automation (ICRA), pp. 7735-7741.

## 为什么要用到离合器(Clutch)？ 

可能理工科背景的小伙伴一听到"离合器"，第一反应会是在汽车变速箱中的应用——即改变变速箱齿轮的啮合与非啮合状态，从而进行不同减速比之间的传动切换。机器人关节驱动器中集成的离合器，尤其是针对于双足机器人，其功能原理与汽车类似：只不过更加侧重于传动通断状态的切换，而非齿轮间的传动比切换——即离合器锁紧(lock)，驱动器与输出轴之间可以传动；离合器打开(unlock)，传动断开。

而希望通过离合器，对机器人关节驱动器传动通断状态进行掌控的原由在——运动能量效率的提升。在主流的认知中，基于电机的双足大人型机器人，由于对扭矩输出密度(Nm/kg)的高要求，则不可避免的会使用到高减速比减速箱，这样会带来机器人运动中的反向驱动能力(Back-Drive Ability)性能差，能量效率低，这里举一个很简单的例子来解释这个问题：

> 诸如说在人类司空见惯的”荡大腿“(Leg Swing)动作里，我们只需要在抬腿的过程中消耗能量，而在重力作用下大腿能够几乎不费力地"荡"回来。但在高减速比方案的人形机器人中则不然，重力无法克服高减速比的静摩擦力，因此机器人不仅需要使用能量在步行中"抬大腿"，更需要额外的能量进行"收大腿"，造成能量效率低下。

简单来说，希望通过离合器在需要关节传动的时刻锁紧(lock)，在需要反向驱动能力(Back-Drive Ability)的时候打开(unlock)，这样就能极大的提升高减速比传动下的能量效率。

## 离合器(Clutch)方案的优点 

这里简单的提一下，离合器方案对比其他方案的优势：(针对提升腿足式机器人关节驱动器运动能量效率)

 *  SEA & PEA 的方案可以提升反向驱动能力(Back-Drive Ability)和能量效率，但致命缺陷在于缺乏主动控制(Active Control)和瞬时控制(Rapid Control)的能力。SEA和PEA一般是集成为被动的弹性体，缺乏主动控制，即使是使用二级电机(Secondary motor)的PEA也很难做到瞬时改变弹性体的刚度；
 *  VCT (Variable Continuously Transmission)，也就是咱们中文中常说的无级变速。拥有VCT的关节驱动器能够主动去改变减速比的大小，即需要反向驱动能力(Back-Drive Ability)和能量效率的时候，将传动的减速比变得极小，消除高减速比的弊端。但VCT的问题在于其原理是通过圆锥形轮(Conical wheel)和带传动(Belt)之间的摩擦力作用，使用寿命与可靠性一般，同时提升的能量效率较低(考虑带传动摩擦发热消耗的能量)。

## 典型的设计方案举例 

![image_8c196a7b.png](https://www.liangtengyu.com:9998/images/image_8c196a7b.png)  Clutched Elastic Actuators (CEA) 动力学分析建模图

上图展示了集成离合器(Clutch)的机器人关节驱动器的动力学建模分析图，我们可以很直观地看见浅绿色框图中，通过控制离合器的通断，能够主动并且瞬时控制电机端(已集成高减速比减速箱)和输出端的传动连接，达到提升反向驱动能力(Back-Drive Ability)和能量效率的目标。

那么如何去具体实现上图绿色方框中的离合器结构呢？机器人关节驱动器层面对集成离合器设计的要求是：1. 尺寸紧凑(Compact)；2. 轻量化(Light-weight); 3. 可靠性(Reliable)。我这里就举一个最具有代表性的方案：锥形离合器(Conical Clutch)。

![image_bf5438d9.png](https://www.liangtengyu.com:9998/images/image_bf5438d9.png)  Conical Clutch 锥形离合器的结构示意图

如上图，锥形离合器是通过公母两椎体(Female cone & Male cone)之间的摩擦实现离合器锁紧时输出轴(Shaft)上扭矩的传输。公椎体可沿轴线方向运动，结构5(Clutch Control)提供公椎体锁紧时向左运动的力，结构4为复位弹簧，可向右拉开公椎体，即打开离合器。通常我们在机器人关节中，可由二级电机驱动的滚珠丝杠或者电磁铁去代替上述的结构4和结构5。

具体的实现细节，诸如锥形体的倾角和摩擦体的材料等，需要根据驱动器需要传递的实际扭矩来定，这里不再展开。对这块比较感兴趣的伙伴，强烈建议从Plooij那篇顶刊(T-Mech)的文章(此文开头的第一篇参考文献)读起，因为是该方向Review性质的文章，因此可以在那找到很多有价值的citations。

## 现阶段是否具有实用价值 

以下为作者本人观点：现阶段不具有向实际腿足式机器人驱动器集成的实际价值。

即使在这个领域有很多的文章——TU Delft、CMU、DLR和IIT都做过大量相关方向的研究。但很讽刺的是，这类带有集成离合器方案的驱动器，虽然在单个驱动器的能量效率上都取得了不俗的成绩，但在往实际多关节多自由度双足机器人集成时，离合器和二级电机(或电磁铁)所带来的额外重量和惯量，已经基本抹平了其单关节上能量效率上的优势。

写这篇短文的话，希望能够让大家基本了解Clutched Elastic Actuators (CEA)的应用背景和典型的实现结构，知道还有这么一个驱动器方案，也希望对大家开拓视野和思路有一定的益处。不过做相关方向的研究和产品研发，这个方向要慎重。
