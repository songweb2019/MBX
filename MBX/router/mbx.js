const express=require('express');
const pool=require('./pool.js');
var router=express.Router();

router.get('/main',function(req,res){
    var obj =req.query;
    var n=400;
    for(var key in obj){
            n++;
            if(!obj[key]){
                res.send({code: n,msg : key+' require'});
                return;
            }
    }
});
/* 店的位置列表 */
router.post('/store',function(req,res){
    var obj =req.body;
	var sql="select * from mbx_store";
    pool.query(sql,(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send("0");
		}
		
	});
});

/* 戒指的图片列表 */
router.post('/list',function(req,res){
    var obj =req.body;
	var sql="select * from mbx_laptop_list limit ?,?";
    pool.query(sql,[0,12],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send("0");
		}
		
	});
});
/* 求婚列表 */
router.get('/qh',function(req,res){
	
    var obj =req.query;
	var sql="select * from mbx_qh where qh_family=?";
	if(obj.qh_family==""){
		var sql="select * from mbx_qh";
	}
    pool.query(sql,[obj.qh_family],(err,result)=>{
		if(err){
			res.send("0");	
		}else{
			res.send(result);
		}
		
	});
});


module.exports=router;