const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function createPost(post) {
    const postContainer = document.createElement('div');
    postContainer.id = 'post-container';

    const postHTML = `
        <header class="top-nav">
            <img class="logo" src="images/logo.png">
            <img class="avatar" src="${post.avatar}">
        </header>
        <section class="general-info">
            <img class="avatar" src="${post.avatar}">
            <div class="user-info">
                <h2>${post.name}</h2>
                <p>${post.location}</p>
            </div>
        </section>
        <container>
            <img class="image" src="${post.post}">
            <img class="icon" src="images/icon-heart.png">
            <img class="icon" src="images/icon-comment.png">
            <img class="icon" src="images/icon-dm.png">
            <div class="reactions">
                <p>${post.likes} Likes</p>
                <p>${post.username} <span class="normal-font-weight-text"> ${post.comment}</span></p>
            </div>
        </container>
        <footer></footer>
    `;

    postContainer.innerHTML = postHTML;

    return postContainer;
}

function addPostsToPage(posts) {
    const body = document.querySelector('body');

    for (const post of posts) {
        const postElement = createPost(post);
        body.insertBefore(postElement, body.querySelector('script'));
    }
}

addPostsToPage(posts);
