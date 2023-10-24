// noting lang na this doesn't work fully yet

function submitAllForms(){
    var formData = new FormData();

    formData.append('first_name', $('#first_name').val());
    formData.append('last_name', $('#last_name').val());

    
    var gender = document.getElementsByName('gender');
    var selected_gender;
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked)
            selected_gender = gender[i].value;
    }
    formData.append('gender', selected_gender);
    formData.append('region', $('#region').val()[0]);
    formData.append('province', $('#province').val());
    formData.append('city', $('#city').val());
    formData.append('barangay', $('#barangay').val());
    formData.append('region', $('#region').val());
    formData.append('add_details', $('#add_details').val());
    formData.append('email', $('#email').val());
    formData.append('password', $('#password-tks').val());
    formData.append('contact_number', $('#contact_number').val());
    formData.append('facebook_link', $('#facebook_link').val());

    formData.append('id_name', $('#id_image')[0].files[0]);
    formData.append('signature_image', $('#signature_image')[0].files[0]);

    console.log(formData);
    $.ajax({
        url  : '/register',
        type : 'POST',
        data : formData,
        processData: false,
        contentType: false,
        enctype: 'multipart/form-data',
        success : function(data) {
            console.log(data.message);
            console.log('Successfully registered!');
            window.location.href = "/register"; 
        },
        error: function(error) {
            console.error('Error submitting form:', error);

        }
    });
}