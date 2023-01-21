// aos animation scroll initializing for on load scrolling
AOS.init({
    offset: 50,
  });
  
  // web development services toggle functioning

function openService(serviceNo) {
    var tabs = document.getElementsByClassName("tabs");
    var services = document.getElementsByClassName("services");
    for (tablink of tabs) {
      tablink.classList.remove("active-tab");
    }
    for (service of services) {
      service.classList.remove("active-service");
    }
    event.currentTarget.classList.add("active-tab");
    document.getElementById(serviceNo).classList.add("active-service");
  }