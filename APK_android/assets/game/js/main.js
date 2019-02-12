var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Created by yangsong on 14/12/18.
 * 基类
 */
var BaseClass = (function () {
    function BaseClass() {
    }
    /**
     * 获取一个单例
     * @returns {any}
     */
    BaseClass.getInstance = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var Class = this;
        if (!Class._instance) {
            var argsLen = args.length;
            if (argsLen == 0) {
                Class._instance = new Class();
            }
            else if (argsLen == 1) {
                Class._instance = new Class(args[0]);
            }
            else if (argsLen == 2) {
                Class._instance = new Class(args[0], args[1]);
            }
            else if (argsLen == 3) {
                Class._instance = new Class(args[0], args[1], args[2]);
            }
            else if (argsLen == 4) {
                Class._instance = new Class(args[0], args[1], args[2], args[3]);
            }
            else if (argsLen == 5) {
                Class._instance = new Class(args[0], args[1], args[2], args[3], args[4]);
            }
        }
        return Class._instance;
    };
    return BaseClass;
}());
__reflect(BaseClass.prototype, "BaseClass");
var APK = (function (_super) {
    __extends(APK, _super);
    function APK() {
        return _super.call(this) || this;
    }
    APK.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    APK.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        var shareLayer = ShareLayer.getInstance();
        this.addChild(shareLayer);
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.TouchFunc, this);
        this.btnShare.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            ShareLayer.getInstance().show();
        }, this);
    };
    APK.prototype.TouchFunc = function () {
        window.location.href = 'http://www.hkj67.com/duan/Billiard1.apk';
        // let shareqqzonestring = "http://www.hkj67.com/duan/Billiard1.apk";
        // window.open(shareqqzonestring, 'newwindow3', 'height=400,width=400,top=100,left=100');
    };
    return APK;
}(eui.Component));
__reflect(APK.prototype, "APK", ["eui.UIComponent", "egret.DisplayObject"]);
var App = (function () {
    function App() {
    }
    Object.defineProperty(App, "commons", {
        get: function () {
            return Commons.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    App.bgSpeedNormalOffset = 2;
    App.bgSpeedUpOffset = 4;
    App.bgOffset = App.bgSpeedNormalOffset;
    App.isSpeedUp = false;
    App.birdVelocity = 0; //当前速度 px/f
    App.birdAcceleration = 0.5; //加速度 px/f^2
    App.birdTouchV = -8; //点击加速度
    App.isCheat = false; //是否作弊
    App.testFlag = false;
    return App;
}());
__reflect(App.prototype, "App");
var GameStatue = (function () {
    function GameStatue() {
    }
    GameStatue.GAME_END = 0;
    GameStatue.GAME_START = 1;
    GameStatue.GAME_PAUSE = 2;
    return GameStatue;
}());
__reflect(GameStatue.prototype, "GameStatue");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var Commons = (function (_super) {
    __extends(Commons, _super);
    function Commons() {
        return _super.call(this) || this;
    }
    Commons.prototype.getBitmap = function (imgName, x, y, isCenterAlign) {
        if (isCenterAlign === void 0) { isCenterAlign = true; }
        var bitmap = new egret.Bitmap(RES.getRes(imgName));
        if (isCenterAlign) {
            bitmap.anchorOffsetX = bitmap.width / 2;
            bitmap.anchorOffsetY = bitmap.height / 2;
        }
        bitmap.x = x;
        bitmap.y = y;
        return bitmap;
    };
    Commons.prototype.mobileShake = function (time) {
        if (navigator["vibrate"]) {
            navigator.vibrate([time]);
        }
    };
    Commons.prototype.addHandShakeShake = function () {
        var _this = this;
        if (window && window["DeviceMotionEvent"]) {
            var second = 2000; //秒
            var starttime = egret.getTimer(); //开始时间
            var startX, startY, startZ, endX, endY, endZ; //开始坐标和结束坐标
            startX = startY = startZ = endX = endY = endZ = 0;
            window.addEventListener('devicemotion', function (e) {
                var acceleration = e.accelerationIncludingGravity; //
                var endtime = egret.getTimer(); //结束时间
                if ((endtime - starttime) > 100) {
                    var diffTime = endtime - starttime; //时间差
                    startX = acceleration.x;
                    startY = acceleration.y;
                    startZ = acceleration.z;
                    var speed = Math.abs(startX + startY + startZ - endX - endY - endZ) / diffTime * 10000;
                    if (speed > second) {
                        _this.mobileShake(500);
                        egret.Tween.get(_this).wait(100).call(function () {
                            alert("恭喜你触发摇一摇，然而并没有什么卵用！");
                        });
                    }
                    starttime = endtime;
                    endX = startX;
                    endY = startY;
                    endZ = startZ;
                }
            }, false);
        }
    };
    return Commons;
}(BaseClass));
__reflect(Commons.prototype, "Commons");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        this.addChild(new egret.Bitmap(RES.getRes("bg_jpg")));
        App.stageWidth = this.stage.stageWidth;
        App.stageHeight = this.stage.stageHeight;
        // this.addChild(new APK());
        var btn = new eui.Button();
        btn.label = "百度";
        btn.x = btn.y = 300;
        this.addChild(btn);
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            egret.ExternalInterface.call("ri", "nihao");
        }, this);
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
var ShareLayer = (function (_super) {
    __extends(ShareLayer, _super);
    function ShareLayer() {
        var _this = _super.call(this) || this;
        _this.container = '德玛西亚';
        _this.url = 'www.baidu.com';
        _this.imgUrl = 'http://duanjianbo.cn/img/img.jpg';
        _this.init();
        return _this;
    }
    ShareLayer.getInstance = function () {
        if (!this.ins) {
            this.ins = new ShareLayer();
        }
        return this.ins;
    };
    ShareLayer.prototype.init = function () {
        var _this = this;
        var shape = new egret.Shape();
        this.shape = shape;
        shape.graphics.beginFill(0x000000);
        shape.graphics.drawRect(0, 0, App.stageWidth, App.stageHeight);
        shape.graphics.endFill();
        shape.alpha = 0.5;
        shape.visible = false;
        shape.touchEnabled = true;
        shape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            e.stopPropagation();
            _this.hide();
        }, this);
        this.addChild(shape);
        var qqZone = App.commons.getBitmap("QQZone_png", App.stageWidth / 3 * 1 - App.stageWidth / 6, App.stageHeight + 50);
        qqZone.width = qqZone.height = 100;
        this.addChild(qqZone);
        this.qqZone = qqZone;
        qqZone.touchEnabled = true;
        qqZone.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            e.stopPropagation();
            _this.share(3);
        }, this);
        var tencentWeibo = App.commons.getBitmap("TencentWeibo_png", App.stageWidth / 3 * 2 - App.stageWidth / 6, App.stageHeight + 50);
        tencentWeibo.width = tencentWeibo.height = 100;
        this.addChild(tencentWeibo);
        this.tencentWeibo = tencentWeibo;
        tencentWeibo.touchEnabled = true;
        tencentWeibo.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            e.stopPropagation();
            _this.share(2);
        }, this);
        var sina = App.commons.getBitmap("sina_png", App.stageWidth - App.stageWidth / 6, App.stageHeight + 50);
        sina.width = sina.height = 100;
        this.addChild(sina);
        this.sina = sina;
        sina.touchEnabled = true;
        sina.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            e.stopPropagation();
            _this.share(1);
        }, this);
    };
    ShareLayer.prototype.show = function () {
        this.shape.visible = true;
        egret.Tween.get(this.shape).to({ alpha: 0.5 }, 500);
        egret.Tween.get(this.qqZone).to({ y: App.stageHeight - 100 }, 300, egret.Ease.backOut);
        egret.Tween.get(this.tencentWeibo).to({ y: App.stageHeight - 100 }, 400, egret.Ease.backOut);
        egret.Tween.get(this.sina).to({ y: App.stageHeight - 100 }, 500, egret.Ease.backOut);
    };
    ShareLayer.prototype.hide = function () {
        var _this = this;
        egret.Tween.get(this.shape).to({ alpha: 0 }, 500).call(function () { _this.shape.visible = false; });
        egret.Tween.get(this.qqZone).to({ y: App.stageHeight + 100 }, 300, egret.Ease.backIn);
        egret.Tween.get(this.tencentWeibo).to({ y: App.stageHeight + 100 }, 400, egret.Ease.backIn);
        egret.Tween.get(this.sina).to({ y: App.stageHeight + 100 }, 500, egret.Ease.backIn);
    };
    ShareLayer.prototype.share = function (type, container, url, imgUrl) {
        container && (this.container = container);
        url && (this.url = url);
        imgUrl && (this.imgUrl = imgUrl);
        switch (type) {
            case 1:
                this.shareWeibo();
                break;
            case 2:
                this.shareTencentWeibo();
                break;
            case 3:
                this.shareQQZone();
                break;
        }
    };
    //分享到新浪微博、腾讯微博、QQ空间
    ShareLayer.prototype.shareWeibo = function () {
        //分享到新浪微博
        var sharesinastring = 'http://v.t.sina.com.cn/share/share.php?title=' + this.container + '&url=' + this.url + '&content=utf-8&sourceUrl=' + this.url + '&pic=' + this.imgUrl;
        window.open(sharesinastring, 'newwindow1', 'height=400,width=400,top=100,left=100');
    };
    ShareLayer.prototype.shareTencentWeibo = function () {
        //分享到疼讯微博
        var shareqqstring = 'http://v.t.qq.com/share/share.php?title=' + this.container + '&url=' + this.url + '&pic=' + this.imgUrl;
        window.open(shareqqstring, 'newwindow2', 'height=100,width=100,top=100,left=100');
    };
    ShareLayer.prototype.shareQQZone = function () {
        //分享到QQ空间
        var shareqqzonestring = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=' + this.container + '&url=' + this.url + '&pics=' + this.imgUrl;
        window.open(shareqqzonestring, 'newwindow3', 'height=400,width=400,top=100,left=100');
    };
    return ShareLayer;
}(egret.DisplayObjectContainer));
__reflect(ShareLayer.prototype, "ShareLayer");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else if (typeof generateJSON !== 'undefined') {
            if (url.indexOf(".exml") > -1) {
                var dataPath = url.split("/");
                dataPath.pop();
                var dirPath = dataPath.join("/") + "_EUI.json";
                if (!generateJSON.paths[url]) {
                    RES.getResByUrl(dirPath, function (data) {
                        window["JSONParseClass"]["setData"](data);
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, _this);
                    }, this, RES.ResourceItem.TYPE_JSON);
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON.paths[url]);
                    }, this);
                }
            }
            else {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateJSON);
                }, this);
            }
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
