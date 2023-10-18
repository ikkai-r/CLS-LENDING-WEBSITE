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
    $('#submit-btn').hide();
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
        $('button[data-tabs-target="#personal-info"]').hide();
        $('button[data-tabs-target="#upload-info"]').hide();
        $('button[data-tabs-target="#contact-info"]').show();
        $('button[data-tabs-target="#contact-info"]').text("Next Step");
        $('#submit-btn').hide();
    }
    
    function showButtonsContact() {
        $('button[data-tabs-target="#personal-info"]').show();
        $('button[data-tabs-target="#upload-info"]').show();
        $('button[data-tabs-target="#contact-info"]').hide();
        $('#submit-btn').hide();
        $('button[data-tabs-target="#personal-info"]').text("Previous Step");
        $('button[data-tabs-target="#upload-info"]').text("Next Step");
    }

    function showButtonsUpload() {
        $('button[data-tabs-target="#personal-info"]').hide();
        $('button[data-tabs-target="#upload-info"]').hide();
        $('button[data-tabs-target="#contact-info"]').show();
        $('button[data-tabs-target="#contact-info"]').text("Previous Step");
        $('#submit-btn').show();
    }
});


function submitAllForms() {
    document.getElementById('personal-info-form').submit();
    document.getElementById('contact-info-form').submit();
    document.getElementById('upload-info-form').submit();
}

