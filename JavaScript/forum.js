$(document).ready(function() {
    $('#postForm').submit(function(e) {
        e.preventDefault();
        var topicTitle = $('#topicTitle').val();
        var postContent = $('#postContent').val();
        var newPost = `
${topicTitle}
${postContent}
`;
        $('.forum-post:last').after(newPost);
        $('#topicTitle').val('');
        $('#postContent').val('');
    });
});