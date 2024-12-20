---
title: 软体机器人课程项目
---

**项目要求:** 小组合作完成软体末端夹持器的设计、制作以及控制。通过在给定场地中完成相应的任务获得相应的分数（2022学年秋季学期的项目具体要求会在以下板块具体叙述），最终会根据小组的分数高低进行排名换算成对应项目分数。
项目具体内容：软体机器人每年的期末项目具体内容会进行调整，接下来将以2022学年软体秋季学期的项目为例子进行介绍。同学们以小组为单位制作软体机械臂和末端的软体夹爪，并进行抓球比赛。比赛场地的大小为长宽250mm，比赛双方的机械臂均安装在己方底线的侧壁上，TA会设计好安装孔位。场地示意图如图[]所示。场地中会有三棱锥、圆柱和球体三种可以抓的物体，你需要操控软体机械臂和夹爪去抓取这些物体，在限定的五分钟内尽可能多地抓取物体放进对方的篮筐里，同时要进行防守，干扰对方的机械臂抓取物体放进你的篮框里。比赛前会进行随机抽取对手，跟一个对手的回合中进行三盘两胜单轮淘汰制，放进对方篮筐里物体多的组晋级。当双方物体数量相同时，则三种物体对应不同的分数，圆柱是3分，三棱锥是2分，球体是1分，分数高的组晋级。王峥老师实验室会提供软体驱动需要的波纹管肌肉、注模需要的硅胶、控制波纹管伸缩的气缸和控制箱，以及控制箱的基本代码。

![](https://cos.bardreamaster.xyz/202304252302317.png?imageMogr2/format/webp)

![](https://cos.bardreamaster.xyz/202304252301978.png?imageMogr2/format/webp)

**项目安排及设计：** 接下来我将介绍我们是怎么完成这个项目的。我们是五人小组，其中有一个师弟划水，所以基本上干活的是四个人。分工如下，一个人负责夹爪的设计，一个人负责夹爪的装配，一个人负责机械臂的设计和装配，一个人负责控制箱代码的调试。我们设计的软体机械臂包括手臂部分、手腕部分以及夹爪部分。软体臂整体由四节波纹管和正方形连接件组成。其中第一节组成手腕，上下两层肌肉两两相连，能实现手腕整体的伸缩，也能对末端的抓取角度进行调节，能更加灵活地抓取物体。第二三四节波纹管通过橡胶硬管联通，与手腕的四个气囊分开控制，制作过程中通过热熔胶密封和固定。

![](https://cos.bardreamaster.xyz/202304252300784.png?imageMogr2/format/webp)

![](https://cos.bardreamaster.xyz/202304252303877.png?imageMogr2/format/webp)

我们在设计的时候考虑到手臂需要向各个方向弯曲，因此每个连接件的四个圆圈固定处都是以3°的倾斜角度斜着打孔，以保证每一列气囊在同一直线上，使得气囊在伸缩时产生更大的力臂，实现更好的控制效果。手臂的整体运动范围如图[]右下角所示，它是可以轻松抓取最远端的球的。

![](https://cos.bardreamaster.xyz/202304252303981.png?imageMogr2/format/webp)

末端的夹爪采用了单气囊驱动，以减少夹爪的重量和体积。两个手指通过齿轮啮合传动，保证了开合的一致性，并能实现完全闭合。指尖部分通过硅胶注模制作，提供对于抓取物体不规则轮廓的自适应性。类似于人类的指纹，它的表面也会通过增加纹路来达到增加摩擦力的效果。

![](https://cos.bardreamaster.xyz/202304252304685.png?imageMogr2/format/webp)

硅胶注模的方法参考耶鲁大学Dollar教授实验室的openhand项目，向分体式的腔体内灌入硅胶，并增加了硅胶底部与打印件的连接凸起，以保证两者的充分贴合。

![](https://cos.bardreamaster.xyz/202304252304395.png?imageMogr2/format/webp)

**项目总结：** 软体机器人的项目看似只是软体，但项目的内容其实会涉及机器人工程这个专业好几门专业课程的知识，比如机械设计、制造，嵌入式开发以及控制的基本知识。比如在对软体机械臂和夹爪的设计上，我个人认为有的组在平时的PPT展示中好像显得很有想法，但其实是存在许多设计和装配上的问题，而这些问题是需要较多的机械设计经验或者是试错迭代才能意识到的。举一个简单的例子，通过3D打印的连杆需要怎么连接？有的人直接就在两根连杆上开孔，然后一根螺丝穿过去，用螺母拧上就完事了。但这样的做法在设计的时候是否会考虑装配完成后的运动问题呢？虽然这样的设计方法是简单的，但是关节运动的时候可能会导致关节轴的位移，最终导致末端运动的误差，影响抓取效果。而且不安装轴承，不用销，关节摩擦力可能会较大，也有可能导致关节卡住的情况。还有对于夹爪的设计上，需要根据项目的要求来进行设计，如果是激烈竞争的比赛，就需要考虑到设计的刚度，如果项目对灵巧度有要求，就需要考虑怎么增加软体机构的自由度。同时需要考虑比赛场地尺寸的限制。设计多大的夹爪？通过怎么样的方式去抓取？这些都不是天马行空想象出来的，在设计之前就需要将方案分析和考虑清楚的，最好进行快速验证和迭代，否则折腾了好几周时间，结果在实验平台上测试才发现有巨大的缺陷，那么就事倍功半了。而且平时老师和同学对你们的方案提出了建议的时候，要仔细去思考存在的问题，不要一意孤行，一条路走到黑，因为我们平时接触软体相关的内容比较少，还是尽量听从有经验的老师的建议。而在控制的问题上，除了我们的组外，其他的小组均采用多个按键分别控制对应的气路开关的方法。这样的方法不需要进行额外的程序设计，但是导致的问题就是你在控制的时候需要记住多个按键映射到机械臂对应的运动。八个按键，每个按键对应一条气路，这样排列组合的映射关系对人的记忆本身就是一大挑战，所以甚至需要多个人进行操作，低效且在比赛中极其容易出错。我们选择使用摇杆控制机械臂的上下左右运动，通过两个按键分别控制夹爪的开合抓取，相比他们单个按键控制的方法降低了控制的错误率，控制更加直观，不需要死记按键和运动的映射关系，大大提高了控制效率。磨刀其实不误砍柴功的，建议在完成项目的时候，需要组中有人去关注控制器的代码部分，不要嫌麻烦就不去看代码，最终在比赛上很吃亏的。而对于软体部分，比如说硅胶注模和波纹管肌肉连接，则是手艺活，需要大量的试错，建议进行这部分时提前向助教请教，多次进行试验后再应用到最终采用的方案上。最后聊一聊我们在软体机器人的项目中的一些感受，软体机器人自身具有自适应性、柔顺性的特点，与传统的刚性结构的机器人相比，它在对不规则物体的抓取上具有优势。除此以外，与刚性结构相比，软体结构能在感知物体形状、大小。但是软体结构可能存在抓取重物效果不佳，精确抓取效果不佳以及对远距离的物体抓取效果不佳的情况。因此对于不同的操作任务，如果我们能结合软体的自适应性、柔顺性以及刚性结构的强度刚度和快速响应，能实现更好的操作效果。
