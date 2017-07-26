/*使用services*/
$(function () {
    demo.services.test.test_no_para(function (datas) {
        console.log(datas);
        console.log(datas.status);
        console.log(datas.data);
    });
    demo.services.test.test_has_para(function (datas) {
        console.log(datas);
        console.log(datas.status);
        console.log(datas.data);
    });
});
