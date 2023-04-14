function handleGetFormData() {
	var name = document.getElementById('name').value;
	var city = document.getElementById('city').value;
	var email = document.getElementById('email').value;
	var zipCode = document.getElementById('zip-code').value;
	var status = document.getElementById('status').checked;

	var formData = {
		name: name,
		city: city,
		email: email,
		zipCode: zipCode,
		status: status,
	};
	return formData;
}

function isNumber(str) {
  if (str === '') {
    return false;
  }
  else if (isNaN(str)) {
    return false;
  }
  return true;
}

function checkboxIsChecked() {
  const statusCheckbox = document.getElementById("status");
  if (statusCheckbox.checked) {
    return true;
  } else {
    return false;
  }
}

function validateFormData(formData) {
    if (!formData) {
        return false;
    }

    if (isNaN(formData.zipCode)) {
        return false;
    }

    if (!checkboxIsChecked()) {
        return false;
    }

    return true;
}

document.getElementById("submit-form").addEventListener("click", function(event) {
    event.preventDefault();
    submit();
});

function submit() {
    const formData = handleGetFormData();
    const hasil = validateFormData(formData);
    if (hasil == false) {
        document.getElementById("warning").innerText = "Periksa form anda sekali lagi";
    } else {
        document.getElementById("warning").innerText = "";
    }
}