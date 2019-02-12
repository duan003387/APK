package com.chuang;

import android.app.Activity;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.KeyEvent;
import android.widget.Toast;

import org.egret.runtime.launcherInterface.INativePlayer;
import org.egret.egretnativeandroid.EgretNativeAndroid;
import android.webkit.WebView;
;

//Android项目发布设置详见doc目录下的README_ANDROID.md

public class MainActivity extends Activity {
    private final String TAG = "MainActivity";
    private EgretNativeAndroid nativeAndroid;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        nativeAndroid = new EgretNativeAndroid(this);
        if (!nativeAndroid.checkGlEsVersion()) {
            Toast.makeText(this, "This device does not support OpenGL ES 2.0.",
                    Toast.LENGTH_LONG).show();
            return;
        }
        nativeAndroid.config.showFPS = true;
        nativeAndroid.config.fpsLogTime = 30;
        nativeAndroid.config.disableNativeRender = false;
        nativeAndroid.config.clearCache = false;
        nativeAndroid.config.loadingTimeout = 0;
        if (!nativeAndroid.initialize("http://tool.egret-labs.org/Weiduan/game/index.html")) {
            Toast.makeText(this, "Initialize native failed.",
                    Toast.LENGTH_LONG).show();
            return;
        }
        setContentView(nativeAndroid.getRootFrameLayout());
        setExternalInterfaces();

    }
    public WebView webview;
    public void nihao(){
        //实例化WebView对象
        webview = new WebView(this);
        //设置WebView属性，能够执行Javascript脚本
        webview.getSettings().setJavaScriptEnabled(true);
        //加载需要显示的网页
        webview.loadUrl("http://www.egret.com/");
        //设置Web视图
        setContentView(webview);
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                ad();
            }
        }, 2000);//2S后执行一次
    }
    public void ad(){
        nativeAndroid = new EgretNativeAndroid(this);
        if (!nativeAndroid.checkGlEsVersion()) {
            Toast.makeText(this, "This device does not support OpenGL ES 2.0.",
                    Toast.LENGTH_LONG).show();
            return;
        }
        nativeAndroid.config.showFPS = true;
        nativeAndroid.config.fpsLogTime = 30;
        nativeAndroid.config.disableNativeRender = false;
        nativeAndroid.config.clearCache = false;
        nativeAndroid.config.loadingTimeout = 0;
        if (!nativeAndroid.initialize("http://tool.egret-labs.org/Weiduan/game/index.html")) {
            Toast.makeText(this, "Initialize native failed.",
                    Toast.LENGTH_LONG).show();
            return;
        }
        setContentView(nativeAndroid.getRootFrameLayout());
    }
    @Override
    protected void onPause() {
        super.onPause();
        nativeAndroid.pause();
    }
    @Override
    protected void onResume() {
        super.onResume();
        nativeAndroid.resume();
    }
    @Override
    public boolean onKeyDown(final int keyCode, final KeyEvent keyEvent) {
        if (keyCode == KeyEvent.KEYCODE_BACK) {
            nativeAndroid.exitGame();
        }
        return super.onKeyDown(keyCode, keyEvent);
    }
    private void setExternalInterfaces() {
        nativeAndroid.setExternalInterface("sendToNative", new INativePlayer.INativeInterface() {
            @Override
            public void callback(String message) {
                String str = "Native get message: ";
                str += message;
                Log.d(TAG, str);
                nativeAndroid.callExternalInterface("sendToJS", str);
            }
        });
        nativeAndroid.setExternalInterface("ri", new INativePlayer.INativeInterface() {
            @Override
            public void callback(String message) {
                nihao();
            }
        });
    }
    @Override
    protected void onDestroy() {
        super.onDestroy();
    }
}
