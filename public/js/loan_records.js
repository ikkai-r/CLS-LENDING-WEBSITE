// Check/Uncheck all checkboxes
$('#checkbox-all-search').click(function(event) {   
    if (this.checked) {
        $(':checkbox').each(function() {
            this.checked = true;                        
        });
    } else {
        $(':checkbox').each(function() {
            this.checked = false;                       
        });
    }
});

//filter
$('#table-search').on('input', function() {
    var searchText = $(this).val().toLowerCase();

    $('tbody tr').each(function() {
        var dateText = $(this).find('td:eq(2)').text().toLowerCase(); 
        var referenceText = $(this).find('td:eq(1)').text().toLowerCase(); 

        if (dateText.includes(searchText) || referenceText.includes(searchText)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});

//tab thing
function processRows(tabId) {
    const rows = document.querySelectorAll(`#${tabId} tbody tr.bg-white`);

    rows.forEach((row) => {
        const reference = row.querySelector('td:nth-child(2)').textContent.trim();
        const date = row.querySelector('td:nth-child(3)').textContent.trim();
        const category = row.querySelector('td:nth-child(4)').textContent.trim();
        const capital = row.querySelector('td:nth-child(5)').textContent.trim();
        const interest = row.querySelector('td:nth-child(6)').textContent.trim();
        const balance = row.querySelector('td:nth-child(7)').textContent.trim();

        console.log(`Reference: ${reference}, Date: ${date}, Category: ${category}, Capital: ${capital}, Interest: ${interest}, Balance: ${balance}`);
    });
}

function redirectToPage(pageUrl) {
    window.location.href = pageUrl;
}