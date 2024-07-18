document.addEventListener('DOMContentLoaded', (event) => {
    loadPosts();
});

function addPost() {
    var postContent = document.getElementById('postContent').value;
    if (postContent.trim() === '') {
        alert('Post content cannot be empty');
        return;
    }

    var post = {
        content: postContent,
        timestamp: new Date().toLocaleString(),
        likes: 0
    };

    savePost(post);
    displayPost(post);

    document.getElementById('postContent').value = '';
}

function savePost(post) {
    var posts = getPosts();
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
}

function getPosts() {
    var posts = localStorage.getItem('posts');
    if (posts) {
        return JSON.parse(posts);
    }
    return [];
}

function loadPosts() {
    var posts = getPosts();
    posts.forEach(post => displayPost(post));
}

function displayPost(post) {
    var postsContainer = document.getElementById('posts');
    var postElement = document.createElement('div');
    postElement.className = 'post';

    var content = document.createElement('div');
    content.className = 'content';
    content.textContent = post.content;

    var timestamp = document.createElement('div');
    timestamp.className = 'timestamp';
    timestamp.textContent = post.timestamp;

    var likeButton = document.createElement('button');
    likeButton.className = 'like-button';
    likeButton.textContent = 'Like';
    likeButton.onclick = function() {
        post.likes++;
        likesCount.textContent = post.likes;
        updatePosts();
    };

    var likesCount = document.createElement('span');
    likesCount.className = 'likes-count';
    likesCount.textContent = post.likes;

    postElement.appendChild(content);
    postElement.appendChild(timestamp);
    postElement.appendChild(likeButton);
    postElement.appendChild(likesCount);
    postsContainer.appendChild(postElement);
}

function updatePosts() {
    var posts = [];
    var postElements = document.querySelectorAll('.post');
    postElements.forEach(postElement => {
        var content = postElement.querySelector('.content').textContent;
        var timestamp = postElement.querySelector('.timestamp').textContent;
        var likes = parseInt(postElement.querySelector('.likes-count').textContent);

        posts.push({ content, timestamp, likes });
    });
    localStorage.setItem('posts', JSON.stringify(posts));
}
