alert("最后一个页面做的是一个小游戏")
alert("点击图片测试手速")
alert("确认后3秒开始")
let i = 0
let time =  setTimeout(()=>{
    alert("你一共抢到了"+i+"个红包")
    if(i<=10){
    alert("手速不行啊")
}else{
    alert("不戳哦,这手速更我有的一拼")
}
},3000)
setTimeout(time, 3000); 