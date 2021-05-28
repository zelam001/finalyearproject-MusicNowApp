mutation user1 {
    createUser(input: {name: "Michael", image: "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"}) {
      id
      name
    }
  }
  
  mutation user2 {
    createUser(input: {name: "Tom", image: "https://www.irreverentgent.com/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg"}) {
      id
      name
    }
  }
  
  mutation user3 {
    createUser(input: {name: "Wanda", image: "https://expertphotography.com/wp-content/uploads/2020/08/social-media-profile-photos.jpg"}) {
      id
      name
    }
  }
  
  mutation user4 {
    createUser(input: {name: "Hannah", image: "https://c.stocksy.com/a/P5eA00/z9/2537375.jpg"}) {
      id
      name
    }
  }
  
  mutation post1 {
    createPost(input: {userID: "",likes: 0,caption: "21 Savage and Metro went crazy on this!! #SavageMode2", image: "https://images.genius.com/b37e9ec812dac4d8b6b8cbfb274dcf77.1000x1000x1.png"}) {
      id
      image
      caption
      user {
        name
      }
    }
  }
  
  mutation story1 {
    createStory(input: {userID: "", image: "https://wallpapercave.com/wp/wp2150567.jpg"}) {
      id
      image
      user {
        name
      }
    }
  }
  
  mutation post2 {
    createPost(input: {userID: "",likes: 12,caption: "RIP Pop Smoke #MTW2", image: "https://media.pitchfork.com/photos/5e3dec51a42e4e000882e43c/1:1/w_600/Meet%20the%20Woo%20Vol.%202_Pop%20Smoke.jpg"}) {
      id
      image
      caption
      user {
        name
      }
    }
  }
  
  mutation story2 {
    createStory(input: {userID: "", image: "https://c4.wallpaperflare.com/wallpaper/303/210/368/amoled-the-weeknd-vertical-iphone-hd-wallpaper-preview.jpg"}) {
      id
      image
      user {
        name
      }
    }
  }
  
  mutation post3 {
    createPost(input: {userID: "", likes: 10,caption: "Definitely album of the year! #Husslababy", image: "https://media.pitchfork.com/photos/5e29cd9ee540c400084fdeb9/1:1/w_600/bigconspiracy.jpg"}) {
      id
      image
      caption
      user {
        name
      }
    }
  }
  
  mutation story3 {
    createStory(input: {userID: "", image: "https://i.pinimg.com/originals/78/90/aa/7890aa359041f38b5867d397feee71a0.png"}) {
      id
      image
      user {
        name
      }
    }
  }
  
  mutation post4 {
    createPost(input: {userID: "",likes: 40, caption: "Giveon has my heart!!, soo Talented!! who else agreess!!", image: "https://images.genius.com/a393206a9ab2b6c428211674fa59cf1c.640x640x1.jpg"}) {
      id
      image
      caption
      user {
        name
      }
    }
  }
  
  mutation story4 {
    createStory(input: {userID: "", image: "https://i.pinimg.com/736x/f4/51/c3/f451c3d8ca9a493877074de52aa8add1.jpg"}) {
      id
      image
      user {
        name
      }
    }
  }
  
  query listPosts {
    listPosts {
      items {
        caption
        createdAt
        id
        image
        user {
          id
          image
          name
        }
      }
    }
  }
  
  query listStorys {
    listStorys {
      items {
        createdAt
        id
        image
        user {
          id
          image
          name
        }
      }
    }
  }
  