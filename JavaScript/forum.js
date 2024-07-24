document.addEventListener('DOMContentLoaded', (event) => {
    loadPosts();
});

// Function to add a new post
function addPost() {
    let postContent = document.getElementById('postContent').value;

    // Check if the post content is empty, if so alert the user and stop the function
    if (postContent.trim() === '') {
        alert('Post content cannot be empty');
        return;
    }

    // Create a post object with content, timestamp, and likes
    let post = {
        content: postContent,
        timestamp: new Date().toLocaleString(),
        likes: 0
    };

    // Save the post to local storage and display it on the page
    savePost(post);
    displayPost(post);

    // Clear the input field after the post is added
    document.getElementById('postContent').value = '';
}

// Function to save a post to local storage
function savePost(post) {
    let posts = getPosts();
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Function to retrieve posts from local storage
function getPosts() {
    let posts = localStorage.getItem('posts');
    if (posts) {
        return JSON.parse(posts);
    }
    return [];
}

// Function to load all posts from local storage and display them on the page
function loadPosts() {
    let posts = getPosts();
    posts.forEach(post => displayPost(post));
}

// Function to create and display a post element on the page
function displayPost(post) {
    let postsContainer = document.getElementById('posts');
    let postElement = document.createElement('div');
    postElement.className = 'post';

    // Create and set up the content element
    let content = document.createElement('div');
    content.className = 'content';
    content.textContent = post.content;

    // Create and set up the timestamp element
    let timestamp = document.createElement('div');
    timestamp.className = 'timestamp';
    timestamp.textContent = post.timestamp;

    // Create and set up the like button
    let likeButton = document.createElement('button');
    likeButton.className = 'like-button';
    likeButton.textContent = 'Like';
    likeButton.onclick = function () {
        post.likes++;
        likesCount.textContent = post.likes;
        updatePosts();
    };

    // Create and set up the likes count element
    let likesCount = document.createElement('span');
    likesCount.className = 'likes-count';
    likesCount.textContent = post.likes;

    // Append all created elements to the post element
    postElement.appendChild(content);
    postElement.appendChild(timestamp);
    postElement.appendChild(likeButton);
    postElement.appendChild(likesCount);
    postsContainer.appendChild(postElement);
}

// Function to update the posts in local storage based on the current state of the displayed posts
function updatePosts() {
    let posts = [];
    let postElements = document.querySelectorAll('.post');
    postElements.forEach(postElement => {
        let content = postElement.querySelector('.content').textContent;
        let timestamp = postElement.querySelector('.timestamp').textContent;
        let likes = parseInt(postElement.querySelector('.likes-count').textContent);

        posts.push({ content, timestamp, likes });
    });
    // Save the updated posts array back to local storage
    localStorage.setItem('posts', JSON.stringify(posts));
}
