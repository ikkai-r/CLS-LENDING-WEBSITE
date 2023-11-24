
function submitAllForms(){
    var formData = new FormData();

    formData.append('first_name', $('#first_name').val());
    formData.append('middle_name', $('#middle_name').val());
    formData.append('last_name', $('#last_name').val());

    
    var gender = document.getElementsByName('gender');
    var selected_gender;
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked)
            selected_gender = gender[i].value;
    }
    formData.append('gender', selected_gender);
    formData.append('region', $('#region option:selected').text())
    formData.append('province', $('#province option:selected').text())
    formData.append('city', $('#city option:selected').text())
    formData.append('barangay', $('#barangay option:selected').text());
    formData.append('add_details', $('#add_details').val());
    formData.append('email', $('#email').val());
    formData.append('password', $('#password-tks').val());
    formData.append('contact_number', $('#contact_number').val());
    formData.append('facebook_link', $('#facebook_link').val());

    formData.append('id_name', $('#id_image')[0].files[0]);
    formData.append('signature_image', $('#signature_image')[0].files[0]);

    const modalbg = document.getElementById('modal-bg');
    const successmodal = document.getElementById('success-popup-modal');
    const errormodal = document.getElementById('error-popup-modal');

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

            //add modal successfully registered
            modalbg.classList.remove('hidden');
            successmodal.classList.remove('hidden');

            //add timeout
            setTimeout(function() {
                window.location.href = "/c_dashboard";
            }, 2000);

        },
        error: function(error) {

            console.error('Error submitting form:', error);
            
            //add modal please try again 
            modalbg.classList.remove('hidden');
            errormodal.classList.remove('hidden');

            //add time out then hide
            setTimeout(function() {
                modalbg.classList.add('hidden');
                errormodal.classList.add('hidden');
            }, 2000);

        }
    });
}