document.querySelector("#subscribe").addEventListener("click", function() {

    if(this.checked) {
        document.querySelector("#emailDiv").style.display = "block";
    }
    else {
        document.querySelector("#emailDiv").style.display = "none";
    }
})
