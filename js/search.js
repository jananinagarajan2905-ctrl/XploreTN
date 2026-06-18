function searchDestination(){

    let search =
        document.getElementById("searchInput")
        .value.toLowerCase();

    if(search === "kodaikanal"){
        window.location.href = "destinations.html";
    }

    else if(search === "ooty"){
        window.location.href = "destinations.html";
    }

    else{
        alert("Destination not found");
    }
}