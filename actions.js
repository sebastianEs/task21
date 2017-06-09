

//   EXEMPEL STATE

state={
    accountId: [{
        id: '1',
        accountNumber: '123456',
        accountType: 'savings'
    }],
    amount: Math.abs(amount), 
    
}

//   ACTIONS

const LOGIN_ACCOUNT = 'LOGIN_ACCOUNT',
    ADD_TRANSACTION = 'ADD_TRANSACTION',
    SHOW_TRANCSACTIONS = 'SHOW_TRANSACTIONS',
    WITHDRAW = 'WITHDRAW',
      
      
//   ACTION FUNCTIONS
      
function actionLogin(login) {
    return {type: LOGIN_ACCOUNT, login}
}
function actionAddTransaction(amount) {
    return {type: ADD_TRANSACTION, amount, accountId}
}
function actionShowTransactions(accountId) {
    return {type: SHOW_TRANCSACTIONS, accountId}
}
function withdraw(amount,accountId) {
    return {type: WITHDRAW, amount, accountId}
}