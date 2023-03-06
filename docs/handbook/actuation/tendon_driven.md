---
title: 线驱动(Tendon Driven)在机器人应用中的利弊分析
---

> 转载于：<https://zhuanlan.zhihu.com/p/54070538>

之前作者介绍了18年IROS中看到一款来自韩国性能很出色的：基于线驱动(Tendon Driven)的上身机器人LIMS2-AMBIDEX:

<https://zhuanlan.zhihu.com/p/50916362>

这篇短文主要补充一下，上文提到的关于线驱动在机器人应用中的“血泪史”——即利弊分析，当然主要的视角集中于现阶段技术条件下的弊端分析。

---

首先封面图中的机器人[iCub][]，其传动主要就是基于线驱动(Tendon Driven)。初代iCub机器人完成于2006年左右，我们实验室(iit)实际上很早就有设计线驱动机器人的经验。因此，韩国的这台LIMS2-AMBIDEX并不在科研原理创新上有多大的价值，其亮点在于工程技术层面上精致的硬件实现。

事实上，我们实验室(iit)后续的三款腿足式机器人[WALK-MAN][], [CENTAURO][], [WALK-MAN+][WALK-MAN 1]均无一例外地摒弃了线驱动的方案。关于其中的原因，主要还是下文中会谈及到的，线驱动现阶段显著的缺点，再加上作者本身PhD阶段所设计过的两只线驱动的欠驱动机械手，因此这篇文章更多的是倾向于实际的工程经验分享。

## 优点和动机

这里非常简要地介绍一下线驱动(Tendon Driven)的优点和动机：

* 通过线驱动，可以使质量较大的驱动器(电机)远离末端执行机构，通过合理的排布，可以减轻末端执行器的惯量，提升动态性能，典型的例子就是上文中的LIMS2-AMBIDEX；
* 线驱动排布灵活，几何空间占用少，非常适合空间狭小且所需驱动自由度数目多的传动场合，典型的应用例子就是机器人的机械手(灵巧手)；
* 和人体肌腱的传动原理一致，符合仿生学设计的背景和要求。

## 现阶段的缺点

* 带负载能力弱

这是现阶段线驱动性能上最致命的缺点。我们从结果论来看，几乎我们能看到的所有应用线驱动方案的机器人相关设计，都是集中在负载要求较小的诸如机械手，上身机械臂或者小尺寸人形的领域，很难看到全尺寸大人形上有线驱动传动的存在。

这里我需要着重强调的是：实际上很难给线驱动带负载的能力做一个具体的量化指标，即什么样的材料、什么样的直径能够传递多大的线性力等。因为，其性能的瓶颈往往不是材料本身的抗拉截面系数决定的，而是与你在设计线驱动传动时，相应的滑轮/轴承支承情况、相应的末端固定方式(比如怎么给绳索打一个结实的knot“结”)、相应的工作工况等息息相关。这里的整体性能实际上是一个“木桶效应”，任何设计不当的地方，都会成为带负载能力的短板。

* 预紧力变化

即线驱动的材料无论是选用钢丝绳或者迪力马(Dyneema)，其和传统的传动结构相比，其刚度(Stiffness)是非常小的，因此其预紧力(Pre-tension)会随着驱动关节运动次数的增加而改变，直观来说即变“松”(loose)。这个变化带来的困扰是：驱动器(电机)的初始位置和所驱动关节的初始位置不一致，可以理解为对于驱动器存在一个零点死区。

因此在实际应用中，我们需要每隔一段时间1. 通过手动去调整线驱动的预紧；2. 通过电流环去自动调节预紧。频繁地重新做位置标定(Calibration)，在实际应用中是相当麻烦的。

* 传动效率低

相比较于传统的传动机构，线驱动由于其需要在狭小特定的空间中“穿梭拐弯”，会不可避免地与外界的机械结构发生摩擦，因此在传动效率上会有一定的损失。传动负载越大，线驱动的轨迹(tendon route)越复杂，传动效率越低，从我的经验来看：在通过运动学(Kinematic Analysis)分析进行电机选型时，这个线驱动传动效率 \\eta\_\{m\} 可以取到0.45或者更低，以确保电机选型的安全系数。

* 缺乏模块化解决方案

线驱动设计上一个特点是，会将驱动电机聚集地排布在一起(往往远离于末端执行器)，再通过复杂的路径设计、包括相应的导向滑轮、轴承支撑、微分机构等，最终连接于各个驱动关节。这样带来的一个很现实的问题是：很难做到模块化机械设计的解决方案，这对后续的维护性、商业化以及设计的通用性都会带来很大的弊端。

* 维护难度高

采用线驱动传动方案的机器人维护难度高——这是一个结论性的事实。当然，一方面是因为采用线驱动方案的机器人或者躯体，本身就是属于空间狭小，部件众多的精密机构；另一方面还是因为上一点提及到的缺乏模块化解决方案所致——存在大量的耦合机构：举个简单例子来说：有时候你仅仅需要维护机械臂手腕关节pitch方向的驱动结构，但因为线驱动的耦合，你可能要把整个机械臂从肩关节、肘关节的线驱动结构重新拆装维护一遍。

* 可靠性低

这点的话，我在我先前的文章：[任赜宇：【短文】对于30种机械手的归类与分析——从假肢（Prosthetic）和机器人（Robotics）两个应用领域讨论][30_Prosthetic_Robotics] 已经用机械手设计的实例验证过：即所有商业化的机械手，均未采用线驱动的传动方案，取而代之的则是传统的连杆、滚柱丝杠、齿轮齿条等传动方案。

简而言之，线驱动在恶劣工况和疲劳测试中还是很容易“断裂"！

* 相关运动学和动力学建模困难

这边要感谢评论区小伙伴对我的提醒，我是纯粹忘记了这个点。

一般常见的仿真软件，例如Adams和Gazebo，对于线驱动这样本身是柔性体和具有复杂表面摩擦力特性的运动学和动力学，做起建模仿真是很困难的。作者在Adams里花费过很大功夫，使用其提供的Cable Model做过相应的线驱动仿真，个人感觉结果并不可靠；Gazebo的仿真环境更多的是偏向刚体，在作者的记忆中似乎是不支持柔性的tendon传动 (勘误?)

---

以下是作者在实际项目中，做线驱动设计的一些小Tip，分享给大家，希望有所帮助:

* 关于材料的选择

在大负载下一般选用钢丝绳([Wire Rope][])为主，但在较小负载和尺寸空间( d\_\{t\}\\leq1\\,mm )较小的应用场景中，我给大家推荐一家专业做各类绳索解决方案的德国公司——[LIROS][]。

作者使用过这家公司的此款绳索材料[LIROS DSL][]，感觉不错。DSL这类绳索材料的显著特点是，其外壳和内芯是不同的材料制成：外壳为聚酯纤维(Polyester)，内芯为迪力马(Dyneema)，聚酯纤维的外壳带来物理耐磨且化学性能好的优点，迪力马的内芯：一般来说用剪刀是很难剪短这样的绳索，内芯韧性很强。

* 杜绝滑动摩擦

在设计整体线驱动传动路径的时候，需要严格杜绝所有可能的滑动摩擦——这是造成上文中所说缺点中的传动效率低，可靠性差的核心原因。相应的导向滑轮必须通过轴承进行支承，变滑动摩擦为滚动摩擦，关于相应的轴承选型，可参考MISUMI的Miniature Ball Bearings系列。

* 导向滑轮的最小半径

记住这个结论：线驱动中，导向滑轮的半径( r\_\{p\} )需要至少大于6倍的线驱动绳索半径( r\_\{t\} )，即 r\_\{p\}\\geq6\\cdot r\_\{t\} 。否则在大负载工况下，极易造成绳索的断裂。

* 传动安全系数

我们在选择绳索材料时，有一个重要的参数就是该rope的最大断裂负载(Maximum breaking load)，厂商一般测量此参数是通过垂直悬挂重物的方法得到的，比我们实际线驱动有外界摩擦的工况要温和得多。所以说一般在选型时，要考虑一个传动安全系数，作者推荐定在2.5-3.0之间。

* 线驱动末端的固定方法

推荐比较简单可靠的固定方法是：通过绳索穿过相应的略大于其直径的机械结构上的孔洞，再在末端打结(make a knot)的方法进行固定。

关于如何制作一个简单可靠的绳结和是否需要添加相应的化学试剂加以固定，我听说[Antonio Bicchi][]组有一套来自意大利军方(海军)的方法，使得其线驱动的[PISA/IIT SoftHand][PISA_IIT SoftHand]的传动极度稳定，关于具体的实现细节，作者也不得而知——如此小的细节上往往会蕴含很多的学问，而这些又是决定系统性能差距的关键因素所在。

[iCub]: https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/ICub
[WALK-MAN]: https://link.zhihu.com/?target=https%3A//www.walk-man.eu/
[CENTAURO]: https://link.zhihu.com/?target=https%3A//www.centauro-project.eu/
[WALK-MAN 1]: https://link.zhihu.com/?target=https%3A//cogimon.eu/cognitive-interaction-motion-cogimon
[30_Prosthetic_Robotics]: https://zhuanlan.zhihu.com/p/36211266
[Wire Rope]: https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/Wire_rope
[LIROS]: https://link.zhihu.com/?target=https%3A//www.liros.com/index.php%3Fid%3D2%26L%3D1
[LIROS DSL]: https://link.zhihu.com/?target=https%3A//www.liros.com/en/products/productfinder/details/detail/liros-dsl.html
[Antonio Bicchi]: https://link.zhihu.com/?target=https%3A//scholar.google.com/citations%3Fuser%3DBmuft6wAAAAJ%26hl%3Den
[PISA_IIT SoftHand]: https://link.zhihu.com/?target=https%3A//www.youtube.com/watch%3Fv%3Dfsg-6y1KKnw