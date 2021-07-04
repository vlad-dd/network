
let sidebarInitialState = {
    FriendsData: [
        {
          id: 1,
          name: "Igor",
          lastname: "Voitenko",
          imgSrc:
            "https://videozhara.com/storage/o9lPteJ3PanN8Z0aZsQQ0F5lkFrfA75gJZOunJvo.jpeg",
        },
      ]
}

 const sidebarReducer = (state = sidebarInitialState, action) => {
    return state;
}

export default sidebarReducer;