var index = 0;//li初始索引
var li = $(".banner ul li");//获取所有li元素
var flag = false;//歌曲是否播放标记，true为播放，false为暂停
var close = true;//播放器是否隐藏，true为显示，false为隐藏
var login = false;//是否登录，true为登录，false为没有登录
var check = true;//检查是否密码错误，true为正确，false为错误，默认正确
//喜爱功能标记位，true为喜爱，false为不喜爱
var one_heart=false;
var two_heart=false;

$(document).on('click','li',function () {
    index = $(this).index();
    show();
});

function show() {
    change_bg(index + 1);
    change_img_text(index + 1);
    change_btn_title();
    img_rotate();
    play_mp3();
    checkHeart();
}

//更换背景
function change_bg(idx) {
    $("body").css({
        "background":"url(image/"+ idx +".jpg) no-repeat",
        "background-size":"cover"
    });
}

//更换播放器图片、文本
function change_img_text(idx) {
    $(".music .m_img img").attr('src', 'image/' + idx + '.jpg');
    $(".music .m_text").html($(".banner ul li").eq(index).attr("title"));
}

//更换播放按钮
function change_btn_title() {
    $(".music .m_btn .m_play").attr("class","m_pause");
    $(".music .m_btn .m_pause").attr("title", "暂停");
}

//图片旋转
function img_rotate() {
    $(".banner ul li").removeClass("img_animation");
    $(".banner ul li").eq(index).addClass("img_animation");
}

//播放歌曲
function play_mp3() {
    $(".music .m_mp3").attr("src",$(".banner ul li").eq(index).attr("datasrc"));
    $(".music .m_mp3").get(0).play();
    flag = true;
}

//按钮暂停歌曲
$(document).on('click','.m_pause', function () {
    if (flag) {
        $(".music .m_mp3").get(0).pause();
        $(".banner ul li").eq(index).removeClass("img_animation");
        $(".music .m_btn .m_pause").attr("class", "m_play");
        $(".music .m_btn .m_play").attr("title", "播放");
        flag = false;
    }
});

//按钮播放歌曲
$(document).on('click', '.m_play', function () {
    if (!flag) {
        $(".music .m_mp3").get(0).play();
        $(".banner ul li").eq(index).addClass("img_animation");
        $(".music .m_btn .m_play").attr("class", "m_pause");
        $(".music .m_btn .m_pause").attr("title", "暂停");
        flag = true;
        //第一次进入页面点击播放按钮时的背景处理
        change_bg(index + 1);
    }
});

//上一首
$(document).on('click', '.m_prev', function () {
    index--;
    if (index < 0)
        index = $(".banner ul li").length - 1;
    show();
});

//下一首
$(document).on('click', ".m_next", function () {
    index++;
    if ($(".banner ul li").length - 1 < index)
        index = 0;
    show();
});

//隐藏与显示
$(document).on('click', ".m_close", function () {
    if (close) {
        $(this).addClass("m_open");
        $(".music").animate({ "left": "-630px" }, 1000);
        close = false;
    }
    else {
        $(this).removeClass("m_open");
        $(".music").animate({ "left": "0" }, 1000);
        close = true;
    }
});


//登录界面

//点击“登录”按钮，弹出登录窗口和遮盖层
$(document).on('click', '.login_btn', function () {
    $(".login").css('display', 'block');
    $(".bg").css('display', 'block');
});

//点击"关闭",隐藏登陆窗口和遮盖层
$(document).on('click', '.closeBtn', function () {
    $(".login").css('display', 'none');
    $(".bg").css('display', 'none');
});

//登录按钮，将用户名和密码与数据库中的信息进行比较
$(document).on('click', '.loginSubmit', function () {

    //连接SQL Server数据库
    var conn = new ActiveXObject("ADODB.Connection");
    var str = "Driver={SQL Server};SERVER=DESKTOP-I035FLL;UID=sa;PWD=lpf12345;DATABASE=music";
    var sql_one = "SELECT id FROM information";
    var sql_two = "SELECT password FROM information";
    conn.Open(str);

    //获取数据
    var obj_one=conn.Execute(sql_one);
    var obj_two=conn.Execute(sql_two);

    while(!obj_one.EOF && !obj_two.EOF){
        //用户名与密码正确
        if(obj_one.Fields(0).Value.trim() == document.getElementsByName("one")[0].value && obj_two.Fields(0).Value.trim() == document.getElementsByName("two")[0].value){
            alert(document.getElementsByName("one")[0].value+"用户登录成功!");
            login=true;
            break;
        }
        //用户名正确，但密码错误，将密码清空，重新输入
        else if(obj_one.Fields(0).Value.trim() == document.getElementsByName("one")[0].value && obj_two.Fields(0).Value.trim() != document.getElementsByName("two")[0].value){
            alert(document.getElementsByName("one")[0].value+"用户密码错误!");
            document.getElementsByName("two")[0].value = "";
            check = false;
            break;
        }
        obj_one.moveNext();
        obj_two.moveNext();
    }

    if(!login && check){
        login = true;
        alert(document.getElementsByName("one")[0].value+"用户注册成功!");
        var sql_three = "INSERT INTO information VALUES('" + document.getElementsByName("one")[0].value + "','" + document.getElementsByName("two")[0].value + "')";
        conn.Execute(sql_three);
    }
    
    if(login){
        //清除登录框及遮挡层
        $(".login").css('display', 'none');
        $(".bg").css('display', 'none');
        //用户名显示，更改按钮,将喜爱功能显示
        $(".ID_text").html("用户名:"+document.getElementsByName("one")[0].value);
        $(".loginBtn").html("退出");
        $(".loginBtn").attr("class","loginOut");
        $(".m_ilike").css('display','block');
    }
    
    obj_one.Close();
    obj_two.Close();
    conn.Close();
});

//退出按钮
$(document).on('click',".loginOut",function(){
    login=false;
    check=true;
    //修改用户名，更改按钮，将喜爱功能隐藏
    $(".ID_text").html("用户名:");
    $(".loginOut").html("登录");
    $(".loginOut").attr("class","loginBtn");
    $(".m_ilike").css('display','none');
    location.reload();
});

//喜爱功能,只在用户登录显示
$(document).on('click','.m_ilike',function(){
    if($(".music .m_text").html() == "Believer - Imagine Dragons" && login && !one_heart){
        $(".m_ilike").css('background-position','-30px -96px');
        one_heart=true;
    }
    else if($(".music .m_text").html() == "Believer - Imagine Dragons" && login && one_heart){
        $(".m_ilike").css('background-position','0 -96px');
        one_heart=false;
    }
    else if($(".music .m_text").html() == "Natural - Imagine Dragons" && login && !two_heart){
        $(".m_ilike").css('background-position','-30px -96px');
        two_heart=true;
    }
    else if($(".music .m_text").html() == "Natural - Imagine Dragons" && login && two_heart){
        $(".m_ilike").css('background-position','0 -96px');
        two_heart=false;
    }
});

//每次更换歌曲时，检查喜爱图片
function checkHeart(){
    if($(".music .m_text").html() == "Believer - Imagine Dragons" && login && !one_heart){
        $(".m_ilike").css('background-position','0 -96px');
    }
    else if($(".music .m_text").html() == "Believer - Imagine Dragons" && login && one_heart){
        $(".m_ilike").css('background-position','-30px -96px');
    }
    else if($(".music .m_text").html() == "Natural - Imagine Dragons" && login && !two_heart){
        $(".m_ilike").css('background-position','0 -96px');
    }
    else if($(".music .m_text").html() == "Natural - Imagine Dragons" && login && two_heart){
        $(".m_ilike").css('background-position','-30px -96px');
    }
}