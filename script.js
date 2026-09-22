let submit = document.getElementById("submit")

submit.addEventListener("click",()=>{
	arr=[]
let title=document.getElementById("title").value
	let author=document.getElementById("author").value
	let isbn=document.getElementById("isbn").value

	arr.push([title,author,isbn])

  arr.map((element)=>{
   let parent=document.getElementById("book-list")
	  let row=document.createElement("tr")   
	let c1=document.createElement("td")   
	c1.innerText=element[0]
	row.appendChild(c1)

	let c2=document.createElement("td")   
	c2.innerText=element[1]
	row.appendChild(c2)
	
	let c3=document.createElement("td")   
	c3.innerText=element[2]
	row.appendChild(c3)

	let c4=document.createElement("td")
	  let clear=document.createElement("button")
	  clear.innerText="clear"
clear.classList.add("delete");
 clear.addEventListener("click",()=>{
		  row.remove();
	  })
	  
	  c4.appendChild(clear)
	  row.append(c4)


	  parent.appendChild(row)

	 
	  
})
	
})



