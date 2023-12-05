// A Post data Object

function Post(
    post_id,
    title,
    creator_id,
    description,
    like_counter,
    comment_counter,
    picture
) {
    this.post_id = post_id
    this.title = title
    this.creator_id = creator_id
    this.description = description
    this.like_counter = like_counter
    this.comment_counter = comment_counter
    this.picture = picture
    this.comments = []

    // getter already implemented that way
}

module.exports = {
    Post
}