export const initialState = {
    basket: [],
}

 const reducer = (state, action ) => {
          switch(action.type){
              case 'Add_To_The_Basket':
                  return {
                      ...state,
                      basket: [action.payload, ...state.basket]
                  };
    

                case 'Remove_From_Basket':
                    let sample = state.basket;
                    for (let i = 0; i<sample.length; i++){
                        sample[i].id === action.payload.id ? (
                            sample.splice(i, 1)
                        ): console.log('d')
                    }
                     
                return {
                    ...state,
                    basket: sample
                } 

                default:
                    return state
                
            }
    }

export default reducer;