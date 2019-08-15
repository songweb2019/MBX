const express = require('express');
const pool = require('./pool.js');
var router = express.Router();
//用户登录
router.post('/login', function(req, res) {
    var obj = req.body;
    var n = 400;
    for (var key in obj) {
        n++;
        if (!obj[key]) {
            res.send({ code: n, msg: key + "  require" });
            return;
        }
    }
    pool.query('select * from mbx_user where uname=? and upwd=?', [obj.uname, obj.upwd],
        function(err, result) {
            if (err) throw err;
            if (result.length > 0) {
                res.send("1");
            } else {
                res.send("0");
            }

        });

});
//用户注册
router.post('/reg', function(req, res) {
    var obj = req.body;
    var n = 400;
    if (obj.gender == '男') {
        obj.gender = 1;
    } else {
        obj.gender = 0;
    }
    pool.query('insert into mbx_user set ?', [obj],
        function(err, result) {
            if (err) throw err;
            if (result.affectedRows > 0) {
                res.send("1");
            } else {
                res.send("2");
            }
        });

});

//用户注册验证      
router.post('/regs', function(req, res) {
    var obj = req.body;
    var n = 400;
    pool.query('select * from mbx_user where uname=? ', [obj.uname],
        function(err, result) {
            if (err) throw err;
            if (result.length > 0) {
                res.send('3');
                return;
            } else {
                res.send('2');
                return;
            }
        });

});
//用户修改信息
router.post('/update', function(req, res) {
    var obj = req.body;
    var n = 400;
    for (var key in obj) {
        n++;
        if (!obj[key]) {
            res.send({ code: n, msg: key + '   require' });
            return;
        }
    }
    pool.query('update mbx_user set ? where uname=?', [obj, obj.uname],
        function(err, result) {
            if (err) throw err;
            if (result.affectedRows > 0) {
                res.send('修改成功');
            } else {
                res.send('修改失败');
            }
        });

});
//用户详情
router.post('/detail', function(req, res) {
    var obj = req.body;

    if (!obj.uid) {
        res.send({ code: 404, msg: "uid  require" });
        return;
    }
    pool.query('select * from mbx_user where uid=? ', [obj.uid],
        function(err, result) {
            if (err) throw err;
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ code: 200, msg: 'detail err' });
            }

        });

});

//用户列表
router.post('/list', function(req, res) {
    var obj = req.body;
    obj.page = parseInt(obj.page);
    obj.count = parseInt(obj.count);

    if (!obj.page || obj.page < 0) obj.page = 1;
    if (!obj.count || obj.count < 0) obj.count = 3;

    var start = (obj.page - 1) * obj.count;
    pool.query('select * from mbx_user limit ?,?', [start, obj.count], function(err, result) {
        if (err) throw err;

        res.send(result);

    });


});




module.exports = router;