function handleFileUpload(inputElement, previewElement) {
    inputElement.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function() {
                const img = document.createElement('img');
                img.src = reader.result;
                previewElement.innerHTML = '';
                previewElement.appendChild(img);
            }
            reader.readAsDataURL(file);
        }
    });
}

const idImageInput = document.getElementById('id_image');
const idImagePreview = document.getElementById('id_image_preview');
handleFileUpload(idImageInput, idImagePreview);

const signatureImageInput = document.getElementById('signature_image');
const signatureImagePreview = document.getElementById('signature_image_preview');
handleFileUpload(signatureImageInput, signatureImagePreview);
