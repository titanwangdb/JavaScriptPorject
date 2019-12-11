
var pi = 3.14;  // 全局变量

function displayDate(){
    PrintConsole("displayDate() is running...");
    /* Wed Dec 11 2019 14:37:44 GMT+0800 (中国标准时间) */
    document.getElementById("demo").innerHTML = Date(); /* 使用 innerHTML 写入到 HTML 元素。 */
}

function changeContent(str){
    PrintConsole("changeContent() is running...","log");
    x = document.getElementById("demo");
    x.innerHTML = (str == undefined) ? "Hello JavaScript!" : str;
    x.style.color = "#ff0000";
}

function changeImage(){
    try{
        PrintConsole("changeImage() is running...");
        element = document.getElementById('myimage');
        if (element.src.match("bulbon")){
            element.src = "../Resource/1495798487624763.jpg";
        } else {
            element.src = "../Resource/cover_javascript.png";
        }
    }
    catch(err){
        PrintConsole(err.message, 'error')
    }
}

function checkValue(){
    y = "this is the global variable"; // 如果变量在函数内没有声明（没有使用 var 关键字），该变量为全局变量。
    var x = document.getElementById("checkValues").value;
    if(x=="" || isNaN(x)){
        /* 使用 window.alert() 弹出警告框。 */
        alert("not number");
    }
}

// 字面量
function literal(){

}

function returnFun(i,j){
    if(isNaN(i) || isNaN(j)){
        return
    }
    return i + j;
}

// Date（日期）对象
function DateTest(){
    var d = new Date(); // 创建 Date 对象 用于处理日期和时间
    document.writeln("getDate(1 ~ 31): " + d.getDate() + "<br>"); // 日期

    var weekday = "Sunday";
    switch(d.getDay()){
        case 1:
            weekday = "Monday";
            break;
        case 2:
            weekday = "Tuesday";
            break;
        case 3:
            weekday = "Wednesday"; 
            break;
        case 4:
            weekday = "Thursday";
            break;
        case 5:
            weekday = "Friday"; 
            break;
        case 6:
            weekday = "Saturday"; 
            break;    
        default:
    }
    document.writeln("getDay(0 ~ 6): " + weekday + "<br>");  // 星期

    document.writeln("getFullYear: " + d.getFullYear() + "<br>");
    document.writeln("getHours (0 ~ 23): " + d.getHours() + "<br>");
    document.writeln("getMilliseconds(0 ~ 999): " + d.getMilliseconds() + "<br>");
    document.writeln("getMinutes(0 ~ 59): " + d.getMinutes() + "<br>");
    document.writeln("getMonth (0 ~ 11): " + d.getMonth() + "<br>");
    document.writeln("getSeconds (0 ~ 59): " + d.getSeconds() + "<br>");
    document.writeln("getTime: " + d.getTime() + "<br>");  // 返回 1970 年 1 月 1 日至今的毫秒数。
    document.writeln("toUTCString: " + d.toUTCString() + "<br>"); // 将当日的日期（根据 UTC）转换为字符串
}

// 显示钟表
function clock(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    //document.writeln("Clock: " + h +":"+ m +":"+ s);  整个页面会进行刷新
    // 在小于10的数字钱前加一个‘0’
    document.getElementById("clock").innerHTML = "The Clock is: " + h +":"+ (m < 10 ? "0" + m : m) 
        +":"+ (s < 10 ? "0" + s : s);

    setTimeout(function(){clock()}, 500);
}

function tryCatch(){
    try{
        var x = document.getElementById("TryCatchThrow").value;
        if(x == "") throw "please input value.";
        if(isNaN(x)) throw "please input number.";
        if(x < 1) throw "to Min.";
        if(x > 5) throw "to Max";
    } catch(e){
        document.getElementById("message").innerHTML = e;
    }
}

function PrintConsole(message,type){
    switch(type){
        case 'info':
            console.info(message);
            break;
        case 'debug':
            console.debug(message);
            break;
        case 'error':
            console.error(message);
            break;
        default:
            console.log(message);
    }
}


