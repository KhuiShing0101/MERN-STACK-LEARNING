function filterdata() {
    let filter = document.getElementById("data").value.toUpperCase();
    let table = document.getElementById("tablerecord")
    let datatr = table.getElementsByTagName("tr");
    for (var i = 0; i < datatr.length; i++) {
        let td = "";

        td = datatr[i].getElementsByTagName("td")[0];

        if (td) {

            let searchvalue = td.textContent || td.innerHTML;

            console.log(searchvalue);

            if (searchvalue.toUpperCase().indexOf(filter) > -1) {
                datatr[i].style.display = "";
            } else {
                datatr[i].style.display = "none";
            }

        }
    }
}