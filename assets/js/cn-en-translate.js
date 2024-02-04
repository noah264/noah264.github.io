$(document).ready(function () {
    /*默认语言*/
    var defaultLang = "en";
    $("[i18n]").i18n({
        defaultLang: defaultLang,
        filePath: "assets/i18n/",//路径配置
        filePrefix: "i18n_",
        fileSuffix: "",
        forever: true,
        callback: function () {
            console.log("i18n is ready.");
        },
    });
    /*中英文切换按钮*/
    $("#translate").click(function (e) {
        var a = $(e.target).val() == "cn" ? "en" : "cn";
        var b = a=="cn"?"中/En":"En/中";
        $(e.target).val(a);
        $("#nav__translate").text(b);
        console.log($(e.target).val());

        $("[i18n]").i18n({
            defaultLang: a,
            filePath: "assets/i18n/",
        });

    });

    $(".openVxModal").click(function () {
        $("#vxalert").fadeIn(300);
    });

    $("#closeVxModal").click(function () {
        $("#vxalert").fadeOut(300);
    });

    $("#openTelModal").click(function(){
        $("#telAlert").fadeIn(300);
    })

    $("#closeTelModal").click(function(){
        $("#telAlert").fadeOut(300);
    })

    $("#callTel").click(function(){
        // 获取电话号码元素
    var phoneNumberElement = document.getElementById('callTel');

        // 获取电话号码文本内容
        var phoneNumber = phoneNumberElement.textContent;

        // 构建拨号链接
        var dialLink = 'tel:' + phoneNumber;

        // 使用 window.location.href 进行跳转
        window.location.href = dialLink;
    })

    $("#sendWeChat").click(function(){
        // 构建发微信链接
        var wechatLink = 'weixin://contacts/profile/' + 'Noah264';

        // 使用 window.location.href 进行跳转
        window.location.href = wechatLink;
    })

    // 手动维护文件名列表
    var fileNames = ['image1.png', 'image2.png', 'image3.png', 'image4.png', 'image5.png', 'image6.png'];

    function getRandomImage() {
        // 随机选择一个文件名
        var randomImageFile = fileNames[Math.floor(Math.random() * fileNames.length)];

        // 构建图片的完整路径
        var imagePath = 'assets/img/theme/' + randomImageFile;

        var imageElement = document.querySelector('.home__blob image');

        // 设置图片的 xlink:href 属性
        imageElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imagePath);

    }

    // 调用函数以随机展示图片
    getRandomImage();
});
