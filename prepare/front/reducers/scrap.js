export const initialState = {
    scrap: [{
        scrapNum: 3,
        userNum: 1,
        myRouteNum: 234,
        scrapDate: '2021-05-10 20:00',
    },
    {
        scrapNum: 7,
        userNum: 5,
        myRouteNum: 37,
        scrapDate: '2021-05-10 23:00',
    },
    {
        scrapNum: 13,
        userNum: 7,
        myRouteNum: 37,
        scrapDate: '2021-05-12 9:00',
    },
    {
        scrapNum: 23,
        userNum: 7,
        myRouteNum: 98,
        scrapDate: '2021-05-13 11:00',
    },
    {
        scrapNum: 31,
        userNum: 3,
        myRouteNum: 98,
        scrapDate: '2021-05-13 20:00',
    },
    ]
}

const SCRAP = 'SCRAP';

export const addSCRAP ={
    type: SCRAP,
}

const dummyScrap ={
    scrapNum: 34,
    userNum: 1,
    myRouteNum: 12,
    scrapDate: '2021-05-15 20:00',
}

const scrap = (state=initialState, action) => {
    switch(action.type) {
        case SCRAP : {
            return {
                ...state,
                mainPosts: [...state.scrap, dummyScrap]
            }
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default scrap;