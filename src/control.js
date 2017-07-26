var NameSpace = {
    namespace: function (ns) {
        var parts = ns.split(".");
        var object = this;

        for (var i = 0; i < parts.length; i++){
            if(!object[parts[i]]){
                object[parts[i]] = { };
            }
            object = object[parts[i]];
        }

        return object;
    }
};
var demo = (function (NameSpace, $) {

    /* 全局对象 */
    var myGlobal = NameSpace.namespace("demo");
    myGlobal.help = function () {
        myGlobal.name = "用mock+jQuery写的前端api服务DEMO";
        myGlobal.version = "1.0";
        myGlobal.author = "ALISURE";
        console.log(myGlobal.name + " " + myGlobal.version + " " + myGlobal.author);
    };


    var services = myGlobal.services = {
        name : "关于网络服务的JS代码，由api代码运行时扩展",
        version : "0.1",
        author : "ALISURE",
        help : function () {
            console.log(this.name + " " + this.version + " " + this.author);
        }
    };
    services.util = {
        deal_callback : function (datas, callback) {
            if (callback !== undefined){
                callback(datas);
            }else{
                throw new Error("callback undefined");
            }
        }
    };


    var ajax_deal = myGlobal.ajax_deal = {
        name : "关于处理ajax的JS代码",
        version : "1.0",
        author : "ALISURE",
        help : function () {
            console.log(this.name + " " + this.version + " " + this.author);
        }
    };
    ajax_deal.init = function () {
        /*绑定事件监听*/
        // ajax_deal.start();
        // ajax_deal.send();
        ajax_deal.error();
        ajax_deal.success();
        // ajax_deal.stop();
        // ajax_deal.complete();
    };
    ajax_deal.start = function () {
        $(document).ajaxStart(function (event) {
            console.log("start");
            console.log(event);
            console.log("-----------------------------------------");
        });
    };
    ajax_deal.send = function () {
        $(document).ajaxSuccess(function (event, XMLHttpRequest, ajaxOptions) {
            console.log("send");
            console.log(ajaxOptions);
            console.log("-----------------------------------------");
        });
    };
    ajax_deal.error = function () {
        $(document).ajaxError(function (event, XMLHttpRequest, ajaxOptions, thrownError) {
            console.log("-----------------------------------------");
            console.log("there is a error......");
            console.log("*****************************************");
            console.log(ajaxOptions);
            console.log(thrownError);
            console.log("*****************************************");
            console.log("-----------------------------------------");
        });
    };
    ajax_deal.success = function () {
        $(document).ajaxSuccess(function (event, XMLHttpRequest, ajaxOptions) {
            console.log("success");
            console.log(ajaxOptions);
            console.log("-----------------------------------------");
        });
    };
    ajax_deal.complete = function () {
        $(document).ajaxComplete(function (event, XMLHttpRequest, ajaxOptions) {
            console.log("complete");
            console.log(ajaxOptions);
            console.log("-----------------------------------------");
        });
    };
    ajax_deal.stop = function () {
        $(document).ajaxSuccess(function (event, XMLHttpRequest, ajaxOptions) {
            console.log("stop end");
            console.log(ajaxOptions);
            console.log("-----------------------------------------");
        });
    };


    /* 返回全局对象 */
    return myGlobal;

})(NameSpace, $);