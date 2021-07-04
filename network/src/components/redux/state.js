import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsPRed';
import sidebarReducer from './SidebarRed';



let store = {
  _state: {
    profilePage: {
      PostData: [
        { id: 1, message: "gachi", likesCount: 10, dislikesCount: 1 },
        { id: 2, message: "muchi", likesCount: 15, dislikesCount: 3 },
        { id: 3, message: "asstap", likesCount: 20, dislikesCount: 5 },
      ],

      newPostTxt: "",
    },

    dialogsPage: {
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
    },

    sidebarPage: {
      FriendsData: [
        {
          id: 1,
          name: "Igor",
          lastname: "Voitenko",
          imgSrc:
            "https://videozhara.com/storage/o9lPteJ3PanN8Z0aZsQQ0F5lkFrfA75gJZOunJvo.jpeg",
        },
      ],
    },
  },

  _rerenderEntireTree() {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

  _addNewMessage() {
    let NewMessage = {
      id: 6,
      text: this._state.dialogsPage.newDialogText,
    };
    this._state.dialogsPage.MessageData.push(NewMessage);
    this._state.dialogsPage.NewMessage = "";
    this._rerenderEntireTree(this._state);
  },

  _changeMessageText(someMessage) {
    this._state.dialogsPage.newDialogText = someMessage;
    this._rerenderEntireTree(this._state);
  },

  _addNewPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostTxt,
      likesCount: 1,
      dislikesCount: 1,
    };
    this._state.profilePage.PostData.push(newPost);
    this._state.profilePage.newPostTxt = "";
    this._rerenderEntireTree(this._state);
  },


  _ChangePostText(someText) {
    this._state.profilePage.newPostTxt = someText;
    this._rerenderEntireTree(this._state);
  },



  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage ,action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage ,action)
    this._rerenderEntireTree(this._state)
  },
};

export default store;
