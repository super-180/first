# first
my study
## Unity零基础案例：打砖块  
1. 创建项目  
   打开UnityHub，新建一个3D项目  
   ![image](https://github.com/super-180/first/blob/master/Images/1.jpg)  
   ![image](https://github.com/super-180/first/blob/master/Images/2020-07-26%20(2).png)  
2. 设计打砖块的场景  
   2.1 打砖块的地板  
       创建一个Plane，作为打砖块的地板。在Hierarchy面板上右键，在3D Object中选择Plane  
       ![image](https://github.com/super-180/first/blob/master/Images/2020-07-27%20(2).png)  
       效果如图所示  
       ![image](https://github.com/super-180/first/blob/master/Images/2020-07-27%20(3).png)  
   2.2 砖块的生成  
       在Hierarchy面板上右键，在3D Object中选择Cube  
       ![image](https://github.com/super-180/first/blob/master/Images/2020-07-27%20(6).png)  
       砖块需要物理特性，需要加入刚体组件，即在Cube中加入Rigidbody组件  
       ![image](https://github.com/super-180/first/blob/master/Images/2020-07-27%20(10)_LI.jpg)  
       将Cube设置成预设体，这样所有的Cube可以统一控制  
       ![image](https://github.com/super-180/first/blob/master/Images/2020-07-27%20(7).png)  
       复制多个Cube，在Plane上组成一堵墙，效果如图所示  
       ![image](https://github.com/super-180/first/blob/master/Images/2020-07-27%20(8).png)  
   2.3 子弹的生成  
       在3D Object中选择Sphere，改变大小，并加入Rigidbody组件，设置成预设体，如图所示  
       ![image](https://github.com/super-180/first/blob/master/Images/2020-07-27%20(11).png)  
3. 控制子弹  
   3.1 控制子弹的生成和速度  
       创建一个Shoot脚本，设置一个GameObject对象bullet来接受预设的子弹。如果点击鼠标左键，就在Camera的位置生成一个子弹，并赋予初速度。将Shoot脚本当作组件插入到Camera中，如图所示  
       ![image](https://github.com/super-180/first/blob/master/Images/2020-07-27%20(14).png)  
       ![image](https://github.com/super-180/first/blob/master/Images/2020-07-27%20(15)_LI.jpg)  
   3.2 控制Camera的移动  
       创建一个Move脚本，来控制Camera的上下左右移动，如图所示  
       ![image](https://github.com/super-180/first/blob/master/Images/2020-07-27%20(17).png)  
       ![image](https://github.com/super-180/first/blob/master/Images/2020-07-27%20(18)_LI.jpg)  
4. 打砖块效果演示  
       ![image](https://github.com/super-180/first/blob/master/Images/打砖块演示.gif)
打砖块项目目录:Projects/Make Bricks  



## Unity基础操作  
通过学习打砖块项目，简单学习了Unity的基本操作  
1. Unity视图  
   1.1 Scene视图  
       ![image](https://github.com/super-180/first/blob/master/Images/Scene.png)  
       设计游戏的场景，所有游戏物体都在该场景中。  
   1.2 Game视图  
       ![image](https://github.com/super-180/first/blob/master/Images/Game.png)  
       显示游戏的运行画面，点击播放进入播放模式。  
   1.3 Hierarchy视图  
       ![image](https://github.com/super-180/first/blob/master/Images/Hierarchy.png)  
       层次视图包含了每一个当前场景的所有游戏对象，可以在该视图中选择对象或生成对象。  
   1.4 Project视图  
       ![image](https://github.com/super-180/first/blob/master/Images/Project.png)  
       每个Unity的项目包含一个资源文件夹，此文件夹的内容呈现在项目视图。  
   1.5 Inspector视图  
       ![image](https://github.com/super-180/first/blob/master/Images/Inspector.png)  
       显示当前选定的游戏对象的所有附加组件及其属性的相关详细信息。  
   1.6 工具栏  
       ![image](https://github.com/super-180/first/blob/master/Images/工具栏.png)  
       手柄工具（快捷键Q）：按住左键拖动视角  
       移动工具（快捷键W）：首先选择物体，物体会出现方向轴，拖动方向轴移动物体  
       旋转工具（快捷键E）：首先选择物体，物体会出现旋转轴，拖动旋转轴旋转物体  
       缩放工具（快捷键R）：首先选择物体，物体会出现缩放方向轴，拖动可缩放物体大小  
       矩形工具（快捷键T）：首先选择物体，物体会出现矩形轴，拖动可缩放物体  
       移动，旋转或缩放工具（快捷键Y）：首先选择物体，物体会出现方向轴、旋转轴和缩放方向轴，可以实现三种操作  
       编辑器工具：编辑物体的组件
2. 组件  
   在场景中生成了一个游戏对象，为了该游戏对象能具备某种功能，可以添加组件（Add Component）来实现某种功能。  
   2.1 Transform  
       Transform组件中有三个信息：Position、Rotation和Scale。  
       Position：在世界坐标系中，transform的位置。  
       Rotation：在世界坐标系中物体变换的旋转角度作为Quaternion储存。  
       Scale：物体的缩放比例。  
   2.2 Rigidbody  
       刚体组件，赋予游戏对象物体特性，如重力等。分为2D和3D。  
   2.3 Collider  
       碰撞体组件，需要碰撞检测的物体需要添加该组件。该组件有不同分类，如Box Collider、Circle Collider等。
3. 脚本  
   新创建的脚本默认会有两个方法，分别为Start()和Update()。  
   3.1 Start()  
       Start()方法仅当在第一次脚本启用Update()方法被调用之前调用，只调用一次。  
   3.2 Update()  
       Update()方法会在脚本执行时一直运行。代码每秒执行N次，也就是说帧数为N帧，而这个Update中的帧数大小取决于设备性能和游戏中物体的数量，因此同一个游戏在不同电脑上运行时的流畅度不同。  
      
