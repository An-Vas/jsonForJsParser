function parseJsonArr(jsonElementsArr, startPos){
    var curPos = startPos;
    var resultArr = [];
    while(jsonElementsArr[curPos] != ']'){
        if (jsonElementsArr[curPos] == "\"" || jsonElementsArr[curPos] == "\'"){
            curPos++;
        }

        var newEl = parseJsonFrom(jsonElementsArr, curPos)
        resultArr.push(newEl.value);
        curPos = newEl.pos;

        if (jsonElementsArr[curPos] == "\"" || jsonElementsArr[curPos] == "\'"){
            curPos++;
        }

        if (jsonElementsArr[curPos] == ",") {
            curPos++;
        }
    }
    curPos++;
    var result = {
        pos: curPos,
        value: resultArr
    }
    return result;
}


function parseJsonObj(jsonElementsArr, startPos){
    var curPos = startPos;
    var resultObj = {};

    while(jsonElementsArr[curPos] != '}'){
        var key = "";
        var value = "";

        if (jsonElementsArr[curPos] == "\"" || jsonElementsArr[curPos] == "\'"){
            curPos++;
        }

        key = jsonElementsArr[curPos];

        if (typeof (key) == "undefined") {
            break;
        }
        curPos++;

        if (jsonElementsArr[curPos] == "\"" || jsonElementsArr[curPos] == "\'"){
            curPos++;
        }

        if (jsonElementsArr[curPos] == ":" ){
            curPos++;
        }

        if (jsonElementsArr[curPos] == "\"" || jsonElementsArr[curPos] == "\'"){
            curPos++;
        }

        var temp = parseJsonFrom(jsonElementsArr, curPos);

        value = temp.value;
        curPos = temp.pos;

        if (jsonElementsArr[curPos] == "}"){
            resultObj[key] = value;
            break;
        }
        curPos++;

        if (jsonElementsArr[curPos] == "\"" || jsonElementsArr[curPos] == "\'"){
            curPos++;
        }

        resultObj[key] = value;

        if (jsonElementsArr[curPos] == ","){
            curPos++;
        }


    }

    curPos++;
    var result = {
        pos: curPos,
        value: resultObj
    }
    return result;

}


function parseJsonFrom(jsonElementsArr, startPos = 0){
    var result = {
        pos: startPos,
        value: null
    };

    var curPos = startPos;

    if (jsonElementsArr.length < startPos){
        return result;
    }

    if (jsonElementsArr[startPos] == '['){
        result = parseJsonArr(jsonElementsArr, startPos + 1)

    } else if (jsonElementsArr[startPos] == '{') {
        result = parseJsonObj(jsonElementsArr, startPos + 1)

    } else {
        result.value = jsonElementsArr[startPos];
        result.pos = curPos + 1;
    }


    if (jsonElementsArr.length < startPos){
        return result;
    }

    return result;
}

function parseJson(jsonString){
    var arr = jsonString.match(/\b[\w ]+|[{}\[\],:"']/g); //separating string on smth meaning parts and making an array of this parts Important parts are words and json symbols as ,:[]{}"'
    // console.log(arr);
    const updArr = arr.map(item => {
        const num = Number(item);
        return isNaN(num) ? item : num;
    });

    var res = parseJsonFrom(updArr, 0);
    return res.value;
}

module.exports = {
    parseJson
}