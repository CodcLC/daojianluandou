
(function () {
var scripts = [{"deps":{"./assets/script/TestPhysics":2,"./assets/migration/use_v2.1-2.2.1_cc.Toggle_event":5,"./assets/script/tscript/audio/BgSoundClip":12,"./assets/script/tscript/configdata/KnifeConfigData":18,"./assets/script/tscript/config/Config":19,"./assets/script/tscript/event/CustomEventType":21,"./assets/script/tscript/item/Item":22,"./assets/script/tscript/ui/base/SelectView":24,"./assets/script/tscript/audio/SoundClip":28,"./assets/script/tscript/ui/selector/SelectItem":30,"./assets/script/tscript/Launch":31,"./assets/script/tscript/configdata/AccountRankData":32,"./assets/script/tscript/configdata/LevelConfigData":33,"./assets/script/tscript/Test":34,"./assets/script/tscript/core/DataStorage":36,"./assets/script/tscript/configdata/NameConfigData":37,"./assets/script/tscript/core/ResourcesPool":38,"./assets/script/tscript/core/ResourcesManager":39,"./assets/script/tscript/data/LevelData":44,"./assets/script/tscript/ui/base/TabButton":46,"./assets/script/tscript/ui/base/BaseUI":51,"./assets/script/tscript/ui/common/PopupMsg":58,"./assets/script/tscript/ui/rank/RankItem":61,"./assets/script/tscript/util/Random":63,"./assets/script/tscript/util/AnimationController":66,"./assets/script/tscript/util/Clock":67,"./assets/script/tscript/util/Mathf":68,"./assets/script/tscript/wx/SystemTools":69,"./assets/script/tscript/util/Vector2":70,"./assets/script/tscript/util/SplashScreen":71,"./assets/script/tscript/util/CommonUils":72,"./assets/script/tscript/wx/WXRank":73,"./assets/script/tscript/gamescene/GameScene":1,"./assets/script/tscript/core/GameManager":3,"./assets/script/tscript/gamescene/PlayerAI":6,"./assets/script/tscript/ui/main/MainUI":4,"./assets/script/tscript/util/MovieClip":8,"./assets/script/tscript/wx/WXSdk":7,"./assets/script/tscript/gamescene/PlayerController":9,"./assets/script/tscript/gamescene/Mark":10,"./assets/script/tscript/core/DataManager":11,"./assets/script/tscript/gamescene/Player":14,"./assets/script/tscript/gamescene/KnifePool":16,"./assets/script/tscript/gamescene/Knife":17,"./assets/script/tscript/Main":27,"./assets/script/tscript/data/PlayerData":20,"./assets/script/tscript/ui/main/TryOutUI":13,"./assets/script/tscript/ui/main/AccountUI":15,"./assets/script/tscript/core/SoundManager":35,"./assets/script/tscript/gamescene/Body":40,"./assets/script/tscript/gamescene/Barrier":41,"./assets/script/tscript/gamescene/BlackHole":42,"./assets/script/tscript/gamescene/Joystick":43,"./assets/script/tscript/gamescene/Guide":45,"./assets/script/tscript/gamescene/Wall":47,"./assets/script/tscript/gamescene/CameraFollow":49,"./assets/script/tscript/ui/UIManager":52,"./assets/script/tscript/ui/common/PopupText":23,"./assets/script/tscript/util/Quake":65,"./assets/script/tscript/ui/result/FailPanel":25,"./assets/script/tscript/ui/rank/RankUI":26,"./assets/script/tscript/ui/message/MessageUI":29,"./assets/script/tscript/ui/base/CustomButton":48,"./assets/script/tscript/ui/base/View":50,"./assets/script/tscript/ui/main/LevelIcon":53,"./assets/script/tscript/ui/base/TabSelectView":54,"./assets/script/tscript/ui/main/DuanWei":55,"./assets/script/tscript/ui/main/UpgradeUI":56,"./assets/script/tscript/ui/main/MatchingUI":57,"./assets/script/tscript/ui/main/LevelMessageUI":59,"./assets/script/tscript/ui/main/WXOpenDataUI":60,"./assets/script/tscript/ui/main/NavigateOtherGameIcon":64,"./assets/script/tscript/ui/result/SuccessPanel":62},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../ui/UIManager":52,"../core/GameManager":3,"./Player":14,"./Knife":17,"../util/Clock":67,"./Wall":47,"../util/Random":63,"../wx/WXSdk":7,"./CameraFollow":49,"../core/DataManager":11,"../audio/SoundClip":28,"../core/SoundManager":35,"../item/Item":22,"../audio/BgSoundClip":12,"./PlayerAI":6},"path":"preview-scripts/assets/script/tscript/gamescene/GameScene.js"},{"deps":{},"path":"preview-scripts/assets/script/TestPhysics.js"},{"deps":{"../gamescene/Mark":10,"../gamescene/Joystick":43,"../gamescene/Guide":45,"../util/MovieClip":8,"./ResourcesManager":39,"../gamescene/Player":14,"./ResourcesPool":38,"../ui/common/PopupText":23,"../util/Random":63,"../item/Item":22,"../gamescene/BlackHole":42,"../gamescene/Knife":17},"path":"preview-scripts/assets/script/tscript/core/GameManager.js"},{"deps":{"../../gamescene/GameScene":1,"../base/BaseUI":51,"../../core/DataManager":11,"../../core/GameManager":3,"../UIManager":52,"../../wx/WXSdk":7,"../../gamescene/PlayerController":9,"./TryOutUI":13,"./LevelIcon":53},"path":"preview-scripts/assets/script/tscript/ui/main/MainUI.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.1-2.2.1_cc.Toggle_event.js"},{"deps":{"./Player":14,"../util/Random":63,"./GameScene":1,"../util/Vector2":70,"../core/GameManager":3,"../util/Mathf":68},"path":"preview-scripts/assets/script/tscript/gamescene/PlayerAI.js"},{"deps":{"./SystemTools":69},"path":"preview-scripts/assets/script/tscript/wx/WXSdk.js"},{"deps":{"./Mathf":68},"path":"preview-scripts/assets/script/tscript/util/MovieClip.js"},{"deps":{"../util/Mathf":68,"../core/GameManager":3,"./Player":14},"path":"preview-scripts/assets/script/tscript/gamescene/PlayerController.js"},{"deps":{"./Player":14},"path":"preview-scripts/assets/script/tscript/gamescene/Mark.js"},{"deps":{"./DataStorage":36,"./ResourcesManager":39,"../event/CustomEventType":21,"../data/PlayerData":20,"../data/LevelData":44},"path":"preview-scripts/assets/script/tscript/core/DataManager.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/audio/BgSoundClip.js"},{"deps":{"../../wx/WXSdk":7,"../../util/Random":63,"../../util/Clock":67,"../../core/GameManager":3,"../../gamescene/GameScene":1,"../../core/DataManager":11,"../base/BaseUI":51,"../UIManager":52,"../../util/Mathf":68,"./MainUI":4},"path":"preview-scripts/assets/script/tscript/ui/main/TryOutUI.js"},{"deps":{"../core/GameManager":3,"./KnifePool":16,"./Knife":17,"./Body":40,"../util/Random":63,"../core/DataManager":11,"./GameScene":1,"../item/Item":22,"../audio/SoundClip":28,"../core/SoundManager":35,"../util/Mathf":68},"path":"preview-scripts/assets/script/tscript/gamescene/Player.js"},{"deps":{"../../core/GameManager":3,"../base/BaseUI":51,"../../gamescene/GameScene":1,"../../gamescene/Player":14,"../../core/DataManager":11,"../UIManager":52,"./MainUI":4,"../../util/Mathf":68,"../../core/SoundManager":35,"../../wx/WXSdk":7,"./LevelIcon":53,"../../audio/SoundClip":28},"path":"preview-scripts/assets/script/tscript/ui/main/AccountUI.js"},{"deps":{"../util/Random":63,"./Knife":17,"./Player":14,"../core/DataManager":11,"../core/GameManager":3},"path":"preview-scripts/assets/script/tscript/gamescene/KnifePool.js"},{"deps":{"../core/ResourcesPool":38,"../util/Random":63,"./GameScene":1,"../core/GameManager":3,"./KnifePool":16,"./Player":14,"../wx/WXSdk":7,"./CameraFollow":49,"../core/SoundManager":35,"./BlackHole":42,"../audio/SoundClip":28},"path":"preview-scripts/assets/script/tscript/gamescene/Knife.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/configdata/KnifeConfigData.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/config/Config.js"},{"deps":{"../wx/WXSdk":7},"path":"preview-scripts/assets/script/tscript/data/PlayerData.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/event/CustomEventType.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/item/Item.js"},{"deps":{"../../core/ResourcesPool":38},"path":"preview-scripts/assets/script/tscript/ui/common/PopupText.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/ui/base/SelectView.js"},{"deps":{"../base/View":50},"path":"preview-scripts/assets/script/tscript/ui/result/FailPanel.js"},{"deps":{"../../core/GameManager":3,"../../gamescene/Player":14,"../../gamescene/GameScene":1,"./RankItem":61},"path":"preview-scripts/assets/script/tscript/ui/rank/RankUI.js"},{"deps":{"./core/DataManager":11,"./core/GameManager":3,"./wx/WXSdk":7},"path":"preview-scripts/assets/script/tscript/Main.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/audio/SoundClip.js"},{"deps":{"../../audio/SoundClip":28,"../../core/SoundManager":35,"../base/BaseUI":51},"path":"preview-scripts/assets/script/tscript/ui/message/MessageUI.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/ui/selector/SelectItem.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/Launch.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/configdata/AccountRankData.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/configdata/LevelConfigData.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/Test.js"},{"deps":{"../audio/BgSoundClip":12,"../audio/SoundClip":28},"path":"preview-scripts/assets/script/tscript/core/SoundManager.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/core/DataStorage.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/configdata/NameConfigData.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/core/ResourcesPool.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/core/ResourcesManager.js"},{"deps":{"./Knife":17,"./Player":14},"path":"preview-scripts/assets/script/tscript/gamescene/Body.js"},{"deps":{"./GameScene":1,"../util/Random":63,"../core/GameManager":3},"path":"preview-scripts/assets/script/tscript/gamescene/Barrier.js"},{"deps":{"./Barrier":41,"../util/Random":63,"../core/GameManager":3,"./GameScene":1,"./Player":14,"../audio/SoundClip":28,"../ui/UIManager":52,"../core/SoundManager":35},"path":"preview-scripts/assets/script/tscript/gamescene/BlackHole.js"},{"deps":{"./GameScene":1,"../core/GameManager":3},"path":"preview-scripts/assets/script/tscript/gamescene/Joystick.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/data/LevelData.js"},{"deps":{"../util/MovieClip":8},"path":"preview-scripts/assets/script/tscript/gamescene/Guide.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/ui/base/TabButton.js"},{"deps":{"../core/GameManager":3,"./GameScene":1},"path":"preview-scripts/assets/script/tscript/gamescene/Wall.js"},{"deps":{"../../audio/SoundClip":28,"../../core/SoundManager":35},"path":"preview-scripts/assets/script/tscript/ui/base/CustomButton.js"},{"deps":{"../core/GameManager":3,"../util/Quake":65,"./Player":14,"./GameScene":1,"../util/Vector2":70},"path":"preview-scripts/assets/script/tscript/gamescene/CameraFollow.js"},{"deps":{"../UIManager":52},"path":"preview-scripts/assets/script/tscript/ui/base/View.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/ui/base/BaseUI.js"},{"deps":{"./base/View":50,"./main/MainUI":4,"./result/SuccessPanel":62,"./main/AccountUI":15,"./message/MessageUI":29,"./rank/RankUI":26,"./main/MatchingUI":57,"./main/WXOpenDataUI":60,"./main/UpgradeUI":56,"./main/LevelMessageUI":59,"./main/TryOutUI":13},"path":"preview-scripts/assets/script/tscript/ui/UIManager.js"},{"deps":{"../../core/GameManager":3,"../../core/DataManager":11},"path":"preview-scripts/assets/script/tscript/ui/main/LevelIcon.js"},{"deps":{"./SelectView":24,"./TabButton":46,"./View":50},"path":"preview-scripts/assets/script/tscript/ui/base/TabSelectView.js"},{"deps":{"../../core/DataManager":11},"path":"preview-scripts/assets/script/tscript/ui/main/DuanWei.js"},{"deps":{"../../wx/WXSdk":7,"./LevelIcon":53,"../base/BaseUI":51},"path":"preview-scripts/assets/script/tscript/ui/main/UpgradeUI.js"},{"deps":{"../base/BaseUI":51,"../../util/Random":63,"../../core/GameManager":3,"../../gamescene/GameScene":1,"../../core/ResourcesManager":39,"../../core/DataManager":11,"../../wx/WXSdk":7},"path":"preview-scripts/assets/script/tscript/ui/main/MatchingUI.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/ui/common/PopupMsg.js"},{"deps":{"../base/BaseUI":51,"./LevelIcon":53,"../../core/DataManager":11,"../../util/Mathf":68},"path":"preview-scripts/assets/script/tscript/ui/main/LevelMessageUI.js"},{"deps":{"../../wx/WXSdk":7},"path":"preview-scripts/assets/script/tscript/ui/main/WXOpenDataUI.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/ui/rank/RankItem.js"},{"deps":{"../../gamescene/GameScene":1,"../base/BaseUI":51},"path":"preview-scripts/assets/script/tscript/ui/result/SuccessPanel.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/util/Random.js"},{"deps":{"../../wx/WXSdk":7},"path":"preview-scripts/assets/script/tscript/ui/main/NavigateOtherGameIcon.js"},{"deps":{"./Random":63},"path":"preview-scripts/assets/script/tscript/util/Quake.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/util/AnimationController.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/util/Clock.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/util/Mathf.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/wx/SystemTools.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/util/Vector2.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/util/SplashScreen.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/util/CommonUils.js"},{"deps":{},"path":"preview-scripts/assets/script/tscript/wx/WXRank.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            requestScript = scripts[ m.deps[request] ];
        }
        
        path = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                path = name2path[request];
            }

            if (!path) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            path = formatPath(requestScript.path);
        }

        m = modules[path];
        
        if (!m) {
            console.warn('Can not find module for path : ' + path);
            return null;
        }

        if (!m.module && m.func) {
            m.func();
        }

        if (!m.module) {
            console.warn('Can not find module.module for path : ' + path);
            return null;
        }

        return m.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }
                console.time && console.time('eval __quick_compile_project__');
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd('eval __quick_compile_project__');
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    