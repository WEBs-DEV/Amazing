// aos animation scroll initializing for on load scrolling
AOS.init({
  offset: 50,
});

// graphics services toggle functioning

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

// Works toggle functioning
function openWork(workNo) {
  var worktabs = document.getElementsByClassName("work-tabs");
  var works = document.getElementsByClassName("works");
  for (worktablink of worktabs) {
    worktablink.classList.remove("active-work-tab");
  }
  for (work of works) {
    work.classList.remove("active-work");
  }
  event.currentTarget.classList.add("active-work-tab");
  document.getElementById(workNo).classList.add("active-work");
}
