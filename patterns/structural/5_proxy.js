function request(url) {
    return `response - ${url}`
}

let cache = new Set();

const proxy = new Proxy(request, {
    apply(target, thisArg, arg) {
        const url = arg[0];
        if (cache.has(url)) {
            return `Response from cache - ${url}`
        } else {
            cache.add(url);
            return Reflect.apply(target, thisArg, arg);
        }
    }
});