// Write your code here!
document.getElementById('main').remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute("id","victory");
newHeader.innerHTML = "Ali is the champion";
document.body.appendChild(newHeader);
=======
let element = document.createElement('div');
document.body.appendChild(element);
let ul = document.createElement('ul');
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}

element.innerHTML = 'Hello, DOM!';
let header = document.getElementById("div#header");
header.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";
content = someTextArea.value
node.innerHTML = `Hi, ${content}!`;
element.style.backgroundColor = '#27647B';
element.style.textAlign = 'center';
ul.style.textAlign = 'left';
element.className = "dog"
element.className = "pet-listing dog";
element.classList.remove("this-is-fine");
element.classList.add("the-room-is-on-fire");
ul.removeChild(ul.querySelector('li:nth-child(2)'));
ul.remove();