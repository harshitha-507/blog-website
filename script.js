let posts = JSON.parse(localStorage.getItem("posts")) || [];
let editIndex = null;
const title = document.getElementById("title");
const content = document.getElementById("content");
const postsDiv = document.getElementById("posts");

function render() {
  postsDiv.innerHTML = "";
  posts.forEach((p,i)=>{
    postsDiv.innerHTML += `
      <div class="post">
        <h2>${p.title}</h2>
        <p>${p.content}</p>
        <div class="actions">
          <button onclick="edit(${i})">Edit</button>
          <button onclick="del(${i})">Delete</button>
        </div>
      </div>`;
  });
  localStorage.setItem("posts", JSON.stringify(posts));
}

document.getElementById("saveBtn").onclick = () => {
  if(title.value && content.value){
    if(editIndex===null) posts.push({title:title.value, content:content.value});
    else {posts[editIndex]={title:title.value, content:content.value}; editIndex=null;}
    title.value=content.value=""; render();
  }
};

function edit(i){title.value=posts[i].title; content.value=posts[i].content; editIndex=i;}
function del(i){posts.splice(i,1); render();}

render();