import SystemTools from "./SystemTools";

// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

declare var wx:any;

/**
 * 用户授权状态
 */
export enum AuthorizeStatus
{
    /**
     * 未申请授权
     */
    none = 0,

    /**
     * 拒绝授权
     */
    refuse = 1,

    /**
     * 同意授权
     */
    agree = 2

}


@ccclass
export default class WXSdk extends cc.Component {

   private static _instance: WXSdk;
    public static get instance(): WXSdk {
        if(!this._instance)
        {
            this._instance = new WXSdk();
            this._instance.init();
        }
        return WXSdk._instance;
    }

    public wx:any;

    //public url:string = "http://127.0.0.1:8080/knife/login";

    public url:string = "https://127.0.0.1/knife/login";

    public worldRankUrl:string = "https://127.0.0.1/knife/update-best-score";
    public worldRankUrl2:string = "https://127.0.0.1/knife/world/";


    private appid:string = "wx472e16802f66329a"; // 小程序 appId
    private secret:string = ""; // 小程序 appSecret
    private grant_type:string = "authorization_code"; //填写为 authorization_code
    //private grant_type:string = "client_credential"
    //0c8f46b257766254c31dccf5e345945a

    private _openDataContext:any;

    private _sharedCanvas:any;

    private _systemInfo: any;

    private _bannerAd:any;

    private _userData:any;

    private _userInfo:any;

    private _accessTokenData:any;

    private _authorizeStatus: AuthorizeStatus = AuthorizeStatus.none;

    private _tokenData:any = "";

    private isVibrate:boolean = false;

    public isLogin:boolean = false;

    private shareTime:number = 0;

    /*private wxLog(message?: any, ...optionalParams: any[])
    {
        console.log(message,optionalParams);
    }*/

    private wxLog = console.log;
    //private wxLog = function(...args){};

    private _shareTicket:string = "";

    private init()
    {
        //this.wx = window["wx"] || {};
        //this.wx = wx || {};
        this.wx = window["wx"];
        //this.wxLog("wx = ",this.wx);

        this.systemInfo;

        if(this.wx)
        {
            this.wx.onShow((res)=>{

                if(res.query.type == "shareToAnyOne" && res.scene == 1044)
                {
                    this._shareTicket = res.shareTicket;
                    cc.systemEvent.emit("shareTicketUpdate");
                    
                }else
                {
                    this._shareTicket = "";
                }

                //this.wxLog("onShow 收到消息",res,"this._shareTicket",this._shareTicket);

            });
    
            this.wx.onHide((res)=>{

                //this.wxLog("onHide 收到消息",res);

            });

            var launchOption = this.wx.getLaunchOptionsSync();

            if(launchOption.shareTicket && launchOption.shareTicket != "<Undefined>")
            {
                this._shareTicket = launchOption.shareTicket;
            }else
            {
                this._shareTicket = "";
            }

            //shareTick "<Undefined>"
            //this.wxLog("launchOption = ",launchOption);

            this.wx.showShareMenu({
                withShareTicket: true,
                success:()=>{},
                fail:()=>{},
            });

            this.wx.onShareAppMessage(() => ({
                title: '刀剑乱斗英雄',
                imageUrl: 'https://127.0.0.1/image/星球飞刀.jpg', // 图片 URL
                query: "type=shareToAnyOne",
            }))

        }

    }

    public isWXPlatform():boolean
    {
        return this.wx != undefined && this.wx != null;
    }

    public get openDataContext() : any
    {
        if(!this._openDataContext)
        {
            this._openDataContext = this.wx.getOpenDataContext();
        }
        return this._openDataContext;
    }

    public get sharedCanvas() : any
    {
        if(!this._sharedCanvas)
        {
            this._sharedCanvas = this.openDataContext.canvas;
        }

        return this._sharedCanvas;
    }

    // update (dt) {}

    public get systemInfo(): any {

        if(this.wx && !this._systemInfo)
        {
            this._systemInfo = this.wx.getSystemInfoSync();
            this.wxLog("微信系统信息",this._systemInfo);
            this.wxLog(
                "\n手机型号",this._systemInfo.model,
                "\n系统",this._systemInfo.system,
                "\n微信版本",this._systemInfo.version,
                "\n语言",this._systemInfo.language,
                "\n手机品牌",this._systemInfo.brand,
                "\n客户端平台",this._systemInfo.platform,
                "\n客户端基础库版本",this._systemInfo.SDKVersion
                );
        }

        return this._systemInfo;
    }

    /**
     * 微信版本号
     */
    public get version():string
    {
        if(this.systemInfo)
        {
            return this.systemInfo.version;
        }

        return "";
    }

    /**
     * 微信基础库版本
     */
    public get SDKVersion():string
    {
        if(this.systemInfo)
        {
            return this.systemInfo.SDKVersion;
        }
        return "";
    }

    /**
     * 手机系统
     */
    public get system():string
    {
        if(this.systemInfo)
        {
            return this.systemInfo.system;
        }
        return "";
    }

    /**
     * 手机型号
     */
    public get model():string
    {
        if(this.systemInfo)
        {
            return this.systemInfo.model;
        }
        return this.systemInfo.model;
    }

    /**
     * 手机品牌
     */
    public get brand():string
    {
        if(this.systemInfo)
        {
            return this.systemInfo.brand;
        }
        return "";
    }

    /**
     * 客户端平台
     */
    public get platform():string
    {
        if(this.systemInfo)
        {
            return this.systemInfo.platform;
        }
    }

    public get userData():any
    {
        return this._userData;
    }

    public get userInfo():any
    {
        return this._userInfo;
    }

    /**
     * 微信唯一id
     */
    public get openid():string
    {
        if(this._tokenData)
        {
            return this._tokenData.openid;
        }

        return "";
    }

    public get token():string
    {
        if(this._tokenData)
        {
            return this._tokenData.skey;
        }

        return "";
    }

    /**
     * 用户在数据库里的id
     */
    public get uid():number
    {
        if(this._tokenData)
        {
            return this._tokenData.uid;
        }

        return 0;
    }

    /**
     * 用户是否是新用户
     */
    public get isNew():boolean
    {
        if(this._tokenData)
        {
            return this._tokenData.isNew;
        }

        return false;
    }

    /**
     * 会话密匙 
     */
    public get session_key():string
    {
        if(this._accessTokenData)
        {
            return this._accessTokenData.session_key;
        }

        return "";
    }

    /**
     * 昵称
     */
    public get nickname():string
    {
        if(this._userInfo)
        {
            return this._userInfo.nickName;
        }

        return "小飞刀";
    }

    /**
     * 授权状态
    */
    public get authorizeStatus(): AuthorizeStatus {
        return this._authorizeStatus;
    }

    public get shareTicket():string
    {
        return this._shareTicket;
    }

    public get screenWidth():number
    {
        return this.systemInfo.screenWidth;
    }

    public get screenHeight():number
    {
        return this.systemInfo.screenHeight;
    }


    /**
     * 
     * @param complete 
     * @param size 尺寸有 0、46、64、96、132 可选  0代表 640 * 640
     */
    public getUserIcon(complete:Function,size:number = 132)
    {
        if(!this.wx)
        {
            complete(null);
            return;
        }
        var avatarUrl:string = this._userInfo.avatarUrl;
        var index = avatarUrl.lastIndexOf("/");
        avatarUrl = avatarUrl.substring(0,index + 1) + size + "?aaa=aa.jpg";

        cc.loader.load(avatarUrl,(err,texture)=>
        {
            complete(texture);
        });
    }
    
    /**
     * 申请用户授权
     * @param success 
     * @param fail 
     */
    public applyUserAuth(success:Function)
    {
        if(!this.wx)
        {
            this._authorizeStatus = AuthorizeStatus.refuse;
            success(false);
            return;
        }

        this.wx.getSetting({

            success:(res)=>
            {
                if(!res.authSetting["scope.userInfo"])
                {
                    
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
                    
                    this.getUserAuthorizeBtn(success);

                }else
                {
                    this._authorizeStatus = AuthorizeStatus.agree;
                    success(true)
                }
                
            },
            fail:(res)=>
            {
                this._authorizeStatus = AuthorizeStatus.refuse;
                success(false);
            }
        }
        );
    }

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
    public getUserAuthorizeBtn(success:Function)
    {
        console.log(this.systemInfo.screenWidth
            );

        var button = wx.createUserInfoButton({
            type: 'text',
            text: '',//'获取用户信息',
            //image: 'res/raw-assets/7b/7bb27b49-7cfc-495d-aa3c-27f5c4234816.png',
            style: {
                left: 0,
                top:  0,
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

        button.onTap((res) => {
            
            if(res.errMsg == "getUserInfo:ok")
            {
                console.log("获得授权 ?",res);
                button.hide();
                button.destroy();
                success();
            }else
            {
                
            }
        });
    }


    /**
     * 微信登录
     * @param success 
     * @param fail 
     */
    public login(appid:string,secret:string,success:Function,fail:Function)
    {

        if(!this.wx)
        {
            success();
            return;
        }

        this.appid = appid;
        this.secret = secret;

        if(this.isLogin)
        {
            success();
            return;
        }


        var successCallback = ()=>{
            this.isLogin = true;
            WXSdk.instance.wx.hideLoading();
            success();
        };

        var failCallback = ()=>{
            WXSdk.instance.wx.hideLoading();
            fail();
        }


        this.applyUserAuth((isAuthorize)=>
        {
            this.getUserInfo(()=>
            {
                //this.checkSession(success,fail);
                this.loginWX(successCallback,failCallback);
            },()=>
            {
                failCallback();
            });

        });
    }


    public loginWX(success:Function,fail:Function)
    {
        this.wx.showLoading({
            title: '登录中...',
            mask:true,
            width:250,
        });

        this.wx.login({
            timeout:30000,//登陆超时时间 单位ms
            success:(res)=>{
                this.wxLog("login",res);
                if(res.code)
                {
                    //console.log("code:"+res.code)
                    //this.getAccessToken(success,fail,res.code);
                    //this.getAccessToken2(success,fail,res.code);

                    success();

                }else
                {
                    //this.wxLog("登录失败",res);
                    fail();
                }
            },
            fail : (res)=>{
                //this.wxLog("登录失败",res);
                fail();
            },
            complete(){
                //调用结束时回掉，不管成功还是失败
            }
        });
    }

    /**
     * 检查登录状态是否过期
     */
    public checkSession(success:Function,fail:Function):void
    {
        this.wx.checkSession({
            success:()=>
            {
                this.wxLog("session_key 未过期，并且在本生命周期一直有效");
                success();
                //this.getUserInfo(success,fail);
                //this.loginWX(success,fail);
            },
            fail:()=>
            {
                this.wxLog("已经失效，需要重新执行登录流程");
                this.loginWX(success,fail);
            }
        });
    }

    /**
     * 登入凭证校验
     */
    private getAccessToken(success:Function,fail:Function,code:string):void
    {
        var obj:Object = 
        {
            code: code,
            // "encrypted": "string",
            fromAppId: this.appid,
            // "fromType": "string",
            // "fromUserId": 0,
            img: this._userInfo.avatarUrl,
            // "iv": "string",
            // "model": "string",
            name: this.nickname,
            // "pf": "string"
        }

        this.requestPost(this.url,obj,
            (res:any)=>{
                
                this.wxLog("收到服务端返回数据",res.data);

                this._tokenData = res.data.data;

                let errcode:number  = res.statusCode; //错误码

                if (errcode == -1) 
                {
                    //console.error(">>>系统繁忙，此时请开发者稍候再试");
                    fail();
                }else if (errcode == 0) 
                {
                    //">>>请求成功");
                    //this.getUserInfo(success,fail);
                    success();
                }else if (errcode == 200) 
                {
                    //">>>请求成功");
                    //this.getUserInfo(success,fail);
                    success();
                }
                else if (errcode == 40029) 
                {
                    //">>>>code无效");
                    //this.getUserInfo(success,fail);
                    success();
                }else
                {
                    fail();
                }
            },
            ()=>
            {
                console.error(">>>>>>>获取登录凭证失败");
                fail();
            }
        );
    }

     /**
     * 登入凭证校验
     */
    private getAccessToken2(success:Function,fail:Function,code:string):void
    {
        let url = "https://api.weixin.qq.com/sns/jscode2session?appid={0}&secret={1}&js_code={2}&grant_type={3}"; //这个请求似乎只能在服务器端完成，前端只能不校验合法域名才可以使用
        url = SystemTools.format(url,this.appid,this.secret,code,this.grant_type); //拼接网址

        //https://api.weixin.qq.com/sns/jscode2session?appid=wx472e16802f66329ajs_code=03329Yad2JudiF0Y9Vbd2Qh6bd229Ya3&grant_type=authorization_code

        
        this.requestGet(url,
            (res:any)=>{
                let data            = res.data;
                let openId         = data.openid; //用户唯一标识
                let session_key    = data.session_key; //回话密匙
                //let errcode:number  = data.errcode; //错误码
                let errcode:number  = res.statusCode; //错误码
                let errMsg:string   = res.errMsg; //错误信息

                this._accessTokenData = res.data;

                this.wxLog("openId",openId);
                this.wxLog("session_key",session_key);
                this.wxLog("accesstoken res ",res,errcode);
                if (errcode == -1) 
                {
                    console.error(">>>系统繁忙，此时请开发者稍候再试");
                }else if (errcode == 0) 
                {
                    //">>>请求成功");
                    this.getUserInfo(success,fail);
                }else if (errcode == 200) 
                {
                    //">>>请求成功");
                    this.getUserInfo(success,fail);
                }
                else if (errcode == 40029) 
                {
                    //">>>>code无效");
                    this.getUserInfo(success,fail);
                }
            },
            ()=>
            {
                console.error(">>>>>>>获取登录凭证失败");
                fail();
            }
        );
    }

    /**
     * 获取用户信息
     */
    private getUserInfo(success:Function,fail:Function):void
    {
        let data:any = 
        {
            withCredentials:false,
            lang:"zh_CN",
            success:(res:any)=>
            {
                this._userData = res;
                this._userInfo = res.userInfo;
                this.wxLog("获取用户信息成功");
                success();
            },
            fail:(res:any)=>
            {
                this.wxLog("获取用户信息失败",res);
                fail();
                //this.checkSession(success,fail); //获取用户信息失败之后 继续去获取
                //this.wxLog("获取用户信息失败:",this.tempCode);
            }
        }
        wx.getUserInfo(data);
    }

    /**
     * 微信请求
     * @param url  请求地址
     * @param successCallBack 成功回调
     * @param failBack  失败回调
     */
    private requestGet(url:string,success:(res:any)=>void,fail:()=>void):void
    {
        let requestData:any = 
        {
            url:url,
            method:"GET",
            dataType:"json",
            success:(res:any)=>
            {
                success && success(res);   
            },
            fail:()=>
            {
                fail && fail();   
                console.error(">>>>>>请求url失败："+requestData.url);
            }
        };

        this.wx.request(requestData);
    }

    private requestPost(url:string,data:{},success:(res:any)=>void,fail:()=>void)
    {
        let requestData:any = 
        {
            url:url,
            method:"POST",
            data:data,
            dataType:"json",
            success:(res:any)=>
            {
                success && success(res);   
            },
            fail:()=>
            {
                fail && fail();   
                console.error(">>>>>>请求url失败："+requestData.url);
            }
        };

        this.wx.request(requestData);
    }


    /**
     * 设置用户排名数据存储
     */
    public setUserRankStorage(key:string,value:number|string)
    {
        if(!this.wx)
            return;

        var kvdatas:Array<Object> = [
            {key:key,value:value.toString()},
        ];

        this.wx.setUserCloudStorage(
            {KVDataList:kvdatas,
            success(res){
                console.log("setUserCloudStorage",res);
            }
        });
    }

    public unloadUserScore(score:number,success:Function,fail:Function)
    {

        if(!this.wx)
            return;

        let url = this.worldRankUrl + `?id=${this.uid}&score=${score}`; //这个请求似乎只能在服务器端完成，前端只能不校验合法域名才可以使用

        this.requestGet(url,
            (res:any)=>{
                
                this.wxLog("上传用户数据返回",res.data);

                if (res.data.code == 0) 
                {
                    success();
                }
                else
                {
                    fail();
                }
            },
            ()=>
            {
                console.error("上传用户信息失败");
                fail();
            }
        );
    }

    public getUserScoreWorldRank(success:Function,fail:Function)
    {

        if(!this.wx)
            return;

        let url = this.worldRankUrl2 + this.uid; //这个请求似乎只能在服务器端完成，前端只能不校验合法域名才可以使用

        this.requestGet(url,
            (res:any)=>{
                
                this.wxLog("用户世界排行榜返回返回",res);

                if (res.data.code == 0) 
                {
                    success(res.data.data);
                }
                else
                {
                    fail();
                }
            },
            ()=>
            {
                console.error("上传用户信息失败");
                fail();
            }
        );

    }

    /**
     * 分享游戏
     */
    public shareToAnyOne(success:Function,fail:Function)
    {
        if(!this.wx)
        {
            success();
            return;
        }

        var nowTime:number = Date.now()/1000;

        if(nowTime - this.shareTime <= 3)
        {
            WXSdk.instance.wx.showModal({
                title: '警告',
                showCancel:false,
                confirmText:"确定",
                content: Math.random() < 0.5 ? '短时间内,不要分享同一个群' : '请换个群试试哦~~',
                success:(res)=>
                {
                    if (res.confirm)
                    {
                        
                    }else
                    {
                        
                    }
                }
            });

            fail();
        }else
        {
            this.shareTime = nowTime;

            var titleArr:string[] = [
                "今年4月最火的小游戏",
                "玩转飞刀，坐拥地球！",
                "提醒：@你的好友 已完成五杀",
                "飞刀转转转，压力散散散！",
                "我升星界大师了，你能打到宇宙最强吗？"
            ];
    
            var index:number = Math.floor((Math.random() * titleArr.length));
    
            this.wx.shareAppMessage({
    
                title: `${titleArr[index]}`,
                imageUrl:"https://knife-1258819150.file.myqcloud.com/image/%E6%98%9F%E7%90%83%E9%A3%9E%E5%88%80.jpg",
                query: "type=shareToAnyOne",
    
                success: function (res) {
                    console.log('拉起分享 成功',res);
                    success();
                  },
                  fail: function (res) {
                    console.log('拉起分享 失败',res);
                    fail();
                  }
    
            });

            this.scheduleOnce(()=>{

                var currentTime:number = Date.now()/1000;

                if(currentTime - nowTime <= 3)
                {
                    console.log(currentTime,nowTime,currentTime - nowTime);

                    WXSdk.instance.wx.showModal({
                        title: '警告',
                        showCancel:false,
                        confirmText:"确定",
                        content: Math.random() < 0.5 ? '短时间内,不要分享同一个群' : '请换个群试试哦~~',
                        success:(res)=>
                        {
                            if (res.confirm)
                            {
                                
                            }else
                            {
                                
                            }
                        }
                    });

                    return;
                }


                success();

                WXSdk.instance.wx.showModal({
                            title: '分享成功',
                            showCancel:false,
                            confirmText:"确定",
                            content: '恭喜,获得奖励',
                            success:(res)=>
                            {
                                if (res.confirm)
                                {
                                    
                                }else
                                {
                                    
                                }
                            }
                        });

            },0.8);

        }

    }


    public showVideo(adUnitId:string,close?:Function,success?:Function,fail?:Function)
    {
        if(!this.wx)
        {
            close && close(1);
            return;
        }
            

        if(this.SDKVersion < "2.04")
        {
            console.log("基础库版本过低，不能使用视频广告功能");
            return;
        }

        var rewardedVideoAd = this.wx.createRewardedVideoAd({adUnitId:adUnitId}) //不支持在开发工具运行，只能在真机运行 返回值是个单例
       
        //this.wxLog("rewardedVideoAd",rewardedVideoAd);

        //视频广告默认是隐藏的，要调用show显示

        rewardedVideoAd.onLoad(() => {
            this.wxLog('激励视频 广告加载成功');
            success && success();
          });

        rewardedVideoAd.onError(err => {
            this.wxLog('激励视频 广告拉取失败',err);
            fail && fail();
        });

        rewardedVideoAd.onClose(res=>{

            rewardedVideoAd.offLoad();
            rewardedVideoAd.offError();
            rewardedVideoAd.offClose();
            rewardedVideoAd = null;

            // 小于 2.1.0 的基础库版本，res 是一个 undefined
            if (res && res.isEnded || res === undefined)
            {
                //视频正常播放结束
                close && close(1);
            }else
            {
                //视频播放中途退出
                close && close(0)
            }
        });

        //开始加载视频广告
        rewardedVideoAd.load().then(
            ()=>
            {
                rewardedVideoAd.show().catch(
                    err=>{

                        this.wxLog('视频广告播放失败',err);

                        rewardedVideoAd.offLoad();
                        rewardedVideoAd.offError();
                        rewardedVideoAd.offClose();
                        rewardedVideoAd = null;

                    }
                    );
            });

    }


    public showBanner(adUnitId:string,style:{})
    {
        if(!this.wx)
            return;

        this.removeBanner();
        //banner默认隐藏，调用show方法显示
        this._bannerAd = this.wx.createBannerAd(
            {
                adUnitId:adUnitId,
                style:style
                /*{
                    left:10,
                    top:60,
                    width:400
                }*/
            }
        );

        this._bannerAd.onLoad(()=>{
            this.wxLog("广告拉取成功");
        });

        this._bannerAd.onError(err=>{
            this.wxLog("广告拉取失败",err);
        });


        this._bannerAd.onResize(res=>{
            this._bannerAd.style.top = this.screenHeight - res.height;
            this._bannerAd.style.width = this.screenWidth + 50;
        });

        this._bannerAd.show().then(()=>{this.wxLog("显示广告")});

        return this._bannerAd;
        //bannerAd.hide();//切换到无广告页面时调用hide()
    }

    public showBottomBanner(adUnitId:string)
    {
        if(!this.wx)
            return;

        var style = 
        {
            left:0,
            top:this.screenHeight - 130,
            width:this.screenWidth + 50,
        }

        WXSdk.instance.showBanner(adUnitId,style);
        
        /*this._bannerAd.hide();

        this.scheduleOnce(()=>{

            this._bannerAd.show();
            this._bannerAd.style.top = this.screenHeight - this._bannerAd.style.realHeight;
        },0.6);*/
        
    }


    public removeBanner()
    {
        if(this._bannerAd)
        {
            this._bannerAd.offLoad();
            this._bannerAd.offError();
            this._bannerAd.offResize();
            this._bannerAd.destroy(); //要先把旧的广告给销毁，不然会导致其监听的时间无法释放，影响性能
            this._bannerAd = null;
        }
    }


    update (dt) {}

    /**
     * 15ms的短震动
     */
    public vibrateShort()
    {
        if(!this.wx)
        {
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
        
    }

    /**
     * 400ms的长震动
     */
    public vibrateLong()
    {
        if(!this.wx)
        {
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
    }
    
    /**
     * 获取小程序二维码
     */
    public createWXAQRCode()
    {
        this.wx.createWXAQRCode();
    }

    public getWXACode()
    {
        this.wx.getWXACode({});
    }
}
