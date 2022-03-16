import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
        { id: 1, name: "Hi,how are you", like: 1 },
        { id: 2, name: "it`s me first post", like: 22 },
        { id: 3, name: "Marik", like: 10 },
        { id: 4, name: "Vova", like: 44 },
      ]
  },
    messagesPage: {
      messagesData: [
        {id: 0, message: 'Hi'},
        {id: 0, message: 'Fine'},
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your dog?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'Bye'},
        {id: 6, message: 'QQ'},
        {id: 1, message: 'How is your dog?'},
        {id: 3, message: 'How is your dog?'},
        {id: 4, message: 'How is your dog?'},
        {id: 5, message: 'How is your dog?'},
        {id: 6, message: 'How is your dog?'},
      ],
      
       dialogsData: [
        {id: 1, name: 'Andrii', ava: 'https://www.meme-arsenal.com/memes/3f92fd0b18d24a38a63eceec4fca4762.jpg'},
        {id: 2, name: 'Dima', ava: 'https://i.imgur.com/AVaPsiy.jpg'},
        {id: 3, name: 'Marik', ava: 'https://otkritkis.ru/wp-content/uploads/2021/10/ava-94.jpg'},
        {id: 4, name: 'Vova', ava: 'https://avatarfiles.alphacoders.com/968/thumb-96848.png'},
        {id: 5, name: 'Roman', ava: 'https://avatarfiles.alphacoders.com/633/thumb-63329.png'},
        {id: 6, name: 'Bohdan', ava: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-75-300x300.jpg'},
      ]
    },
      sideBar: [
        {id: 1, name: 'Dima', ava: 'https://i.imgur.com/AVaPsiy.jpg'},
        {id: 2, name: 'Vova', ava: 'https://avatarfiles.alphacoders.com/968/thumb-96848.png'},
        {id: 3, name: 'Marik', ava: 'https://otkritkis.ru/wp-content/uploads/2021/10/ava-94.jpg'},
        {id: 4, name: 'Roma', ava: 'https://avatarfiles.alphacoders.com/633/thumb-63329.png'},
      ]   
}


export let addPost = (postMessage) => {
  let newPost = {
    id: 2,
    name: postMessage,
    like: 2
  };
  
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}
export default state;