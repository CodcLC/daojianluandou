"use strict";
cc._RF.push(module, '6fc6cQqMv9MxZ9wzJ8S3raM', 'WXSdk');
// script/tscript/wx/WXSdk.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SystemTools_1 = require("./SystemTools");
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 用户授权状态
 */
var AuthorizeStatus;
(function (AuthorizeStatus) {
    /**
     * 未申请授权
     */
    AuthorizeStatus[AuthorizeStatus["none"] = 0] = "none";
    /**
     * 拒绝授权
     */
    AuthorizeStatus[AuthorizeStatus["refuse"] = 1] = "refuse";
    /**
     * 同意授权
     */
    AuthorizeStatus[AuthorizeStatus["agree"] = 2] = "agree";
})(AuthorizeStatus = exports.AuthorizeStatus || (exports.AuthorizeStatus = {}));
var WXSdk = /** @class */ (function (_super) {
    __extends(WXSdk, _super);
    function WXSdk() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //public url:string = "http://127.0.0.1:8080/knife/login";
        _this.url = "https://127.0.0.1/knife/login";
        _this.worldRankUrl = "https://127.0.0.1/knife/update-best-score";
        _this.worldRankUrl2 = "https://127.0.0.1/knife/world/";
        _this.appid = "wx472e16802f66329a"; // 小程序 appId
        _this.secret = ""; // 小程序 appSecret
        _this.grant_type = "authorization_code"; //填写为 authorization_code
        _this._authorizeStatus = AuthorizeStatus.none;
        _this._tokenData = "";
        _this.isVibrate = false;
        _this.isLogin = false;
        _this.shareTime = 0;
        /*private wxLog(message?: any, ...optionalParams: any[])
        {
            console.log(message,optionalParams);
        }*/
        _this.wxLog = console.log;
        //private wxLog = function(...args){};
        _this._shareTicket = "";
        return _this;
    }
    WXSdk_1 = WXSdk;
    Object.defineProperty(WXSdk, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new WXSdk_1();
                this._instance.init();
            }
            return WXSdk_1._instance;
        },
        enumerable: true,
        configurable: true
    });
    WXSdk.prototype.init = function () {
        var _this = this;
        //this.wx = window["wx"] || {};
        //this.wx = wx || {};
        this.wx = window["wx"];
        //this.wxLog("wx = ",this.wx);
        this.systemInfo;
        if (this.wx) {
            this.wx.onShow(function (res) {
                if (res.query.type == "shareToAnyOne" && res.scene == 1044) {
                    _this._shareTicket = res.shareTicket;
                    cc.systemEvent.emit("shareTicketUpdate");
                }
                else {
                    _this._shareTicket = "";
                }
                //this.wxLog("onShow 收到消息",res,"this._shareTicket",this._shareTicket);
            });
            this.wx.onHide(function (res) {
                //this.wxLog("onHide 收到消息",res);
            });
            var launchOption = this.wx.getLaunchOptionsSync();
            if (launchOption.shareTicket && launchOption.shareTicket != "<Undefined>") {
                this._shareTicket = launchOption.shareTicket;
            }
            else {
                this._shareTicket = "";
            }
            //shareTick "<Undefined>"
            //this.wxLog("launchOption = ",launchOption);
            this.wx.showShareMenu({
                withShareTicket: true,
                success: function () { },
                fail: function () { },
            });
            this.wx.onShareAppMessage(function () { return ({
                title: '刀剑乱斗英雄',
                imageUrl: 'https://127.0.0.1/image/星球飞刀.jpg',
                query: "type=shareToAnyOne",
            }); });
        }
    };
    WXSdk.prototype.isWXPlatform = function () {
        return this.wx != undefined && this.wx != null;
    };
    Object.defineProperty(WXSdk.prototype, "openDataContext", {
        get: function () {
            if (!this._openDataContext) {
                this._openDataContext = this.wx.getOpenDataContext();
            }
            return this._openDataContext;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WXSdk.prototype, "sharedCanvas", {
        get: function () {
            if (!this._sharedCanvas) {
                this._sharedCanvas = this.openDataContext.canvas;
            }
            return this._sharedCanvas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WXSdk.prototype, "systemInfo", {
        // update (dt) {}
        get: function () {
            if (this.wx && !this._systemInfo) {
                this._systemInfo = this.wx.getSystemInfoSync();
                this.wxLog("微信系统信息", this._systemInfo);
                this.wxLog("\n手机型号", this._systemInfo.model, "\n系统", this._systemInfo.system, "\n微信版本", this._systemInfo.version, "\n语言", this._systemInfo.language, "\n手机品牌", this._systemInfo.brand, "\n客户端平台", this._systemInfo.platform, "\n客户端基础库版本", this._systemInfo.SDKVersion);
            }
            return this._systemInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WXSdk.prototype, "version", {
        /**
         * 微信版本号
         */
        get: function () {
            if (this.systemInfo) {
                return this.systemInfo.version;
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WXSdk.prototype, "SDKVersion", {
        /**
         * 微信基础库版本
         */
        get: function () {
            if (this.systemInfo) {
                return this.systemInfo.SDKVersion;
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WXSdk.prototype, "system", {
        /**
         * 手机系统
         */
        get: function () {
            if (this.systemInfo) {
                return this.systemInfo.system;
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WXSdk.prototype, "model", {
        /**
         * 手机型号
         */
        get: function () {
            if (this.systemInfo) {
                return this.systemInfo.model;
            }
            return this.systemInfo.model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WXSdk.prototype, "brand", {
        /**
         * 手机品牌
         */
        get: function () {
            if (this.systemInfo) {
                return this.systemInfo.brand;
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WXSdk.prototype, "platform", {
        /**
         * 客户端平台
         */
        get: function () {
            if (this.systemInfo) {
                return this.systemInfo.platform;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WXSdk.prototype, "userData", {
        get: function () {
            return this._userData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WXSdk.prototype, "userInfo", {
        get: function () {
            return this._userInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WXSdk.prototype, "openid", {
        /**
         * 微信唯一id
         */
        get: function () {
            if (this._tokenData) {
                return this._tokenData.openid;
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WXSdk.prototype, "token", {
        get: function () {
            if (this._tokenData) {
                return this._tokenData.skey;
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WXSdk.prototype, "uid", {
        /**
         * 用户在数据库里的id
         */
        get: function () {
            if (this._tokenData) {
                return this._tokenData.uid;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WXSdk.prototype, "isNew", {
        /**
         * 用户是否是新用户
         */
        get: function () {
            if (this._tokenData) {
                return this._tokenData.isNew;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WXSdk.prototype, "session_key", {
        /**
         * 会话密匙
         */
        get: function () {
            if (this._accessTokenData) {
                return this._accessTokenData.session_key;
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WXSdk.prototype, "nickname", {
        /**
         * 昵称
         */
        get: function () {
            if (this._userInfo) {
                return this._userInfo.nickName;
            }
            return "小飞刀";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WXSdk.prototype, "authorizeStatus", {
        /**
         * 授权状态
        */
        get: function () {
            return this._authorizeStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WXSdk.prototype, "shareTicket", {
        get: function () {
            return this._shareTicket;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WXSdk.prototype, "screenWidth", {
        get: function () {
            return this.systemInfo.screenWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WXSdk.prototype, "screenHeight", {
        get: function () {
            return this.systemInfo.screenHeight;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @param complete
     * @param size 尺寸有 0、46、64、96、132 可选  0代表 640 * 640
     */
    WXSdk.prototype.getUserIcon = function (complete, size) {
        if (size === void 0) { size = 132; }
        if (!this.wx) {
            complete(null);
            return;
        }
        var avatarUrl = this._userInfo.avatarUrl;
        var index = avatarUrl.lastIndexOf("/");
        avatarUrl = avatarUrl.substring(0, index + 1) + size + "?aaa=aa.jpg";
        cc.loader.load(avatarUrl, function (err, texture) {
            complete(texture);
        });
    };
    /**
     * 申请用户授权
     * @param success
     * @param fail
     */
    WXSdk.prototype.applyUserAuth = function (success) {
        var _this = this;
        if (!this.wx) {
            this._authorizeStatus = AuthorizeStatus.refuse;
            success(false);
            return;
        }
        this.wx.getSetting({
            success: function (res) {
                if (!res.authSetting["scope.userInfo"]) {
                    /*this.wx.authorize({

                        scope:"scope.userInfo",

                        success:(res)=>{
                            this.wxLog("用户同意获取个人信息");
                            this._authorizeStatus = AuthorizeStatus.agree;
                            success(true);
                        },
                        fail:(res)=>{
                            this.wxLog("用户不同意获取个人信息");
                            //this._authorizeStatus = AuthorizeStatus.refuse;
                            //success(false);

                            var self:WXSdk = this;

                            function showModal()
                            {
                                wx.showModal({
                                  title: '警告',
                                  content: '您点击了拒绝授权,游戏将无法正常显示个人信息,点击确定重新获取授权。',
                                  success:function(res)
                                    {
                                        if (res.confirm)
                                        {
                                                wx.openSetting(
                                                {
                                                    success: (res) =>
                                                    {
                                                      if (res.authSetting["scope.userInfo"])
                                                        {   ////如果用户重新同意了授权登录
                                                            //console.log("被迫同意授权");
                                                            self._authorizeStatus = AuthorizeStatus.agree;
                                                            success(true);
                                                            
                                                        }else
                                                        {
                                                            //console.log("用户还是拒绝");
                                                            showModal();
                                                        }
                                                    },
                                                    fail:function(res)
                                                    {
                                                        //console.log("打开面板失败");
                                                        showModal();
                                                    }
                                              })
                                        }else
                                        {
                                            showModal();
                                        }
                                    }
                                });
                            }

                            showModal();

                        }
                    });*/
                    _this.getUserAuthorizeBtn(success);
                }
                else {
                    _this._authorizeStatus = AuthorizeStatus.agree;
                    success(true);
                }
            },
            fail: function (res) {
                _this._authorizeStatus = AuthorizeStatus.refuse;
                success(false);
            }
        });
    };
    /*public openSetting(success:Function,fail:Function)
    {
        if(!this.wx)
        {
            success({});
            return;
        }

        this.wx.getSetting({
            success:(res)=>
            {
                this.wxLog("open setting suc authSetting",res.authSetting);
            },
            fail:(res)=>
            {
                this.wxLog("open setting fail ",res);
            }
        }
        );
    }*/
    /**
     * 创建按钮，打开用户权限申请页
     */
    WXSdk.prototype.getUserAuthorizeBtn = function (success) {
        console.log(this.systemInfo.screenWidth);
        var button = wx.createUserInfoButton({
            type: 'text',
            text: '',
            //image: 'res/raw-assets/7b/7bb27b49-7cfc-495d-aa3c-27f5c4234816.png',
            style: {
                left: 0,
                top: 0,
                width: this.systemInfo.screenWidth,
                height: this.systemInfo.screenHeight,
                lineHeight: 40,
                backgroundColor: '#00000000',
                color: '#ffffff',
                textAlign: 'center',
                fontSize: 16,
                borderRadius: 4
            }
        });
        button.onTap(function (res) {
            if (res.errMsg == "getUserInfo:ok") {
                console.log("获得授权 ?", res);
                button.hide();
                button.destroy();
                success();
            }
            else {
            }
        });
    };
    /**
     * 微信登录
     * @param success
     * @param fail
     */
    WXSdk.prototype.login = function (appid, secret, success, fail) {
        var _this = this;
        if (!this.wx) {
            success();
            return;
        }
        this.appid = appid;
        this.secret = secret;
        if (this.isLogin) {
            success();
            return;
        }
        var successCallback = function () {
            _this.isLogin = true;
            WXSdk_1.instance.wx.hideLoading();
            success();
        };
        var failCallback = function () {
            WXSdk_1.instance.wx.hideLoading();
            fail();
        };
        this.applyUserAuth(function (isAuthorize) {
            _this.getUserInfo(function () {
                //this.checkSession(success,fail);
                _this.loginWX(successCallback, failCallback);
            }, function () {
                failCallback();
            });
        });
    };
    WXSdk.prototype.loginWX = function (success, fail) {
        var _this = this;
        this.wx.showLoading({
            title: '登录中...',
            mask: true,
            width: 250,
        });
        this.wx.login({
            timeout: 30000,
            success: function (res) {
                _this.wxLog("login", res);
                if (res.code) {
                    //console.log("code:"+res.code)
                    //this.getAccessToken(success,fail,res.code);
                    //this.getAccessToken2(success,fail,res.code);
                    success();
                }
                else {
                    //this.wxLog("登录失败",res);
                    fail();
                }
            },
            fail: function (res) {
                //this.wxLog("登录失败",res);
                fail();
            },
            complete: function () {
                //调用结束时回掉，不管成功还是失败
            }
        });
    };
    /**
     * 检查登录状态是否过期
     */
    WXSdk.prototype.checkSession = function (success, fail) {
        var _this = this;
        this.wx.checkSession({
            success: function () {
                _this.wxLog("session_key 未过期，并且在本生命周期一直有效");
                success();
                //this.getUserInfo(success,fail);
                //this.loginWX(success,fail);
            },
            fail: function () {
                _this.wxLog("已经失效，需要重新执行登录流程");
                _this.loginWX(success, fail);
            }
        });
    };
    /**
     * 登入凭证校验
     */
    WXSdk.prototype.getAccessToken = function (success, fail, code) {
        var _this = this;
        var obj = {
            code: code,
            // "encrypted": "string",
            fromAppId: this.appid,
            // "fromType": "string",
            // "fromUserId": 0,
            img: this._userInfo.avatarUrl,
            // "iv": "string",
            // "model": "string",
            name: this.nickname,
        };
        this.requestPost(this.url, obj, function (res) {
            _this.wxLog("收到服务端返回数据", res.data);
            _this._tokenData = res.data.data;
            var errcode = res.statusCode; //错误码
            if (errcode == -1) {
                //console.error(">>>系统繁忙，此时请开发者稍候再试");
                fail();
            }
            else if (errcode == 0) {
                //">>>请求成功");
                //this.getUserInfo(success,fail);
                success();
            }
            else if (errcode == 200) {
                //">>>请求成功");
                //this.getUserInfo(success,fail);
                success();
            }
            else if (errcode == 40029) {
                //">>>>code无效");
                //this.getUserInfo(success,fail);
                success();
            }
            else {
                fail();
            }
        }, function () {
            console.error(">>>>>>>获取登录凭证失败");
            fail();
        });
    };
    /**
    * 登入凭证校验
    */
    WXSdk.prototype.getAccessToken2 = function (success, fail, code) {
        var _this = this;
        var url = "https://api.weixin.qq.com/sns/jscode2session?appid={0}&secret={1}&js_code={2}&grant_type={3}"; //这个请求似乎只能在服务器端完成，前端只能不校验合法域名才可以使用
        url = SystemTools_1.default.format(url, this.appid, this.secret, code, this.grant_type); //拼接网址
        //https://api.weixin.qq.com/sns/jscode2session?appid=wx472e16802f66329ajs_code=03329Yad2JudiF0Y9Vbd2Qh6bd229Ya3&grant_type=authorization_code
        this.requestGet(url, function (res) {
            var data = res.data;
            var openId = data.openid; //用户唯一标识
            var session_key = data.session_key; //回话密匙
            //let errcode:number  = data.errcode; //错误码
            var errcode = res.statusCode; //错误码
            var errMsg = res.errMsg; //错误信息
            _this._accessTokenData = res.data;
            _this.wxLog("openId", openId);
            _this.wxLog("session_key", session_key);
            _this.wxLog("accesstoken res ", res, errcode);
            if (errcode == -1) {
                console.error(">>>系统繁忙，此时请开发者稍候再试");
            }
            else if (errcode == 0) {
                //">>>请求成功");
                _this.getUserInfo(success, fail);
            }
            else if (errcode == 200) {
                //">>>请求成功");
                _this.getUserInfo(success, fail);
            }
            else if (errcode == 40029) {
                //">>>>code无效");
                _this.getUserInfo(success, fail);
            }
        }, function () {
            console.error(">>>>>>>获取登录凭证失败");
            fail();
        });
    };
    /**
     * 获取用户信息
     */
    WXSdk.prototype.getUserInfo = function (success, fail) {
        var _this = this;
        var data = {
            withCredentials: false,
            lang: "zh_CN",
            success: function (res) {
                _this._userData = res;
                _this._userInfo = res.userInfo;
                _this.wxLog("获取用户信息成功");
                success();
            },
            fail: function (res) {
                _this.wxLog("获取用户信息失败", res);
                fail();
                //this.checkSession(success,fail); //获取用户信息失败之后 继续去获取
                //this.wxLog("获取用户信息失败:",this.tempCode);
            }
        };
        wx.getUserInfo(data);
    };
    /**
     * 微信请求
     * @param url  请求地址
     * @param successCallBack 成功回调
     * @param failBack  失败回调
     */
    WXSdk.prototype.requestGet = function (url, success, fail) {
        var requestData = {
            url: url,
            method: "GET",
            dataType: "json",
            success: function (res) {
                success && success(res);
            },
            fail: function () {
                fail && fail();
                console.error(">>>>>>请求url失败：" + requestData.url);
            }
        };
        this.wx.request(requestData);
    };
    WXSdk.prototype.requestPost = function (url, data, success, fail) {
        var requestData = {
            url: url,
            method: "POST",
            data: data,
            dataType: "json",
            success: function (res) {
                success && success(res);
            },
            fail: function () {
                fail && fail();
                console.error(">>>>>>请求url失败：" + requestData.url);
            }
        };
        this.wx.request(requestData);
    };
    /**
     * 设置用户排名数据存储
     */
    WXSdk.prototype.setUserRankStorage = function (key, value) {
        if (!this.wx)
            return;
        var kvdatas = [
            { key: key, value: value.toString() },
        ];
        this.wx.setUserCloudStorage({ KVDataList: kvdatas,
            success: function (res) {
                console.log("setUserCloudStorage", res);
            }
        });
    };
    WXSdk.prototype.unloadUserScore = function (score, success, fail) {
        var _this = this;
        if (!this.wx)
            return;
        var url = this.worldRankUrl + ("?id=" + this.uid + "&score=" + score); //这个请求似乎只能在服务器端完成，前端只能不校验合法域名才可以使用
        this.requestGet(url, function (res) {
            _this.wxLog("上传用户数据返回", res.data);
            if (res.data.code == 0) {
                success();
            }
            else {
                fail();
            }
        }, function () {
            console.error("上传用户信息失败");
            fail();
        });
    };
    WXSdk.prototype.getUserScoreWorldRank = function (success, fail) {
        var _this = this;
        if (!this.wx)
            return;
        var url = this.worldRankUrl2 + this.uid; //这个请求似乎只能在服务器端完成，前端只能不校验合法域名才可以使用
        this.requestGet(url, function (res) {
            _this.wxLog("用户世界排行榜返回返回", res);
            if (res.data.code == 0) {
                success(res.data.data);
            }
            else {
                fail();
            }
        }, function () {
            console.error("上传用户信息失败");
            fail();
        });
    };
    /**
     * 分享游戏
     */
    WXSdk.prototype.shareToAnyOne = function (success, fail) {
        if (!this.wx) {
            success();
            return;
        }
        var nowTime = Date.now() / 1000;
        if (nowTime - this.shareTime <= 3) {
            WXSdk_1.instance.wx.showModal({
                title: '警告',
                showCancel: false,
                confirmText: "确定",
                content: Math.random() < 0.5 ? '短时间内,不要分享同一个群' : '请换个群试试哦~~',
                success: function (res) {
                    if (res.confirm) {
                    }
                    else {
                    }
                }
            });
            fail();
        }
        else {
            this.shareTime = nowTime;
            var titleArr = [
                "今年4月最火的小游戏",
                "玩转飞刀，坐拥地球！",
                "提醒：@你的好友 已完成五杀",
                "飞刀转转转，压力散散散！",
                "我升星界大师了，你能打到宇宙最强吗？"
            ];
            var index = Math.floor((Math.random() * titleArr.length));
            this.wx.shareAppMessage({
                title: "" + titleArr[index],
                imageUrl: "https://knife-1258819150.file.myqcloud.com/image/%E6%98%9F%E7%90%83%E9%A3%9E%E5%88%80.jpg",
                query: "type=shareToAnyOne",
                success: function (res) {
                    console.log('拉起分享 成功', res);
                    success();
                },
                fail: function (res) {
                    console.log('拉起分享 失败', res);
                    fail();
                }
            });
            this.scheduleOnce(function () {
                var currentTime = Date.now() / 1000;
                if (currentTime - nowTime <= 3) {
                    console.log(currentTime, nowTime, currentTime - nowTime);
                    WXSdk_1.instance.wx.showModal({
                        title: '警告',
                        showCancel: false,
                        confirmText: "确定",
                        content: Math.random() < 0.5 ? '短时间内,不要分享同一个群' : '请换个群试试哦~~',
                        success: function (res) {
                            if (res.confirm) {
                            }
                            else {
                            }
                        }
                    });
                    return;
                }
                success();
                WXSdk_1.instance.wx.showModal({
                    title: '分享成功',
                    showCancel: false,
                    confirmText: "确定",
                    content: '恭喜,获得奖励',
                    success: function (res) {
                        if (res.confirm) {
                        }
                        else {
                        }
                    }
                });
            }, 0.8);
        }
    };
    WXSdk.prototype.showVideo = function (adUnitId, close, success, fail) {
        var _this = this;
        if (!this.wx) {
            close && close(1);
            return;
        }
        if (this.SDKVersion < "2.04") {
            console.log("基础库版本过低，不能使用视频广告功能");
            return;
        }
        var rewardedVideoAd = this.wx.createRewardedVideoAd({ adUnitId: adUnitId }); //不支持在开发工具运行，只能在真机运行 返回值是个单例
        //this.wxLog("rewardedVideoAd",rewardedVideoAd);
        //视频广告默认是隐藏的，要调用show显示
        rewardedVideoAd.onLoad(function () {
            _this.wxLog('激励视频 广告加载成功');
            success && success();
        });
        rewardedVideoAd.onError(function (err) {
            _this.wxLog('激励视频 广告拉取失败', err);
            fail && fail();
        });
        rewardedVideoAd.onClose(function (res) {
            rewardedVideoAd.offLoad();
            rewardedVideoAd.offError();
            rewardedVideoAd.offClose();
            rewardedVideoAd = null;
            // 小于 2.1.0 的基础库版本，res 是一个 undefined
            if (res && res.isEnded || res === undefined) {
                //视频正常播放结束
                close && close(1);
            }
            else {
                //视频播放中途退出
                close && close(0);
            }
        });
        //开始加载视频广告
        rewardedVideoAd.load().then(function () {
            rewardedVideoAd.show().catch(function (err) {
                _this.wxLog('视频广告播放失败', err);
                rewardedVideoAd.offLoad();
                rewardedVideoAd.offError();
                rewardedVideoAd.offClose();
                rewardedVideoAd = null;
            });
        });
    };
    WXSdk.prototype.showBanner = function (adUnitId, style) {
        var _this = this;
        if (!this.wx)
            return;
        this.removeBanner();
        //banner默认隐藏，调用show方法显示
        this._bannerAd = this.wx.createBannerAd({
            adUnitId: adUnitId,
            style: style
            /*{
                left:10,
                top:60,
                width:400
            }*/
        });
        this._bannerAd.onLoad(function () {
            _this.wxLog("广告拉取成功");
        });
        this._bannerAd.onError(function (err) {
            _this.wxLog("广告拉取失败", err);
        });
        this._bannerAd.onResize(function (res) {
            _this._bannerAd.style.top = _this.screenHeight - res.height;
            _this._bannerAd.style.width = _this.screenWidth + 50;
        });
        this._bannerAd.show().then(function () { _this.wxLog("显示广告"); });
        return this._bannerAd;
        //bannerAd.hide();//切换到无广告页面时调用hide()
    };
    WXSdk.prototype.showBottomBanner = function (adUnitId) {
        if (!this.wx)
            return;
        var style = {
            left: 0,
            top: this.screenHeight - 130,
            width: this.screenWidth + 50,
        };
        WXSdk_1.instance.showBanner(adUnitId, style);
        /*this._bannerAd.hide();

        this.scheduleOnce(()=>{

            this._bannerAd.show();
            this._bannerAd.style.top = this.screenHeight - this._bannerAd.style.realHeight;
        },0.6);*/
    };
    WXSdk.prototype.removeBanner = function () {
        if (this._bannerAd) {
            this._bannerAd.offLoad();
            this._bannerAd.offError();
            this._bannerAd.offResize();
            this._bannerAd.destroy(); //要先把旧的广告给销毁，不然会导致其监听的时间无法释放，影响性能
            this._bannerAd = null;
        }
    };
    WXSdk.prototype.update = function (dt) { };
    /**
     * 15ms的短震动
     */
    WXSdk.prototype.vibrateShort = function () {
        if (!this.wx) {
            return;
        }
        /*if(this.isVibrate)
        {
            return;
        }*/
        //this.isVibrate = true;
        this.wx.vibrateShort({});
        /*this.scheduleOnce(()=>
        {
            this.isVibrate = false;
        },0.035);*/
    };
    /**
     * 400ms的长震动
     */
    WXSdk.prototype.vibrateLong = function () {
        if (!this.wx) {
            return;
        }
        /*if(this.isVibrate)
        {
            return;
        }*/
        //this.isVibrate = true;
        this.wx.vibrateLong({});
        /*this.scheduleOnce(()=>
        {
            this.isVibrate = false;
        },0.5);*/
    };
    /**
     * 获取小程序二维码
     */
    WXSdk.prototype.createWXAQRCode = function () {
        this.wx.createWXAQRCode();
    };
    WXSdk.prototype.getWXACode = function () {
        this.wx.getWXACode({});
    };
    var WXSdk_1;
    WXSdk = WXSdk_1 = __decorate([
        ccclass
    ], WXSdk);
    return WXSdk;
}(cc.Component));
exports.default = WXSdk;

cc._RF.pop();