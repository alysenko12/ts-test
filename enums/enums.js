"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
var StatusCodeString;
(function (StatusCodeString) {
    StatusCodeString["SUCCESS"] = "s";
    StatusCodeString["IN_PROCESS"] = "p";
    StatusCodeString["FAILED"] = "f";
})(StatusCodeString || (StatusCodeString = {}));
var StatusCodeNumStr;
(function (StatusCodeNumStr) {
    StatusCodeNumStr[StatusCodeNumStr["SUCCESS"] = 1] = "SUCCESS";
    StatusCodeNumStr["IN_PROCESS"] = "p";
    StatusCodeNumStr["FAILED"] = "f";
})(StatusCodeNumStr || (StatusCodeNumStr = {}));
const res = {
    messsage: 'Платеж успешен',
    statusCode: StatusCode.SUCCESS
};
function action(status) {
}
action(StatusCodeNumStr.SUCCESS);
//s - успех
//p - в процессе
//f - отклонен
//# sourceMappingURL=enums.js.map