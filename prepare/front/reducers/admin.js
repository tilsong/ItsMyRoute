export const initialState = {
    admin: [{
        adminId: 'adminA',
        adminPassword: 'qwer1234',
        adminEmail: 'thddmstjrwkd@naver.com'
    },
    {
        adminId: 'adminB',
        adminPassword: 'qwer1234',
        adminEmail: 'thddmstjrwkd@naver.com'
    }]
}

export const ADMIN = 'ADMIN';

export const adminAction = () => {
    return {
        type: ADMIN
    }
}

const admin = (state = initialState, action) => {
    switch (action.type) {
        case  ADMIN  : 
            return {
                ...state
            };
        default : 
            return state;
    }
}

export default admin;

