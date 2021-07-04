const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";

let dialogsInitialState = {
    MessageData: [
        { id: 1, text: "Message_1" },
        { id: 2, text: "Message_2" },
        { id: 3, text: "Message_3" },
        { id: 4, text: "Message_4" },
        { id: 5, text: "Message_5" },
      ],
  
      newDialogText: "",
  
      DialogsData: [
        {
          id: 1,
          name: "User_1",
          img: "https://file.liga.net/images/general/2019/06/05/20190605142156-5002.jpg?v=1559739638",
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

}


  const dialogsReducer = (state = dialogsInitialState ,action) => {
     switch(action.type){
         case ADD_NEW_MESSAGE: {
            let NewMessage = {
                id: 6,
                text: state.newDialogText,
              };
              state.MessageData.push(NewMessage);
              state.NewMessage = "";
              return state;
         }
         case UPDATE_MESSAGE_TEXT: {
            state.newDialogText = action.someMessage;
            return state;
         }
         default:
             return state;
     }
};


export let AddDialogActionCreator = () => {
    return {
      type: ADD_NEW_MESSAGE
    }
  }
  
  export let UpdateDialogActionCreator = (dialog) => {
    return {
      type: UPDATE_MESSAGE_TEXT,
      someMessage: dialog
    }
  }


export default dialogsReducer;