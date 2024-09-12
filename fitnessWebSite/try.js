
  function submitForm() {
    // Get form elements
    var form = document.getElementById("courseForm");
    var nameInput = document.getElementById("name");
    var genderInputs = document.querySelectorAll('input[name="gender"]');
    var contactInput = document.getElementById("contact");
  
    // Validate name input
    var nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(nameInput.value)) {
      alert("Name must contain only letters.");
      return;
    }
  
    // Validate gender input
    var checkedGenderInputs = Array.from(genderInputs).filter(input => input.checked);
    if (checkedGenderInputs.length !== 1) {
      alert("Please select one gender.");
      return;
    }
  
    // Validate contact input
    var contactRegex = /^\d+$/;
    if (!contactRegex.test(contactInput.value)) {
      alert("Contact number must contain only numbers.");
      return;
    }
  
    // If all inputs are valid, proceed to submit the form
    var output = document.getElementById("output");
    var formData = new FormData(form);
  
    var outputHTML = "<h2>Submitted Data</h2>";
    formData.forEach(function(value, key) {
      outputHTML += "<p><strong>" + key + ":</strong> " + value + "</p>";
    });
  
    output.innerHTML = outputHTML;
  }
    