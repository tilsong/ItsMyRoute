export const initialState = {
    comment: [
        {
            myRouteNum: 35,
            userNum: 3,
            content: '좋네요',
            writingDate: '2021-04-30 21:00',
            updatedDate: '',
        },
        {
            myRouteNum: 35,
            userNum: 7,
            content: '저도 가고 싶어요!',
            writingDate: '2021-04-30 22:00',
            updatedDate: '2021-04-30 23:00',
        },
        {
            myRouteNum: 67,
            userNum: 1,
            content: '우와~',
            writingDate: '2021-05-04 13:00',
            updatedDate: '',
        },
        {
            myRouteNum: 67,
            userNum: 7,
            content: '굿굿',
            writingDate: '2021-05-04 16:00',
            updatedDate: '',
        },
        {
            myRouteNum: 35,
            userNum: 5,
            content: '네 감사합니다',
            writingDate: '2021-05-05 19:00',
            updatedDate: '2021-05-05 21:00',
        },
    ]
}

const ADD_COMMENT = 'ADD_COMMENT';

export const addComment = {
    type: ADD_COMMENT,
}

const dummyComment = {
    myRouteNum: 13,
    userNum: 1,
    content: '좋아요',
    writingDate: '2021-05-12 19:00',
    updatedDate: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT: {
            return {
                ...state,
                comment: [state.comment, dummyComment],
            }
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default reducer;