const signUpModal = document.getElementById("signup-modal");
const signInModal = document.getElementById("signin-modal");

const signInBtn = document.getElementById("signin");
const signUpBtn = document.getElementById("signup");

const signUpSwitchBtn = document.getElementById("sign-up-switch");

const closeSignUpModalBtn = document.getElementsByClassName("close")[0];
const closeSignInModalBtn = document.getElementsByClassName("close")[1];

signInBtn.addEventListener("click", function signInBtnHandler() {
  openModal(signInModal);
});

signUpBtn.addEventListener("click", function signUpBtnHandler() {
  openModal(signUpModal);
});

signUpSwitchBtn.addEventListener("click", function signUpSwitchBtnHandler() {
  closeModal(signInModal);
  openModal(signUpModal);
});

// X btn to close the modal
closeSignUpModalBtn.addEventListener(
  "click",
  function closeSignUpModalHandler() {
    closeModal(signUpModal);
  }
);

closeSignInModalBtn.addEventListener(
  "click",
  function closeSignInModalHandler() {
    closeModal(signInModal);
  }
);

// Handle outside modal click
window.addEventListener("click", function headerFunctionsHandlerevent(event) {
  if (event.target == signUpModal) {
    closeModal(signUpModal);
  }
  if (event.target == signInModal) {
    closeModal(signInModal);
  }
});
function closeModal(modal) {
    if (modal) {
      modal.style.display = "none";
    }
  }
  
  function openModal(modal) {
    if (modal) {
      modal.style.display = "block";
    }
  }
  const editBtn = document.getElementById("edit-btn");
const saveBtn = document.getElementById("save-btn");
const likeBtn = document.getElementById("like-btn");
const commentBtn = document.getElementById("comment-btn");
const postTitleData = document.getElementById("post-title-data");
const postContent = document.getElementById("post-content-data");

function createCommentNode(value) {
  const commentNode = document.createElement("div");
  commentNode.className = "comment";
  commentNode.innerHTML = value;
  return commentNode;
}

editBtn.addEventListener("click", function editBtnHandler() {
  postTitleData.setAttribute("contenteditable", true);
  postContent.setAttribute("contenteditable", true);
  postTitleData.className = "border-pink";
  postContent.className = "border-blue";
  postContent.focus();
  editBtn.style.display = "none";
  saveBtn.style.display = "block";
});

saveBtn.addEventListener("click", function saveBtnHandler() {
  postTitleData.setAttribute("contenteditable", false);
  postContent.setAttribute("contenteditable", false);
  postTitleData.classList.remove("border-pink");
  postContent.classList.remove("border-blue");
  saveBtn.style.display = "none";
  editBtn.style.display = "block";
});

let likeCount = 0;
likeBtn.addEventListener("click", function likeBtnHandler() {
  const likeBtnText = document.getElementById("like-btn-text");
  const likeBtnHelperText = document.getElementById("like-btn-helper-text");
  likeCount++;
  if (likeCount === 1) {
    likeBtnText.innerText = "Liked!";
    likeBtnHelperText.innerText = `${likeCount} person likes this!`;
  } else {
    likeBtnHelperText.innerText = `${likeCount} people have liked this!`;
  }
});

commentBtn.addEventListener("click", function commentHandler() {
  const commentValue = document.getElementById("comment");
  const commentListContainer = document.getElementById("comment-list");
  let commentText;
  if (commentValue) {
    commentText = commentValue.value;
  }

  if (commentText) {
    const commentNode = createCommentNode(commentText);
    commentListContainer.appendChild(commentNode);
    commentValue.value = "";
  } else {
    alert("Please enter a valid comment");
  }
});