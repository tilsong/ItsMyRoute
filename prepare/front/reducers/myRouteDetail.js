export const initialState = {
    myRouteDetail: [
        {
            detailNum: 1,
            myRouteNum: 13,
            locationValue: 51423.5,
            locationName: 'abc',
            routeOrder: 1,
            requiredMoney: 10000,
            requiredTime: 49,
        },
        {
            detailNum: 2,
            myRouteNum: 13,
            locationValue: 23455.53,
            locationName: 'asd',
            routeOrder: 2,
            requiredMoney: 20000,
            requiredTime: 53,
        },
        {
            detailNum: 3,
            myRouteNum: 35,
            locationValue: 2543.56,
            locationName: 'sfgdbh',
            routeOrder: 1,
            requiredMoney: 20000,
            requiredTime: 12,
        },
        {
            detailNum: 4,
            myRouteNum: 35,
            locationValue: 5423.6575,
            locationName: 'vdsf',
            routeOrder: 2,
            requiredMoney: 20000,
            requiredTime: 41,
        },
        {
            detailNum: 5,
            myRouteNum: 35,
            locationValue: 4567.7,
            locationName: 'wer',
            routeOrder: 3,
            requiredMoney: 20000,
            requiredTime: 52,
        },
        {
            detailNum: 6,
            myRouteNum: 35,
            locationValue: 8476.5,
            locationName: 'wre',
            routeOrder: 4,
            requiredMoney: 20000,
            requiredTime: 34,
        },
        {
            detailNum: 7,
            myRouteNum: 37,
            locationValue: 5432.876,
            locationName: 'sfd',
            routeOrder: 1,
            requiredMoney: 20000,
            requiredTime: 42,
        },
        {
            detailNum: 8,
            myRouteNum: 37,
            locationValue: 45868.87,
            locationName: 'vxcb',
            routeOrder: 2,
            requiredMoney: 20000,
            requiredTime: 63,
        },
        {
            detailNum: 9,
            myRouteNum: 67,
            locationValue: 346.56,
            locationName: 'xcvb',
            routeOrder: 1,
            requiredMoney: 10000,
            requiredTime: 49,
        },
        {
            detailNum: 10,
            myRouteNum: 67,
            locationValue: 51423.5,
            locationName: 'abc',
            routeOrder: 1,
            requiredMoney: 10000,
            requiredTime: 49,
        },
    ]
}
const ADD_DETAIL = 'ADD_DETAIL';

export const addDetail = {
    type: ADD_DETAIL,
}

const dummyDetail = {
    detailNum: 11,
    myRouteNum: 67,
    locationValue: 521423.5,
    locationName: 'ab4c',
    routeOrder: 2,
    requiredMoney: 10000,
    requiredTime: 49,
}

const myRouteDetail = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DETAIL : {
            return {
                ...state,
                myRouteDetail: [...state.myRouteDetail, dummyDetail]
            }
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default myRouteDetail;