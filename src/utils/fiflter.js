export default {
    setPlateColor:(item)=>{
        switch (item) {
            case "1":
                return '蓝色'
            case "2":
                return '黄色'
            case "3":
                return '黑色'
            case "4":
                return '白色'
            case "5":
                return '绿色'
            case "9":
                return '其它'
        }
    },
    /**
     * 时间过滤 new Date(时间戳) ----> 时间格式化(2017-07-10)
     * @param {Constructor, String} timeNumber: new Date() or string
     * @param {*} format
     */
    format : (timeNumber, format) => {
        if (!timeNumber) {
            return;
        }
        let html,
            timetemp =
            typeof timeNumber == "object" ? timeNumber : new Date(Number(timeNumber)),
            year = timetemp.getFullYear(),
            month = timetemp.getMonth() + 1,
            day = timetemp.getDate(),
            hours = timetemp.getHours(),
            mins = timetemp.getMinutes(),
            seconds = timetemp.getSeconds();
        switch (format) {
            case "MM-dd HH":
                html =
                    (month < 10 ? "0" + month : month) +
                    "-" +
                    (day < 10 ? "0" + day : day) +
                    " " +
                    (hours < 10 ? "0" + hours : hours);
                break;
            case "yyyy":
                html = year + "";
                break;
            case "yyyy-MM":
                html = year + "-" + (month < 10 ? "0" + month : month);
                break;
            case "yyyy-MM-dd":
                html =
                    year +
                    "-" +
                    (month < 10 ? "0" + month : month) +
                    "-" +
                    (day < 10 ? "0" + day : day);
                break;
            case "yyyy-MM-dd start":
                html =
                    year +
                    "-" +
                    (month < 10 ? "0" + month : month) +
                    "-" +
                    (day < 10 ? "0" + day : day) +
                    " 00:00:00";
                break;
            case "yyyy-MM-dd end":
                html =
                    year +
                    "-" +
                    (month < 10 ? "0" + month : month) +
                    "-" +
                    (day < 10 ? "0" + day : day) +
                    " 23:59:59";
                break;
            case "yyyy-MM-dd HH:mm:ss":
                html =
                    year +
                    "-" +
                    (month < 10 ? "0" + month : month) +
                    "-" +
                    (day < 10 ? "0" + day : day) +
                    " " +
                    (hours < 10 ? "0" + hours : hours) +
                    ":" +
                    (mins < 10 ? "0" + mins : mins) +
                    ":" +
                    (seconds < 10 ? "0" + seconds : seconds);
                break;
            case "yyyy/MM/dd HH:mm:ss":
                html =
                    year +
                    "/" +
                    (month < 10 ? "0" + month : month) +
                    "/" +
                    (day < 10 ? "0" + day : day) +
                    " " +
                    (hours < 10 ? "0" + hours : hours) +
                    ":" +
                    (mins < 10 ? "0" + mins : mins) +
                    ":" +
                    (seconds < 10 ? "0" + seconds : seconds);
                break;
            case "yyyy/MM/dd HH:mm":
                html =
                    year +
                    "/" +
                    (month < 10 ? "0" + month : month) +
                    "/" +
                    (day < 10 ? "0" + day : day) +
                    " " +
                    (hours < 10 ? "0" + hours : hours) +
                    ":" +
                    (mins < 10 ? "0" + mins : mins);
                break;
            case "HH:mm":
                html =
                    (hours < 10 ? "0" + hours : hours) +
                    ":" +
                    (mins < 10 ? "0" + mins : mins);
                break;
            case "HH:mm:ss":
                html =
                    (hours < 10 ? "0" + hours : hours) +
                    ":" +
                    (mins < 10 ? "0" + mins : mins) +
                    ":" +
                    (seconds < 10 ? "0" + seconds : seconds);
                break;
            default:
                html =
                    year +
                    "-" +
                    (month < 10 ? "0" + month : month) +
                    "-" +
                    (day < 10 ? "0" + day : day) +
                    " " +
                    (hours < 10 ? "0" + hours : hours) +
                    ":" +
                    (mins < 10 ? "0" + mins : mins) +
                    ":" +
                    (seconds < 10 ? "0" + seconds : seconds);
                break;
        }
        return html;
    },
    setPf : (item) => {
        switch(item){
            case "0":
                return '零排放'
            case "1":
                return '国一'
            case "2":
                return '国二'
            case "3":
                return '国三'
            case "4":
                return '国四'
            case "5":
                return '国五'
            case "a":
                return '国六a'
            case "b":
                return '国六b'
        }
    }
}