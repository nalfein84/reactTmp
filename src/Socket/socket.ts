import io from "socket.io-client";
import { SOCKET_URL } from "../Config";
const Singleton = (function () {
    let instance: any;
    function createInstance() {
        const object = io(SOCKET_URL, { transports: ['websocket'], jsonp: false });
        return object;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();
const socket = Singleton.getInstance();
export default socket;






