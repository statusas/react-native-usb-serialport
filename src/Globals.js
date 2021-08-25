import { NativeEventEmitter, NativeModules } from 'react-native';
const Sockets = NativeModules.RNSerialport;

let instanceNumber = 0;

function getNextId() {
    return instanceNumber++;
}

const nativeEventEmitter = new NativeEventEmitter(Sockets);

export { nativeEventEmitter, getNextId };
