
# react-native-usb-serialport
This library is for multi usb serial port communication on android platform, uses the [felHR85/UsbSerial](https://github.com/felHR85/UsbSerial) library

## Fork diff
Add multi usb serial port connections support after forked from [react-native-serialport](https://github.com/melihyarikkaya/react-native-serialport)

```javascript
-  $ npm install --save react-native-serialport
+  $ npm install --save react-native-usb-serialport

-  import { RNSerialport, definitions, actions } from "react-native-serialport";
+  import { RNSerialport, definitions, actions } from "react-native-usb-serialport";

-  RNSerialport.disconnect();
+  RNSerialport.disconnectDevice('/dev/bus/usb/001/007');

+  RNSerialport.disconnectAllDevices();

-  RNSerialport.isOpen();
+  RNSerialport.isOpen('/dev/bus/usb/001/007');

-  RNSerialport.writeBytes([0, 1, 2, 3]);
+  RNSerialport.writeBytes('/dev/bus/usb/001/007', [0, 1, 2, 3]);

-  RNSerialport.writeString('HELLO');
+  RNSerialport.writeString('/dev/bus/usb/001/007', 'HELLO');

-  RNSerialport.writeBase64('SEVMTE8=');
+  RNSerialport.writeBase64('/dev/bus/usb/001/007', 'SEVMTE8=');

-  RNSerialport.writeHexString('48454C4C4F');
+  RNSerialport.writeHexString('/dev/bus/usb/001/007', '48454C4C4F');
```

### [USB device access pop-up suppression](https://stackoverflow.com/questions/12388914/usb-device-access-pop-up-suppression/15151075#15151075)
Add the following android intent to `android/app/src/main/AndroidManifest.xml` so that permissions are remembered on android (VS not remembered by `usbManager.requestPermission()`)
```
<activity
    ...
    ...
    >
    <intent-filter>
        <action android:name="android.hardware.usb.action.USB_DEVICE_ATTACHED" />
    </intent-filter>
    <meta-data android:name="android.hardware.usb.action.USB_DEVICE_ATTACHED" android:resource="@xml/usb_device_filter" />
</activity>
```

And create a filter file in `android/app/src/main/res/xml/usb_device_filter.xml`
```
<?xml version="1.0" encoding="utf-8"?>

<resources>
    <!-- vendor-id 6790 means ch34x usb serial port -->
    <usb-device vendor-id="6790" product-id="29987" />
</resources>
```
The `vendor-id` and `product-id` here have to be given in decimal, and they can be get by `RNSerialport.getDeviceList().then(console.warn)`

## Documents (note above `Fork diff`)
1. [Download & Installation](https://github.com/melihyarikkaya/react-native-serialport/wiki/Download-&-Installation)
2. [Auto Connection](https://github.com/melihyarikkaya/react-native-serialport/wiki/Auto-Connection)
3. [Manual Connection](https://github.com/melihyarikkaya/react-native-serialport/wiki/Manual-Connection)
4. [Methods](https://github.com/melihyarikkaya/react-native-serialport/wiki/Methods)
5. [Error Descriptions](https://github.com/melihyarikkaya/react-native-serialport/wiki/Error-Descriptions)

## DEFAULT DEFINITIONS
| KEY                    | VALUE                                    |
|------------------------|------------------------------------------|
| RETURNED DATA TYPE     | INT ARRAY (Options: INTARRAY, HEXSTRING) |
| BAUND RATE             | 9600                                     |
| AUTO CONNECT BAUD RATE | 9600                                     |
| PORT INTERFACE         | -1                                       |
| DATA BIT               | 8                                        |
| STOP BIT               | 1                                        |
| PARITY                 | NONE                                     |
| FLOW CONTROL           | OFF                                      |
| DRIVER                 | AUTO                                     |

## Java Package Name
 _com.melihyarikkaya.rnserialport_
