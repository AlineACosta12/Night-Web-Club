document.addEventListener('DOMContentLoaded', (event) => {
    loadPosts();
});

function addPost() {
    let postContent = document.getElementById('postContent').value;
    if (postContent.trim() === '') {
        alert('Post content cannot be empty');
        return;
    }

    let post = {
        content: postContent,
        timestamp: new Date().toLocaleString(),
        likes: 0
    };

    savePost(post);
    displayPost(post);

    document.getElementById('postContent').value = '';
}

function savePost(post) {
    let posts = getPosts();
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
}

function getPosts() {
    let posts = localStorage.getItem('posts');
    if (posts) {
        return JSON.parse(posts);
    }
    return [];
}

function loadPosts() {
    let posts = getPosts();
    posts.forEach(post => displayPost(post));
}

function displayPost(post) {
    let postsContainer = document.getElementById('posts');
    let postElement = document.createElement('div');
    postElement.className = 'post';

    let content = document.createElement('div');
    content.className = 'content';
    content.textContent = post.content;

    let timestamp = document.createElement('div');
    timestamp.className = 'timestamp';
    timestamp.textContent = post.timestamp;

    let likeButton = document.createElement('button');
    likeButton.className = 'like-button';
    likeButton.textContent = 'Like';
    likeButton.onclick = function() {
        post.likes++;
        likesCount.textContent = post.likes;
        updatePosts();
    };

    let likesCount = document.createElement('span');
    likesCount.className = 'likes-count';
    likesCount.textContent = post.likes;

    postElement.appendChild(content);
    postElement.appendChild(timestamp);
    postElement.appendChild(likeButton);
    postElement.appendChild(likesCount);
    postsContainer.appendChild(postElement);
}

function updatePosts() {
    let posts = [];
    let postElements = document.querySelectorAll('.post');
    postElements.forEach(postElement => {
        let content = postElement.querySelector('.content').textContent;
        let timestamp = postElement.querySelector('.timestamp').textContent;
        let likes = parseInt(postElement.querySelector('.likes-count').textContent);

        posts.push({ content, timestamp, likes });
    });
    localStorage.setItem('posts', JSON.stringify(posts));
}
