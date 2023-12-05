// User Object:

/**
 * 
 * @param {int} user_id 
 * @param {string} user_name 
 * @param {string} user_password 
 * @param {string} status 
 */

function User(
    user_id,
    user_name,
    user_password,
    status
) {
    this.user_id = user_id,
    this.user_name = user_name
    this.user_password = user_password
    this.comments = []
    this.posts = []
    this.liked_posts = []
    this.status = status

    // getter already implemented that way
}

function retrieve_a_sample_user() {
    user = new User(1, "test_name", "123456", "CREATOR");
    return user;
}

module.exports = {
    User,
    retrieve_a_sample_user
}