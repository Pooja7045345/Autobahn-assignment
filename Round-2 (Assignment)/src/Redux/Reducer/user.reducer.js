const UserReducer = (state = [] , action )=>{
    switch(action.type){
        case "get_post" : return action.payload;
        case "add_post" : return [...state , action.payload];
        case "update_post" : {
            let allPosts = [...state];
            let updatedVal = allPosts.map((post) => {
                if(post.id === action.payload.id){
                 post.title = action.payload.title;
                 post.body = action.payload.body;
                }
                return post;
            })
            return updatedVal
        }
        case "delete_post" : {
            let allPosts = [...state];
            let updatedVal = allPosts.filter((post) => post.id !== action.payload)
            return updatedVal
        }
        default: return state;
    }
}

export default UserReducer