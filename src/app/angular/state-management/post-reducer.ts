import { initialState } from "./counter-state";
import { increment, decrement, reset } from "./counter-reducer";

const _postReducer = createReducer(initialState, 
    on(increment, (state) => 
    {
        return 
        ({
            ...state,
            counter: state.counter + 1
        })
    }),
    on(decrement, (state) => 
    {
        return 
        ({
            ...state,
            counter: state.counter - 1
        })
    }),
    on(reset, (state) => 
    {
        return 
        ({
            ...state,
            counter: 0
        })
    })
)

export function postReducer(state, action)
{
    return _postReducer(state, action)
}