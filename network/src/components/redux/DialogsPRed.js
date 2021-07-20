const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";

let dialogsInitialState = {
  MessageData: [
    { id: 1, text: "Message_1" },
    { id: 2, text: "Message_2" },
    { id: 3, text: "Message_3" },
    { id: 4, text: "Message_4" },
    { id: 5, text: "Message_5" },
  ],
  
  DialogsData: [
    {
      id: 1,
      name: "User_1",
      img: "https://www.meme-arsenal.com/memes/fe79934edc576f1bf0a2a21ea31813bb.jpg",
    },
    {
      id: 2,
      name: "User_2",
      img: "https://interfax.com.ua/media/thumbs/images/2018/11/_KWT4WhsRAMU.jpg",
    },
    {
      id: 3,
      name: "User_3",
      img: "https://kyiv.comments.ua/img/publications/KS58-tb9UFhOpaBv73sUBRnYcFNx13jo.jpg",
    },
    {
      id: 4,
      name: "User_4",
      img: "https://detector.media/doc/images/news/archive/2016/177794/ArticleImage_177794.jpg?t=1591774055",
    },
    {
      id: 5,
      name: "User_5",
      img: "https://images11.esquire.ru/upload/img_cache/5a2/5a2992e221a221440d7adc341a552693_fitted_960x600.jpg",
    },
  ],
};
const dialogsReducer = (state = dialogsInitialState, action) => {
  let stateCopy;
  switch (action.type) {
    case ADD_NEW_MESSAGE: {
      stateCopy = {
        ...state,
        newDialogText: '',
        MessageData: [...state.MessageData,{id: 6,text: action.newDialogText,}]
      }
      return stateCopy;
    }
    default:
      return state;
  }
};

export let AddDialogActionCreator = (newMessage) => {
  return {
    type: ADD_NEW_MESSAGE,
    newDialogText: newMessage
  };
};

export default dialogsReducer;
