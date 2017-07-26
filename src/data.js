/*初始化：设置响应时间*/
(function () {
    Mock.setup({
        timeout: "100-500"
    });
})();

/*Demo*/
(function () {

    /*示例：无参数*/
    Mock.mock("test", {
        "status": "100",
        "data": {
            "x|0-100": 1,
            "y": Mock.Random.integer(0, 100)
        }
    });

    /*示例：带参数*/
    Mock.mock(/test\?a=\d&b=\d/, {
        "status": "100",
        "data": {
            "m|0-100": 1,
            "n": Mock.Random.integer(0, 100)
        }
    });

})();