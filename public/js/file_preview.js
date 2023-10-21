document.addEventListener("DOMContentLoaded", function() {
    const inpFile = document.getElementById("id_image");
    const previewImage = document.getElementById("image-preview__image-id");

    const inpFile1 = document.getElementById("signature_image");
    const previewImage1 = document.getElementById("image-preview__image-sig");

        inpFile.addEventListener("change", function() {
            const file = inpFile.files[0];

            if (file) {
                const reader = new FileReader();

                previewImage.style.display = "block";

                reader.addEventListener("load", function() {
                    console.log(this);
                    previewImage.setAttribute("src", this.result);
                });

                reader.readAsDataURL(file);
            }
        });

        inpFile1.addEventListener("change", function() {
            const file = inpFile1.files[0];

            if (file) {
                const reader = new FileReader();

                previewImage1.style.display = "block";

                reader.addEventListener("load", function() {
                    console.log(this);
                    previewImage1.setAttribute("src", this.result);
                });

                reader.readAsDataURL(file);
            }
        });
     
});

var clicked = false;

var my_handlers = {

    fill_provinces:  function(){

        var region_code = $(this).val();
        $('#province').ph_locations('fetch_list', [{"region_code": region_code}]);
        
    },

    fill_cities: function(){

        var province_code = $(this).val();
        $('#city').ph_locations( 'fetch_list', [{"province_code": province_code}]);
    },


    fill_barangays: function(){

        var city_code = $(this).val();
        $('#barangay').ph_locations('fetch_list', [{"city_code": city_code}]);
    }
};

$(function () {
    var clicked = false; 

    $('#region').on('change', my_handlers.fill_provinces);
    $('#province').on('change', my_handlers.fill_cities);
    $('#city').on('change', my_handlers.fill_barangays);

    $('#region').ph_locations({ 'location_type': 'regions' });
    $('#province').ph_locations({ 'location_type': 'provinces' });
    $('#city').ph_locations({ 'location_type': 'cities' });
    $('#barangay').ph_locations({ 'location_type': 'barangays' });

    $("#region").on("click", function () {
        if (!clicked) {
            $('#region').ph_locations('fetch_list');
            clicked = true; 
        }
    });
});

$(function () {
    // Initially, personal-info tab is active
    // So, hide personal-info button and upload-info button, and change the text for contact-info button
    hideButtonsPersonal();
    
    // When the user clicks the "Contact Info" tab, show the personal-info and upload-info buttons
    // and revert the text for the contact-info button
    $('button[data-tabs-target="#contact-info"]').on('click', function () {
        showButtonsContact();
    });

    $('button[data-tabs-target="#personal-info"]').on('click', function () {
        hideButtonsPersonal();
    });

    $('button[data-tabs-target="#upload-info"]').on('click', function () {
        showButtonsUpload();
    });
    
    function hideButtonsPersonal() {
        $('button[data-tabs-target="#personal-info"]').addClass('hidden');
        $('button[data-tabs-target="#upload-info"]').addClass('hidden');
        $('button[data-tabs-target="#contact-info"]').removeClass('hidden');
        $('button[data-tabs-target="#contact-info"]').text("Next Step");
        $('#submit-btn').addClass('hidden');

        $('#p-stepper').addClass('h-48');
        $('#p-stepper').removeClass('h-10');
        $('#c-stepper').addClass('h-10');
        $('#c-stepper').removeClass('h-48');

        $('#p-stepper-circle').addClass('w-24');
        $('#p-stepper-circle').addClass('h-24');
        $('#p-stepper-circle').removeClass('h-12');
        $('#p-stepper-circle').removeClass('w-12');
        $('#c-stepper-circle').removeClass('w-24');
        $('#c-stepper-circle').removeClass('h-24');
        $('#c-stepper-circle').addClass('h-12');
        $('#c-stepper-circle').addClass('w-12');

        $('#p-stepper-icon').addClass('w-9');
        $('#p-stepper-icon').addClass('h-9');
        $('#p-stepper-icon').removeClass('w-6');
        $('#p-stepper-icon').removeClass('h-6');

        $('#c-stepper-icon').removeClass('w-9');
        $('#c-stepper-icon').removeClass('h-9');
        $('#c-stepper-icon').addClass('w-6');
        $('#c-stepper-icon').addClass('h-6');

        $('#p-stepper-circle').removeClass('bg-indigo-50');
        $('#p-stepper-circle').addClass('bg-cmyellow');
        $('#c-stepper-circle').addClass('bg-indigo-50');
        $('#c-stepper-circle').removeClass('bg-cmyellow');

        $('#c-tks').removeClass('text-3xl');
        $('#c-tks').addClass('text-xl');
        $('#p-tks').addClass('text-3xl');
        $('#p-tks').removeClass('text-xl');
    }
    
    function showButtonsContact() {
        $('button[data-tabs-target="#personal-info"]').removeClass('hidden');
        $('button[data-tabs-target="#upload-info"]').removeClass('hidden');
        $('button[data-tabs-target="#contact-info"]').addClass('hidden');
        $('#submit-btn').addClass('hidden');
        $('button[data-tabs-target="#personal-info"]').text("Previous Step");
        $('button[data-tabs-target="#upload-info"]').text("Next Step");
        
        $('#c-stepper').addClass('h-48');
        $('#c-stepper').removeClass('h-10');
        $('#p-stepper').addClass('h-10');
        $('#p-stepper').removeClass('h-48');
        $('#u-stepper').addClass('h-10');
        $('#u-stepper').removeClass('h-48');

        $('#c-stepper-circle').addClass('w-24');
        $('#c-stepper-circle').addClass('h-24');
        $('#c-stepper-circle').removeClass('h-12');
        $('#c-stepper-circle').removeClass('w-12');
        $('#p-stepper-circle').removeClass('w-24');
        $('#p-stepper-circle').removeClass('h-24');
        $('#p-stepper-circle').addClass('h-12');
        $('#p-stepper-circle').addClass('w-12');
        $('#u-stepper-circle').removeClass('w-24');
        $('#u-stepper-circle').removeClass('h-24');
        $('#u-stepper-circle').addClass('h-12');
        $('#u-stepper-circle').addClass('w-12');

        $('#c-stepper-icon').addClass('w-9');
        $('#c-stepper-icon').addClass('h-9');
        $('#c-stepper-icon').removeClass('w-6');
        $('#c-stepper-icon').removeClass('h-6');

        $('#p-stepper-icon').removeClass('w-9');
        $('#p-stepper-icon').removeClass('h-9');
        $('#p-stepper-icon').addClass('w-6');
        $('#p-stepper-icon').addClass('h-6');

        $('#u-stepper-icon').removeClass('w-9');
        $('#u-stepper-icon').removeClass('h-9');
        $('#u-stepper-icon').addClass('w-6');
        $('#u-stepper-icon').addClass('h-6');

        $('#c-stepper-circle').removeClass('bg-indigo-50');
        $('#c-stepper-circle').addClass('bg-cmyellow');

        $('#u-stepper-circle').removeClass('bg-cmyellow');
        $('#u-stepper-circle').addClass('bg-indigo-50');

        $('#p-tks').removeClass('text-3xl');
        $('#p-tks').addClass('text-xl');
        $('#u-tks').removeClass('text-3xl');
        $('#u-tks').addClass('text-xl');

        $('#c-tks').addClass('text-3xl');
        $('#c-tks').removeClass('text-xl');

    }

    function showButtonsUpload() {
        $('button[data-tabs-target="#personal-info"]').addClass('hidden');
        $('button[data-tabs-target="#upload-info"]').addClass('hidden');
        $('button[data-tabs-target="#contact-info"]').removeClass('hidden');
        $('button[data-tabs-target="#contact-info"]').text("Previous Step");
        $('#submit-btn').removeClass('hidden');

        $('#u-stepper').addClass('h-48');
        $('#u-stepper').removeClass('h-10');
        $('#c-stepper').addClass('h-10');
        $('#c-stepper').removeClass('h-48');

        $('#u-stepper-circle').addClass('w-24');
        $('#u-stepper-circle').addClass('h-24');
        $('#u-stepper-circle').removeClass('h-12');
        $('#u-stepper-circle').removeClass('w-12');
        $('#c-stepper-circle').removeClass('w-24');
        $('#c-stepper-circle').removeClass('h-24');
        $('#c-stepper-circle').addClass('h-12');
        $('#c-stepper-circle').addClass('w-12');

        $('#u-stepper-icon').addClass('w-9');
        $('#u-stepper-icon').addClass('h-9');
        $('#u-stepper-icon').removeClass('w-6');
        $('#u-stepper-icon').removeClass('h-6');

        $('#c-stepper-icon').removeClass('w-9');
        $('#c-stepper-icon').removeClass('h-9');
        $('#c-stepper-icon').addClass('w-6');
        $('#c-stepper-icon').addClass('h-6');

        $('#u-stepper-circle').removeClass('bg-indigo-50');
        $('#u-stepper-circle').addClass('bg-cmyellow');

        $('#c-tks').removeClass('text-3xl');
        $('#c-tks').addClass('text-xl');
        $('#u-tks').addClass('text-3xl');
        $('#u-tks').removeClass('text-xl');

    }
});


function submitAllForms() {
    if(validateFormUpload()) {
        //submit all forms
        // document.getElementById('personal-info-form').submit();
        // document.getElementById('contact-info-form').submit();
        // document.getElementById('upload-info-form').submit();

        //redirect to client dashboard
        window.location.href = '/c_dashboard';
    }
}


function validateFormFieldsP(event) {
    const firstNameField = document.getElementById('first_name');
    const lastNameField = document.getElementById('last_name');
    const genderFields = document.querySelectorAll('input[name="gender"]');
    const regionField = document.getElementById('region');
    const provinceField = document.getElementById('province');
    const cityField = document.getElementById('city');
    const barangayField = document.getElementById('barangay');
    const addDetailsField = document.getElementById('add_details');

    if(firstNameField.value.trim() === '') {
        $(firstNameField).addClass('border-red-500');
        $(firstNameField).removeClass('border-gray-300');
        $(firstNameField).addClass('placeholder-red-700');
    } else {
        $(firstNameField).removeClass('border-red-500');
        $(firstNameField).addClass('border-gray-300');
        $(firstNameField).removeClass('placeholder-red-700');
    }

    if(lastNameField.value.trim() === '') {
        $(lastNameField).addClass('border-red-500');
        $(lastNameField).removeClass('border-gray-300');
        $(lastNameField).addClass('placeholder-red-700');
    } else {
        $(lastNameField).removeClass('border-red-500');
        $(lastNameField).addClass('border-gray-300');
        $(lastNameField).removeClass('placeholder-red-700');
    }

    if(!Array.from(genderFields).some((radio) => radio.checked)) {
        $('#gender-error').removeClass('hidden');
    } else {
        $('#gender-error').addClass('hidden');
    }

    if(regionField.value === 'none') {
        $(regionField).addClass('border-red-500');
        $(regionField).removeClass('border-gray-300');
        $(regionField).addClass('text-red-700');
    } else {
        $(regionField).removeClass('border-red-500');
        $(regionField).addClass('border-gray-300');
        $(regionField).removeClass('text-red-700');
    }

    if(provinceField.value === 'none') {
        $(provinceField).addClass('border-red-500');
        $(provinceField).removeClass('border-gray-300');
        $(provinceField).addClass('text-red-700');
    } else {
        $(provinceField).removeClass('border-red-500');
        $(provinceField).addClass('border-gray-300');
        $(provinceField).removeClass('text-red-700');
    }
    

    if(cityField.value === 'none') {
        $(cityField).addClass('border-red-500');
        $(cityField).removeClass('border-gray-300');
        $(cityField).addClass('text-red-700');
    } else {
        $(cityField).removeClass('border-red-500');
        $(cityField).addClass('border-gray-300');
        $(cityField).removeClass('text-red-700');
    }

    if(barangayField.value === 'none') {
        $(barangayField).addClass('border-red-500');
        $(barangayField).removeClass('border-gray-300');
        $(barangayField).addClass('text-red-700');
    } else {
        $(barangayField).removeClass('border-red-500');
        $(barangayField).addClass('border-gray-300');
        $(barangayField).removeClass('text-red-700');
    }

    if(addDetailsField.value.trim() === '') {
        $(addDetailsField).addClass('border-red-500');
        $(addDetailsField).removeClass('border-gray-300');
        $(addDetailsField).addClass('placeholder-red-700');
    } else {
        $(addDetailsField).removeClass('border-red-500');
        $(addDetailsField).addClass('border-gray-300');
        $(addDetailsField).removeClass('placeholder-red-700');
    }

    if (
        firstNameField.value.trim() === '' ||
        lastNameField.value.trim() === '' ||
        !Array.from(genderFields).some((radio) => radio.checked) ||
        regionField.value === 'none' ||
        provinceField.value === 'none' ||
        cityField.value === 'none' ||
        barangayField.value === 'none' ||
        addDetailsField.value.trim() === ''
    ) {
        event.stopImmediatePropagation();
    }
}

function checkClick(element) {
    $(element).removeClass('text-red-700');
    $(element).removeClass('border-red-500');
    $(element).addClass('border-gray-300');
}

function changeField(element) {
    $(element).removeClass('border-red-500');
    $(element).addClass('border-gray-300');
}

function removeError(element) {
    $('#gender-error').addClass('hidden');
}

function validatePassword() {
    const passwordField = document.getElementById('password-tks');
    const password = passwordField.value;

    // Check for at least 10 characters
    const hasMinLength = password.length >= 10;

    // Check for at least one uppercase character using a regular expression
    const hasUppercase = /[A-Z]/.test(password);

    // Check for at least one special character using a regular expression
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
    
    if(hasMinLength) {
        $('#req-p-1').addClass('text-green-500');
        $('#req-p-1').removeClass('text-gray-500');
    } else {
        $('#req-p-1').removeClass('text-green-500');
        $('#req-p-1').addClass('text-gray-500');
    }

    if(hasUppercase) {
        $('#req-p-2').addClass('text-green-500');
        $('#req-p-2').removeClass('text-gray-500');
    } else {
        $('#req-p-2').removeClass('text-green-500');
        $('#req-p-2').addClass('text-gray-500');
    }

    if(hasSpecialChar) {
        $('#req-p-3').addClass('text-green-500');
        $('#req-p-3').removeClass('text-gray-500');
    } else {
        $('#req-p-3').removeClass('text-green-500');
        $('#req-p-3').addClass('text-gray-500');
    }

    // Check if all criteria are met
    if (hasMinLength && hasUppercase && hasSpecialChar) {
        // Password is valid
        return true;
    } else {
        // Password is invalid
        return false;
    }
}

function validateFormFieldsC(event) {
    //check for all fields for contact if filled up before going to update
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password-tks');
    const contactField = document.getElementById('contact_number');
    const facebookField = document.getElementById('facebook_link');
    const contactRegex = /^(09\d{9})$/;
    const facebookRegex = /^(https:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9.]+/;
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if(emailField.value.trim() === '' || !emailRegex.test(emailField.value)) {
        $(emailField).addClass('border-red-500');
        $(emailField).removeClass('border-gray-300');
        $(emailField).addClass('placeholder-red-700');
    } else {
        $(emailField).removeClass('border-red-500');
        $(emailField).addClass('border-gray-300');
        $(emailField).removeClass('placeholder-red-700');
    }

    if(passwordField.value.trim() === '' || !validatePassword()) {
        $(passwordField).addClass('border-red-500');
        $(passwordField).removeClass('border-gray-300');
        $(passwordField).addClass('placeholder-red-700');
    } else {
        $(passwordField).removeClass('border-red-500');
        $(passwordField).addClass('border-gray-300');
        $(passwordField).removeClass('placeholder-red-700');
    }

    if(contactField.value.trim() === '' || !contactRegex.test(contactField.value)) {
        $(contactField).addClass('border-red-500');
        $(contactField).removeClass('border-gray-300');
        $(contactField).addClass('placeholder-red-700');
    } else {
        $(contactField).removeClass('border-red-500');
        $(contactField).addClass('border-gray-300');
        $(contactField).removeClass('placeholder-red-700');
    }

    if(facebookField.value.trim() === '' || !facebookRegex.test(facebookField.value)) {
        $(facebookField).addClass('border-red-500');
        $(facebookField).removeClass('border-gray-300');
        $(facebookField).addClass('placeholder-red-700');
    } else {
        $(facebookField).removeClass('border-red-500');
        $(facebookField).addClass('border-gray-300');
        $(facebookField).removeClass('placeholder-red-700');
    }


    if (
        emailField.value.trim() === '' || !emailRegex.test(emailField.value) ||
        passwordField.value.trim() === '' || !validatePassword() ||
        contactField.value.trim() === '' || !contactRegex.test(contactField.value) || 
        facebookField.value.trim() === '' || !facebookRegex.test(facebookField.value)
    ) {
        event.stopImmediatePropagation();
    }
}

function validateFormUpload() {
    const idImageInput = document.getElementById('id_image');
    const signatureImageInput = document.getElementById('signature_image');

    if (idImageInput.files.length === 0 || signatureImageInput.files.length === 0) {
        $("#file-error").removeClass("hidden");
        return false; // Prevent form submission
    } else {
        $("#file-error").addClass("hidden");
    }
    return true; // Allow form submission
}
