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
    document.getElementById('personal-info-form').submit();
    document.getElementById('contact-info-form').submit();
    document.getElementById('upload-info-form').submit();
}


function validateFormFieldsP() {
    const firstNameField = document.getElementById('first_name');
    const lastNameField = document.getElementById('last_name');
    const genderFields = document.querySelectorAll('input[name="gender"]');
    const regionField = document.getElementById('region');
    const provinceField = document.getElementById('province');
    const cityField = document.getElementById('city');
    const barangayField = document.getElementById('barangay');
    const addDetailsField = document.getElementById('add_details');

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
        alert('Please fill in all required fields in the personal info section.');
        return false; 
    }

    return true;
}


function validateFormFieldsC() {
    //check for all fields for contact if filled up before going to update
}
