var  createBtn = document.getElementById("create")

async function createPost(){
  var note = {
    name : document.getElementById("name").value,
    title: document.getElementById("notetitle").value,
    newnote: document.getElementById("notetext").value
  }
  console.log(note)
 
    const response = await fetch('/api/projects/create', {
      method: 'POST',
      body: JSON.stringify(note),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }

}

createBtn.addEventListener("click",createPost)
