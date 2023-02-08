const initialData = {

    profile: {
      avatar: require("../assets/instagram-feed-images/avatar.jpeg")
    },

    stories: [
      {
        id: 1,
        avatar: require("../assets/instagram-feed-images/avatar.jpeg"),
        name: 'John Doe',
        isSeen: false,

      },
      {
        id: 2,
        avatar: require("../assets/instagram-feed-images/avatar2.jpg"),
        name: 'Johnny Doe',
        isSeen: false,

      },
      {
        id: 3,
        avatar: require("../assets/instagram-feed-images/avatar3.jpg"),
        name: 'John Doee',
        isSeen: true,

      },

    ],
    articles: [
      {
        id: 1,
        avatar: require("../assets/instagram-feed-images/avatar.jpeg"),
        name: 'John Doe',
        image: require("../assets/instagram-feed-images/img1.jpg"),
        likes: 100,
        commentCount: 10,
        comments:""
      },
      {
        id: 2,
        avatar: 'require("../assets/instagram-feed-images/avatar1.jpg")',
        name: 'Johnny Doe',
        image: require("../assets/instagram-feed-images/img2.jpg"),
        likes: 1,
        commentCount: 30,
        comments:""
      },
      {
        id: 3,
        avatar: require("../assets/instagram-feed-images/avatar3.jpg"),
        name: 'John Doee',
        image: require("../assets/instagram-feed-images/img4.jpg"),
        likes: 1000,
        commentCount: 1,
        comments:""
      },
      {
        id: 4,
        avatar: require("../assets/instagram-feed-images/img4.jpg"),
        name: 'June Doe',
        image: require("../assets/instagram-feed-images/img4.jpg"),
        likes: 500,
        commentCount: 21,
        comments:""
      }
    ],
}

const data = {
  ...initialData,
  articles: initialData.articles.map( article => {
    return {
      ...article,
      comment: 'View all $${article.commintCount} comments'
    }
  })
}
export default data;