var x = "William Shakespeare was an English poet, playwright and actor, widely regarded as the greatest writer in the English language and the world's pre-eminent dramatist. He is often called England's national poet and the Bard of Avon"


// var commentBody = document.getElementsByClassName('commentBody')[0]
// commentBody.innerHTML = x

// var y = Date.now();
// var date = document.getElementById('date');
// date.innerHTML = y

// var likeBtn = document.getElementById('likeBtn');
// likeBtn.addEventListener('click', () => {
//     alert('ok')
// })

$('#likeBtn').click(() => {
    alert('ok')
})

$('.commentBody').text(x)


$('#submitBtn').click(() => {
    createNewComment();
})

createNewComment = () => {
    var inputValue = $('#commentValue').val();
    if (inputValue == "") {
        alert('Please enter a value in the comment!!!');
    } else {
        $('#commentContainer').append(`
            <div class="commentBlock">
                <div class="commentHeader clearfix">
                    <div class="float-left">
                        <div class="authorInfo">
                            <img src="https://www.exclutips.com/wp-content/uploads/2015/08/wordpress-custom-user-avatar.png" alt="">
                            <div class="userInfo">
                                <p class="userName">Peter Zheng</p>
                                <p class="userTitle">Chief Editor at BCTC</p>
                            </div>
                        </div>
                    </div>
                    <div class="float-right" id="date">
                        10/17/2017
                    </div>
                </div>
                <div class="commentBody">
                    ${inputValue}
                </div>
                <div class="commentFooter">
                    <div class="userAction">
                        <span>
                            <i class="fa fa-thumbs-o-up"></i>
                            <a id="likeBtn">Like</a>
                        </span>
                        <span>
                            <i class="fa fa-comment-o"></i>
                            <a >Comment</a>
                        </span>
                        <span>
                            <i class="fa fa-share"></i>
                            <a >Share</a>
                        </span>
                    </div>
                </div>
            </div>
        `)
        $('#commentValue').val("")
    }
   
}

