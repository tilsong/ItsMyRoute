export const initialState = {
    following: [{
        followNum: 1,
        userNum: 1,
        followUserNum: 3
    },
    {
        followNum: 2,
        userNum: 1,
        followUserNum: 4
    },
    {
        followNum: 3,
        userNum: 3,
        followUserNum: 1
    },
    {
        followNum: 4,
        userNum: 3,
        followUserNum: 5
    },
    {
        followNum: 5,
        userNum: 5,
        followUserNum: 1
    },
    {
        followNum: 6,
        userNum: 5,
        followUserNum: 3
    },
    {
        followNum: 7,
        userNum: 1,
        followUserNum: 5
    },
    {
        followNum: 8,
        userNum: 4,
        followUserNum: 3
    },
    {
        followNum: 9,
        userNum: 7,
        followUserNum: 1
    },
    {
        followNum: 10,
        userNum: 7,
        followUserNum: 4
    },]
}

export const FOLLOW = 'FOLLOW';

export const followAction = (data) => {
    return {
        type: FOLLOW,
        data,
    }
}

const dummyA = {
    followNum: 11,
    userNum: 2,
    followUserNum: 7

}

const follow = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :{
            return {
                    ...state,
                    follwing: [ ...state.following, dummyA ],
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default follow;