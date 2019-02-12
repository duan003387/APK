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
