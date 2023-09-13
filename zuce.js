window.addEventListener("load", function () {
   //登录注册界面的翻转效果
    var dengjm = this.document.querySelector('.jm');
    var zhujm = this.document.querySelector('.jm-back');
    var dengbut = this.document.querySelector('#r-1');
    var zhubut = this.document.querySelector('#r-2');
    zhubut.addEventListener("click", function () { 
        
        dengjm.setAttribute('id', "");
        zhujm.setAttribute('id', "");
        dengjm.setAttribute('id', "jm");
        zhujm.setAttribute('id', "jm-back");
    })
    dengbut.addEventListener("click", function () { 
        dengjm.setAttribute('id', "");
        zhujm.setAttribute('id', "");
        dengjm.setAttribute('id', "jm-back");
        zhujm.setAttribute('id', "jm");
        
        
    })
        //获取验证码按钮
        var cat = this.document.querySelectorAll('#catch');
    //登录界面密码登录和验证码登录
    var qiehuan = dengjm.querySelector('.qiehuan');
    var input1 = dengjm.querySelector('.input1');
    var input2 = dengjm.querySelector('.input2');
    var num = 0;
    qiehuan.addEventListener('click', function () {
        num++;
        if (num % 2 == 0) {
            input1.style.display = 'block';
            input2.style.display = 'none';
            this.innerText = "使用验证码登录";
        } else {
            input1.style.display = 'none';
            input2.style.display = 'block';
            this.innerText = "使用密码登录";
        }
    });
    // 创建cookie储存注册信息
    function setCookie(cname,cvalue) {
        var d = new Date();
        // 设置存储时间为2天
        d.setTime(d.getTime() + (2 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    //创建获得cookie值的函数
    function getCookie(cname) {
        var name = cname;
        // console.log(name);
        var reg = new RegExp("(^|\\s)" + name + "=([^;]+)(;|$)");
        // console.log(document.cookie.match(reg));
        return document.cookie.match(reg)[2];

    }
    // 注册正则验证
    
    var inp = this.document.querySelectorAll('.inp');
    var fal = this.document.querySelectorAll('.false');
    var boder = this.document.querySelectorAll('.border');
    var numberif = false, mimaif = false, quedingmimaif = false, yanzhengif = false;
    // var username;
    //     var userpass;
    //手机号验证
    var userNumberRegExp = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
    // var userEmilRegExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    inp[4].addEventListener('focus', function () {
        boder[4].style.width = this.offsetWidth+'px';
        boder[4].style.transition='width 0.5s ease';
    });
    inp[4].addEventListener('blur', function () {
        var userNumberE = this.value.trim();
        this.value = userNumberE;
        var userNumberRetVal = userNumberRegExp.test(userNumberE);
        // var userEmilRetVal = userEmilRegExp.test(userNumberE);
        boder[4].style.width ='0';
        boder[4].style.transition = 'width 0.5s ease';
        if (!(this.value == "")) {
            if ((!userNumberRetVal)) {
                fal[4].innerText = "*手机号格式不正确";
                this.style.background = 'rgb(252, 207, 207)';
                boder[4].style.background = 'red';
                for (var i = 0; i < cat.length; i++) { 
                    cat[i].style.background = "rgb(118, 118, 118)";
                }
            } else { 
                //验证码可点击
                for (var i = 0; i < cat.length; i++) { 
                    cat[i].style.background = "#158fc5";
                }
                cat[1].addEventListener('click', function () {
                    this.style.backgroundColor = "rgb(118, 118, 118)";
                    animate(this);
                });
                fal[4].innerText = "";
                boder[4].style.background = '#158fc5';
                this.style.background = 'rgb(252 207 207 / 0%)';
                numberif = true;
                setCookie("userNumber", userNumberE);
                
            }

        } else { 
            fal[4].innerText = "*手机号不能为空";
            this.style.background = 'rgb(252, 207, 207)';
            boder[4].style.background = 'red';
            for (var i = 0; i < cat.length; i++) { 
                    cat[i].style.background = "rgb(118, 118, 118)";
                }
        }
    });
    // 密码验证
    var userpasswordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    inp[5].addEventListener('focus', function () {
        boder[5].style.width = this.offsetWidth+'px';
        boder[5].style.transition='width 0.5s ease';
    });
    inp[5].addEventListener('blur', function () {
        var userpassword = inp[5].value.trim();
        this.value = userpassword;
        boder[5].style.width ='0';
        boder[5].style.transition = 'width 0.5s ease';
        // console.log(userpassword);
        var userpasswordRetVal = userpasswordRegExp.test(userpassword);
        if (!(this.value == "")) {
            if (!userpasswordRetVal) {
                fal[5].innerText = "*密码格式不正确";
                this.style.background = 'rgb(252, 207, 207)';
                boder[5].style.background = 'red';
            } else { 
                mimaif = true;
                fal[5].innerText = "";
                boder[5].style.background = '#158fc5';
                this.style.background = 'rgb(252 207 207 / 0%)';
                setCookie("password", userpassword);
            }
         } else { 
            fal[5].innerText = "*密码不能为空";
            this.style.background = 'rgb(252, 207, 207)';
            boder[5].style.background = 'red';
        }
    });
    //确认密码验证
    inp[6].addEventListener('focus', function () {
        boder[6].style.width = this.offsetWidth+'px';
        boder[6].style.transition='width 0.5s ease';
    });
    inp[6].addEventListener('blur', function () {
        var conpass = this.value;
        if (!(conpass == "")) {
            if (conpass != inp[5].value) {
                fal[6].innerText = "*两次输入的密码格式不一致";
            this.style.background = 'rgb(252, 207, 207)';
            boder[6].style.background = 'red';
            } else { 
                quedingmimaif = true;
                fal[6].innerText = "";
                boder[6].style.background = '#158fc5';
                this.style.background = 'rgb(252 207 207 / 0%)';
            }
         } else { 
            fal[6].innerText = "*两次输入的密码格式不一致";
            this.style.background = 'rgb(252, 207, 207)';
            boder[6].style.background = 'red';
        }
        boder[6].style.width ='0';
        boder[6].style.transition = 'width 0.5s ease';
    });
//验证码计时动画
    var time = 60;;
    function animate(obj, callback) {
        clearInterval(obj.timer);
        obj.timer = this.setInterval(function () {

            time--;
            if (time < 1) {
                obj.innerText = "获取验证码";
                obj.style.backgroundColor = "#158fc5";
                clearInterval(obj.timer);
            } else {
                obj.innerText = time + "S后重试";
            }
        }, 1000);
    }
    //验证码
    var yanzheng = "1234";
    inp[7].addEventListener('focus', function () {
        boder[7].style.width = this.offsetWidth+'px';
        boder[7].style.transition='width 0.5s ease';
    });
    inp[7].addEventListener('blur', function () {
        if (this.value == yanzheng) {
            yanzhengif = true;
            fal[7].innerText = "";
            boder[7].style.background = '#158fc5';
            this.style.background = 'rgb(252 207 207 / 0%)';
        } else { 
            fal[7].innerText = "*验证码格式错误";
            this.style.background = 'rgb(252, 207, 207)';
            boder[7].style.background = 'red';
        }
        boder[7].style.width ='0';
        boder[7].style.transition='width 0.5s ease';
    });
    // 登录验证
    var dnum = false, dpass = false,zhuc=false;
    // 手机号验证
    inp[0].addEventListener('focus', function () {
        
        // alert(username);
        boder[0].style.width = this.offsetWidth+'px';
        boder[0].style.transition='width 0.5s ease';
    });
    inp[0].addEventListener('blur', function () {
        // var userNumberd = this.value.trim();
        if (zhuc) {
            var username = getCookie("userNumber");
        }
        boder[0].style.width ='0';
        boder[0].style.transition = 'width 0.5s ease';
        if (!(this.value == "")) {
            if ((this.value!=username)) {
                fal[0].innerText = "*手机号格式不正确";
                this.style.background = 'rgb(252, 207, 207)';
                boder[0].style.background = 'red';
            } else { 
                fal[0].innerText = "";
                boder[0].style.background = '#158fc5';
                this.style.background = 'rgb(252 207 207 / 0%)';
                dnum = true;
            }

        } else { 
            fal[0].innerText = "*手机号不能为空";
            this.style.background = 'rgb(252, 207, 207)';
            boder[0].style.background = 'red';
        }
    });
    // 密码验证
    inp[1].addEventListener('focus', function () {
        boder[1].style.width = this.offsetWidth+'px';
        boder[1].style.transition='width 0.5s ease';
    });
    inp[1].addEventListener('blur', function () {
        if (zhuc) {
            var userpass = getCookie("password");
        }
        // var userNumberd = this.value.trim();
        boder[1].style.width ='0';
        boder[1].style.transition = 'width 0.5s ease';
        if (!(this.value == "")) {
            if ((this.value!=userpass)) {
                fal[1].innerText = "*密码格式不正确";
                this.style.background = 'rgb(252, 207, 207)';
                boder[1].style.background = 'red';
            } else { 
                fal[1].innerText = "";
                boder[1].style.background = '#158fc5';
                this.style.background = 'rgb(252 207 207 / 0%)';
                dpass = true;
            }

        } else { 
            fal[1].innerText = "*密码不能为空";
            this.style.background = 'rgb(252, 207, 207)';
            boder[1].style.background = 'red';
        }
    });
    // 登录确定
    
    var queding = this.document.querySelectorAll(".queding");
    queding[0].addEventListener('click', function(){ 
        if (inp[0].value == "") { 
            inp[0].focus();
            inp[0].blur();
        }
        if (inp[1].value == "") { 
            inp[1].focus();
            inp[1].blur();
        }
        if (dpass && dnum && zhuc) { 
            form[0].action = "/明日方舟/index.html";
            form[0].submit();
        }
    })

    //提交
    var form = this.document.querySelectorAll('form');
    var gouxuan = this.document.querySelector("#ty");
    queding[1] . addEventListener('click', function(){ 
        if (inp[4].value == "") { 
            inp[4].focus();
            inp[4].blur();
        }
        if (inp[5].value == "") { 
            inp[5].focus();
            inp[5].blur();
        }
        if (inp[6].value == "") { 
            inp[6].focus();
            inp[6].blur();
        }
        if (inp[7].value == "") { 
            inp[7].focus();
            inp[7].blur();
        }
        var gouxuanif = false;
        if (gouxuan.checked) { 
         gouxuanif = true;
        }
        if (numberif && mimaif && quedingmimaif && yanzhengif && gouxuanif) { 
            zhuc = true;
            form[2].action = "/明日方舟/index.html";
            form[2].submit();
        }
    })
    
    
})