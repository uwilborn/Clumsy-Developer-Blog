var  createBtn = document.getElementById("create")

async function createPost(){
  var note = {
    created_by : document.getElementById("postedby").value,
    title: document.getElementById("title").value,
    memo: document.getElementById("content").value,
    date_created: document.getElementById("date").value
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
