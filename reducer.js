
let initialState = {
    login: null,
    accountId: 1,
    amount: 0,
    withdraws: []
}


function rootReducer(state = initialState, action) {
    
    switch( action.type ) {
        case LOGIN_ACCOUNT:
            let newState = Object.assign({}, state);
            newState.login = action.login;
            return newState
        case ADD_TRANSACTION:
            const newTransaction = {
                amount: action.amount,
                accountId: action.accountId
            };
            return [...state, newTransaction];
        case SHOW_TRANCSACTIONS:
            return [action.accountId];
        case WITHDRAW:
            return Object.assign({}, state, {
                withdraws: [
                    ...state.withdraws,
                    {
                        amount: action.amount,
                        accountId: action.accountId
                    }
                    
                ],
                balance: state.balance - action.amount
            })
                        }
}


const store = createStore(rootReducer);
store.dispatch(
  actionLogin,
  actionAddTransaction,
  actionShowTransactions,
  actionWithdraw
)