
/*init:绑定ajax事件*/
(function bing_ajax_event() {
    demo.ajax_deal.init();
})();

/*服务的形式：提供API服务，相当于service层*/
$(function () {
    demo.services.test = {
        test_no_para: function (callback) {
            $.get("test", function (datas) {
                demo.services.util.deal_callback(datas, callback);
            }, "json");
        },
        test_has_para: function (callback) {
            $.get("test",{
                a: 1, b: 2
            }, function (datas) {
                demo.services.util.deal_callback(datas, callback);
            }, "json");
        }
    };
});

