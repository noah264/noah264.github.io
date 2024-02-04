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
});
