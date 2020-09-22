export const initialState={
    user:null,
    playlists:[],
    //playing:false,
    item:null,
    token:null,
};

const reducer = (state,action) => {
    console.log(action);

    //Action ->type, [payload]

    switch(action.type){
        case 'SET_USER':
        return{
            ...state,
            user:action.user
        };

        case 'SET_TOKEN':
        return{
            ...state,
            token:action.token
        };

        case 'SET_PLAYLISTS':
        return{
            ...state,
            playlists:action.playlists
        };
        case 'SET_MUSICS':
            return{
                ...state,
                musics:action.musics
            }
        case 'SET_LISTS':
            return{
                ...state,
                lists:action.lists
            }

        default:
        return state;
    }
}

export default reducer;