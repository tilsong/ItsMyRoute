export const initialState ={
    banner: [{
        bannerNum: 1,
        MyRouteNum: 35,
        bannerName: 'main',
        publishedDate: '2021-05-02',
        deadlineDate: '2021-05-08',
    },
    {
        bannerNum: 2,
        MyRouteNum: 13,
        bannerName: 'sub1',
        publishedDate: '2021-05-03',
        deadlineDate: '2021-05-06',
    },
    {
        bannerNum: 3,
        MyRouteNum: 98,
        bannerName: 'sub2',
        publishedDate: '2021-05-05',
        deadlineDate: '2021-05-07',
    },
    {
        bannerNum: 4,
        MyRouteNum: 234,
        bannerName: 'main',
        publishedDate: '2021-05-09',
        deadlineDate: '2021-05-15',
    },
    {
        bannerNum: 5,
        MyRouteNum: 646,
        bannerName: 'sub2',
        publishedDate: '2021-05-07',
        deadlineDate: '2021-05-14',
    },
    ]
}

const ADD_BANNER = 'ADD_BANNER';

export const addBanner = {
    type: ADD_BANNER,
}

const dummyBanner = {
    bannerNum: 6,
    MyRouteNum: 123,
    bannerName: 'sub1',
    publishedDate: '2021-05-09',
    deadlineDate: '2021-05-16',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BANNER: {
            return {
                ...state,
                mainPosts: [...state.banner, dummyBanner],
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default reducer;