
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_v2.1-2.2.1_cc.Toggle_event');
require('./assets/script/TestPhysics');
require('./assets/script/tscript/Launch');
require('./assets/script/tscript/Main');
require('./assets/script/tscript/Test');
require('./assets/script/tscript/audio/BgSoundClip');
require('./assets/script/tscript/audio/SoundClip');
require('./assets/script/tscript/config/Config');
require('./assets/script/tscript/configdata/AccountRankData');
require('./assets/script/tscript/configdata/KnifeConfigData');
require('./assets/script/tscript/configdata/LevelConfigData');
require('./assets/script/tscript/configdata/NameConfigData');
require('./assets/script/tscript/core/DataManager');
require('./assets/script/tscript/core/DataStorage');
require('./assets/script/tscript/core/GameManager');
require('./assets/script/tscript/core/ResourcesManager');
require('./assets/script/tscript/core/ResourcesPool');
require('./assets/script/tscript/core/SoundManager');
require('./assets/script/tscript/data/LevelData');
require('./assets/script/tscript/data/PlayerData');
require('./assets/script/tscript/event/CustomEventType');
require('./assets/script/tscript/gamescene/Barrier');
require('./assets/script/tscript/gamescene/BlackHole');
require('./assets/script/tscript/gamescene/Body');
require('./assets/script/tscript/gamescene/CameraFollow');
require('./assets/script/tscript/gamescene/GameScene');
require('./assets/script/tscript/gamescene/Guide');
require('./assets/script/tscript/gamescene/Joystick');
require('./assets/script/tscript/gamescene/Knife');
require('./assets/script/tscript/gamescene/KnifePool');
require('./assets/script/tscript/gamescene/Mark');
require('./assets/script/tscript/gamescene/Player');
require('./assets/script/tscript/gamescene/PlayerAI');
require('./assets/script/tscript/gamescene/PlayerController');
require('./assets/script/tscript/gamescene/Wall');
require('./assets/script/tscript/item/Item');
require('./assets/script/tscript/ui/UIManager');
require('./assets/script/tscript/ui/base/BaseUI');
require('./assets/script/tscript/ui/base/CustomButton');
require('./assets/script/tscript/ui/base/SelectView');
require('./assets/script/tscript/ui/base/TabButton');
require('./assets/script/tscript/ui/base/TabSelectView');
require('./assets/script/tscript/ui/base/View');
require('./assets/script/tscript/ui/common/PopupMsg');
require('./assets/script/tscript/ui/common/PopupText');
require('./assets/script/tscript/ui/main/AccountUI');
require('./assets/script/tscript/ui/main/DuanWei');
require('./assets/script/tscript/ui/main/LevelIcon');
require('./assets/script/tscript/ui/main/LevelMessageUI');
require('./assets/script/tscript/ui/main/MainUI');
require('./assets/script/tscript/ui/main/MatchingUI');
require('./assets/script/tscript/ui/main/NavigateOtherGameIcon');
require('./assets/script/tscript/ui/main/TryOutUI');
require('./assets/script/tscript/ui/main/UpgradeUI');
require('./assets/script/tscript/ui/main/WXOpenDataUI');
require('./assets/script/tscript/ui/message/MessageUI');
require('./assets/script/tscript/ui/rank/RankItem');
require('./assets/script/tscript/ui/rank/RankUI');
require('./assets/script/tscript/ui/result/FailPanel');
require('./assets/script/tscript/ui/result/SuccessPanel');
require('./assets/script/tscript/ui/selector/SelectItem');
require('./assets/script/tscript/util/AnimationController');
require('./assets/script/tscript/util/Clock');
require('./assets/script/tscript/util/CommonUils');
require('./assets/script/tscript/util/Mathf');
require('./assets/script/tscript/util/MovieClip');
require('./assets/script/tscript/util/Quake');
require('./assets/script/tscript/util/Random');
require('./assets/script/tscript/util/SplashScreen');
require('./assets/script/tscript/util/Vector2');
require('./assets/script/tscript/wx/SystemTools');
require('./assets/script/tscript/wx/WXRank');
require('./assets/script/tscript/wx/WXSdk');

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