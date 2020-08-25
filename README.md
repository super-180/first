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
      
## Unity教程 Sunny Land  
1. 导入素材  
   在Unity Asset Store中下载Sunny Land素材包，并导入。  
   ![image](https://github.com/super-180/first/blob/master/Images/导入素材.png)  
2. 编辑素材并创建场景  
   首先创建一个Tilemap，之后在Sunnyland->artwork->Environment中找到tileset素材，点击tileset中的Sprite Editor,将素材剪切好。剪切好素材后，将素材拖入到Tile Palette中，即可在Scene中搭建场景。之后可添加一些素材丰富场景。  
   ![image](https://github.com/super-180/first/blob/master/Images/Sprite%20Editor.png)  
   ![image](https://github.com/super-180/first/blob/master/Images/Tile%20Palette.png)  
   建好的场景  
   ![image](https://github.com/super-180/first/blob/master/Images/场景.png)  
   为了使角色与场景有碰撞，需要加入Tilemap Collider 2D  
3. 创建角色  
   创建一个Sprite，将角色贴图放入Sprite Renderer中的Sprite，然后加入Rigidbody 2D、Box Collider 2D和Circle Collider 2D。  
   ![image](https://github.com/super-180/first/blob/master/Images/角色.png)  
4. 角色移动  
   为了使角色能够移动，需要创建一个C#脚本：PlayerController，在其中编写移动方法Movement来实现左右移动。先定义一个Rigidbody2D类型的变量，用来获得角色的Rigidbody，之后将Movement方法放入Update方法中。  
   ![image](https://github.com/super-180/first/blob/master/Images/Movement.png)  
5. 角色的动画效果  
   角色的移动方法写好，但是移动时是平移，需要添加动画效果。为角色添加Animator组件，并创建一个Animation Controller控制动画。依次为角色创建动作的动画效果。  
   站立：  
   ![image](https://github.com/super-180/first/blob/master/Images/idle.gif)  
   跑：  
   ![image](https://github.com/super-180/first/blob/master/Images/run.gif)  
   跳跃分为两部分，跳起和落下  
   跳起：  
   ![image](https://github.com/super-180/first/blob/master/Images/jump.png)  
   落下：  
   ![image](https://github.com/super-180/first/blob/master/Images/fall.png)  
   受伤：  
   ![image](https://github.com/super-180/first/blob/master/Images/hurt.gif)  
   蹲下：  
   ![image](https://github.com/super-180/first/blob/master/Images/crouch.gif)  
   动画制作完成，需要在Animator中建立关系  
   ![image](https://github.com/super-180/first/blob/master/Images/动画关系图.png)  
   ![image](https://github.com/super-180/first/blob/master/Images/参数.png)  
   之后在PlayController脚本中添加动画函数  
   ![image](https://github.com/super-180/first/blob/master/Images/切换动画.png)  
   ![image](https://github.com/super-180/first/blob/master/Images/crouch函数.png)  
   二段跳函数  
   ![image](https://github.com/super-180/first/blob/master/Images/jump函数.png)  
6. 镜头控制  
   为了使镜头跟随角色移动，为摄像机添加一个CameraController脚本  
   ![image](https://github.com/super-180/first/blob/master/Images/镜头移动.png)  
7. 物品收集  
   创建角色可收集的物品，先创建一个Sprite，将物品贴图放入Sprite Renderer中的Sprite。该物体需要与角色碰撞，添加Box Collider 2D，勾选其中的Is Trigger。物品还需要创建动画，有两种：原地和被角色收集。  
   原地：  
   ![image](https://github.com/super-180/first/blob/master/Images/cherry.gif)  
   被收集：  
   ![image](https://github.com/super-180/first/blob/master/Images/isGot.gif)  
   创建Cherry脚本，创建一个Death函数，当IsGot动画播放后，调用Death，销毁物品。在IsGot动画最后添加事件，调用Death。  
   ![image](https://github.com/super-180/first/blob/master/Images/cherry脚本.png)  
   ![image](https://github.com/super-180/first/blob/master/Images/event.png)  
8. 敌人  
   在场景中会出现一些敌人，这些敌人会被角色消灭。敌人的创建和角色类似。敌人有两种：青蛙和老鹰。  
   青蛙：  
       原地：  
       ![image](https://github.com/super-180/first/blob/master/Images/Frog_idle.gif)  
       jump:  
       ![image](https://github.com/super-180/first/blob/master/Images/Frog_jump%200.png)  
       fall:  
       ![image](https://github.com/super-180/first/blob/master/Images/Frog_fall%200.png)  
   鹰：  
       fly:  
       ![image](https://github.com/super-180/first/blob/master/Images/Eagle_fly.gif)  
   敌人的死亡动画：  
   ![image](https://github.com/super-180/first/blob/master/Images/death.gif)  
   动画创建完成后，再为敌人添加Rigidbody 2D和Circle Collider 2D。之后为敌人添加脚本。
   先创建一个类Enemy,里面存放敌人共同行为的函数  
   ![image](https://github.com/super-180/first/blob/master/Images/enemy.png)  
   老鹰：  
   ![image](https://github.com/super-180/first/blob/master/Images/enemy_eagle.png)  
   青蛙：  
   ![image](https://github.com/super-180/first/blob/master/Images/enemy_frog.png)  
   ![image](https://github.com/super-180/first/blob/master/Images/enemy_frog(2).png)  
   添加脚本后，可实现敌人的简单移动  
   ![image](https://github.com/super-180/first/blob/master/Images/frog.gif)  
   ![image](https://github.com/super-180/first/blob/master/Images/eagle.gif)  
9. 音效  
   目前该游戏的音效有四种：游戏的BGM，角色跳跃的声音，角色受伤的声音和收集物品的声音。除了BGM一直播放，其他音效需要满足条件播放。通过创建一个空物体，统一管理这四种音效。  
   ![image](https://github.com/super-180/first/blob/master/Images/audio.png)  
10. UI  
   在游戏中需要显示角色收集物品的个数，需要创建Text来显示收集物品的个数。在UI中选择Text，添加相应文字。  
   ![image](https://github.com/super-180/first/blob/master/Images/cherrytext.png)  
   主菜单：  
        主菜单的创建需要新创建一个场景，将一张游戏截图作为背景，创建Panel，并且在Panel下创建一个Text（显示游戏名）和两个按钮（Play,Quit）。之后在Panel上添加脚本Menu，在其中创建开始游戏和暂停游戏的函数。  
        ![image]( https://github.com/super-180/first/blob/master/Images/menu.png)  
        函数写好后，在按钮中的On Click()中添加物体并选择函数  
        ![image](https://github.com/super-180/first/blob/master/Images/play.png)  
        ![iamge](https://github.com/super-180/first/blob/master/Images/quit.png)  
   暂停菜单：  
         在游戏中，可通过暂停菜单暂停游戏。点击暂停键后会出现声音的调节和返回游戏键。先创建一个暂停按钮，点击按钮后会出现菜单，菜单上有调节声音的滑动条和返回游戏按钮。  
         ![image](https://github.com/super-180/first/blob/master/Images/pause.png)  
         ![image](https://github.com/super-180/first/blob/master/Images/pause%20menu.png)  
         之后在Menu脚本中创建各自的函数，并在各自的按钮中添加函数  
         ![image](https://github.com/super-180/first/blob/master/Images/pause%20and%20resume.png)  
         创建完滑动条后，创建一个Audio Mixer，并在Menu脚本中创建函数，并在滑动条中添加该函数。  
         ![image](https://github.com/super-180/first/blob/master/Images/setVolume.png)  
11. 场景切换  
    在游戏中，不止一关，会创建多个场景，多个场景之间需要切换。首先创建一个新的场景，新场景的创建方法与上述方法相同。  
    ![image](https://github.com/super-180/first/blob/master/Images/scene2.png)  
    从一个场景到另一个场景之间需要满足某种条件，这里我们用对话框来实现。当角色走到房间的门前时，触发一个对话框，按“E”即可切换下一场景。  
    首先创建一个对话框  
    ![image](https://github.com/super-180/first/blob/master/Images/对话框.png)  
    角色碰到门时才会触发对话框，需要在门上添加Collider，并勾选上Is Trigger  
    ![iamge](https://github.com/super-180/first/blob/master/Images/门.png)  
    创建对话框脚本，当角色接触门时，对话框弹出，离开时则隐藏  
    ![image](https://github.com/super-180/first/blob/master/Images/对话框脚本.png)  
    之后在门上添加一个EnterHouse脚本，当按下“E”键时，切换到下一场景  
    ![image](https://github.com/super-180/first/blob/master/Images/enterhouse.png)  
12. 2D光效  
    为了使场景更真实，需要添加光效。  
    首先场景要暗下去，为场景添加Default-Diffuse材质，这样场景就变暗了  
    ![image](https://github.com/super-180/first/blob/master/Images/diffuse.png)  
    ![image](https://github.com/super-180/first/blob/master/Images/变暗的场景.png)  
    场景变暗后，为需要的地方添加光效，就可以使部分场景变亮  
    ![image](https://github.com/super-180/first/blob/master/Images/scene3.png)  
    如果场景过暗，可以添加一个Directional Light，使场景变亮一些  
    ![image](https://github.com/super-180/first/blob/master/Images/scene2.png)  
    该项目目录：Projects/Sunny Land。  
    
## Sunny Land学习总结  
   1. 动画  
      在2D游戏中，为角色创建动画效果只需要将贴图依次放入Animation，角色就会拥有动画效果。如果有多个动画需要切换，要在Animator中为动画之间建立关系，满足某种条件后才能切换。  
   2. 图层  
      在2D游戏中，创建图层是为了更好呈现场景。如果所有场景均是同一图层，那么有些需要突出的场景可能被遮挡。创建多个图层，可以使场景有层次地表现出来。  
   3. 按钮  
      Unity中，有一些默认安排好的按键可以使用，如Jump，可以直接使用  
      ![image](https://github.com/super-180/first/blob/master/Images/input.png)  
      如果需要一些没有的按键，可以复制一个按键，再命名并改键，即可得到，如Crouch（下蹲）  
      ![image](https://github.com/super-180/first/blob/master/Images/复制按键.png)  
  
## Unity小游戏:Speed Down  
   1. 导入资源  
      在Unity asset store上下载该游戏所需要的资源。  
      ![image](https://github.com/super-180/first/blob/master/Images/speed%20down资源.png)  
   2. 场景搭建  
      首先搭建一个场景  
      ![image](https://github.com/super-180/first/blob/master/Images/speed%20down背景.png)  
      为了使背景产生移动效果，需要创建脚本  
      ![image](https://github.com/super-180/first/blob/master/Images/背景移动.png)  
      效果图如图所示  
      ![image](https://github.com/super-180/first/blob/master/Images/bg移动.gif)  
      迫使角色不停向下移动，要在顶部设置尖刺，角色一碰就死。在素材中找到尖刺后，添加Polygon Colider 2D,Rigidbody 2D和Composite Colider 2D，其中将Rigidbody的Body Type改为Static。将尖刺的Tag改为Spike。  
      ![image](https://github.com/super-180/first/blob/master/Images/刺.png)  
      这样游戏场景就搭建完成了。  
   3. 制作平台  
      在角色下落过程中，需要平台落脚，因此需要制作一些平台。  
      Basic Platform：  
      这是一个基本的平台，没有任何变化  
      ![image](https://github.com/super-180/first/blob/master/Images/basic%20platform.png)  
      ![image](https://github.com/super-180/first/blob/master/Images/basic%20am.gif)  
      Fan Platform：  
      这是一个弹跳平台，当角色落在上面时，角色会突然弹起，并且平台的螺旋桨会旋转  
      ![image](https://github.com/super-180/first/blob/master/Images/Fan%20Platform.png)  
      ![image](https://github.com/super-180/first/blob/master/Images/fan%20am.gif)  
      旋转代码  
      ![image](https://github.com/super-180/first/blob/master/Images/fan代码.png)  
      Roate Platform：  
      这个一个旋转平台，当角色站在平台的边缘时，平台会旋转  
      ![image](https://github.com/super-180/first/blob/master/Images/Roate%20Platform.png)  
      ![image](https://github.com/super-180/first/blob/master/Images/roate%20am.gif)  
      为了使平台有旋转效果，添加Hinge Joint 2D组件  
      ![image](https://github.com/super-180/first/blob/master/Images/roate_hinge.gif)  
      Spiked Ball：  
      这是一个摆球，如果角色不小心触碰，就会死亡  
      ![image](https://github.com/super-180/first/blob/master/Images/Spiked%20Ball.png)  
      为了使球和摆点相连接，需要给球添加Distance Joint 2D组件，即可连接两个物体。可是在屏幕显示时，没有线连接两个物体，看起来不真实，要在父物体上添加Line Renderer组件，并创建脚本，即可显示连接物体的线。  
      ![image](https://github.com/super-180/first/blob/master/Images/Line%20Renderer脚本.png)  
      ![image](https://github.com/super-180/first/blob/master/Images/spiked%20ball%20am.gif)  
      为了使平台能够自动向上移动，创建脚本  
      ![image](https://github.com/super-180/first/blob/master/Images/platform脚本.png)  
      在背景上方设置一个空物体TopLine，当平台接触到该物体时，平台会自动摧毁  
      ![image](https://github.com/super-180/first/blob/master/Images/topline.png)  
   4. 角色  
      在素材中找到角色的贴图，并创建好，添加好Rigidbody 2D和Box Collider 2D  
      ![image](https://github.com/super-180/first/blob/master/Images/speed%20down%20player.png)  
      之后为角色创建相应的动画  
      站立：  
      ![image](https://github.com/super-180/first/blob/master/Images/sd_idle.gif)  
      跑：  
      ![image](https://github.com/super-180/first/blob/master/Images/sd_run.gif)  
      下落：  
      ![image](https://github.com/super-180/first/blob/master/Images/sd_fall.png)  
      死亡：  
      ![image](https://github.com/super-180/first/blob/master/Images/sd_dead.gif)  
      之后为动画添加关系  
      ![image](https://github.com/super-180/first/blob/master/Images/sd_动画关系.png)  
      ![image](https://github.com/super-180/first/blob/master/Images/sd_动画参数.png)  
      为角色添加角色脚本  
      ![image](https://github.com/super-180/first/blob/master/Images/sd_player-1.png)  
      ![image](https://github.com/super-180/first/blob/master/Images/sd_player-2.png)  
   5. 随机生成平台  
      在游戏中，产生的平台要是随机的，这是需要创建代码实现  
      先创建一个空物体StartLine，并添加Box Collider 2D  
      ![image](https://github.com/super-180/first/blob/master/Images/平台起点.png)  
      创建脚本，从StartLine的范围中随机生成平台  
      ![image](https://github.com/super-180/first/blob/master/Images/随机生成平台-1.png)  
      ![image](https://github.com/super-180/first/blob/master/Images/随机生成平台-2.png)
   6. UI  
      在该游戏中，需要记录角色生存的时间，创建一个Text来记录时间  
      ![image](https://github.com/super-180/first/blob/master/Images/time.png)  
      再创建一个结束面板，在上面还要有两个按钮：Play Again和Quit。  
      ![image](https://github.com/super-180/first/blob/master/Images/game%20over.png)  
      创建GamaManager脚本实现UI功能  
      ![image](https://github.com/super-180/first/blob/master/Images/game%20manager代码-1.png)  
      ![image](https://github.com/super-180/first/blob/master/Images/game%20manager代码-2.png)  
      

