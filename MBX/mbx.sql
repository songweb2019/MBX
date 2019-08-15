SET NAMES UTF8;
DROP DATABASE IF EXISTS mbx;
CREATE DATABASE mbx CHARSET=UTF8;
USE mbx;


/**戒指型号家族**/
CREATE TABLE mbx_dr_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32)
);

/**戒指**/
CREATE TABLE mbx_laptop(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT,              #所属型号家族编号
  title VARCHAR(128),         #主标题
  subtitle VARCHAR(128),      #副标题
  price DECIMAL(10,2),        #价格
  promise VARCHAR(64),        #服务承诺
  spec VARCHAR(64),           #规格/颜色
  size_man INT,               #男戒尺寸
  size_men INT,				  #女戒尺寸
  meterial VARCHAR(10),		  #戒指材质
  category VARCHAR(32),       #所属分类
  details VARCHAR(1024),      #产品详细说明
  shelf_time BIGINT,          #上架时间
  sold_count INT,             #已售出的数量
  is_onsale BOOLEAN           #是否促销中
);

/**戒指列表信息**/
CREATE TABLE mbx_laptop_list(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  jz_img VARCHAR(128),        #戒指图片路径
  jz_price INT(11),           #戒指价格
  jz_name VARCHAR(128)	      #戒指名字
);

/**用户信息**/
CREATE TABLE mbx_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32) unique,
  upwd VARCHAR(32),
  phone VARCHAR(16),
  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT            #性别  0-女  1-男
);
/**身份证信息**/
CREATE TABLE mbx_cart(
  uid INT PRIMARY KEY AUTO_INCREMENT,
	nameBoy VARCHAR(32),   #男真实姓名
	nameGirl VARCHAR(32),  #女真实姓名
  cartBoy VARCHAR(18),  #男身份证
	cartGirl VARCHAR(18),  #女身份证
	cartDate BIGINT        #购买时间
);
/**收货地址信息**/
CREATE TABLE mbx_receiver_address(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,                #用户编号
  receiver VARCHAR(16),       #接收人姓名
  province VARCHAR(16),       #省
  city VARCHAR(16),           #市
  county VARCHAR(16),         #县
  address VARCHAR(128),       #详细地址
  cellphone VARCHAR(16),      #手机
  fixedphone VARCHAR(16),     #固定电话
  postcode CHAR(6),           #邮编
  tag VARCHAR(16),            #标签名

  is_default BOOLEAN          #是否为当前用户的默认收货地址
);

/**购物车条目**/
CREATE TABLE mbx_shoppingcart_item(
  iid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,      #用户编号
  product_id INT,   #商品编号
  count INT,        #购买数量
  is_checked BOOLEAN #是否已勾选，确定购买
);

/**用户订单**/
CREATE TABLE mbx_order(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  address_id INT,
  status INT,             #订单状态  1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消
  order_time BIGINT,      #下单时间
  pay_time BIGINT,        #付款时间
  deliver_time BIGINT,    #发货时间
  received_time BIGINT    #签收时间
)AUTO_INCREMENT=10000000;

/**用户订单**/
CREATE TABLE mbx_order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,           #订单编号
  product_id INT,         #产品编号
  count INT               #购买数量
);

/****首页轮播广告商品****/
CREATE TABLE mbx_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);

/****首页商品****/
CREATE TABLE mbx_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  price DECIMAL(10,2),
  href VARCHAR(128),
  seq_recommended TINYINT,
  seq_new_arrival TINYINT,
  seq_top_sale TINYINT
);
/**** 插入身份证号信息****/
insert into mbx_cart values
(1,"mbx","jxy","411111111111111111","422222222222222222","20190611");
/****店的地址信息****/
CREATE TABLE mbx_store(
  sid INT PRIMARY KEY AUTO_INCREMENT,
	mbx_cityBid VARCHAR(64), #店的城市UL
	mbx_cityS VARCHAR(64),   #店的城市拼写 
	mbx_city VARCHAR(64),    #店的城市名称 
	mbx_src VARCHAR(64),     #店的地址跳转
  mbx_name VARCHAR(64),    #店名
  mbx_adress VARCHAR(128), #店的地址
  mbx_time VARCHAR(128),   #店的营业时间
  mbx_phone VARCHAR(128),  #店的联系电话
  mbx_img VARCHAR(128)     #店的图片
);

insert into mbx_store values
(1,"blUl","bali","巴黎","#","巴黎-铁塔店","法国巴黎埃菲尔铁塔","11:00-19:00"," (+852) 5555 5555","img/trueLoveStore/bali.jpg"),
(2,"xgUl","xianggang","香 港","#","香港-尖沙咀店","香港九龙尖哇塞广场A座B101","10:30-21:00","（+852）5555 5555","img/trueLoveStore/xianggang1.jpg"),
(3,"xgUl","xianggang","香 港","#","香港-MM店","香港特别行政区-伊泽瑞尔店","11:00-19:00","（+852）6666 6666","img/trueLoveStore/xianggang2.jpg"),
(4,"xgUl","xianggang","香 港","#","香港-MM店","香港特别行政区-伊泽瑞尔店","11:00-19:00","（+852）6666 6666","img/trueLoveStore/xianggang2.jpg"),
(5,"xgUl","xianggang","香 港","#","香港-MM店","香港特别行政区-伊泽瑞尔店","11:00-19:00","（+852）6666 6666","img/trueLoveStore/xianggang2.jpg"),
(6,"xgUl","xianggang","香 港","#","香港-MM店","香港特别行政区-伊泽瑞尔店","11:00-19:00","（+852）6666 6666","img/trueLoveStore/xianggang2.jpg"),
(7,"xgUl","xianggang","香 港","#","香港-MM店","香港特别行政区-伊泽瑞尔店","11:00-19:00","（+852）6666 6666","img/trueLoveStore/xianggang2.jpg"),
(8,"xgUl","xianggang","香 港","#","香港-MM店","香港特别行政区-伊泽瑞尔店","11:00-19:00","（+852）6666 6666","img/trueLoveStore/xianggang2.jpg"),
(9,"xgUl","xianggang","香 港","#","香港-MM店","香港特别行政区-伊泽瑞尔店","11:00-19:00","（+852）6666 6666","img/trueLoveStore/xianggang2.jpg"),
(10,"xgUl","xianggang","香 港","#","香港-MM店","香港特别行政区-伊泽瑞尔店","11:00-19:00","（+852）6666 6666","img/trueLoveStore/xianggang2.jpg"),
(11,"xgUl","xianggang","香 港","#","香港-MM店","香港特别行政区-伊泽瑞尔店","11:00-19:00","（+852）6666 6666","img/trueLoveStore/xianggang2.jpg"),
(12,"xgUl","xianggang","香 港","#","香港-MM店","香港特别行政区-伊泽瑞尔店","11:00-19:00","（+852）6666 6666","img/trueLoveStore/xianggang2.jpg"),
(13,"xgUl","xianggang","香 港","#","香港-MM店","香港特别行政区-伊泽瑞尔店","11:00-19:00","（+852）6666 6666","img/trueLoveStore/xianggang2.jpg");

insert into mbx_laptop_list values
(1,"img/list/1.jpg",6019,"FOREVER系列经典款 18分 H色"),
(2,"img/list/2.jpg",6666,"MYHEART系列心动钻戒 18分 D-E色"),
(3,"img/list/3.jpg",8888,"D-DESTINY系列经典款钻戒"),
(4,"img/list/4.jpg",1234,"MYHEART系列守护款 30分 H色"),
(5,"img/list/5.jpg",4321,"LOCKFOREVER系列心·锁唯一 50分 D色"),
(6,"img/list/6.jpg",5555,"BELIEVE系列典雅 40分 J色"),
(7,"img/list/7.jpg",3333,"JUSTYOU系列浪漫款 30分 D色"),
(8,"img/list/8.jpg",9999,"FOREVER系列经典款 18分 H色"),
(9,"img/list/9.jpg",55555,"PRINCESS系列至爱"),
(10,"img/list/10.jpg",5541,"WEDDING系列简奢款 20分 F-G色"),
(11,"img/list/11.jpg",1653,"MYHEART系列守护款 30分 H色"),
(12,"img/list/12.jpg",15555,"LOCKFOREVER系列心·锁唯一 50分 D色");
#求婚的分类
CREATE TABLE mbx_qh(
  sid INT PRIMARY KEY AUTO_INCREMENT,
	qh_img VARCHAR(128),    #求婚的图片
	qh_title VARCHAR(128),  #求婚的标题 
	qh_detail VARCHAR(128), #求婚的正文
	qh_zan   INT,           #求婚的赞
	qh_share   INT,         #求婚的分享
	qh_family  VARCHAR(128) #求婚的分类
);
insert into mbx_qh values
(1,"img/explore/qh.jpg","世界冠军张培萌520求婚成功！","人世间的爱情有很多不同的样子，有的青梅竹马，从校服走到了婚纱；有的阅尽千帆，终得一人白首。而有一种仿佛冥冥中的安排，不早不晚，是恰恰好的遇见，只因为“我喜欢的样子你都有，你有的样子我都爱”。就在近日，......",4243,451,"mqh"),
(2,"img/explore/qh1.jpg","且以深情共白头","有人说，“我不羡慕街角拥吻的情侣，我只羡慕牵手散步的老人！因为我知道，谈一场白头偕老的恋爱是有多不容易”。让人忍不住深深地叹一口气。现在这年头，和一个人在一起，一天、一个月、一年都不难，难的是过了一辈......",1243,451,"mqh"),
(3,"img/explore/qh2.jpg","你是琐碎平常，你是夏日的阳光","我的他，不是盖世英雄，也没有驾着七彩祥云出现在我面前，但这些并妨碍，他成为我心目中的独一无二。穿过夏日的丛林，我们在白雪皑皑中相遇，故事的书卷缓缓摊开。 一直觉得我男朋友不是一般人，他比同龄......",1243,451,"mqh"),
(4,"img/explore/qh3.jpg","静候多年啦，我的何太太","2013年深秋，日渐趋寒的北京，更迭的日月，宿舍与教室几乎两点一线的生活，一切都看不出日子变化的预兆，我就这样毫无准备地撞入爱河。第一次见她是在大一开学典礼上，带着黑框眼镜，乌黑的长发，一副标准的乖乖......",243,451,"mqh"),
(5,"img/explore/qh4.jpg","珍你爱你，不遗余力","两人因为工作原因，相识于三年前。工作中常有交集，彼此渐渐熟悉。男生的性格很讨喜，用女生的话说：我觉得我男朋友是很有反差萌的，不说话时看上去温文尔雅，还挺有风度的；一说话简直是我的活力源泉。刚开始我会被......",143,4,"sqh"),
(6,"img/explore/qh5.jpg","与君初相识，犹似故人归","我总觉得，这个世界上，一定有跑得过距离的军恋，只要我们相信，只要我们坚持。相遇那时小梦在黑龙江哈尔滨工作，我在黑龙江佳木斯抚远服役，两人相隔八百多公里。经同学认识，我们俩互加了微信，也不算熟识，只是偶......",43,41,"sqh"),
(7,"img/explore/qh6.jpg","我唯一关心的人就她","他们是唯一一对已经结婚的夫妻。结婚后还有情调带老婆来参加真爱之旅，光是这一点就已经能感受到男生的用心。生活中当然还有更多对老婆的宠爱。据他们自述，男生在福州最大的商场跟女生求婚。跟她结婚后，工作狂成为......",153,51,"sqh"),
(8,"img/explore/qh7.jpg","真爱，一直都值得期待","2015年圣诞节，乌克兰这边下起了大雪，这是你很喜欢的节日，我知道昨晚的平安夜，一直在视频里跟我谈天说笑的你，其实心里很难过……我没有忘记，这是我们异国恋的第4个圣诞节。这4年里……你从一个不......",153,51,"sqh"),
(9,"img/explore/qh8.jpg","心里最重要的  除了祖国就是你","爱情，不是简单的两个字，爱上一名军人，更不是一件简单的事情。于她而言，失约，早习以为常。肩负保护祖国的重任，大部分时间都在部队生活，注定了他和她的聚少离多，见面的时间屈指可数，只能通过电话和短信传递思......",153,51,"jinqh"),
(10,"img/explore/qh9.jpg","法国男友当场在卢浮宫中文求婚","你有没有为爱奋不顾身过？如果有，那你一定能体会到爱情最幸福的瞬间。那次失而复得的惊喜，那种从一而终的幸运，那份兜兜转转只能是你的决心。真爱本就来之不易，一旦遇到就更不要轻言放弃。最近一位法国小哥在巴黎......",153,51,"jinqh"),
(11,"img/explore/qh2.jpg","泪目！聋哑情侣的无声求婚","记得以前曾有人问，如果爱只能用语言去表达，那聋子和哑巴怎么办？其实，喜欢一个人，就算捂住了嘴巴，也会从眼睛里流露出来。这是人爱的本能，世间任何都无法阻拦。这对被赞为最美的异地恋聋哑情侣，每天都只能靠着......",153,51,"jinqh"),
(12,"img/explore/qh10.jpg","凌听雨：我们的爱情足以抵挡一切","有人说她活成了万千女孩子梦想中的样子，时尚、独立、全球各地旅行，还有爱人为她拍摄各种美美的照片。有事业，有人爱，有人疼，这就是梦想中幸福的样子。而她却说，自己一生中最幸运的事情，是遇见了她的“大狗熊先......",153,51,"xiaoqh"),
(13,"img/explore/qh11.jpg","静候多年啦，我的何太太","2013年深秋，日渐趋寒的北京，更迭的日月，宿舍与教室几乎两点一线的生活，一切都看不出日子变化的预兆，我就这样毫无准备地撞入爱河。第一次见她是在大一开学典礼上，带着黑框眼镜，乌黑的长发，一副标准的乖乖......",153,51,"xiaoqh"),
(14,"img/explore/qh12.jpg","与君初相识，犹似故人归","我总觉得，这个世界上，一定有跑得过距离的军恋，只要我们相信，只要我们坚持。相遇那时小梦在黑龙江哈尔滨工作，我在黑龙江佳木斯抚远服役，两人相隔八百多公里。经同学认识，我们俩互加了微信，也不算熟识，只是偶......",153,51,"xiaoqh"),
(15,"img/explore/qh13.jpg","我唯一关心的人就她","他们是唯一一对已经结婚的夫妻。结婚后还有情调带老婆来参加真爱之旅，光是这一点就已经能感受到男生的用心。生活中当然还有更多对老婆的宠爱。据他们自述，男生在福州最大的商场跟女生求婚。跟她结婚后，工作狂成为......",153,51,"xiaoqh"),
(16,"img/explore/qh50.jpg","以后，请叫我军嫂老婆大人","如果不是你，我不会知道，彼此依恋的爱情能让我们也爱上这个世界，如果不是你，我不会相信，就算是异地军恋也能让我们幸福得发腻，所有的美好和幸福冲淡了所有的心酸和思念，原来爱情可以让我每天都活在甜蜜里，所有......",153,51,"junqh"),
(17,"img/explore/qh8.jpg","心里最重要的  除了祖国就是你","爱情，不是简单的两个字，爱上一名军人，更不是一件简单的事情。于她而言，失约，早习以为常。肩负保护祖国的重任，大部分时间都在部队生活，注定了他和她的聚少离多，见面的时间屈指可数，只能通过电话和短信传递思......",153,51,"junqh"),
(18,"img/explore/qh11.jpg","静候多年啦，我的何太太","2013年深秋，日渐趋寒的北京，更迭的日月，宿舍与教室几乎两点一线的生活，一切都看不出日子变化的预兆，我就这样毫无准备地撞入爱河。第一次见她是在大一开学典礼上，带着黑框眼镜，乌黑的长发，一副标准的乖乖......",153,51,"junqh"),
(19,"img/explore/qh3.jpg","静候多年啦，我的何太太","2013年深秋，日渐趋寒的北京，更迭的日月，宿舍与教室几乎两点一线的生活，一切都看不出日子变化的预兆，我就这样毫无准备地撞入爱河。第一次见她是在大一开学典礼上，带着黑框眼镜，乌黑的长发，一副标准的乖乖......",243,451,"junqh"),
(20,"img/explore/qh4.jpg","珍你爱你，不遗余力","两人因为工作原因，相识于三年前。工作中常有交集，彼此渐渐熟悉。男生的性格很讨喜，用女生的话说：我觉得我男朋友是很有反差萌的，不说话时看上去温文尔雅，还挺有风度的；一说话简直是我的活力源泉。刚开始我会被......",143,4,"junqh"),
(21,"img/explore/qh13.jpg","我唯一关心的人就她","他们是唯一一对已经结婚的夫妻。结婚后还有情调带老婆来参加真爱之旅，光是这一点就已经能感受到男生的用心。生活中当然还有更多对老婆的宠爱。据他们自述，男生在福州最大的商场跟女生求婚。跟她结婚后，工作狂成为......",153,51,"yiqh"),
(22,"img/explore/qh50.jpg","以后，请叫我军嫂老婆大人","如果不是你，我不会知道，彼此依恋的爱情能让我们也爱上这个世界，如果不是你，我不会相信，就算是异地军恋也能让我们幸福得发腻，所有的美好和幸福冲淡了所有的心酸和思念，原来爱情可以让我每天都活在甜蜜里，所有......",153,51,"yiqh"),
(23,"img/explore/qh9.jpg","法国男友当场在卢浮宫中文求婚","你有没有为爱奋不顾身过？如果有，那你一定能体会到爱情最幸福的瞬间。那次失而复得的惊喜，那种从一而终的幸运，那份兜兜转转只能是你的决心。真爱本就来之不易，一旦遇到就更不要轻言放弃。最近一位法国小哥在巴黎......",153,51,"yiqh"),
(24,"img/explore/qh2.jpg","泪目！聋哑情侣的无声求婚","记得以前曾有人问，如果爱只能用语言去表达，那聋子和哑巴怎么办？其实，喜欢一个人，就算捂住了嘴巴，也会从眼睛里流露出来。这是人爱的本能，世间任何都无法阻拦。这对被赞为最美的异地恋聋哑情侣，每天都只能靠着......",153,51,"yiqh");