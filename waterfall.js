/**
 * Created by rayline on 2015/11/23.
 */

var presentCnt = 0;

var contentPreset = new Array();
contentPreset[0] = "<div class='content-pic'><img src='images/pictures_for_homework/2-emoji.jpg' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>看看这些萌萌的小猫，有没有一种想立刻收为表情包的冲动？ </div></div>";
contentPreset[1] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/1-goose-animal.jpg' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>鹅,鹅,鹅,曲项向天歌。白毛浮绿水,红掌拨清波。 </div></div>";
contentPreset[2] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/1-wolf-animal.jpg' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>白雪虬枝，孤狼驻守，王者之风，气贯苍穹。</div></div>";
contentPreset[3] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/2-food-shousi.jpg' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>面包加海苔，自制寿司，健康美味。快来一起DIY吧!</div></div>";
contentPreset[4] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/3-potatos&eggs.jpg' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>番茄加鸡蛋，“精”“妙”味无穷，简单健康。</div></div>";
contentPreset[5] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/5-path-forest.jpg' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>停车坐爱枫林晚，霜叶红于二月花。</div></div>";
contentPreset[6] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/6-black&white-cat.jpg' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>黑白相间的小萌猫。</div></div>";
contentPreset[7] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/4-picture-ancient.jpg' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>远山如画,近水似诗,倚松卧石,秋江待渡。</div></div>";
contentPreset[8] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/7-kids-giving-away-parents.jpg' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>21个“出卖”父母的孩子:21个孩子在媒体采访下揭露父母的抽烟、酗酒或者其他不良习惯。</div></div>";
contentPreset[9] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/8-bridge&sea.jpg' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>大海和桥</div></div>";
contentPreset[10] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/9-not-forget-me.jpg' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>勿忘我</div></div>";
contentPreset[11] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/10-king-lion.jpg' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>狮子王</div></div>";
contentPreset[12] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/11-lake.jpg' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>水平如镜</div></div>";
contentPreset[13] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/12-brave-tree.jpg' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>看！那颗勇敢的树</div></div>";
contentPreset[14] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/14-black-tiger.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>黑蓝虎，只闻其存不见其形。由于栖息地的大范围缩减，我们已难觅其踪影，保护环境，还森林之王应有的风姿</div></div>";
contentPreset[15] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/22-toy-in-paper.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>这些都是用纸一点一点做出来的小玩具</div></div>";
contentPreset[16] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/16-blackt-with-paper.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>精美的小纸框</div></div>";
contentPreset[17] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/17-girl.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>逆光的少女</div></div>";
contentPreset[18] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/18-girl&dog.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>抱着小狗的小女孩</div></div>";
contentPreset[19] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/20-tree-in-dark.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>那棵背着阳光的树</div></div>";
contentPreset[20] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/19-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>上帝保佑我能天天都有鱼吃</div></div>";
contentPreset[21] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/23-cake-made-in-hand.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>这是我迄今为止吃到过最好吃的迷你巧克力芝士蛋糕</div></div>";
contentPreset[22] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/24-love-between-cat&rabbit.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>猫和兔子的恋情</div></div>";
contentPreset[23] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/25-cute-rabbit.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>这是兔子吗？为什么耳朵这么短？</div></div>";
contentPreset[24] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/26-Harry-Potter.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>Harry Potter</div></div>";
contentPreset[25] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/27-garlic-shrimp.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>蒜虾阿尔弗雷多面:只需要黄油、大蒜以及一些自制的，细腻的意大利面酱，就会带来一顿简单的，让你十指大动的晚餐。</div></div>";
contentPreset[26] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/28-tuce.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>美味的土司，让人看到就不禁流出了口水。</div></div>";
contentPreset[27] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/29-candle.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>有愿相随，生命会更加丰盈强盛，即使难免失落的低潮；有愿相随，生命仍有希望开花结果，即使难免冰雪风霜；一句祈愿，无穷生命可以圆满；一声祝祷，万千孤苦可以解脱。</div></div>";
contentPreset[28] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/32-mantuoluo.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>美到令人窒息的曼陀罗。</div></div>";
contentPreset[29] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/33-park-in-Montana.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>Park in Montana</div></div>";
contentPreset[30] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/35-shouzhuo.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>充满古朴意蕴的小手镯</div></div>";
contentPreset[31] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/4-emoji.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>萌萌的表情，赶快加入你的表情包吧</div></div>";
contentPreset[32] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/2-goose-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>两只仙子一样的天鹅，轻轻落在暮色苍茫的湖心，伸长了颈子，两喙相触，形成唯美的“心”形，在碧波荡漾的水晶湖上，恋人般低语。</div></div>";
contentPreset[33] = "<div class='content-pic'><img src='images/pictures_for_homework/front_page/1-picture-ancient.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>珍贵的古画</div></div>";
contentPreset[34] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/1-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>看，我萌么？</div></div>";
contentPreset[35] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/2-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>我要再睡一会儿</div></div>";
contentPreset[36] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/3-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>我很惆怅</div></div>";
contentPreset[37] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/4-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>充满活力的喵</div></div>";
contentPreset[38] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/5-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>我只是个孩子</div></div>";
contentPreset[39] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/6-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>别打扰我睡觉</div></div>";
contentPreset[40] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/7-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>有神的大眼睛</div></div>";
contentPreset[41] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/8-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>无辜的眼神</div></div>";
contentPreset[42] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/9-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>躲猫猫</div></div>";
contentPreset[43] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/10-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>我饿了</div></div>";
contentPreset[44] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/11-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>喵</div></div>";
contentPreset[45] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/12-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>相依为命</div></div>";
contentPreset[46] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/4-goose-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>唯美的白天鹅</div></div>";
contentPreset[47] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/14-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>调皮的小猫</div></div>";
contentPreset[48] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/15-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>嗯，伸个懒腰，该起床了</div></div>";
contentPreset[49] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/16-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>我只是在发呆而已</div></div>";
contentPreset[50] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/17-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>来张自拍</div></div>";
contentPreset[51] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/18-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>我饿了</div></div>";
contentPreset[52] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/3-wolf-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>雪白的狼</div></div>";
contentPreset[53] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/20-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>让我静静，我的心情不太好</div></div>";
contentPreset[54] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/21-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>打架就打架，谁怕谁</div></div>";
contentPreset[55] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/22-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>缩成一个球</div></div>";
contentPreset[56] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/23-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>我的姿势美不美</div></div>";
contentPreset[57] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/24-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>猫与花</div></div>";
contentPreset[58] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/25-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>我在思考</div></div>";
contentPreset[59] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/26-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>喵</div></div>";
contentPreset[60] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/27-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>原地待命</div></div>";
contentPreset[61] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/28-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>我不想动</div></div>";
contentPreset[62] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/29-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>我是不是该减肥了</div></div>";
contentPreset[63] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/30-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>其实我是一只狮子</div></div>";
contentPreset[64] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/31-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>我新买的帽子</div></div>";
contentPreset[65] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/32-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>兄弟俩</div></div>";
contentPreset[66] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/33-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>我就这么看着你</div></div>";
contentPreset[67] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/34-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>三兄弟</div></div>";
contentPreset[68] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/35-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>小白猫</div></div>";
contentPreset[69] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/36-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>我不高兴了</div></div>";
contentPreset[70] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/37-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>美美的花环</div></div>";
contentPreset[71] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/38-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>镜中猫</div></div>";
contentPreset[72] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/39-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>拥抱</div></div>";
contentPreset[73] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/40-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>唉好累啊</div></div>";
contentPreset[74] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/41-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>惆怅的眼神</div></div>";
contentPreset[75] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/42-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>我在思考人生</div></div>";
contentPreset[76] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/43-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>别欺负我了</div></div>";
contentPreset[77] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/44-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>迷茫的眼神</div></div>";
contentPreset[78] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/45-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>没人理我</div></div>";
contentPreset[79] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/46-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>喵</div></div>";
contentPreset[80] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/47-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>来张自拍</div></div>";
contentPreset[81] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/48-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>大大的眼睛</div></div>";
contentPreset[82] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/49-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>别怕，我来保护你</div></div>";
contentPreset[83] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/50-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>扮个鬼脸</div></div>";
contentPreset[84] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/cats/51-cat-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>鸟与猫</div></div>";
contentPreset[85] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/1-dog-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>小萌狗</div></div>";
contentPreset[86] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/1-white-tiger-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>帅帅的白虎</div></div>";
contentPreset[87] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/2-dog-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>叼来东西的小狗</div></div>";
contentPreset[88] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/2-tiger-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>白虎近照</div></div>";
contentPreset[89] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/2-wolf-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>亲密的狼群</div></div>";
contentPreset[90] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/3-dog-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>低头望向车窗外</div></div>";
contentPreset[91] = "<div class='content-pic'><img src='images/pictures_for_homework/animals/3-tiger-animal.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>凶猛的老虎</div></div>";
contentPreset[92] = "<div class='content-pic'><img src='images/cafe.jpg' width='100%' width='100%' class='pic-thumbnail insideImg'><div class='pic-intro'>街角咖啡店</div></div>";


var search ="";

var searchResult = new Array();

function resizeMain() {
    var wid;
    wid = $("body").width();
    var cnt;
    cnt = Math.floor(wid * 0.86 / 200);
    $("#columnContainer").css("margin-left", (wid - cnt * 200) / 2);
    var rd;
    while (cnt > presentCnt) {
        presentCnt++;
        $("#columnContainer").append("<div class='column column" + presentCnt + "'></div>");
        for(i=1;i<=10;i++){
            rd = Math.floor(Math.random() * searchResult.length);
            $(searchResult[rd]).css("display","none").appendTo(".column" + presentCnt).fadeIn("slow");
            //$(".column" + presentCnt).append(searchResult[rd]);
        }
    }
    while (cnt < presentCnt) {
        $(".column"+presentCnt).remove();
        presentCnt--;
    }
    $(".insideImg").click(function (){
        var y=$(document).scrollTop();
        $("#detailBox").css("top",y+"px");
        $("#detailBox").css("left",150+"px");
        $("#detailBox").slideDown(1000);
        $("#mask").fadeIn(100);
        $("#mask2").fadeIn(100);
        $("#mask8").fadeIn(100);
        $("#mask5").show();
        commentFlag=true;
    })
}


function applySearch(){
    search = $("#searchInput").val();
    searchResult.length=0;
    for(var i=0;i<contentPreset.length;i++){
        if(contentPreset[i].search(search)!=-1){
            searchResult.push(contentPreset[i]);
        }
    }
    $(".column").remove();
    presentCnt=0;
    resizeMain();
}