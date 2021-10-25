const getInitial = () => {
    let memory = window.localStorage.getItem('web_memory')
    return memory ? JSON.parse(memory) : {
        login: '',
        password: '',
        islogin: false
    }
}

const initial = getInitial()

const correct_data = {
    login: 'developer21',
    password: '123456'
}

export default function appReducer(state = initial, action) {
    switch (action.type) {
        case 'INSERT_LOGIN':
            if (action.payload.login == correct_data.login && state.password == correct_data.password) {
                return { ...state, login: action.payload.login, islogin: true }
            } else {
                return { ...state, islogin: false, login: action.payload.login }
            }

        case 'INSERT_PASSWORD':
            if (state.login == correct_data.login && action.payload.password == correct_data.password) {
                return { ...state, password: action.payload.password, islogin: true }
            } else {
                return { ...state, islogin: false, password: action.payload.password }
            }
        default:
            return state
    }
}