---
title: 智能传感器全面概述——机器人感知基础
---


## 一、传感器概念 

### 1. 定义 

传感器（transducer/sensor）是一种检测装置，能感受到被测量的信息，并能将感受到的信息，按一定规律变换成为电信号或其他所需形式的信息输出，以满足信息的传输、处理、存储、显示、记录和控制等要求。

![image_c3262c70.png](http://markdown.liangtengyu.com:9999/images//image_c3262c70.png) 

其他定义——

 *  GB/T7665-05（87）：传感器是能感受被测量并按照一定的规律转换成可用输出信号的器件或装置，通常由敏感元件和转换元件组成。

![image_5b0dcd94.png](http://markdown.liangtengyu.com:9999/images//image_5b0dcd94.png) 
![image_ec5be000.png](http://markdown.liangtengyu.com:9999/images//image_ec5be000.png) 

### 2. 分类 

根据敏感元件的原理和感知功能

 *  物理类：基于力、热、光、电、磁和声等物理效应  
    热敏元件：热阻、热电偶等 光敏元件：光敏电阻、光电管、激光测距、CCD等 力敏元件：应变片，电阻式或电容式 磁敏元件：霍尔元件、磁敏电阻、磁敏管、感应线圈 湿敏元件：湿敏电阻、湿敏电容、红外线湿敏 声敏元件：超声、麦克风 色敏元件：滤色片+光敏、双结色敏
 *  化学类：基于化学反应的原理  
    气敏元件：电解质式、化学式 放射线敏感元件：复合敏感材料 味敏元件：类似气敏
 *  生物类：基于酶、抗体和激素等分子识别功能

## 二、传感器发展 

### 1. 全球传感器发展历程 

![image_15309b00.png](http://markdown.liangtengyu.com:9999/images//image_15309b00.png) 

### 2. 我国传感器发展历程 

![image_9e7b594b.png](http://markdown.liangtengyu.com:9999/images//image_9e7b594b.png) 

### 3. 传感器在当今社会的地位 

现代信息产业的三大支柱是传感器技术、通信技术和计算机技术

![image_11c7cf02.png](http://markdown.liangtengyu.com:9999/images//image_11c7cf02.png) 

### 4. 传感器形式发展历程 

分离式→单片集成式→智能化→网络系统化

![image_b1dd636b.png](http://markdown.liangtengyu.com:9999/images//image_b1dd636b.png) 

## 三、智能传感器 

### 1. 定义 

智能传感器（Intelligent/Smart Sensor）带有微处理器，具有采集、处理、交换信息的能力，是传感器集成化与微处理机相结合的产物

![image_71048618.png](http://markdown.liangtengyu.com:9999/images//image_71048618.png) 

 *  信号调理电路：将模拟信号变换为数字信号
 *  微处理器：由一片或少数几片大规模集成电路组成的中央处理器，如 单片机、DSP、FPGA、ARM等
 *  总线： RS-232、RS-485、USB、CAN、I2C、网络等
 *  协议：物理协议（电气标准）、通讯协议（数据封装）

其他定义——

美国宇航局Langleg研究中心的Brckenridgc和Husson：

智能传感器需要具备下列条件：

 *  传感器本身消除异常值和例外值，信息更全面、更真实；
 *  具有信号处理（例如：包括温度补偿、线性化等）功能；
 *  随机整定和自适应；
 *  具有一定程度的存储、识别和自诊断功能
 *  内含特定算法并可根据需要改变。

### 2. 潜在功能 

（1）自计算和处理功能

 *  间接或组合测量：根据给定的间接测量和组合测量数学模型, 智能处理器利用补偿的数据可计算出不能直接测量的物理量数值。
 *  数据统计：利用给定的统计模型可计算被测对象总体的统计特性和参数。
 *  特性标定：利用己知的电子数据表, 处理器可重新标定传感器特性。

（2）自补偿与自校准功能

利用数字计算方法和软件方式对传感器的非线性、温度漂移、响应时间等进行自动补偿，恢复被测信号， 达到软件补偿硬件缺陷的目的。

（3）自学习与自适应功能

传感器利用测量样本进行学习, 利用近似公式和迭代算法可认知新的被测量值, 即有再学习能力。同时, 通过对被测量和影响量的学习, 利用判断准则自适应地重构结构和重置参数。

（4）自诊断能力

接通电源后, 检查传感器各部分是否正常,并可诊断发生故障的部件。 处理状态数据, 通过电子故障字典或有关算法可预测、检测和定位故障。

（5）信息存储和记忆功能

智能传感器可以根据需要对接收到的信息进行存储和记忆。存储大量信息的目的主要是以备事后查询， 这一类信息包括设备历史信息以及有关检测分析结果的检索等。

（6）双向通信功能

智能传感器有一个数字式通信接口：

 *  接收、处理传感器数据
 *  将信息反馈至传感器, 对测量过程进行调节和控制。

（7）复合敏感功能

智能传感器能够同时测量多种物理量和化学量, 能够给出全面反映物质变化规律的信息, 如光照、波长、相位和偏振度等参数可反映光的运动特性;颜色、灰度、深度等反应物体表观的诸多信息等。

（8）数字和模拟输出功能

许多带微处理器的传感器能通过编程提供模拟输出、数字输出或同时提供两种输出, 并且各自具有独立的检测窗口。

（9）断电保护功能

智能传感器内装有备用电源, 当系统掉电时, 能自动把后备电源接入RAM, 以保证数据不丢失。

## 四、传感器性能表征指标 

### 1. 误差 

——度量测量值与真值之间的偏离程度

根据误差原因和性质，测量误差分为三类：

 *  系统误差：具有确定性，决定测量的准确度，可以进行修正
 *  随机误差：具有偶然性，决定测量的精密度，利用误差理论进行处理
 *  粗大误差：错误，应剔除

绝对误差：

e\_a =y-y\_d\\\\

相对误差：

e\_r=\\frac\{y-y\_d\}\{y\_d\}\\times 100\\%\\\\

平均误差：

e\_\{av\}=\\frac\{1\}\{n\}\\sum \\begin\{vmatrix\} y\_i-y\_\{di\} \\end\{vmatrix\}\\\\

均方根误差：

e\_\{rmse\}=\\sqrt\{\\frac\{\\sum(y\_i-y\_\{di\})^2\}\{n\}\}\\\\

### 2. 分辨率 

——离散化问题，能够检测到的两个值之间的最小差别，在一定程度上决定了精度。

### 3. 动态范围（量程） 

——用于表征传感器的输入上、下限。可以表示为最大可测输入与最小可测输入之间的比值，常用分贝表示。

### 4. 灵敏度 

——输入变化时，输出变化的反应程度

### 5. 线性度 

——输入与输出之间的线性程度。比例关系，直线拟合

### 6. 带宽（频率） 

——单位时间内的测量次数。

 *  信号重现： 满足Nyquist采样定理。要求大于信号最大频率的2倍。通常为2.56～4倍
 *  控制：影响稳定性
 *  机器人智能性：影响反应能力

## 五、智能传感器信息处理技术 

![image_29bba3ac.png](http://markdown.liangtengyu.com:9999/images//image_29bba3ac.png) 

### 1. 传感器模型构建技术 

  


![image_a85b7c28.png](http://markdown.liangtengyu.com:9999/images//image_a85b7c28.png) 

### 2. 数据处理技术 

![image_3977ea29.png](http://markdown.liangtengyu.com:9999/images//image_3977ea29.png) 

### 3. 视听感知信息处理技术 

![image_51504fdc.png](http://markdown.liangtengyu.com:9999/images//image_51504fdc.png) 

### 4. 信息处理算法的嵌入式实现技术 

![image_be374673.png](http://markdown.liangtengyu.com:9999/images//image_be374673.png) 

### 5. 控制应用 

![image_4c8fc6d7.png](http://markdown.liangtengyu.com:9999/images//image_4c8fc6d7.png) 

  


 *  算法由主控制器嵌入移植至传感器内，降低主控制器的计算量，提高了控制频率，降低了控制延时，能够提高系统稳定性和控制精度。
 *  算法嵌入式移植可借助于硬件并行处理实现，提高处理速度，保障控制带宽
 *  控制结构上更为紧凑，功能划分更为清晰：控制器+传感器，易于融合多种传感器反馈信息实现更为先进和智能的控制方法

## 六、智能传感器与机器人 

  


![image_169cb3ac.png](http://markdown.liangtengyu.com:9999/images//image_169cb3ac.png)  ![image_3da32b9b.png](http://markdown.liangtengyu.com:9999/images//image_3da32b9b.png) 

机器人&传感器

![image_cf9c2e8a.png](http://markdown.liangtengyu.com:9999/images//image_cf9c2e8a.png) 

### 1. 机器人传感器分类 

![image_c5467ea5.png](http://markdown.liangtengyu.com:9999/images//image_c5467ea5.png) 

### 2. 力传感器 

依据传感器安装部位来分：关节力传感器、腕力传感器和指力传感器

  


![image_7c4cb5cb.png](http://markdown.liangtengyu.com:9999/images//image_7c4cb5cb.png) 

### 3. 编码器 

 *  光电式增量编码器

  


![image_3ae77a09.png](http://markdown.liangtengyu.com:9999/images//image_3ae77a09.png) 

 *  绝对式光电编码器

  


![image_5958f524.png](http://markdown.liangtengyu.com:9999/images//image_5958f524.png) 

### 4. 陀螺仪 

  


![image_ce5bf1bc.png](http://markdown.liangtengyu.com:9999/images//image_ce5bf1bc.png) 

### 5. 视觉传感器（CCD、超声、激光、红外） 

  


![image_bda51bcd.png](http://markdown.liangtengyu.com:9999/images//image_bda51bcd.png) 

### 6. 触觉传感器 

触觉的主要任务是为获取对象与环境信息和为完成某种作业任务而对机器人与对象、环境之间相互作用时的一系列物理特征量进行检测和感知。

（1）分类

 *  压阻触觉传感器
 *  光传感式触觉传感器
 *  电容式触觉传感器
 *  磁导式触觉传感器
 *  压电式触觉传感器

（2）用途

 *  接触
 *  握力
 *  负荷
 *  压力大小
 *  压力分布
 *  力矩
 *  滑动

  


![image_d96b260f.png](http://markdown.liangtengyu.com:9999/images//image_d96b260f.png) 

### 7. 听觉传感器 

（1）基本原理

 *  音频检测
 *  信号放大
 *  语音信息处理

（2）分类

 *  电阻变换型
 *  压电式
 *  电容式
 *  动圈式

（3）用途

 *  语音识别与人机交互
 *  声源定位

### 8. 嗅觉传感器 

  


![image_32867f0f.png](http://markdown.liangtengyu.com:9999/images//image_32867f0f.png) 

（1）基本原理

 *  气敏传感器阵列
 *  信号预处理
 *  模式识别

（2）用途

能够检测、分析和鉴别简单、复杂气味和大多数挥发性成分

（3）分类

 *  气相型
 *  金属氧化物型
 *  光传感型

### 9. 味觉传感器 

  


![image_7c83b32e.png](http://markdown.liangtengyu.com:9999/images//image_7c83b32e.png) 

（1）基本原理

 *  传感器阵列
 *  信号预处理
 *  模式识别系统

（2）用途

辨别味道，检测液体成分。

（3）实例

西班牙电子舌：

![image_15e02bb8.png](http://markdown.liangtengyu.com:9999/images//image_15e02bb8.png) 