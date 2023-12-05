// A Post data Object

function Comment(
    comment_id,
    creator_id,
    post_id,
    description
) {
    this.comment_id = comment_id
    this.creator_id = creator_id
    this.post_id = post_id
    this.description = description
    this.comments = []
    // getter already implemented that way
}

module.exports = {
    Post
}