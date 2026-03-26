interface IPayment {
    sum: number
    from: number
    to: number
}


enum PaymentStatus {
    Success = 'success',
    Failed = 'failed'
}

interface IDataSuccess {
    databaseId: number
    sum: number
    from: number
    to: number
}

interface IDataSuccess {
    databaseId: number
    sum: number
    from: number
    to: number
}

interface IDataFailed {
    errorMessage: string,
    errorCode: number
}

interface IPaymentRequest extends IPayment {

}

interface IResponse {
    status: PaymentStatus,
    data: IDataSuccess | IDataFailed
}