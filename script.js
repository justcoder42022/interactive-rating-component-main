  
  const starList = document.querySelectorAll("li");
  const submit = document.querySelector("button");
  var starValue = 0;

  for (const star of starList){
    star.addEventListener("click" , () =>{  
      starValue =  star.innerText;
      btnIsselected();
    });
    
    }
    

 
  submit.addEventListener("click", () => {
    if(starValue){
    document.querySelector(".ratingCard")
    .style.display = "none";
    document.querySelector("span")
    .innerText = starValue;
  document.querySelector(".thankYouCard")
  .style.display = "block";}
  })


  function btnIsselected(){
    for(const star of starList){
      star.classList.remove("isSelected");
      if( starValue ===  star.innerText){
        star.classList.add("isSelected");
      }
    }
  }