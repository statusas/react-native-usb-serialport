
# react-native-usb-serialport

## Fork diff
Add multi usb serial port connections support after forked from [react-native-serialport](https://github.com/melihyarikkaya/react-native-serialport)

```javascript
-  $ npm install --save react-native-serialport
-  $ npm install --save react-native-usb-serialport

-  import { RNSerialport, definitions, actions } from "react-native-serialport";
-  import { RNSerialport, definitions, actions } from "react-native-usb-serialport";

-  RNSerialport.disconnect();
+  RNSerialport.disconnectDevice('/dev/bus/usb/001/007');

+  RNSerialport.disconnectAllDevices();

-  RNSerialport.isOpen();
+  RNSerialport.isOpen('/dev/bus/usb/001/007');

-  RNSerialport.writeBytes(byte[] bytes);
+  RNSerialport.writeBytes('/dev/bus/usb/001/007', [0, 1, 2, 3]);

-  RNSerialport.writeString('HELLO');
+  RNSerialport.writeString('/dev/bus/usb/001/007', 'HELLO');

-  RNSerialport.writeBase64(String message);
+  RNSerialport.writeBase64('/dev/bus/usb/001/007', 'SEVMTE8=');

-  RNSerialport.writeHexString(String message);
+  RNSerialport.writeHexString('/dev/bus/usb/001/007', '48454C4C4F');
```
#### This library is for multi usb serial port communication on android platform

### This module uses the [felHR85/UsbSerial](https://github.com/felHR85/UsbSerial) library

### Documents (note above `Fork diff`)
1. [Download & Installation](https://github.com/melihyarikkaya/react-native-serialport/wiki/Download-&-Installation)
2. [Auto Connection](https://github.com/melihyarikkaya/react-native-serialport/wiki/Auto-Connection)
3. [Manual Connection](https://github.com/melihyarikkaya/react-native-serialport/wiki/Manual-Connection)
4. [Methods](https://github.com/melihyarikkaya/react-native-serialport/wiki/Methods)
5. [Error Descriptions](https://github.com/melihyarikkaya/react-native-serialport/wiki/Error-Descriptions)

### DEFAULT DEFINITIONS
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

### Java Package Name
 _com.melihyarikkaya.rnserialport_
