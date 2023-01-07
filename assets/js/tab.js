function openService(serviceName) {
      var i;
      var x = document.getElementsByClassName("city");
      var y = document.getElementsByClassName("list-content");
      for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            x[i].style.marginTop = "40px";
            y[i].className = "list-item list-content";
      }
      document.getElementById(serviceName).style.display = "block";
      document.getElementById(serviceName + 'btn').className = "list-item list-content btn-active";
}
