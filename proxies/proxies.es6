//var obj = new Proxy({}, {
//    get: function (target, key, receiver) {
//        console.log(`getting ${key}!`);
//        return Reflect.get(target, key, receiver);
//    },
//    set: function (target, key, value, receiver) {
//        console.log(`setting ${key}!`);
//        return Reflect.set(target, key, value, receiver);
//    }
//});
//

var target = {},
    handler = {
        set: function (target, key, value, receiver) {
            target[key] = value + " elo! ";
        }
    };

var proxy = new Proxy(target, handler);

proxy.something = "something";

console.log("target.something = " + target.something);