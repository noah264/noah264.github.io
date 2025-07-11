$(document).ready(function () {

    init()

    /*默认语言*/
    var defaultLang = "en";
    var currentLang = localStorage.getItem('currentLang') || defaultLang;
    
    // 初始化翻译
    function initTranslation() {
        console.log("Initializing translation with language: " + currentLang);
        try {
            $("[i18n]").i18n({
                defaultLang: currentLang,
                filePath: "assets/i18n/",
                filePrefix: "i18n_",
                fileSuffix: "",
                forever: true,
                callback: function () {
                    console.log("i18n is ready.");
                    updateTranslateButton();
                },
                error: function(err) {
                    console.error("Translation error:", err);
                }
            });
        } catch (error) {
            console.error("Failed to initialize translation:", error);
        }
    }
    
    // 更新翻译按钮文本
    function updateTranslateButton() {
        var buttonText = currentLang === "cn" ? "中/En" : "En/中";
        $("#nav__translate").text(buttonText);
        $("#translate").val(currentLang);
        
        // 添加语言切换的视觉反馈
        $("#translate").addClass('lang-changed');
        setTimeout(() => {
            $("#translate").removeClass('lang-changed');
        }, 500);
    }
    
    // 初始化翻译
    initTranslation();
    
    // 测试翻译功能
    setTimeout(function() {
        console.log("Testing translation...");
        console.log("Elements with i18n attribute: " + $("[i18n]").length);
        console.log("Current language: " + currentLang);
    }, 1000);
    
    /*中英文切换按钮*/
    $("#translate").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        
        // 添加点击动画效果
        $(this).addClass('translate-clicked');
        setTimeout(() => {
            $(this).removeClass('translate-clicked');
        }, 300);
        
        // 切换语言
        currentLang = currentLang === "cn" ? "en" : "cn";
        localStorage.setItem('currentLang', currentLang);
        
        // 更新翻译
        try {
            $("[i18n]").i18n({
                defaultLang: currentLang,
                filePath: "assets/i18n/",
            });
        } catch (error) {
            console.error("Translation switch error:", error);
        }
        
        // 更新按钮文本
        updateTranslateButton();
        
        console.log("Language switched to: " + currentLang);
    });

    //初始化数据
    function init(){

        // 调用函数以随机展示图片
        getRandomImage();
    }



    $(".openVxModal").click(function () {
        // 防止背景滚动
        $('body').css('overflow', 'hidden');
        $("#vxalert").fadeIn(300).addClass('show');
        // 确保模态框居中
        setTimeout(function() {
            $("#vxalert .modal").css('transform', 'scale(1) translateY(0)');
        }, 50);
    });

    $("#closeVxModal").click(function () {
        $("#vxalert").removeClass('show').fadeOut(300);
        // 恢复背景滚动
        $('body').css('overflow', 'auto');
    });

    $("#openTelModal").click(function(){
        // 防止背景滚动
        $('body').css('overflow', 'hidden');
        $("#telAlert").fadeIn(300).addClass('show');
        // 确保模态框居中
        setTimeout(function() {
            $("#telAlert .modal").css('transform', 'scale(1) translateY(0)');
        }, 50);
    })

    $("#closeTelModal").click(function(){
        $("#telAlert").removeClass('show').fadeOut(300);
        // 恢复背景滚动
        $('body').css('overflow', 'auto');
    })

    // 点击遮罩层关闭模态框
    $(".overlay").click(function(e) {
        if (e.target === this) {
            $(this).removeClass('show').fadeOut(300);
            // 恢复背景滚动
            $('body').css('overflow', 'auto');
        }
    });

    // ESC键关闭模态框
    $(document).keydown(function(e) {
        if (e.keyCode === 27) { // ESC键
            $(".overlay.show").removeClass('show').fadeOut(300);
            // 恢复背景滚动
            $('body').css('overflow', 'auto');
        }
    });

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

    function getRandomImage() {
        // 手动维护文件名列表
        let fileNames = ['image1.png', 'image2.png'];

        // 随机选择一个文件名
        let randomImageFile = fileNames[Math.floor(Math.random() * fileNames.length)];

        // 构建图片的完整路径
        let imagePath = 'assets/img/theme/' + randomImageFile;

        let imageElement = document.querySelector('.home__blob image');

        // 设置图片的 xlink:href 属性
        imageElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imagePath);
    }

});
