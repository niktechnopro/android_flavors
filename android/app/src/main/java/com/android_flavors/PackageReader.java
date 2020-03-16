package com.android_flavors;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.facebook.react.bridge.Callback;


public class PackageReader extends ReactContextBaseJavaModule {
    private String TAG = "PackageReader";
    private static ReactApplicationContext reactContext;

    public PackageReader(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    public String getName(){
        return TAG;
    } 

    @ReactMethod
    public void packageReader(final Callback callback){
        String pcg = "some package";
        try {
          pcg = reactContext.getPackageName();
        } catch (Exception e) {
          // e.printStackTrace();
          pcg = "error reading package" + e.getMessage();
        }
        callback.invoke(pcg);
    }


}