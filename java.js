  const throttleFunction=(func, delay)=>{
      let prev = 0; 
      return (...args) => {
        let now = new Date().getTime(); 

        console.log(now-prev, delay); 

        if(now - prev> delay){ 
          prev = now;
          return func(...args);  
        }
      }
    }

    let center = document.querySelector(".center");
 center.addEventListener("mousemove", throttleFunction((detail)=>{
     
      var div=document.createElement("div");
      div.classList.add("imgdiv");
      div.style.left=detail.clientX+"px";
      div.style.top=detail.clientY+"px"; 

      var img=document.createElement("img");
      img.setAttribute("src","https://plus.unsplash.com/premium_photo-1698846873170-cb46c8998d1d?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
      div.appendChild(img);
      
      document.body.appendChild(div);

     setTimeout(()=>{
        div.remove();
     },2000);

     gsap.to(img,{
        y:0,
        ease:Power3,
        
     })

    }, 500));
