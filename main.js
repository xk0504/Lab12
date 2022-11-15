console.log("Hello, World!");


//changed h1 element
let h1_arr = document.getElementsByTagName("h1")
console.log( h1_arr[0] )
let h = h1_arr[0]
h.innerHTML = "Lab12 Assignment"
h.style.color = "blue"

let hr = document.createElement("hr")
console.log(hr)
document.body.appendChild(hr)

let h2 = document.createElement("h2")
h2.innerHTML = "Task"
h2.style.color = "red"
document.body.appendChild(h2)

let p1 = document.createElement("p")
p1.innerHTML = "In this task you have to reproduce this HTML page as is using only JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild(p1)


let ul= document.createElement("ul")
let li = document.createElement("li")
ul.appendChild(li)

li = document.createElement("li")
li.innerHTML = "find elements in the DOM (5 points);"
li.style.color = "green"
document.body.appendChild(li)

li = document.createElement("li")
li.innerHTML = "create/add/remove elements (5 points);"
li.style.color = "purple"
document.body.appendChild(li)

li = document.createElement("li")
li.innerHTML = "change content of the elements (5 points);"
li.style.color = "green"
document.body.appendChild(li)

li = document.createElement("li")
li.innerHTML = "change styles of the elements (5 points);"
li.style.color = "purple"
document.body.appendChild(li)

li = document.createElement("li")
li.innerHTML = "change attributes of the elements (5 points);"
li.style.color = "green"
document.body.appendChild(li)

li = document.createElement("li")
li.innerHTML = "change classes of the elements (5 points)."
li.style.color = "purple"
document.body.appendChild(li)

document.getElementsByTagName("p1")
p1.innerHTML = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this " 
document.body.appendChild(p1)
let a1 = document.createElement("a");
a1.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12");
a1.target = "_blank"
a1.innerText = "link";
document.body.appendChild(a1)

let hr1 = document.createElement("hr")
console.log(hr1)
document.body.appendChild(hr1)

let h3 = document.createElement("h2")
h3.innerHTML = "Submission"
h3.style.color = "red"
document.body.appendChild(h3)


let p2 = document.createElement("p")
p2.innerHTML = "To submit your work, follow these instructions:"
document.body.appendChild(p2)


let ul1= document.createElement("ul")
let li1 = document.createElement("li")
ul1.appendChild(li1)

li1 = document.createElement("li")
li1.innerHTML = "Create a new repository on Github, named lab12 (1 point)."
li1.style.color = "green"
document.body.appendChild(li1)

li = document.createElement("li")
li.innerHTML = "Clone this repository to your local machine and work inside it."
li.style.color = "purple"
document.body.appendChild(li)

li = document.createElement("li")
li.innerHTML = "Create a new HTML file, called index.html, which has only one ❮h1❯ tag with ‟Hello, World!” message (1 point) "
li.style.color = "green"
document.body.appendChild(li)

li = document.createElement("li")
li.innerHTML = "Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point)."
li.style.color = "purple"
document.body.appendChild(li)

li = document.createElement("li")
li.innerHTML = "Link this main.js file to your index.html file (Note: place your script at the end of the body section)."
li.style.color = "green"
document.body.appendChild(li)

li = document.createElement("li")
li.innerHTML = "Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points)."
li.style.color = "purple"
document.body.appendChild(li)


li = document.createElement("li")
li.innerHTML = "After you finish your work, submit it to the Github (2 points)."
li.style.color = "green"
document.body.appendChild(li)

let hr2 = document.createElement("hr")
console.log(hr2)
document.body.appendChild(hr2)














