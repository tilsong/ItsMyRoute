export const initialState ={
    myRoute: [
        {
            myRouteNum: 13,
            userNum: 3,
            MyRouteName: '강남 맛집탐방',
            writingDate: '2021-04-12 9:00',
            updatedDate: '',
            content: 'qweryuioasdfhjklqweryu',
            userPublish: true,
            adminPublish: true,
            heart: [
                {userNum: 3},
                {userNum: 5},
                {userNum: 6},
            ]
        },
        {
            myRouteNum: 35,
            userNum: 5,
            MyRouteName: '문득 혼밥',
            writingDate: '2021-04-30 9:00',
            updatedDate: '2021-05-01',
            content: 'qweryuioasdfhjㅁㄴㅇㄹklqweryu',
            userPublish: true,
            adminPublish: true,
            heart: [
                {userNum: 3},
                {userNum: 5},
                {userNum: 6},
            ],
        },
        {
            myRouteNum: 37,
            userNum: 1,
            MyRouteName: '데이트 인 송파',
            writingDate: '2021-05-01 9:00',
            updatedDate: '',
            content: 'qwerlqweryu',
            userPublish: true,
            adminPublish: true,
            heart: [
                {userNum: 3},
                {userNum: 5},
                {userNum: 6},
            ],
        },
        {
            myRouteNum: 67,
            userNum: 3,
            MyRouteName: '오늘의 걸음',
            writingDate: '2021-05-03 9:00',
            updatedDate: '',
            content: 'ㅅㄱㅈㄷqweryu',
            userPublish: true,
            adminPublish: false,
            heart: [
                {userNum: 3},
                {userNum: 5},
                {userNum: 6},
            ],
        },
        // {
        //     myRouteNum: 98,
        //     userNum: 5,
        //     MyRouteName: '여기, 길을 걷다',
        //     writingDate: '2021-05-06 9:00',
        //     updatedDate: '2021-05-09',
        //     content: 'qweryuioasdfhjㄹㄴㅁㅇklqweryu',
        //     userPublish: true,
        //     adminPublish: true,
        //     heart: [
        //         {userNum: 3},
        //         {userNum: 5},
        //         {userNum: 6},
        //     ],
        // },
        // {
        //     myRouteNum: 145,
        //     userNum: 7,
        //     MyRouteName: '석촌 레이크',
        //     writingDate: '2021-05-06 9:00',
        //     updatedDate: '',
        //     content: 'qweryuioaqweryu',
        //     userPublish: false,
        //     adminPublish: true,
        //     heart: [
        //         {userNum: 3},
        //         {userNum: 5},
        //         {userNum: 6},
        //     ],
        // },
        // {
        //     myRouteNum: 234,
        //     userNum: 5,
        //     MyRouteName: '오랜만이야',
        //     writingDate: '2021-05-06 9:00',
        //     updatedDate: '',
        //     content: 'hjklqweryu',
        //     userPublish: true,
        //     adminPublish: true,
        //     heart: [
        //         {userNum: 3},
        //         {userNum: 5},
        //         {userNum: 6},
        //     ],
        // },
        // {
        //     myRouteNum: 646,
        //     userNum: 4,
        //     MyRouteName: '일상 루트',
        //     writingDate: '2021-05-10 9:00',
        //     updatedDate: '2021-05-13',
        //     content: 'klqweryu',
        //     userPublish: true,
        //     adminPublish: true,
        //     heart: [
        //         {userNum: 3},
        //         {userNum: 5},
        //         {userNum: 6},
        //     ],
        // },
    ],
}

const ADD_MYROUTE= 'ADD_MYROUTE';

export const addMyRoute = {
    type: ADD_MYROUTE,
}

const dummyMyRoute = {
    myRouteNum: 806,
    userNum: 6,
    MyRouteName: '루트!!',
    writingDate: '2021-05-17 9:00',
    updatedDate: '',
    content: 'klqwqewreryu',
    userPublish: true,
    adminPublish: true,
}

const myRoute = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MYROUTE: {
            return {
                ...state,
                myRoute: [dummyMyRoute, ...state.myRoute],
            }
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default myRoute;