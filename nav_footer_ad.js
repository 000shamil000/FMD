function toggleMenu() {
  var trans = document.querySelector(".map_n");
  if (trans.style.display === "none") {
    trans.style.display = "block";
  } else {
    trans.style.display = "none";
  }
}
function toggleActiveMenu(){
    var menuLine = document.querySelectorAll(".menu_line, .head_nav");
    menuLine.forEach(function(element) {
        element.classList.toggle("active");
      });
}



  var x = document.documentElement.clientWidth;
  if (x <= 650) {
    document.getElementById("header_img").src="https://www.natannge-fmd.com/img/gerb.png";
  }

  if (x <= 850) {
    document.querySelector(".translate").removeAttribute("id");
    document.querySelector(".translate_mb").setAttribute("id", "google_translate_element");
    
    function toggleText_footer(){
      var Text_FT = document.querySelector(".text_footer_in")
      if(Text_FT.style.display === "block"){
        Text_FT.style.display = "none";
      } else {
        Text_FT.style.display = "block";
      }
    }
    function toggleAbout_footer(){
      var Text_FT = document.querySelector(".our_data_ft")
      if(Text_FT.style.display === "block"){
        Text_FT.style.display = "none";
      } else {
        Text_FT.style.display = "block";
      }
    }
    function toggleNetwork_ft(){
      var Text_FT = document.querySelector(".socials")
      if(Text_FT.style.display === "flex"){
        Text_FT.style.display = "none";
      } else {
        Text_FT.style.display = "flex";
      }
    }
  }

