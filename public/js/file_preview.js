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
