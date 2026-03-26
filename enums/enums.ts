enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS,
    FAILED
}

enum StatusCodeString {
    SUCCESS = 's',
    IN_PROCESS = 'p',
    FAILED = 'f'
}

enum StatusCodeNumStr {
    SUCCESS = 1,
    IN_PROCESS = 'p',
    FAILED = 'f'
}

const res = {
    messsage: 'Платеж успешен',
    statusCode: StatusCode.SUCCESS
}



function action(status: StatusCodeNumStr) {

}

action(StatusCodeNumStr.SUCCESS)


//s - успех
//p - в процессе
//f - отклонен