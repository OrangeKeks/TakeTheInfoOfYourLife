let pos = document.getElementById('btn');
 
function offBlur()
{
   alert("да");
   console.log("dsada");
   pos.style.filter = "blur(0px)";
}

pos.addEventListener("click", offBlur);