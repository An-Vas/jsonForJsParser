function jsonStringify(obj) {
    var type = typeof obj;

    if (type == 'undefined') {
        return undefined;
    }

    if (obj == null) {
        return 'null';
    }

    if (type == 'string') {
        return '"' + obj + '"';
    }

    if (type != 'object') { //number, etc
        return obj.toString();
    }

    if (Array.isArray(obj)) {
        var result = [];
        for (var i = 0; i < obj.length; i++) {
            result.push(jsonStringify(obj[i]));
        }
        return '[' + result.join(',') + ']';

    }

    if (type == 'object') {
        var result = [];
        for (var key in obj) {
            var k = jsonStringify(key);
            var v = jsonStringify(obj[key]);
            if (k !== undefined && v != undefined) {
                result.push(k + ':' + v);
            }
        }
        return '{' + result.join(',') + '}';
    }
}


module.exports = {
    jsonStringify
}