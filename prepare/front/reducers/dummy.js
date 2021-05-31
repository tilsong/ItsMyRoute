export const initialState = {
  dum: [
    { id: 1, name: 'kim', date: '2020-01-01', content: '고고' },
    { id: 2, name: 'kim', date: '2020-01-01', content: '고고' },
    { id: 3, name: 'kim', date: '2020-01-01', content: '고고' },
    { id: 4, name: 'kim', date: '2020-01-01', content: '고고' },
    { id: 5, name: 'kim', date: '2020-01-01', content: '고고' },
  ],

};
const ADD = 'ADD';

export const addState = (data) => ({
  type: 'ADD',
  data,
});

const addDum = {
  id: 6, name: 'lee', date: '2020-01-02', content: '노노',
};

const dummy = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        dum: [addDum, ...state.dum],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default dummy;
