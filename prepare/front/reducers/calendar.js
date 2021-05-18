export const initialState = {
    calendar: [{
        calNum: 1,
        userNum: 3,
        myRouteNum: 37,
        calendarDate: '2021-05-03 13:00',
        detail: '강남 갈 때',
    },
    {
        calNum: 3,
        userNum: 5,
        myRouteNum: 67,
        calendarDate: '2021-05-06 9:00',
        detail: '',
    },
    {
        calNum: 6,
        userNum: 1,
        myRouteNum: 35,
        calendarDate: '2021-05-06 19:00',
        detail: '',
    },
    {
        calNum: 11,
        userNum: 1,
        myRouteNum: 98,
        calendarDate: '2021-05-08 15:00',
        detail: '오후에 갈 것',
    },
    {
        calNum: 14,
        userNum: 5,
        myRouteNum: 145,
        calendarDate: '2021-05-12 20:00',
        detail: '',
    },
    ]
}

const CALENDAR = 'CALENDAR';

export const addPost = {
    type: CALENDAR,
}

const dummyC =  {
    calNum: 16,
    userNum: 3,
    myRouteNum: 111,
    calendarDate: '2021-05-12 23:00',
    detail: '',
}

const calendar = (state=initialState, action) => {
    switch (action.type) {
        case CALENDAR : {
            return {
                ...state,
                calendar:[...state.calendar, dummyC]
            }
        }
        default : {
            return {
                ...state,
            };
        }
    }
}

export default calendar;