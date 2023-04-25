# 浅析机器人研究的特点

**ChenJacker**

本科19级机器人工程专业，硕士23级智能制造与机器人专业

我从大二上进实验室至今己有2年多，之前一直从事人机交互方向的研究，现已本校保研，转向做机器人自主感知研究。很荣幸在上一段科研中收获了很多科研方面的知识和经验并最终成功在*IEEE Robotics and Automation Letters (RA-L)*发表了一篇文章。文章链接：

https://ieeexplore.ieee.org/document/10080982

在此，我想分享我个人对机器人研究的看法，比较零碎，能启发大家就好。此文章也可以在我的[知乎主页](https://zhuanlan.zhihu.com/p/618336494)看到，以下为观点速览：

（1） 绝大部分机器人研究要做出实物。

（2） 研究价值=问题大小*创新性*有效性。

（3） 理论和工程服务于问题，不应该被割裂。

（4） 机器人创新可以是问题创新或者方法创新。

（5） 机器人研究需要有意义的指标和对比来证明。

正文开始：

（1）与数学、物理的研究不同，机器人研究是属于偏应用的研究，这就意味着绝大部分的机器人研究必须要包含工程成分，不能纸上谈兵。这里的工程成分一般不要求工程细节完成的有多好（那种属于商业产品），做出了效果不错的实物Demo即可。机器人顶会ICRA和IROS基本都有真实实验。优质机器人期刊TRO，IJRR，RA-L和JFR等更不用说。当然纯理论的工作也有[1]，但是很少。在此分享刘锐[2]对发表ICRA的要求的回答[3]。因此，绝大部分机器人研究要做出实物。

（2）机器人研究的价值并不仅由工程来体现，做出实物只是不可缺少的验证过程。那么如何衡量一个机器人工作的价值呢？对此，我认为可以参考李沐对工程研究价值的看法[4]（强推大家看）。他认为，研究价值=问题大小*创新性*有效性。在此个人认为：问题大小、创新性和有效性缺一不可，因为只要有一个等于0，不管其余两者有多大，价值就会等于0。

（3）在机器人研究中，理论和工程都是为了解决问题服务的，不应该被割裂开。在此有一个误区：搞理论的人总是提出一些不存在的或者没有实际意义的问题，然后一阵数学推导来证明自己提出的方法满足某些没有实际意义的理论指标。在此以对控制理论研究的“瓶颈”的讨论为例[5]并推荐看高登巍[6]的回答。我认为机器人研究过程应该是首先提出一个具有实际意义且新的问题，在解决该问题的过程中如果主要涉及理论问题就解决理论问题，主要涉及工程问题就解决工程问题，或者两个都涉及就一并解决。理论为主的研究例子是黄老师对拓展卡尔尔曼滤波的收敛性和一致性的理论分析的工作[7]。工程为主的是Rosen等人[8]提出的基于混合现实的人机交互新范式或者是ORB-SLAM，一个实时有效的视觉SLAM框架[9]。理论和工程各占一半（不一定是严格的一半）的工作是高飞老师组的基于几何约束的无人机轨迹规划的工作[10]。

（4）机器人研究的创新点可以是问题创新也可以是方法创新。重大的创新会提出新的大问题，不过那种非常少。一般的问题创新是在已有的大问题框架下提出新的有意义的小问题并解决它。例如：2021年RA-L最佳论文[11]就是在无人机部分电机失效的飞行控制问题下提出新问题：当GPS无法使用时是否仅用无人机搭载的传感器就可以实现部分电机失效飞控？一般而言，提出了新问题很可能意味着你需要提出一套新方法解决。方法创新可以是基于另一套数学理论构建的新方法，比如：针对SLAM问题我不用迭代滤波法（EKF-SLAM）而是基于优化的方法（Graph-SLAM）。当然，这也可以是多种旧方法的组合。后者的创新之处在于如何组合来更好的解决问题。例如：现在计算机视觉领域一些顶会（CVPR/ECCV/ICCV…）的工作会将各种网络模块组合成新网络来更好的解决他们提出的问题。此外，机器人研究的方法创新可以是基于新的仿生结构的启发，例如：Nature封面论文提出形态自适应的仿生两栖海龟机器人[12]。

（5）机器人研究的有效性需要有意义的指标和对比来证明。不同研究领域的评价指标是不一样的。比如：在图像分类领域，有意义的指标是分类准确率和混淆矩阵等；在机器人控制领域，指标是控制器抗扰动性和收敛速度等；在人机交互领域，指标是机器人对人的指令识别准确率、识别速度和人机交互方法是否简单易用等。有意义是指大家公认的、不可或缺的且适合体现你工作贡献的指标。重要和合适，两者缺一不可。比如：你的状态估计算法和其他工作相比速度快很多，但是如果你的准确率差别人一大截那是不可忍受的。速度是体现你优势的指标，准确率是你不得不对比的指标。当然，如果精度差不多，但是你的速度比他们要快很多，那么你的工作也可以被视为是好的。如果有其他人的工作尝试解决和你同样的问题，那么对比不可避免。对比的过程就是在一些有意义的指标下比较你的工作比其他人的工作要好。对比可以是复现其他人的方法，但是有时候复现很困难或者别人文章解决的问题和你相似又或者别人的局限性显而易见，那么你可以列出对比表格并撰写对比分析即可。在此，我自己发表的文章[13]的对比过程可以作为参考。

[1] Barfoot TD, Forbes JR, Yoon DJ. Exactly
sparse Gaussian variational inference with application to derivative-free batch
nonlinear state estimation. The *International Journal of Robotics Research*.
2020;39(13):1473-1502. doi:10.1177/0278364920937608

[2] https://www.zhihu.com/people/ruiliu2017

[3] https://www.zhihu.com/question/29070983/answer/135621798

[4] https://www.bilibili.com/video/BV1oL411c7Us?share_source=copy_web

[5] https://www.zhihu.com/question/500041201

[6] https://www.zhihu.com/people/gao-deng-wei-80

[7] S. Huang and G. Dissanayake,
"Convergence and Consistency Analysis for Extended Kalman Filter Based
SLAM," in *IEEE Transactions on Robotics*, vol. 23, no. 5, pp.
1036-1049, Oct. 2007, doi: 10.1109/TRO.2007.903811.

[8] Rosen E, Whitney D, Phillips E, et al.
Communicating and controlling robot arm motion intent through mixed-reality
head-mounted displays. *The International Journal of Robotics Research*.
2019;38(12-13):1513-1526. doi:[10.1177/0278364919842925](https://doi.org/10.1177/0278364919842925)

[9] R. Mur-Artal, J. M. M. Montiel and J.
D. Tardós, "ORB-SLAM: A Versatile and Accurate
Monocular SLAM System," in *IEEE Transactions on Robotics*, vol. 31,
no. 5, pp. 1147-1163, Oct. 2015, doi: 10.1109/TRO.2015.2463671.

[10] Z. Wang, X. Zhou, C. Xu and F. Gao,
"Geometrically Constrained Trajectory Optimization for Multicopters,"
in *IEEE Transactions on Robotics*, vol. 38, no. 5, pp. 3259-3278, Oct.
2022, doi: 10.1109/TRO.2022.3160022.

[11] S. Sun, G. Cioffi, C. de Visser and D.
Scaramuzza, "Autonomous Quadrotor Flight Despite Rotor Failure With Onboard
Vision Sensors: Frames vs. Events," in *IEEE Robotics and Automation
Letters*, vol. 6, no. 2, pp. 580-587, April 2021, doi:
10.1109/LRA.2020.3048875.

[12] Baines, R., Patiballa, S.K., Booth, J. *et al.* Multi-environment robotic transitions through adaptive
morphogenesis. *Nature* **610**, 283–289
(2022). [Multi-environment robotic transitions through adaptive morphogenesis | Nature](https://doi.org/10.1038/s41586-022-05188-w)

[13] C. Zhang, C. Lin, Y. Leng, Z. Fu, Y.
Cheng and C. Fu, "An Effective Head-Based HRI for 6D Robotic Grasping
Using Mixed Reality," in *IEEE Robotics and Automation Letters*, doi:
10.1109/LRA.2023.3261701.
