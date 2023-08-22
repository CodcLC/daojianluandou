
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tscript/wx/WXSdk.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx0c2NyaXB0XFx3eFxcV1hTZGsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUV4QyxvQkFBb0I7QUFDcEIsaUZBQWlGO0FBQ2pGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsMkZBQTJGO0FBQzNGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsMkZBQTJGO0FBQzNGLG1HQUFtRztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBSTFDOztHQUVHO0FBQ0gsSUFBWSxlQWlCWDtBQWpCRCxXQUFZLGVBQWU7SUFFdkI7O09BRUc7SUFDSCxxREFBUSxDQUFBO0lBRVI7O09BRUc7SUFDSCx5REFBVSxDQUFBO0lBRVY7O09BRUc7SUFDSCx1REFBUyxDQUFBO0FBRWIsQ0FBQyxFQWpCVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQWlCMUI7QUFJRDtJQUFtQyx5QkFBWTtJQUQvQztRQUFBLHFFQTh0Q0M7UUEvc0NHLDBEQUEwRDtRQUVuRCxTQUFHLEdBQVUsK0JBQStCLENBQUM7UUFFN0Msa0JBQVksR0FBVSwyQ0FBMkMsQ0FBQztRQUNsRSxtQkFBYSxHQUFVLGdDQUFnQyxDQUFDO1FBR3ZELFdBQUssR0FBVSxvQkFBb0IsQ0FBQyxDQUFDLFlBQVk7UUFDakQsWUFBTSxHQUFVLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQjtRQUNwQyxnQkFBVSxHQUFVLG9CQUFvQixDQUFDLENBQUMsd0JBQXdCO1FBa0JsRSxzQkFBZ0IsR0FBb0IsZUFBZSxDQUFDLElBQUksQ0FBQztRQUV6RCxnQkFBVSxHQUFPLEVBQUUsQ0FBQztRQUVwQixlQUFTLEdBQVcsS0FBSyxDQUFDO1FBRTNCLGFBQU8sR0FBVyxLQUFLLENBQUM7UUFFdkIsZUFBUyxHQUFVLENBQUMsQ0FBQztRQUU3Qjs7O1dBR0c7UUFFSyxXQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FB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Q0FBQztTQUN6QjtJQUNMLENBQUM7SUFHRCxzQkFBTSxHQUFOLFVBQVEsRUFBRSxJQUFHLENBQUM7SUFFZDs7T0FFRztJQUNJLDRCQUFZLEdBQW5CO1FBRUksSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQ1g7WUFDSSxPQUFPO1NBQ1Y7UUFFRDs7O1dBR0c7UUFFSCx3QkFBd0I7UUFFeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFekI7OzttQkFHVztJQUVmLENBQUM7SUFFRDs7T0FFRztJQUNJLDJCQUFXLEdBQWxCO1FBRUksSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQ1g7WUFDSSxPQUFPO1NBQ1Y7UUFFRDs7O1dBR0c7UUFHSCx3QkFBd0I7UUFFeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFeEI7OztpQkFHUztJQUNiLENBQUM7SUFFRDs7T0FFRztJQUNJLCtCQUFlLEdBQXRCO1FBRUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sMEJBQVUsR0FBakI7UUFFSSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzQixDQUFDOztJQTV0Q2dCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0E2dEN6QjtJQUFELFlBQUM7Q0E3dENELEFBNnRDQyxDQTd0Q2tDLEVBQUUsQ0FBQyxTQUFTLEdBNnRDOUM7a0JBN3RDb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTeXN0ZW1Ub29scyBmcm9tIFwiLi9TeXN0ZW1Ub29sc1wiO1xyXG5cclxuLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmRlY2xhcmUgdmFyIHd4OmFueTtcclxuXHJcbi8qKlxyXG4gKiDnlKjmiLfmjojmnYPnirbmgIFcclxuICovXHJcbmV4cG9ydCBlbnVtIEF1dGhvcml6ZVN0YXR1c1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIOacqueUs+ivt+aOiOadg1xyXG4gICAgICovXHJcbiAgICBub25lID0gMCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaLkue7neaOiOadg1xyXG4gICAgICovXHJcbiAgICByZWZ1c2UgPSAxLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ZCM5oSP5o6I5p2DXHJcbiAgICAgKi9cclxuICAgIGFncmVlID0gMlxyXG5cclxufVxyXG5cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdYU2RrIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogV1hTZGs7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBXWFNkayB7XHJcbiAgICAgICAgaWYoIXRoaXMuX2luc3RhbmNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgV1hTZGsoKTtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UuaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gV1hTZGsuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3eDphbnk7XHJcblxyXG4gICAgLy9wdWJsaWMgdXJsOnN0cmluZyA9IFwiaHR0cDovLzEyNy4wLjAuMTo4MDgwL2tuaWZlL2xvZ2luXCI7XHJcblxyXG4gICAgcHVibGljIHVybDpzdHJpbmcgPSBcImh0dHBzOi8vMTI3LjAuMC4xL2tuaWZlL2xvZ2luXCI7XHJcblxyXG4gICAgcHVibGljIHdvcmxkUmFua1VybDpzdHJpbmcgPSBcImh0dHBzOi8vMTI3LjAuMC4xL2tuaWZlL3VwZGF0ZS1iZXN0LXNjb3JlXCI7XHJcbiAgICBwdWJsaWMgd29ybGRSYW5rVXJsMjpzdHJpbmcgPSBcImh0dHBzOi8vMTI3LjAuMC4xL2tuaWZlL3dvcmxkL1wiO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGFwcGlkOnN0cmluZyA9IFwid3g0NzJlMTY4MDJmNjYzMjlhXCI7IC8vIOWwj+eoi+W6jyBhcHBJZFxyXG4gICAgcHJpdmF0ZSBzZWNyZXQ6c3RyaW5nID0gXCJcIjsgLy8g5bCP56iL5bqPIGFwcFNlY3JldFxyXG4gICAgcHJpdmF0ZSBncmFudF90eXBlOnN0cmluZyA9IFwiYXV0aG9yaXphdGlvbl9jb2RlXCI7IC8v5aGr5YaZ5Li6IGF1dGhvcml6YXRpb25fY29kZVxyXG4gICAgLy9wcml2YXRlIGdyYW50X3R5cGU6c3RyaW5nID0gXCJjbGllbnRfY3JlZGVudGlhbFwiXHJcbiAgICAvLzBjOGY0NmIyNTc3NjYyNTRjMzFkY2NmNWUzNDU5NDVhXHJcblxyXG4gICAgcHJpdmF0ZSBfb3BlbkRhdGFDb250ZXh0OmFueTtcclxuXHJcbiAgICBwcml2YXRlIF9zaGFyZWRDYW52YXM6YW55O1xyXG5cclxuICAgIHByaXZhdGUgX3N5c3RlbUluZm86IGFueTtcclxuXHJcbiAgICBwcml2YXRlIF9iYW5uZXJBZDphbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfdXNlckRhdGE6YW55O1xyXG5cclxuICAgIHByaXZhdGUgX3VzZXJJbmZvOmFueTtcclxuXHJcbiAgICBwcml2YXRlIF9hY2Nlc3NUb2tlbkRhdGE6YW55O1xyXG5cclxuICAgIHByaXZhdGUgX2F1dGhvcml6ZVN0YXR1czogQXV0aG9yaXplU3RhdHVzID0gQXV0aG9yaXplU3RhdHVzLm5vbmU7XHJcblxyXG4gICAgcHJpdmF0ZSBfdG9rZW5EYXRhOmFueSA9IFwiXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBpc1ZpYnJhdGU6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBpc0xvZ2luOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHNoYXJlVGltZTpudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qcHJpdmF0ZSB3eExvZyhtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSxvcHRpb25hbFBhcmFtcyk7XHJcbiAgICB9Ki9cclxuXHJcbiAgICBwcml2YXRlIHd4TG9nID0gY29uc29sZS5sb2c7XHJcbiAgICAvL3ByaXZhdGUgd3hMb2cgPSBmdW5jdGlvbiguLi5hcmdzKXt9O1xyXG5cclxuICAgIHByaXZhdGUgX3NoYXJlVGlja2V0OnN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0KClcclxuICAgIHtcclxuICAgICAgICAvL3RoaXMud3ggPSB3aW5kb3dbXCJ3eFwiXSB8fCB7fTtcclxuICAgICAgICAvL3RoaXMud3ggPSB3eCB8fCB7fTtcclxuICAgICAgICB0aGlzLnd4ID0gd2luZG93W1wid3hcIl07XHJcbiAgICAgICAgLy90aGlzLnd4TG9nKFwid3ggPSBcIix0aGlzLnd4KTtcclxuXHJcbiAgICAgICAgdGhpcy5zeXN0ZW1JbmZvO1xyXG5cclxuICAgICAgICBpZih0aGlzLnd4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy53eC5vblNob3coKHJlcyk9PntcclxuXHJcbiAgICAgICAgICAgICAgICBpZihyZXMucXVlcnkudHlwZSA9PSBcInNoYXJlVG9BbnlPbmVcIiAmJiByZXMuc2NlbmUgPT0gMTA0NClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaGFyZVRpY2tldCA9IHJlcy5zaGFyZVRpY2tldDtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KFwic2hhcmVUaWNrZXRVcGRhdGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NoYXJlVGlja2V0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMud3hMb2coXCJvblNob3cg5pS25Yiw5raI5oGvXCIscmVzLFwidGhpcy5fc2hhcmVUaWNrZXRcIix0aGlzLl9zaGFyZVRpY2tldCk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLnd4Lm9uSGlkZSgocmVzKT0+e1xyXG5cclxuICAgICAgICAgICAgICAgIC8vdGhpcy53eExvZyhcIm9uSGlkZSDmlLbliLDmtojmga9cIixyZXMpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbGF1bmNoT3B0aW9uID0gdGhpcy53eC5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xyXG5cclxuICAgICAgICAgICAgaWYobGF1bmNoT3B0aW9uLnNoYXJlVGlja2V0ICYmIGxhdW5jaE9wdGlvbi5zaGFyZVRpY2tldCAhPSBcIjxVbmRlZmluZWQ+XCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NoYXJlVGlja2V0ID0gbGF1bmNoT3B0aW9uLnNoYXJlVGlja2V0O1xyXG4gICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaGFyZVRpY2tldCA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vc2hhcmVUaWNrIFwiPFVuZGVmaW5lZD5cIlxyXG4gICAgICAgICAgICAvL3RoaXMud3hMb2coXCJsYXVuY2hPcHRpb24gPSBcIixsYXVuY2hPcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy53eC5zaG93U2hhcmVNZW51KHtcclxuICAgICAgICAgICAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6KCk9Pnt9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDooKT0+e30sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy53eC5vblNoYXJlQXBwTWVzc2FnZSgoKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfliIDliZHkubHmlpfoi7Hpm4QnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6ICdodHRwczovLzEyNy4wLjAuMS9pbWFnZS/mmJ/nkIPpo57liIAuanBnJywgLy8g5Zu+54mHIFVSTFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IFwidHlwZT1zaGFyZVRvQW55T25lXCIsXHJcbiAgICAgICAgICAgIH0pKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1dYUGxhdGZvcm0oKTpib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud3ggIT0gdW5kZWZpbmVkICYmIHRoaXMud3ggIT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG9wZW5EYXRhQ29udGV4dCgpIDogYW55XHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMuX29wZW5EYXRhQ29udGV4dClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wZW5EYXRhQ29udGV4dCA9IHRoaXMud3guZ2V0T3BlbkRhdGFDb250ZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcGVuRGF0YUNvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzaGFyZWRDYW52YXMoKSA6IGFueVxyXG4gICAge1xyXG4gICAgICAgIGlmKCF0aGlzLl9zaGFyZWRDYW52YXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFyZWRDYW52YXMgPSB0aGlzLm9wZW5EYXRhQ29udGV4dC5jYW52YXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2hhcmVkQ2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgcHVibGljIGdldCBzeXN0ZW1JbmZvKCk6IGFueSB7XHJcblxyXG4gICAgICAgIGlmKHRoaXMud3ggJiYgIXRoaXMuX3N5c3RlbUluZm8pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9zeXN0ZW1JbmZvID0gdGhpcy53eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICAgICAgICB0aGlzLnd4TG9nKFwi5b6u5L+h57O757uf5L+h5oGvXCIsdGhpcy5fc3lzdGVtSW5mbyk7XHJcbiAgICAgICAgICAgIHRoaXMud3hMb2coXHJcbiAgICAgICAgICAgICAgICBcIlxcbuaJi+acuuWei+WPt1wiLHRoaXMuX3N5c3RlbUluZm8ubW9kZWwsXHJcbiAgICAgICAgICAgICAgICBcIlxcbuezu+e7n1wiLHRoaXMuX3N5c3RlbUluZm8uc3lzdGVtLFxyXG4gICAgICAgICAgICAgICAgXCJcXG7lvq7kv6HniYjmnKxcIix0aGlzLl9zeXN0ZW1JbmZvLnZlcnNpb24sXHJcbiAgICAgICAgICAgICAgICBcIlxcbuivreiogFwiLHRoaXMuX3N5c3RlbUluZm8ubGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgICAgICBcIlxcbuaJi+acuuWTgeeJjFwiLHRoaXMuX3N5c3RlbUluZm8uYnJhbmQsXHJcbiAgICAgICAgICAgICAgICBcIlxcbuWuouaIt+err+W5s+WPsFwiLHRoaXMuX3N5c3RlbUluZm8ucGxhdGZvcm0sXHJcbiAgICAgICAgICAgICAgICBcIlxcbuWuouaIt+err+WfuuehgOW6k+eJiOacrFwiLHRoaXMuX3N5c3RlbUluZm8uU0RLVmVyc2lvblxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zeXN0ZW1JbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b6u5L+h54mI5pys5Y+3XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgdmVyc2lvbigpOnN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuc3lzdGVtSW5mbylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN5c3RlbUluZm8udmVyc2lvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b6u5L+h5Z+656GA5bqT54mI5pysXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgU0RLVmVyc2lvbigpOnN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuc3lzdGVtSW5mbylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN5c3RlbUluZm8uU0RLVmVyc2lvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiYvmnLrns7vnu59cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzeXN0ZW0oKTpzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLnN5c3RlbUluZm8pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1JbmZvLnN5c3RlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiYvmnLrlnovlj7dcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBtb2RlbCgpOnN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuc3lzdGVtSW5mbylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN5c3RlbUluZm8ubW9kZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnN5c3RlbUluZm8ubW9kZWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiYvmnLrlk4HniYxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBicmFuZCgpOnN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuc3lzdGVtSW5mbylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN5c3RlbUluZm8uYnJhbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5a6i5oi356uv5bmz5Y+wXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcGxhdGZvcm0oKTpzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLnN5c3RlbUluZm8pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1JbmZvLnBsYXRmb3JtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHVzZXJEYXRhKCk6YW55XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdXNlckluZm8oKTphbnlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlckluZm87XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvq7kv6HllK/kuIBpZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG9wZW5pZCgpOnN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuX3Rva2VuRGF0YSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90b2tlbkRhdGEub3BlbmlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0b2tlbigpOnN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuX3Rva2VuRGF0YSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90b2tlbkRhdGEuc2tleTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55So5oi35Zyo5pWw5o2u5bqT6YeM55qEaWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCB1aWQoKTpudW1iZXJcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLl90b2tlbkRhdGEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW5EYXRhLnVpZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55So5oi35piv5ZCm5piv5paw55So5oi3XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaXNOZXcoKTpib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5fdG9rZW5EYXRhKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuRGF0YS5pc05ldztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS8muivneWvhuWMmSBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzZXNzaW9uX2tleSgpOnN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuX2FjY2Vzc1Rva2VuRGF0YSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hY2Nlc3NUb2tlbkRhdGEuc2Vzc2lvbl9rZXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYteensFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG5pY2tuYW1lKCk6c3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5fdXNlckluZm8pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXNlckluZm8ubmlja05hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gXCLlsI/po57liIBcIjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaOiOadg+eKtuaAgVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYXV0aG9yaXplU3RhdHVzKCk6IEF1dGhvcml6ZVN0YXR1cyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhvcml6ZVN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNoYXJlVGlja2V0KCk6c3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NoYXJlVGlja2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc2NyZWVuV2lkdGgoKTpudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1JbmZvLnNjcmVlbldpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc2NyZWVuSGVpZ2h0KCk6bnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtSW5mby5zY3JlZW5IZWlnaHQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gY29tcGxldGUgXHJcbiAgICAgKiBAcGFyYW0gc2l6ZSDlsLrlr7jmnIkgMOOAgTQ244CBNjTjgIE5NuOAgTEzMiDlj6/pgIkgIDDku6PooaggNjQwICogNjQwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRVc2VySWNvbihjb21wbGV0ZTpGdW5jdGlvbixzaXplOm51bWJlciA9IDEzMilcclxuICAgIHtcclxuICAgICAgICBpZighdGhpcy53eClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlKG51bGwpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhdmF0YXJVcmw6c3RyaW5nID0gdGhpcy5fdXNlckluZm8uYXZhdGFyVXJsO1xyXG4gICAgICAgIHZhciBpbmRleCA9IGF2YXRhclVybC5sYXN0SW5kZXhPZihcIi9cIik7XHJcbiAgICAgICAgYXZhdGFyVXJsID0gYXZhdGFyVXJsLnN1YnN0cmluZygwLGluZGV4ICsgMSkgKyBzaXplICsgXCI/YWFhPWFhLmpwZ1wiO1xyXG5cclxuICAgICAgICBjYy5sb2FkZXIubG9hZChhdmF0YXJVcmwsKGVycix0ZXh0dXJlKT0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb21wbGV0ZSh0ZXh0dXJlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDnlLPor7fnlKjmiLfmjojmnYNcclxuICAgICAqIEBwYXJhbSBzdWNjZXNzIFxyXG4gICAgICogQHBhcmFtIGZhaWwgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhcHBseVVzZXJBdXRoKHN1Y2Nlc3M6RnVuY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMud3gpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9hdXRob3JpemVTdGF0dXMgPSBBdXRob3JpemVTdGF0dXMucmVmdXNlO1xyXG4gICAgICAgICAgICBzdWNjZXNzKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy53eC5nZXRTZXR0aW5nKHtcclxuXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6KHJlcyk9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZighcmVzLmF1dGhTZXR0aW5nW1wic2NvcGUudXNlckluZm9cIl0pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLyp0aGlzLnd4LmF1dGhvcml6ZSh7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZTpcInNjb3BlLnVzZXJJbmZvXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOihyZXMpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnd4TG9nKFwi55So5oi35ZCM5oSP6I635Y+W5Liq5Lq65L+h5oGvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXV0aG9yaXplU3RhdHVzID0gQXV0aG9yaXplU3RhdHVzLmFncmVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbDoocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53eExvZyhcIueUqOaIt+S4jeWQjOaEj+iOt+WPluS4quS6uuS/oeaBr1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5fYXV0aG9yaXplU3RhdHVzID0gQXV0aG9yaXplU3RhdHVzLnJlZnVzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3VjY2VzcyhmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGY6V1hTZGsgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNob3dNb2RhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgwqAgwqAgwqAgwqAgwqAgdGl0bGU6ICforablkYonLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICDCoCDCoCDCoCDCoCDCoCBjb250ZW50OiAn5oKo54K55Ye75LqG5ouS57ud5o6I5p2DLOa4uOaIj+WwhuaXoOazleato+W4uOaYvuekuuS4quS6uuS/oeaBryzngrnlh7vnoa7lrprph43mlrDojrflj5bmjojmnYPjgIInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICDCoCDCoCDCoCDCoCDCoCBzdWNjZXNzOmZ1bmN0aW9uKHJlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgwqAgwqAgwqAgwqAgwqAgwqAgaWYgKHJlcy5jb25maXJtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMKgIMKgIMKgIMKgIMKgIMKgIMKgICAgd3gub3BlblNldHRpbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgwqAgwqAgwqAgwqAgwqAgwqAgwqAgwqAgc3VjY2VzczogKHJlcykgPT4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDCoCDCoCDCoCDCoCDCoCDCoCDCoCDCoCDCoCBpZiAocmVzLmF1dGhTZXR0aW5nW1wic2NvcGUudXNlckluZm9cIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAgIC8vLy/lpoLmnpznlKjmiLfph43mlrDlkIzmhI/kuobmjojmnYPnmbvlvZVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMKgIMKgIMKgIMKgIMKgIMKgIMKgIMKgIMKgIMKgIC8vY29uc29sZS5sb2coXCLooqvov6vlkIzmhI/mjojmnYNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2F1dGhvcml6ZVN0YXR1cyA9IEF1dGhvcml6ZVN0YXR1cy5hZ3JlZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMKgIMKgIMKgIMKgIMKgIMKgIMKgIMKgIMKgICAgfWVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLnlKjmiLfov5jmmK/mi5Lnu51cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgwqAgwqAgwqAgwqAgwqAgwqAgwqAgwqAgfSwgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbDpmdW5jdGlvbihyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIuaJk+W8gOmdouadv+Wksei0pVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDCoCDCoCDCoCDCoCDCoCDCoCDCoCDCoCAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMKgIMKgIMKgIMKgIMKgIMKgIMKgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7Ki9cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFVzZXJBdXRob3JpemVCdG4oc3VjY2Vzcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hdXRob3JpemVTdGF0dXMgPSBBdXRob3JpemVTdGF0dXMuYWdyZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6KHJlcyk9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hdXRob3JpemVTdGF0dXMgPSBBdXRob3JpemVTdGF0dXMucmVmdXNlO1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKnB1YmxpYyBvcGVuU2V0dGluZyhzdWNjZXNzOkZ1bmN0aW9uLGZhaWw6RnVuY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMud3gpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdWNjZXNzKHt9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy53eC5nZXRTZXR0aW5nKHtcclxuICAgICAgICAgICAgc3VjY2VzczoocmVzKT0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud3hMb2coXCJvcGVuIHNldHRpbmcgc3VjIGF1dGhTZXR0aW5nXCIscmVzLmF1dGhTZXR0aW5nKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDoocmVzKT0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud3hMb2coXCJvcGVuIHNldHRpbmcgZmFpbCBcIixyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9Ki9cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuaMiemSru+8jOaJk+W8gOeUqOaIt+adg+mZkOeUs+ivt+mhtVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VXNlckF1dGhvcml6ZUJ0bihzdWNjZXNzOkZ1bmN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3lzdGVtSW5mby5zY3JlZW5XaWR0aFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICB2YXIgYnV0dG9uID0gd3guY3JlYXRlVXNlckluZm9CdXR0b24oe1xyXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIHRleHQ6ICcnLC8vJ+iOt+WPlueUqOaIt+S/oeaBrycsXHJcbiAgICAgICAgICAgIC8vaW1hZ2U6ICdyZXMvcmF3LWFzc2V0cy83Yi83YmIyN2I0OS03Y2ZjLTQ5NWQtYWEzYy0yN2Y1YzQyMzQ4MTYucG5nJyxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICB0b3A6ICAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuc3lzdGVtSW5mby5zY3JlZW5XaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5zeXN0ZW1JbmZvLnNjcmVlbkhlaWdodCxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMDAwJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYnV0dG9uLm9uVGFwKChyZXMpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHJlcy5lcnJNc2cgPT0gXCJnZXRVc2VySW5mbzpva1wiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiOt+W+l+aOiOadgyA/XCIscmVzKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzcygpO1xyXG4gICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW+ruS/oeeZu+W9lVxyXG4gICAgICogQHBhcmFtIHN1Y2Nlc3MgXHJcbiAgICAgKiBAcGFyYW0gZmFpbCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvZ2luKGFwcGlkOnN0cmluZyxzZWNyZXQ6c3RyaW5nLHN1Y2Nlc3M6RnVuY3Rpb24sZmFpbDpGdW5jdGlvbilcclxuICAgIHtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMud3gpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdWNjZXNzKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXBwaWQgPSBhcHBpZDtcclxuICAgICAgICB0aGlzLnNlY3JldCA9IHNlY3JldDtcclxuXHJcbiAgICAgICAgaWYodGhpcy5pc0xvZ2luKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VjY2VzcygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdmFyIHN1Y2Nlc3NDYWxsYmFjayA9ICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2dpbiA9IHRydWU7XHJcbiAgICAgICAgICAgIFdYU2RrLmluc3RhbmNlLnd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgZmFpbENhbGxiYWNrID0gKCk9PntcclxuICAgICAgICAgICAgV1hTZGsuaW5zdGFuY2Uud3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgZmFpbCgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuYXBwbHlVc2VyQXV0aCgoaXNBdXRob3JpemUpPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKCk9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuY2hlY2tTZXNzaW9uKHN1Y2Nlc3MsZmFpbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luV1goc3VjY2Vzc0NhbGxiYWNrLGZhaWxDYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH0sKCk9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmYWlsQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgbG9naW5XWChzdWNjZXNzOkZ1bmN0aW9uLGZhaWw6RnVuY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy53eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn55m75b2V5LitLi4uJyxcclxuICAgICAgICAgICAgbWFzazp0cnVlLFxyXG4gICAgICAgICAgICB3aWR0aDoyNTAsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMud3gubG9naW4oe1xyXG4gICAgICAgICAgICB0aW1lb3V0OjMwMDAwLC8v55m76ZmG6LaF5pe25pe26Ze0IOWNleS9jW1zXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6KHJlcyk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMud3hMb2coXCJsb2dpblwiLHJlcyk7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMuY29kZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY29kZTpcIityZXMuY29kZSlcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuZ2V0QWNjZXNzVG9rZW4oc3VjY2VzcyxmYWlsLHJlcy5jb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuZ2V0QWNjZXNzVG9rZW4yKHN1Y2Nlc3MsZmFpbCxyZXMuY29kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy53eExvZyhcIueZu+W9leWksei0pVwiLHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsIDogKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIC8vdGhpcy53eExvZyhcIueZu+W9leWksei0pVwiLHJlcyk7XHJcbiAgICAgICAgICAgICAgICBmYWlsKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlKCl7XHJcbiAgICAgICAgICAgICAgICAvL+iwg+eUqOe7k+adn+aXtuWbnuaOie+8jOS4jeeuoeaIkOWKn+i/mOaYr+Wksei0pVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmo4Dmn6XnmbvlvZXnirbmgIHmmK/lkKbov4fmnJ9cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNoZWNrU2Vzc2lvbihzdWNjZXNzOkZ1bmN0aW9uLGZhaWw6RnVuY3Rpb24pOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnd4LmNoZWNrU2Vzc2lvbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6KCk9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnd4TG9nKFwic2Vzc2lvbl9rZXkg5pyq6L+H5pyf77yM5bm25LiU5Zyo5pys55Sf5ZG95ZGo5pyf5LiA55u05pyJ5pWIXCIpO1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzcygpO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmdldFVzZXJJbmZvKHN1Y2Nlc3MsZmFpbCk7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMubG9naW5XWChzdWNjZXNzLGZhaWwpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOigpPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53eExvZyhcIuW3sue7j+WkseaViO+8jOmcgOimgemHjeaWsOaJp+ihjOeZu+W9lea1geeoi1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW5XWChzdWNjZXNzLGZhaWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnmbvlhaXlh63or4HmoKHpqoxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRBY2Nlc3NUb2tlbihzdWNjZXNzOkZ1bmN0aW9uLGZhaWw6RnVuY3Rpb24sY29kZTpzdHJpbmcpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB2YXIgb2JqOk9iamVjdCA9IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29kZTogY29kZSxcclxuICAgICAgICAgICAgLy8gXCJlbmNyeXB0ZWRcIjogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgZnJvbUFwcElkOiB0aGlzLmFwcGlkLFxyXG4gICAgICAgICAgICAvLyBcImZyb21UeXBlXCI6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgIC8vIFwiZnJvbVVzZXJJZFwiOiAwLFxyXG4gICAgICAgICAgICBpbWc6IHRoaXMuX3VzZXJJbmZvLmF2YXRhclVybCxcclxuICAgICAgICAgICAgLy8gXCJpdlwiOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAvLyBcIm1vZGVsXCI6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmlja25hbWUsXHJcbiAgICAgICAgICAgIC8vIFwicGZcIjogXCJzdHJpbmdcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0UG9zdCh0aGlzLnVybCxvYmosXHJcbiAgICAgICAgICAgIChyZXM6YW55KT0+e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnd4TG9nKFwi5pS25Yiw5pyN5Yqh56uv6L+U5Zue5pWw5o2uXCIscmVzLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3Rva2VuRGF0YSA9IHJlcy5kYXRhLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGVycmNvZGU6bnVtYmVyICA9IHJlcy5zdGF0dXNDb2RlOyAvL+mUmeivr+eggVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlcnJjb2RlID09IC0xKSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoXCI+Pj7ns7vnu5/nuYHlv5nvvIzmraTml7bor7flvIDlj5HogIXnqI3lgJnlho3or5VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbCgpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYgKGVycmNvZGUgPT0gMCkgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cIj4+Puivt+axguaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuZ2V0VXNlckluZm8oc3VjY2VzcyxmYWlsKTtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZiAoZXJyY29kZSA9PSAyMDApIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXCI+Pj7or7fmsYLmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLmdldFVzZXJJbmZvKHN1Y2Nlc3MsZmFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZXJyY29kZSA9PSA0MDAyOSkgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cIj4+Pj5jb2Rl5peg5pWIXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5nZXRVc2VySW5mbyhzdWNjZXNzLGZhaWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKT0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCI+Pj4+Pj4+6I635Y+W55m75b2V5Yet6K+B5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgZmFpbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAgLyoqXHJcbiAgICAgKiDnmbvlhaXlh63or4HmoKHpqoxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRBY2Nlc3NUb2tlbjIoc3VjY2VzczpGdW5jdGlvbixmYWlsOkZ1bmN0aW9uLGNvZGU6c3RyaW5nKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHVybCA9IFwiaHR0cHM6Ly9hcGkud2VpeGluLnFxLmNvbS9zbnMvanNjb2RlMnNlc3Npb24/YXBwaWQ9ezB9JnNlY3JldD17MX0manNfY29kZT17Mn0mZ3JhbnRfdHlwZT17M31cIjsgLy/ov5nkuKror7fmsYLkvLzkuY7lj6rog73lnKjmnI3liqHlmajnq6/lrozmiJDvvIzliY3nq6/lj6rog73kuI3moKHpqozlkIjms5Xln5/lkI3miY3lj6/ku6Xkvb/nlKhcclxuICAgICAgICB1cmwgPSBTeXN0ZW1Ub29scy5mb3JtYXQodXJsLHRoaXMuYXBwaWQsdGhpcy5zZWNyZXQsY29kZSx0aGlzLmdyYW50X3R5cGUpOyAvL+aLvOaOpee9keWdgFxyXG5cclxuICAgICAgICAvL2h0dHBzOi8vYXBpLndlaXhpbi5xcS5jb20vc25zL2pzY29kZTJzZXNzaW9uP2FwcGlkPXd4NDcyZTE2ODAyZjY2MzI5YWpzX2NvZGU9MDMzMjlZYWQySnVkaUYwWTlWYmQyUWg2YmQyMjlZYTMmZ3JhbnRfdHlwZT1hdXRob3JpemF0aW9uX2NvZGVcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0R2V0KHVybCxcclxuICAgICAgICAgICAgKHJlczphbnkpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSAgICAgICAgICAgID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3BlbklkICAgICAgICAgPSBkYXRhLm9wZW5pZDsgLy/nlKjmiLfllK/kuIDmoIfor4ZcclxuICAgICAgICAgICAgICAgIGxldCBzZXNzaW9uX2tleSAgICA9IGRhdGEuc2Vzc2lvbl9rZXk7IC8v5Zue6K+d5a+G5YyZXHJcbiAgICAgICAgICAgICAgICAvL2xldCBlcnJjb2RlOm51bWJlciAgPSBkYXRhLmVycmNvZGU7IC8v6ZSZ6K+v56CBXHJcbiAgICAgICAgICAgICAgICBsZXQgZXJyY29kZTpudW1iZXIgID0gcmVzLnN0YXR1c0NvZGU7IC8v6ZSZ6K+v56CBXHJcbiAgICAgICAgICAgICAgICBsZXQgZXJyTXNnOnN0cmluZyAgID0gcmVzLmVyck1zZzsgLy/plJnor6/kv6Hmga9cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkRhdGEgPSByZXMuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnd4TG9nKFwib3BlbklkXCIsb3BlbklkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud3hMb2coXCJzZXNzaW9uX2tleVwiLHNlc3Npb25fa2V5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMud3hMb2coXCJhY2Nlc3N0b2tlbiByZXMgXCIscmVzLGVycmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycmNvZGUgPT0gLTEpIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCI+Pj7ns7vnu5/nuYHlv5nvvIzmraTml7bor7flvIDlj5HogIXnqI3lgJnlho3or5VcIik7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZiAoZXJyY29kZSA9PSAwKSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1wiPj4+6K+35rGC5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VXNlckluZm8oc3VjY2VzcyxmYWlsKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmIChlcnJjb2RlID09IDIwMCkgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cIj4+Puivt+axguaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFVzZXJJbmZvKHN1Y2Nlc3MsZmFpbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlcnJjb2RlID09IDQwMDI5KSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1wiPj4+PmNvZGXml6DmlYhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mbyhzdWNjZXNzLGZhaWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKT0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCI+Pj4+Pj4+6I635Y+W55m75b2V5Yet6K+B5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgZmFpbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlueUqOaIt+S/oeaBr1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldFVzZXJJbmZvKHN1Y2Nlc3M6RnVuY3Rpb24sZmFpbDpGdW5jdGlvbik6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBkYXRhOmFueSA9IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOmZhbHNlLFxyXG4gICAgICAgICAgICBsYW5nOlwiemhfQ05cIixcclxuICAgICAgICAgICAgc3VjY2VzczoocmVzOmFueSk9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91c2VyRGF0YSA9IHJlcztcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53eExvZyhcIuiOt+WPlueUqOaIt+S/oeaBr+aIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDoocmVzOmFueSk9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnd4TG9nKFwi6I635Y+W55So5oi35L+h5oGv5aSx6LSlXCIscmVzKTtcclxuICAgICAgICAgICAgICAgIGZhaWwoKTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5jaGVja1Nlc3Npb24oc3VjY2VzcyxmYWlsKTsgLy/ojrflj5bnlKjmiLfkv6Hmga/lpLHotKXkuYvlkI4g57un57ut5Y676I635Y+WXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMud3hMb2coXCLojrflj5bnlKjmiLfkv6Hmga/lpLHotKU6XCIsdGhpcy50ZW1wQ29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgd3guZ2V0VXNlckluZm8oZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvq7kv6Hor7fmsYJcclxuICAgICAqIEBwYXJhbSB1cmwgIOivt+axguWcsOWdgFxyXG4gICAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsQmFjayDmiJDlip/lm57osINcclxuICAgICAqIEBwYXJhbSBmYWlsQmFjayAg5aSx6LSl5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVxdWVzdEdldCh1cmw6c3RyaW5nLHN1Y2Nlc3M6KHJlczphbnkpPT52b2lkLGZhaWw6KCk9PnZvaWQpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgcmVxdWVzdERhdGE6YW55ID0gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6dXJsLFxyXG4gICAgICAgICAgICBtZXRob2Q6XCJHRVRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6XCJqc29uXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6KHJlczphbnkpPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyAmJiBzdWNjZXNzKHJlcyk7ICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6KCk9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmYWlsICYmIGZhaWwoKTsgICBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCI+Pj4+Pj7or7fmsYJ1cmzlpLHotKXvvJpcIityZXF1ZXN0RGF0YS51cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy53eC5yZXF1ZXN0KHJlcXVlc3REYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlcXVlc3RQb3N0KHVybDpzdHJpbmcsZGF0YTp7fSxzdWNjZXNzOihyZXM6YW55KT0+dm9pZCxmYWlsOigpPT52b2lkKVxyXG4gICAge1xyXG4gICAgICAgIGxldCByZXF1ZXN0RGF0YTphbnkgPSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDp1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDpcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YTpkYXRhLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTpcImpzb25cIixcclxuICAgICAgICAgICAgc3VjY2VzczoocmVzOmFueSk9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzICYmIHN1Y2Nlc3MocmVzKTsgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDooKT0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZhaWwgJiYgZmFpbCgpOyAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIj4+Pj4+Puivt+axgnVybOWksei0pe+8mlwiK3JlcXVlc3REYXRhLnVybCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnd4LnJlcXVlc3QocmVxdWVzdERhdGEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rueUqOaIt+aOkuWQjeaVsOaNruWtmOWCqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0VXNlclJhbmtTdG9yYWdlKGtleTpzdHJpbmcsdmFsdWU6bnVtYmVyfHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBpZighdGhpcy53eClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIga3ZkYXRhczpBcnJheTxPYmplY3Q+ID0gW1xyXG4gICAgICAgICAgICB7a2V5OmtleSx2YWx1ZTp2YWx1ZS50b1N0cmluZygpfSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICB0aGlzLnd4LnNldFVzZXJDbG91ZFN0b3JhZ2UoXHJcbiAgICAgICAgICAgIHtLVkRhdGFMaXN0Omt2ZGF0YXMsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2V0VXNlckNsb3VkU3RvcmFnZVwiLHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdW5sb2FkVXNlclNjb3JlKHNjb3JlOm51bWJlcixzdWNjZXNzOkZ1bmN0aW9uLGZhaWw6RnVuY3Rpb24pXHJcbiAgICB7XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLnd4KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLndvcmxkUmFua1VybCArIGA/aWQ9JHt0aGlzLnVpZH0mc2NvcmU9JHtzY29yZX1gOyAvL+i/meS4quivt+axguS8vOS5juWPquiDveWcqOacjeWKoeWZqOerr+WujOaIkO+8jOWJjeerr+WPquiDveS4jeagoemqjOWQiOazleWfn+WQjeaJjeWPr+S7peS9v+eUqFxyXG5cclxuICAgICAgICB0aGlzLnJlcXVlc3RHZXQodXJsLFxyXG4gICAgICAgICAgICAocmVzOmFueSk9PntcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy53eExvZyhcIuS4iuS8oOeUqOaIt+aVsOaNrui/lOWbnlwiLHJlcy5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAwKSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKT0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLkuIrkvKDnlKjmiLfkv6Hmga/lpLHotKVcIik7XHJcbiAgICAgICAgICAgICAgICBmYWlsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRVc2VyU2NvcmVXb3JsZFJhbmsoc3VjY2VzczpGdW5jdGlvbixmYWlsOkZ1bmN0aW9uKVxyXG4gICAge1xyXG5cclxuICAgICAgICBpZighdGhpcy53eClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgdXJsID0gdGhpcy53b3JsZFJhbmtVcmwyICsgdGhpcy51aWQ7IC8v6L+Z5Liq6K+35rGC5Ly85LmO5Y+q6IO95Zyo5pyN5Yqh5Zmo56uv5a6M5oiQ77yM5YmN56uv5Y+q6IO95LiN5qCh6aqM5ZCI5rOV5Z+f5ZCN5omN5Y+v5Lul5L2/55SoXHJcblxyXG4gICAgICAgIHRoaXMucmVxdWVzdEdldCh1cmwsXHJcbiAgICAgICAgICAgIChyZXM6YW55KT0+e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnd4TG9nKFwi55So5oi35LiW55WM5o6S6KGM5qac6L+U5Zue6L+U5ZueXCIscmVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAwKSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZhaWwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCk9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5LiK5Lyg55So5oi35L+h5oGv5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgZmFpbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliIbkuqvmuLjmiI9cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNoYXJlVG9BbnlPbmUoc3VjY2VzczpGdW5jdGlvbixmYWlsOkZ1bmN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIGlmKCF0aGlzLnd4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VjY2VzcygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbm93VGltZTpudW1iZXIgPSBEYXRlLm5vdygpLzEwMDA7XHJcblxyXG4gICAgICAgIGlmKG5vd1RpbWUgLSB0aGlzLnNoYXJlVGltZSA8PSAzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgV1hTZGsuaW5zdGFuY2Uud3guc2hvd01vZGFsKHtcclxuICAgICAgICDCoCDCoCDCoCDCoCB0aXRsZTogJ+itpuWRiicsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybVRleHQ6XCLnoa7lrppcIixcclxuICAgICAgICDCoCDCoCDCoCDCoCBjb250ZW50OiBNYXRoLnJhbmRvbSgpIDwgMC41ID8gJ+efreaXtumXtOWGhSzkuI3opoHliIbkuqvlkIzkuIDkuKrnvqQnIDogJ+ivt+aNouS4que+pOivleivleWTpn5+JyxcclxuICAgICAgICDCoCDCoCDCoCDCoCBzdWNjZXNzOihyZXMpPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICDCoCDCoCDCoCDCoCDCoCDCoCBpZiAocmVzLmNvbmZpcm0pXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGZhaWwoKTtcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zaGFyZVRpbWUgPSBub3dUaW1lO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRpdGxlQXJyOnN0cmluZ1tdID0gW1xyXG4gICAgICAgICAgICAgICAgXCLku4rlubQ05pyI5pyA54Gr55qE5bCP5ri45oiPXCIsXHJcbiAgICAgICAgICAgICAgICBcIueOqei9rOmjnuWIgO+8jOWdkOaLpeWcsOeQg++8gVwiLFxyXG4gICAgICAgICAgICAgICAgXCLmj5DphpLvvJpA5L2g55qE5aW95Y+LIOW3suWujOaIkOS6lOadgFwiLFxyXG4gICAgICAgICAgICAgICAgXCLpo57liIDovazovazovazvvIzljovlipvmlaPmlaPmlaPvvIFcIixcclxuICAgICAgICAgICAgICAgIFwi5oiR5Y2H5pif55WM5aSn5biI5LqG77yM5L2g6IO95omT5Yiw5a6H5a6Z5pyA5by65ZCX77yfXCJcclxuICAgICAgICAgICAgXTtcclxuICAgIFxyXG4gICAgICAgICAgICB2YXIgaW5kZXg6bnVtYmVyID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIHRpdGxlQXJyLmxlbmd0aCkpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMud3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGAke3RpdGxlQXJyW2luZGV4XX1gLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6XCJodHRwczovL2tuaWZlLTEyNTg4MTkxNTAuZmlsZS5teXFjbG91ZC5jb20vaW1hZ2UvJUU2JTk4JTlGJUU3JTkwJTgzJUU5JUEzJTlFJUU1JTg4JTgwLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IFwidHlwZT1zaGFyZVRvQW55T25lXCIsXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5ouJ6LW35YiG5LqrIOaIkOWKnycscmVzKTtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKCk7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5ouJ6LW35YiG5LqrIOWksei0pScscmVzKTtcclxuICAgICAgICAgICAgICAgICAgICBmYWlsKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lOm51bWJlciA9IERhdGUubm93KCkvMTAwMDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50VGltZSAtIG5vd1RpbWUgPD0gMylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGltZSxub3dUaW1lLGN1cnJlbnRUaW1lIC0gbm93VGltZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFdYU2RrLmluc3RhbmNlLnd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICDCoCDCoCDCoCDCoCB0aXRsZTogJ+itpuWRiicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0Olwi56Gu5a6aXCIsXHJcbiAgICAgICAgICAgICAgICDCoCDCoCDCoCDCoCBjb250ZW50OiBNYXRoLnJhbmRvbSgpIDwgMC41ID8gJ+efreaXtumXtOWGhSzkuI3opoHliIbkuqvlkIzkuIDkuKrnvqQnIDogJ+ivt+aNouS4que+pOivleivleWTpn5+JyxcclxuICAgICAgICAgICAgICAgIMKgIMKgIMKgIMKgIHN1Y2Nlc3M6KHJlcyk9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICDCoCDCoCDCoCDCoCDCoCDCoCBpZiAocmVzLmNvbmZpcm0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcygpO1xyXG5cclxuICAgICAgICAgICAgICAgIFdYU2RrLmluc3RhbmNlLnd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgwqAgwqAgwqAgwqAgdGl0bGU6ICfliIbkuqvmiJDlip8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0Olwi56Gu5a6aXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgwqAgwqAgwqAgwqAgY29udGVudDogJ+aBreWWnCzojrflvpflpZblirEnLFxyXG4gICAgICAgICAgICAgICAgICAgIMKgIMKgIMKgIMKgIHN1Y2Nlc3M6KHJlcyk9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIMKgIMKgIMKgIMKgIMKgIMKgIGlmIChyZXMuY29uZmlybSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSwwLjgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc2hvd1ZpZGVvKGFkVW5pdElkOnN0cmluZyxjbG9zZT86RnVuY3Rpb24sc3VjY2Vzcz86RnVuY3Rpb24sZmFpbD86RnVuY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMud3gpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjbG9zZSAmJiBjbG9zZSgxKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIGlmKHRoaXMuU0RLVmVyc2lvbiA8IFwiMi4wNFwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLln7rnoYDlupPniYjmnKzov4fkvY7vvIzkuI3og73kvb/nlKjop4bpopHlub/lkYrlip/og71cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciByZXdhcmRlZFZpZGVvQWQgPSB0aGlzLnd4LmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7YWRVbml0SWQ6YWRVbml0SWR9KSAvL+S4jeaUr+aMgeWcqOW8gOWPkeW3peWFt+i/kOihjO+8jOWPquiDveWcqOecn+acuui/kOihjCDov5Tlm57lgLzmmK/kuKrljZXkvotcclxuICAgICAgIFxyXG4gICAgICAgIC8vdGhpcy53eExvZyhcInJld2FyZGVkVmlkZW9BZFwiLHJld2FyZGVkVmlkZW9BZCk7XHJcblxyXG4gICAgICAgIC8v6KeG6aKR5bm/5ZGK6buY6K6k5piv6ZqQ6JeP55qE77yM6KaB6LCD55Soc2hvd+aYvuekulxyXG5cclxuICAgICAgICByZXdhcmRlZFZpZGVvQWQub25Mb2FkKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy53eExvZygn5r+A5Yqx6KeG6aKRIOW5v+WRiuWKoOi9veaIkOWKnycpO1xyXG4gICAgICAgICAgICBzdWNjZXNzICYmIHN1Y2Nlc3MoKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXdhcmRlZFZpZGVvQWQub25FcnJvcihlcnIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnd4TG9nKCfmv4DlirHop4bpopEg5bm/5ZGK5ouJ5Y+W5aSx6LSlJyxlcnIpO1xyXG4gICAgICAgICAgICBmYWlsICYmIGZhaWwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV3YXJkZWRWaWRlb0FkLm9uQ2xvc2UocmVzPT57XHJcblxyXG4gICAgICAgICAgICByZXdhcmRlZFZpZGVvQWQub2ZmTG9hZCgpO1xyXG4gICAgICAgICAgICByZXdhcmRlZFZpZGVvQWQub2ZmRXJyb3IoKTtcclxuICAgICAgICAgICAgcmV3YXJkZWRWaWRlb0FkLm9mZkNsb3NlKCk7XHJcbiAgICAgICAgICAgIHJld2FyZGVkVmlkZW9BZCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAvLyDlsI/kuo4gMi4xLjAg55qE5Z+656GA5bqT54mI5pys77yMcmVzIOaYr+S4gOS4qiB1bmRlZmluZWRcclxuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuaXNFbmRlZCB8fCByZXMgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy/op4bpopHmraPluLjmkq3mlL7nu5PmnZ9cclxuICAgICAgICAgICAgICAgIGNsb3NlICYmIGNsb3NlKDEpO1xyXG4gICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL+inhumikeaSreaUvuS4remAlOmAgOWHulxyXG4gICAgICAgICAgICAgICAgY2xvc2UgJiYgY2xvc2UoMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL+W8gOWni+WKoOi9veinhumikeW5v+WRilxyXG4gICAgICAgIHJld2FyZGVkVmlkZW9BZC5sb2FkKCkudGhlbihcclxuICAgICAgICAgICAgKCk9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXdhcmRlZFZpZGVvQWQuc2hvdygpLmNhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIGVycj0+e1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53eExvZygn6KeG6aKR5bm/5ZGK5pKt5pS+5aSx6LSlJyxlcnIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkZWRWaWRlb0FkLm9mZkxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkZWRWaWRlb0FkLm9mZkVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZGVkVmlkZW9BZC5vZmZDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRlZFZpZGVvQWQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc2hvd0Jhbm5lcihhZFVuaXRJZDpzdHJpbmcsc3R5bGU6e30pXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMud3gpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5yZW1vdmVCYW5uZXIoKTtcclxuICAgICAgICAvL2Jhbm5lcum7mOiupOmakOiXj++8jOiwg+eUqHNob3fmlrnms5XmmL7npLpcclxuICAgICAgICB0aGlzLl9iYW5uZXJBZCA9IHRoaXMud3guY3JlYXRlQmFubmVyQWQoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFkVW5pdElkOmFkVW5pdElkLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6c3R5bGVcclxuICAgICAgICAgICAgICAgIC8qe1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6MTAsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOjYwLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjQwMFxyXG4gICAgICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLl9iYW5uZXJBZC5vbkxvYWQoKCk9PntcclxuICAgICAgICAgICAgdGhpcy53eExvZyhcIuW5v+WRiuaLieWPluaIkOWKn1wiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fYmFubmVyQWQub25FcnJvcihlcnI9PntcclxuICAgICAgICAgICAgdGhpcy53eExvZyhcIuW5v+WRiuaLieWPluWksei0pVwiLGVycik7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLl9iYW5uZXJBZC5vblJlc2l6ZShyZXM9PntcclxuICAgICAgICAgICAgdGhpcy5fYmFubmVyQWQuc3R5bGUudG9wID0gdGhpcy5zY3JlZW5IZWlnaHQgLSByZXMuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLl9iYW5uZXJBZC5zdHlsZS53aWR0aCA9IHRoaXMuc2NyZWVuV2lkdGggKyA1MDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fYmFubmVyQWQuc2hvdygpLnRoZW4oKCk9Pnt0aGlzLnd4TG9nKFwi5pi+56S65bm/5ZGKXCIpfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9iYW5uZXJBZDtcclxuICAgICAgICAvL2Jhbm5lckFkLmhpZGUoKTsvL+WIh+aNouWIsOaXoOW5v+WRiumhtemdouaXtuiwg+eUqGhpZGUoKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93Qm90dG9tQmFubmVyKGFkVW5pdElkOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICBpZighdGhpcy53eClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgc3R5bGUgPSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxlZnQ6MCxcclxuICAgICAgICAgICAgdG9wOnRoaXMuc2NyZWVuSGVpZ2h0IC0gMTMwLFxyXG4gICAgICAgICAgICB3aWR0aDp0aGlzLnNjcmVlbldpZHRoICsgNTAsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBXWFNkay5pbnN0YW5jZS5zaG93QmFubmVyKGFkVW5pdElkLHN0eWxlKTtcclxuICAgICAgICBcclxuICAgICAgICAvKnRoaXMuX2Jhbm5lckFkLmhpZGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2Jhbm5lckFkLnNob3coKTtcclxuICAgICAgICAgICAgdGhpcy5fYmFubmVyQWQuc3R5bGUudG9wID0gdGhpcy5zY3JlZW5IZWlnaHQgLSB0aGlzLl9iYW5uZXJBZC5zdHlsZS5yZWFsSGVpZ2h0O1xyXG4gICAgICAgIH0sMC42KTsqL1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlQmFubmVyKClcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLl9iYW5uZXJBZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhbm5lckFkLm9mZkxvYWQoKTtcclxuICAgICAgICAgICAgdGhpcy5fYmFubmVyQWQub2ZmRXJyb3IoKTtcclxuICAgICAgICAgICAgdGhpcy5fYmFubmVyQWQub2ZmUmVzaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhbm5lckFkLmRlc3Ryb3koKTsgLy/opoHlhYjmiorml6fnmoTlub/lkYrnu5nplIDmr4HvvIzkuI3nhLbkvJrlr7zoh7Tlhbbnm5HlkKznmoTml7bpl7Tml6Dms5Xph4rmlL7vvIzlvbHlk43mgKfog71cclxuICAgICAgICAgICAgdGhpcy5fYmFubmVyQWQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlIChkdCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIDE1bXPnmoTnn63pnIfliqhcclxuICAgICAqL1xyXG4gICAgcHVibGljIHZpYnJhdGVTaG9ydCgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMud3gpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKmlmKHRoaXMuaXNWaWJyYXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICAvL3RoaXMuaXNWaWJyYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy53eC52aWJyYXRlU2hvcnQoe30pO1xyXG5cclxuICAgICAgICAvKnRoaXMuc2NoZWR1bGVPbmNlKCgpPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWaWJyYXRlID0gZmFsc2U7XHJcbiAgICAgICAgfSwwLjAzNSk7Ki9cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIDQwMG1z55qE6ZW/6ZyH5YqoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2aWJyYXRlTG9uZygpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMud3gpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKmlmKHRoaXMuaXNWaWJyYXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0qL1xyXG5cclxuXHJcbiAgICAgICAgLy90aGlzLmlzVmlicmF0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMud3gudmlicmF0ZUxvbmcoe30pO1xyXG5cclxuICAgICAgICAvKnRoaXMuc2NoZWR1bGVPbmNlKCgpPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWaWJyYXRlID0gZmFsc2U7XHJcbiAgICAgICAgfSwwLjUpOyovXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5bCP56iL5bqP5LqM57u056CBXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVXWEFRUkNvZGUoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMud3guY3JlYXRlV1hBUVJDb2RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFdYQUNvZGUoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMud3guZ2V0V1hBQ29kZSh7fSk7XHJcbiAgICB9XHJcbn1cclxuIl19