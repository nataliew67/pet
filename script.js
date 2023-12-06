

document.getElementById("loginButton").addEventListener("click", function() {
    window.location.href = "loginin.html";
  });



  document.getElementById("signButton").addEventListener("click", function() {
    window.location.href = "signin.html";
  });
 
  document.getElementById("showButton").addEventListener("click", function() {
    window.location.href = "postpage.html";
  });


  document.getElementById("editButton").addEventListener("click", function() {
    window.location.href = "editpost.html";
  });




  function changeMainPhoto(thumbnail) {
    var mainPhoto = document.getElementById('main-slider').querySelector('.carousel-item');
    mainPhoto.innerHTML = '<img src="' + thumbnail.src + '" class="d-block w-100" alt="Main Photo" style="margin-top: 10px; margin-bottom: 10px; width: 350px; height: 340px;  border: 5px solid white; border-radius: 4px;">';
    }
    


    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    
    function filterFunction() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      div = document.getElementById("myDropdown");
      a = div.getElementsByTagName("a");
      for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }
    }




    function myFunction1() {
      document.getElementById("myDropdown1").classList.toggle("show");
      }
      
      window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content1");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
      }
      }
      }
      }