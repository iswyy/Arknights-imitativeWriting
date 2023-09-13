
window.addEventListener("load", function () {
    // 改变鼠标指针样式
    var body = this.document.querySelector("body");
    var cicl = this.document.querySelector("#circle");
    body.style.cursor = 'url(/明日方舟/img/favicon.ico),auto';
    //开始的进度条
    var zhuti = document.querySelector('.zhuti');
    var jindu = this.document.querySelector('.jindu');
    var jinshu = 0;
    var loading = this.document.querySelector(".loading");
    timer = setInterval(function () {
        jinshu += 5;
        if (jinshu >= 100) {
            clearInterval(timer);
            setTimeout(function () {
                loading.style.display = 'none';
                zhuti.style.display = 'block';
            }, 500);
        }
        jindu.innerText = jinshu + "%";
    }, 40);
    //页面主体
    //鼠标滚动控制页面的效果
    var jiemian = this.document.querySelectorAll(".jiemian");
    /*下面是关于鼠标滚动*/
    // 动画效果
    //     //获取元素的高度,页面可视高度
    var viewHeight = document.documentElement.clientHeight;

    var you = this.document.querySelector('.you');
    var youxinput = you.querySelectorAll('input');
    var youxa = you.querySelectorAll('a');
    var yemiannum = 0;
    var flag = true;
    function scrollFunc(e) {
        e = e || window.event;
        if (flag) {
            flag = false;
            if (e.wheelDelta) {
                if (e.wheelDelta > 0) {//当滑轮向上滚动时
                    yemiannum--;
                    if (yemiannum < 0) {
                        yemiannum = 0;
                    }
                    youxinput[yemiannum].checked = true;

                    zhuti.style.top = (-yemiannum * viewHeight) + 100 * yemiannum + 'px';
                    // zhuti.innerHight = zhuti.style.innerHight + yemiannum * viewHeight + 100 * yemiannum + 'px';
                }
                if (e.wheelDelta < 0) { //当滑轮向下滚动时
                    yemiannum++;
                    if (yemiannum > jiemian.length - 1) {
                        yemiannum = jiemian.length - 1;
                    }
                    youxinput[yemiannum].checked = true;
                    zhuti.style.top = (-yemiannum * viewHeight) + 100 * yemiannum + 'px';
                    // zhuti.innerHight = zhuti.style.innerHight - (yemiannum * viewHeight) - 100 * yemiannum + 'px';
                }

            }
            setTimeout(function () {//页面滚动间隔一秒，防止滚动太快
                flag = true;//重新开启开关
            }, 1000);
        }
    };
    //滚动滑轮触发scrollFunc方法
    // window.onmousewheel = scrollFunc;
    this.window.addEventListener("mousewheel", scrollFunc);
    // 导航栏文字和单选框链接
    youxa[0].addEventListener('click', function () {
        youxinput[0].checked = true;
    });
    youxa[1].addEventListener('click', function () {
        youxinput[1].checked = true;
    });
    youxa[2].addEventListener('click', function () {
        youxinput[2].checked = true;
    });
    youxa[3].addEventListener('click', function () {
        youxinput[3].checked = true;
    });
    youxa[4].addEventListener('click', function () {
        youxinput[4].checked = true;
    });

    //第一个界面歌曲轮播
    var xu001 = this.document.querySelector('.xu001');
    var xu002 = this.document.querySelector('.xu002');
    var xu003 = this.document.querySelector('.xu003');
    var boder1 = this.document.querySelector('.boder1');
    var boder2 = this.document.querySelector('.boder2');
    var boder3 = this.document.querySelector('.boder3');
    var wenzhuti = this.document.querySelector('.wenzhuti');
    xu001.addEventListener("click", function () {
        xu002.style.color = 'rgb(111, 111, 111)';
        xu003.style.color = 'rgb(111, 111, 111)';
        this.style.color = '#fff';
        boder2.style.width = '0' + 'px';
        boder2.style.transition = 'width 0.2s ease';
        boder3.style.width = '0' + 'px';
        boder3.style.transition = 'width 0.2s ease';
        boder1.style.width = '32' + 'px';
        boder1.style.transition = 'width 0.2s ease';
        for (var i = 0; i < wenzhuti.length; i++) {
            wenzhuti.children[i].style.display = 'none';
        };
        wenzhuti.children[0].style.display = 'block';
    });
    xu002.addEventListener("click", function () {
        xu001.style.color = 'rgb(111, 111, 111)';
        xu003.style.color = 'rgb(111, 111, 111)';
        this.style.color = '#fff';
        boder1.style.width = '0' + 'px';
        boder1.style.transition = 'width 0.2s ease';
        boder3.style.width = '0' + 'px';
        boder3.style.transition = 'width 0.2s ease';
        boder2.style.width = '32' + 'px';
        boder2.style.transition = 'width 0.2s ease';
        for (var i = 0; i < wenzhuti.children.length; i++) {
            wenzhuti.children[i].style.display = 'none';
        };
        wenzhuti.children[1].style.display = 'block';
    });
    xu003.addEventListener("click", function () {
        xu002.style.color = 'rgb(111, 111, 111)';
        xu001.style.color = 'rgb(111, 111, 111)';
        this.style.color = '#fff';
        boder2.style.width = '0' + 'px';
        boder2.style.transition = 'width 0.2s ease';
        boder1.style.width = '0' + 'px';
        boder1.style.transition = 'width 0.2s ease';
        boder3.style.width = '32' + 'px';
        boder3.style.transition = 'width 0.2s ease';
        for (var i = 0; i < wenzhuti.children.length; i++) {
            wenzhuti.children[i].style.display = 'none';
        };
        wenzhuti.children[2].style.display = 'block';
    });
    // 界面2轮播图
    var lb2 = document.querySelector('.lunbo2');
    var img1 = lb2.querySelector('.lunbo2img');
    var width = 630;
    var lunbo2num = 0;
    var lunbo2circle = 0;
    var lunbo2ul = lb2.querySelector('ul');
    var lunbo2ol = lb2.querySelector('ol');
    var first2 = lunbo2ul.children[0].cloneNode(true);
    lunbo2ul.appendChild(first2);
    lb2.addEventListener("mouseover", function () {
        //停止自动播放
        clearInterval(timerlunbo2);
        timerlunbo2 = null;
    });
    lb2.addEventListener("mouseleave", function () {
        //开启定时器
        timerlunbo2 = setInterval(function () {
            //手动调用点击事件
            yougun2();
        }, 3000);
    });
    timerlunbo2 = setInterval(function () {
        //手动调用点击事件
        yougun2();
    }, 3000);
    // 向右滚动的方法
    function yougun2() {
        if (lunbo2num == lunbo2ul.children.length - 1) {

            lunbo2ul.style.left = 0;
            lunbo2num = 0;
        }
        lunbo2num++;
        animate(lunbo2ul, -(lunbo2num * width));
        lunbo2circle++;
        if (lunbo2circle == lunbo2ol.children.length) {
            lunbo2circle = 0;
        }
        circleCheng();
    };
    function circleCheng() {
        for (var i = 0; i < lunbo2ol.children.length; i++) {
            lunbo2ol.children[i].className = '';
        }
        //留下我自己
        lunbo2ol.children[lunbo2circle].className = 'dangqian';
    };
    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = this.setInterval(function () {
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
            }
            obj.style.left = obj.offsetLeft + step + 'px';
        }, 20);
    };
    // 点击切换资讯
    var daohang2 = this.document.querySelector('.daohang2');
    var daohanga = daohang2.querySelectorAll('a');
    var newxiaoxi = this.document.querySelector('.new');
    var newxiaoxia = newxiaoxi.querySelectorAll('a');
    var date= newxiaoxi.querySelectorAll('.date');
    var xiaobiao = newxiaoxi.querySelectorAll('.xiaobiao');
    var biaoh1 = newxiaoxi.querySelectorAll('h1');
    daohanga[0].style.color = '#158fc5';
    daohanga[0].addEventListener('click', function () {
        for (var i = 0; i < daohanga.length; i++) {
            daohanga[i].style.color = '#fff';
        };
        this.style.color = '#158fc5';
        for (let i = 0; i < 1; i++) {
            xiaobiao[i].innerText = "活动";
        };
        for (let i = 2; i < xiaobiao.length; i++) {
            xiaobiao[i].innerText = "公告";
        };
        date[0].innerText = "2022-4-23";
        biaoh1[0].innerText = "[活动预告]《明日方舟》三周年庆典即将开启";
        date[1].innerText = "2022-4-23";
        biaoh1[1].innerText = "[限定寻访·庆典]【海蚀】限时寻访即将开启";
        date[2].innerText = "2022-4-23";
        biaoh1[2].innerText = "[明日方舟]【时装自选凭证】返还通知";
        date[3].innerText = "2022-4-23";
        biaoh1[3].innerText = "[明日方舟]04月27日16:00闪断更新公告";
    });
    daohanga[1].addEventListener('click', function () {
        for (var i = 0; i < daohanga.length; i++) {
            daohanga[i].style.color = '#fff';
        }
        this.style.color = '#158fc5';
        for (let i = 0; i < xiaobiao.length; i++) {
            xiaobiao[i].innerText = "公告";
        }
        date[0].innerText = "2022-4-28";
        biaoh1[0].innerText = "一些内容";
        date[1].innerText = "2022-4-26";
        biaoh1[1].innerText = "一些内容";
    });
    daohanga[2].addEventListener('click', function () {
        for (let i = 0; i < daohanga.length; i++) {
            daohanga[i].style.color = '#fff';
        }
        this.style.color = '#158fc5';
        for (let i = 0; i < xiaobiao.length; i++) {
            xiaobiao[i].innerText = "活动";
        }
        date[0].innerText = "2022-4-28";
        biaoh1[0].innerText = "另一些内容";
        date[1].innerText = "2022-4-26";
        biaoh1[1].innerText = "另一些内容";
    });
    daohanga[3].addEventListener('click', function () {
        for (let i = 0; i < daohanga.length; i++) {
            daohanga[i].style.color = '#fff';
        }
        this.style.color = '#158fc5';
        for (let i = 0; i < xiaobiao.length; i++) {
            xiaobiao[i].innerText = "新闻";
        }
        date[0].innerText = "2022-5-2";
        biaoh1[0].innerText = "再一些内容";
        date[1].innerText = "2022-4-29";
        biaoh1[1].innerText = "再一些内容";
    });
    var lankuai = newxiaoxi.querySelectorAll('.lankuai');
    for (var i = 0; i < newxiaoxia.length; i++){
        newxiaoxia[i].addEventListener('mouseover', function () {
            // console.log(this.previousSibling);
            for (var j = 0; j < lankuai.length; j++){
                lankuai[j].style.width = 0 + 'px';
                lankuai[j].style.transition = "width 0.2s";
            }
            this.previousSibling.style.width = 90 + 'px';
            this.previousSibling.style.transition = "width 0.2s";
        });
        newxiaoxia[i].addEventListener('mouseout', function () {
            // console.log(this.previousSibling);
            for (var j = 0; j < lankuai.length; j++){
                lankuai[j].style.width = 0 + 'px';
                lankuai[j].style.transition = "width 0.2s";
            }
        });
    };
    // 界面3
    var jiemian3 = this.document.querySelector('#jiemian3');
    var lunbo3 = jiemian3.querySelector('.lunbo3');
    var ming = lunbo3.querySelector('.ming');
    var liqu = ming.querySelectorAll('li');
    var ren = lunbo3.querySelector('.ren');
    // var renimg = ren.querySelectorAll('img');
    // var renindex = 0;
    var renwidth = 518;
    var shangName = this.document.querySelector('#shangname');
    var englishName = this.document.querySelector('#englishname');
    var backgrandName = this.document.querySelector('#backgrandname');
    var detail = this.document.querySelector('#detail');
    var author = this.document.querySelector('#author');
    for (let i = 0; i < liqu.length; i++) {
        liqu[i].addEventListener('click', function () {
            for (let i = 0; i < liqu.length; i++) {
                liqu[i].style.color = '#fff';
            }
            this.style.color = '#158fc5';

            // jiemian3的轮播图
            var datenum = this.getAttribute('datenum');
            animate(ren, -(datenum * renwidth));
            // 介绍的轮播
            switch (i) {
                case 0:
                    shangName.innerText = '阿米娅';
                    englishName.innerText = 'AMIYA';
                    backgrandName.innerText = 'AMIYA';
                    author.innerText = 'cv:黑泽朋世';
                    detail.innerText = '罗德岛的公开领袖，在内部拥有最高执行权。虽然，从外表上看起来仅仅是个不成熟的少女，实际上，她却是深受大家信任的合格的领袖。现在，阿米娅正带领着罗德岛，为了感染者的未来，为了让这片大地挣脱矿石病的阴霾而不懈努力。';
                    break;
                case 1:
                    shangName.innerText = '凯尔希';
                    englishName.innerText = "KAL'TSIT";
                    backgrandName.innerText = "KAL'TSIT";
                    author.innerText = 'cv:日笠阳子';
                    detail.innerText = '罗德岛最高管理者之一，阿米娅的直接辅导者。罗德岛医疗部门的总负责人。作为罗德岛的老成员，凯尔希医生是在阿米娅背后最稳固的援护者。';
                    break;
                case 2:
                    shangName.innerText = '红';
                    englishName.innerText = "PROJEKT RED";
                    backgrandName.innerText = "PROJEKT RED";
                    author.innerText = 'cv:小清水亚美';
                    detail.innerText = '红，身份不明，履历缺失，由凯尔希医生接收、监护并担保。于机动作战，特种作战与隐秘作战中表现出极高天赋，成绩斐然。现于凯尔希医生的指导下，作为特种干员为罗德岛提供服务。';
                    break;
                case 3:
                    shangName.innerText = '杜宾';
                    englishName.innerText = "DOBERMANN";
                    backgrandName.innerText = "DOBERMANN";
                    author.innerText = 'cv:种崎敦美';
                    detail.innerText = '前玻利瓦尔军人，加入罗德岛后担任教官，主要负责基层和新晋干员培训，必要时刻，也会负责对俘虏的审讯。熟悉各种规模的军事行动，自身作为士兵的素养也极高，作为近卫干员，在第一线带领队伍冲锋陷阵。';
                    break;
                case 4:
                    shangName.innerText = '临光';
                    englishName.innerText = "NEARL";
                    backgrandName.innerText = "NEARL";
                    author.innerText = 'cv:佐仓绫音';
                    detail.innerText = '临光，前卡西米尔耀骑士，感染者援助团体“使徒”的一员。在掩护己方队员、机动作战、歼灭战与开阔地带作战中体现出极高的战斗技巧和个人军事素养。现于罗德岛作为重装干员行动，并于现场提供战术指挥支援。';
                    break;
                case 5:
                    shangName.innerText = '赫墨';
                    englishName.innerText = "SILENCE";
                    backgrandName.innerText = "SILENCE";
                    author.innerText = 'cv:鬼头明里';
                    detail.innerText = '赫默，莱茵生命有限公司源石有关项目研究员，曾主管数项未知应用研究，同期亦主持数个矿石病临床试验项目。现于罗德岛为多项行动提供战场医疗救护服务。';
                    break;
                case 6:
                    shangName.innerText = '伊芙利特';
                    englishName.innerText = "IFRIT";
                    backgrandName.innerText = "IFRIT";
                    author.innerText = 'cv:花守由美里';
                    detail.innerText = '伊芙利特，前莱茵生命医疗对象，重度感染者。拥有极高的源石适应性，伴随有多发性点火现象。进入莱茵生命前的履历缺失。现于罗德岛接受治疗，由医疗干员赫默担任监护与担保人。';
                    break;
                case 7:
                    shangName.innerText = '白面鸮';
                    englishName.innerText = "PTILOPSIS";
                    backgrandName.innerText = "PTILOPSIS";
                    author.innerText = 'cv:金元寿子';
                    detail.innerText = '白面鸮，前莱茵生命公司，数据维护专员。在医疗类源石技艺领域取得不菲成就，于医疗数据维护，常规医疗方案应用，多项目医疗行为等相关领域，拥有丰富经验。现于罗德岛担任医疗干员，亦就职于医疗部门，某临床实验小组。同时，为罗德岛提供若干项医疗项目的相关辅助工作。';
                    break;
                case 8:
                    shangName.innerText = '德克萨斯';
                    englishName.innerText = "TEXAS";
                    backgrandName.innerText = "TEXAS";
                    author.innerText = 'cv:田所梓';
                    detail.innerText = '企鹅物流员工，单兵作战能力出类拔萃。于合约期内任企鹅物流驻罗德岛联络人员，同时为罗德岛的多项行动提供协助。';
                    break;
                case 9:
                    shangName.innerText = '能天使';
                    englishName.innerText = "EXUSIAI";
                    backgrandName.innerText = "EXUSIAI";
                    author.innerText = 'cv:石见舞菜香';
                    detail.innerText = '能天使，拉特兰公民，适用拉特兰一至十三项公民权益。企鹅物流公司成员。从事秘密联络，武装押运等非公开活动，推测身份：信使。于合约期内任企鹅物流驻罗德岛联络人员，同时为罗德岛多项行动提供协助。';
                    break;
                case 10:
                    shangName.innerText = '可颂';
                    englishName.innerText = "CROISSANT";
                    backgrandName.innerText = "CROISSANT";
                    author.innerText = 'cv:久保百合花';
                    detail.innerText = '企鹅物流员工，于合约期内任企鹅物流驻罗德岛外派干员。 擅长防守，能同时牵制数个敌人，并拥有怪力，能用巨锤轻松击飞瘦弱的敌人。';
                    break;
                case 11:
                    shangName.innerText = '陈';
                    englishName.innerText = "CHEN";
                    backgrandName.innerText = "CHEN";
                    author.innerText = 'cv:石上静香';
                    detail.innerText = '陈，龙门高级警司，龙门近卫局特别督查组组长，毕业于维多利亚皇家近卫学校，成绩优异，表现突出。在龙门近卫局供职期间，力主取缔龙门境内非法活动，对抗暴力犯罪和有组织犯罪，追缉武装逃犯与国际重犯等行动，并取得多项重大成果。现作为特别人员协助罗德岛行动，并为现场提供战术指挥支援。 擅长防守，能同时牵制数个敌人，并拥有怪力，能用巨锤轻松击飞瘦弱的敌人。';
                    break;
                case 12:
                    shangName.innerText = '星熊';
                    englishName.innerText = "HOSHIGUMA";
                    backgrandName.innerText = "HOSHIGUMA";
                    author.innerText = 'cv:安野希世乃';
                    detail.innerText = '星熊，龙门近卫局特别任务组精英干员。存在数项指控记录。经龙门总督魏彦吾交涉，龙门近卫局依星熊的优异能力与良好表现，破格将其吸纳进近卫局特别督察组。在处理高危险性犯罪事件、要员保护、灾害紧急救援等领域表现出较高专业性。现作为重装干员协助罗德岛行动，并为现场提供战术执行与指挥支援。 擅长防守，能同时牵制数个敌人，并拥有怪力，能用巨锤轻松击飞瘦弱的敌人。';
                    break;
            }
        });
    };
    // 界面四
    var jiemian4 = this.document.querySelector('#jiemian4');
    var jiemian4li = jiemian4.querySelectorAll('li');
    var jiemian4a = jiemian4.querySelectorAll('a');
    var jiemian4bgeng = jiemian4.querySelectorAll('.backgrandenglish');
    var jiemian4img = jiemian4.querySelectorAll('img');
    for (let i = 0; i < jiemian4li.length; i++) {
        jiemian4li[i].addEventListener('mouseover', function () {
            for (let j = 0; j < jiemian4a.length; j++) {
                jiemian4a[j].style.color = '#9a9a9a';
                jiemian4a[j].style.marginLeft = 300 + 'px';
                jiemian4bgeng[j].style.opacity = 0;
                jiemian4img[j].style.display = 'none';
            }
            jiemian4bgeng[i].style.opacity = 1;
            // jiemian4bgeng[i].style.display = 'block';
            jiemian4a[i].style.color = '#fff';
            jiemian4a[i].style.marginLeft = 330 + 'px';
            jiemian4img[i].style.display = 'block';
        });
        jiemian4li[i].addEventListener('mouseout', function () {
            jiemian4a[i].style.color = '#9a9a9a';
            jiemian4a[i].style.marginLeft = 300 + 'px';
            jiemian4bgeng[i].style.opacity = 0;
            jiemian4img[i].style.display = 'none';
        });
        // 图片跟随效果
        jiemian4li[i].addEventListener('mousemove', function (event) {
            var X = event.clientX - 500;
            var Y = event.clientY - 500;
            jiemian4img[i].style.left = X + 'px';
            jiemian4img[i].style.top = Y + 'px';
        });
    };
    // 界面5
    // 两边点击切换按钮
    var clickZuo = this.document.querySelector('.click-zuo');
    var clickYou = this.document.querySelector('.click-you');
    var zuoshang = clickZuo.querySelector('.zuo-shang');
    var zuoxia = clickZuo.querySelector('.zuo-xia');
    var youshang = clickYou.querySelector('.you-shang');
    var youxia = clickYou.querySelector('.you-xia');
    var circle1 = this.document.querySelector('#circle1');
    var circle2 = this.document.querySelector('#circle2');
    clickZuo.addEventListener('mouseover', function () {
        zuoshang.style.backgroundColor = 'rgb(242, 242, 242)';
        zuoxia.style.backgroundColor = 'rgb(242, 242, 242)';
        zuoshang.style.top = 10 + 'px';
        zuoshang.style.left = 5 + 'px';
        zuoxia.style.top = 55 + 'px';
        zuoxia.style.left = 5 + 'px';
        circle1.style.display = 'block';
        circle1.style.transform = 'scaleX(7) scaleY(7)';
        // alert(circle1)
    });
    clickYou.addEventListener('mouseover', function () {
        youshang.style.backgroundColor = 'rgb(242, 242, 242)';
        youxia.style.backgroundColor = 'rgb(242, 242, 242)';
        youshang.style.top = 10 + 'px';
        youshang.style.left = 9 + 'px';
        youxia.style.top = 55 + 'px';
        youxia.style.left = 9 + 'px';
        circle2.style.display = 'block';
        circle2.style.transform = 'scaleX(7) scaleY(7)';
    });
    clickZuo.addEventListener('mouseout', function () {
        zuoshang.style.backgroundColor = '#5a5a5a';
        zuoxia.style.backgroundColor = '#5a5a5a';
        zuoshang.style.top = 15 + 'px';
        zuoshang.style.left = 0 + 'px';
        zuoxia.style.top = 50 + 'px';
        zuoxia.style.left = 0 + 'px';
        circle1.style.transform = 'scaleX(0) scaleY(0)';
        circle1.style.display = 'none';
    });
    clickYou.addEventListener('mouseout', function () {
        youshang.style.backgroundColor = '#5a5a5a';
        youxia.style.backgroundColor = '#5a5a5a';
        youshang.style.top = 15 + 'px';
        youshang.style.left = 14 + 'px';
        youxia.style.top = 50 + 'px';
        youxia.style.left = 14 + 'px';
        circle2.style.transform = 'scaleX(0) scaleY(0)';
        circle2.style.display = 'none';
    });
    // 界面5
    // 轮播图

    var clickzuoanniu = this.document.querySelector('.click-zuo');
    var clickyouanniu = this.document.querySelector('.click-you');
    var xieanniu = this.document.querySelector('.xieanniu');
    var clickNum = 0;
    var preview = this.document.querySelector('.preview');
    var previewul = preview.querySelector('ul');
    var yi = 175;
    var lunboText = this.document.querySelector('.lunbotext');
    var lunbotextS = lunboText.querySelector('.lunbotext-shang');
    var lunbotextZ= lunboText.querySelector('.lunbotext-zhong');
    var lunbotextX = lunboText.querySelector('.lunbotext-xia');
    // function wenziqiehuan(obj) { 
    //     obj.timer = this.setInterval(function () {
    //         var step = (target - obj.offsetLeft) / 10;
    //         //但是在实现后退效果的时候会产生负数，而此时需要向下取整，用Math.floor()
    //         step = step > 0 ? Math.ceil(step) : Math.floor(step);
    //         if (obj.offsetLeft == 200) { 
    //             clearInterval(obj.timer);
    //         }
    //         obj.style.left = obj.offsetLeft + step + 'px';
    //      },20)
    // }
    clickyouanniu.addEventListener('click', function () {
        clearTimeout(this.timer);
        if (clickNum <= 4) {
            clickNum++;
            for (let i = 0; i < xieanniu.children.length; i++) {
                xieanniu.children[i].style.backgroundColor = 'rgba(255, 255, 255, 0.288)';
            }
            xieanniu.children[clickNum].style.backgroundColor = '#fff';
            // console.log(xieanniu.children[clickNum].style.backgrandColor);
            var lunbo4img1 = document.querySelector('.img1');
            var lunbo4img2 = document.querySelector('.img2');
            // alert(111);
            lunbo4img1.style.transform = 'scale(0.1)';
            lunbo4img1.style.transition = 'transform 0.5s';
            lunbo4img1.style.zIndex = 1;
            lunbo4img2.style.transform = 'scale(0.8)';
            lunbo4img2.style.transition = 'transform 0.5s';
            lunbo4img2.style.zIndex = 2;
            this.timer = setTimeout(function () {
                lunbo4img1.className = 'img2';
                lunbo4img2.className = 'img1';
                switch (clickNum) {
                    case 1:
                        // alert( lunbo4img2.style.src)
                        lunbo4img1.src = "/明日方舟/img/68348c34f56db94c981a3f77d9c3c049.png";
                        lunbotextS.innerText = "02";
                        lunbotextZ.innerText = "笔记";
                        lunbotextX.innerText="#企鹅物流的秘密#"
                        break;
                    case 2:
                        // alert( lunbo4img2.style.src)
                        lunbo4img1.src = "/明日方舟/img/2f2aa666934eea7bcaf8f5b9c57c5abb.png";
                        lunbotextS.innerText = "03";
                        lunbotextZ.innerText = "安洁莉娜";
                        lunbotextX.innerText="#信使#"
                        // lunbo4img1.className = 'img2';
                        // lunbo4img2.className = 'img1';
                        break;
                    case 3:
                        // alert( lunbo4img2.style.src)
                        lunbo4img1.src = "/明日方舟/img/984eea8ff3268e10c8c1d7d99c40686c.png";
                        lunbotextS.innerText = "04";
                        lunbotextZ.innerText = "莱茵生命";
                        lunbotextX.innerText="#科研#"
                        break;
                    case 4:
                        lunbo4img1.src = "/明日方舟/img/764af395d50b4354627cc167d5a577ef.png";
                        lunbotextS.innerText = "05";
                        lunbotextZ.innerText = "端午";
                        lunbotextX.innerText="#炎国水乡#"
                        clickNum = 4;
                        break;
                        case 5:
                            lunbotextS.innerText = "06";
                            lunbotextZ.innerText = "龙门";
                            lunbotextX.innerText="#临街一角#"
                            break;
                }
            }, 500);

        }
        if (clickNum <= 2) {
            animate(previewul, -(clickNum * yi));
        }

    });
    clickzuoanniu.addEventListener('click', function () {
        // alert(clickNum)
        clearTimeout(this.timer);
        if (clickNum > 0) {
            clickNum--;
            for (let i = 0; i < xieanniu.children.length; i++) {
                xieanniu.children[i].style.backgroundColor = 'rgba(255, 255, 255, 0.288)';
            }
            xieanniu.children[clickNum].style.backgroundColor = '#fff';
            var lunbo4img1 = document.querySelector('.img1');
            var lunbo4img2 = document.querySelector('.img2');
            lunbo4img1.style.transform = 'scale(0.1)';
            lunbo4img1.style.transition = 'transform 0.5s';
            lunbo4img1.style.zIndex = 1;
            lunbo4img2.style.transform = 'scale(0.8)';
            lunbo4img2.style.transition = 'transform 0.5s';
            lunbo4img2.style.zIndex = 2;
            lunbo4img1.className = 'img2';
            lunbo4img2.className = 'img1';
            switch (clickNum) {
                case 0:
                    lunbo4img2.src = "/明日方舟/img/7dcfb48a8b98d7fb6966728e19b782d9.png";
                    lunbotextS.innerText = "01";
                    lunbotextZ.innerText = "第一把赤霄";
                    lunbotextX.innerText="#决战#"
                    // console.log("1"+" "+clickNum);
                    break;
                case 1:
                    lunbo4img2.src = "/明日方舟/img/8b683b7c01ebf0eb570370a48b655504.png";
                    lunbotextS.innerText = "02";
                        lunbotextZ.innerText = "笔记";
                        lunbotextX.innerText="#企鹅物流的秘密#"
                    // console.log("1"+" "+clickNum);
                    break;
                case 2:
                    lunbo4img2.src = "/明日方舟/img/68348c34f56db94c981a3f77d9c3c049.png";
                    lunbotextS.innerText = "03";
                        lunbotextZ.innerText = "安洁莉娜";
                        lunbotextX.innerText="#信使#"
                    // console.log("1"+" "+clickNum);
                    break;
                case 3:
                    lunbo4img2.src = "/明日方舟/img/2f2aa666934eea7bcaf8f5b9c57c5abb.png";
                    lunbotextS.innerText = "04";
                        lunbotextZ.innerText = "莱茵生命";
                        lunbotextX.innerText="#科研#"
                    // console.log("2"+" "+clickNum);
                    break;
                case 4:
                    lunbo4img2.src = "/明日方舟/img/984eea8ff3268e10c8c1d7d99c40686c.png";
                    lunbotextS.innerText = "05";
                    lunbotextZ.innerText = "端午";
                    lunbotextX.innerText="#炎国水乡#"
                    // console.log("3"+" "+clickNum);
                    break;
                case 5:
                    // lunbo4img1.className = 'img2';
                    // lunbo4img2.className = 'img1';
                    lunbo4img2.src = "/明日方舟/img/764af395d50b4354627cc167d5a577ef.png";
                    // console.log("4"+" "+clickNum);
                    break;
            }
        }
        if (clickNum <= 2) {
            animate(previewul, -(clickNum * yi));
        }
    });
    var previewdiv = preview.querySelectorAll('div');
    var previewimg = preview.querySelectorAll('img');
    // 小轮播鼠标经过
    for (let i = 0; i < previewimg.length; i++) {
        previewimg[i].addEventListener('mouseover', function () {
            for (let j = 0; j < previewimg.length; j++) {
                previewimg[j].style.filter = 'brightness(0.5)';
                previewdiv[j].style.top = 100 + 'px';
                previewdiv[j].style.transition = 'top 0.5s';
            }
            this.style.filter = 'brightness(1)';
            previewdiv[i].style.top = 75 + 'px';
            previewdiv[i].style.transition = 'top 0.2s';

        });
        previewimg[i].addEventListener('mouseout', function () {
            previewimg[i].style.filter = 'brightness(0.5)';
            previewdiv[i].style.top = 100 + 'px';
            previewdiv[i].style.transition = 'top 0.5s';

        });
    };
    // 整体移动效果
    var lunbo4 = this.document.querySelector('.lunbo4');
    var jiemian5 = this.document.querySelector('#jiemian5');
    jiemian5.addEventListener('mouseover', function () {
        this.addEventListener('mousemove', function (event) {
            var X = (event.clientX - 500)/12;
            var Y = (event.clientY - 500)/12;
            lunbo4.style.transform = 'translate3d(' + X + 'px, ' + Y + 'px, 0px)'+'rotateX('+X/5+'deg) rotateY('+Y/5+'deg)';
            lunboText.style.transform = 'translate3d(' + X/3 + 'px, ' + Y/3 + 'px, 90px)' + 'rotateX(' + X / 5 + 'deg) rotateY(' + Y / 5 + 'deg)';
        });
    });
    // 粒子部分
    // 界面2 粒子效果
    var message1=document.getElementById('01-infor').textContent;
    var canvas1 = document.querySelector('#myCanvas1');
    wenzicanvas(message1, canvas1,3000);
    // 界面三粒子
    var message2 = document.getElementById('02-sta').textContent;
     var canvas2=document.querySelector('#myCanvas2');
    wenzicanvas(message2, canvas2,2300);
    // 界面4粒子
    var message3 = document.getElementById('03-world').textContent;
     var canvas3=document.querySelector('#myCanvas3');
    wenzicanvas(message3, canvas3,2300);
    // 界面5粒子
    var message4 = document.getElementById('04-media').textContent;
     var canvas4=document.querySelector('#myCanvas4');
    wenzicanvas(message4, canvas4,2200);

});
