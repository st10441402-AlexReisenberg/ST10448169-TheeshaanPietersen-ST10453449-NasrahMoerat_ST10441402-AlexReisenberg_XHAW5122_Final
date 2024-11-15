// scripts.js
function calculateFees() {
  const courses = document.querySelectorAll('input[name="course"]:checked');
  let total = 0;

  courses.forEach((course) => {
    total += parseInt(course.value);
  });

  // Apply discount based on number of courses selected
  let discount = 0;
  if (courses.length === 2) {
    discount = total * 0.05;
  } else if (courses.length === 3) {
    discount = total * 0.10;
  } else if (courses.length > 3) {
    discount = total * 0.15;
  }

  let finalCost = total - discount;
  document.getElementById('totalCost').innerText = `Total Cost: R${finalCost}`;
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
