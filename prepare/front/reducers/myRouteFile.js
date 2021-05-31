export const initialState = {
    myRouteFile: [
        {
            myRouteNum: 35, 
            fileName: 'route1',
            fileRoute: '../route1.jpg'
        },
        {
            myRouteNum: 67, 
            fileName: 'route2',
            fileRoute: '../route2.jpg'
        },
        {
            myRouteNum: 145, 
            fileName: 'route3',
            fileRoute: '../route3.jpg'
        },
        {
            myRouteNum: 200, 
            fileName: 'route4',
            fileRoute: '../route4.jpg'
        },
        {
            myRouteNum: 234, 
            fileName: 'route5',
            fileRoute: '../route5.jpg'
        }
    ]
}

const ADD_FILE = 'ADD_FILE';

export const addFile = {
    type: ADD_FILE,
}

const dummyFile = { 
    myRouteNum: 345, 
    fileName: 'route6',
    fileRoute: '../route6.jpg'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILE: {
            return {
                ...state,
                myRouteFile: [...state.myRouteFile, dummyFile],
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