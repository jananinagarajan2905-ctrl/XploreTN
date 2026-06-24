function generatePlan() {

    let destination =
        document.getElementById("destination").value;

    let days =
        document.getElementById("days").value;

    let budget =
        document.getElementById("budget").value;

    let plan = "";
    let cost = "";

if(budget === "Low"){
    cost = "₹3,000 - ₹5,000";
}
else if(budget === "Medium"){
    cost = "₹5,000 - ₹10,000";
}
else{
    cost = "₹10,000+";
}

    if(destination === "Kodaikanal"){

      plan = `
<h3>🌲 Kodaikanal Trip Plan</h3>

<p><strong>Duration:</strong> ${days}</p>

<p><strong>Budget:</strong> ${budget}</p>

<p><strong>Estimated Cost(including food and accommodation):</strong> ${cost}</p>

<h4>Day 1</h4>
<ul>
    <li>Kodai Lake</li>
    <li>Coaker's Walk</li>
</ul>

<h4>Day 2</h4>
<ul>
    <li>Pine Forest</li>
    <li>Silver Cascade Falls</li>
</ul>

<h4>🍴 Recommended Foods</h4>
<ul>
    <li>Homemade Chocolates</li>
    <li>Hot Corn</li>
</ul>

<h4>🏨 Recommended Hotels</h4>
<ul>
    <li>The Carlton ⭐⭐⭐⭐⭐</li>
    <li>Sterling Kodai Lake ⭐⭐⭐⭐</li>
    <li>Villa Retreat ⭐⭐⭐⭐</li>
</ul>
`;
    }

    else if(destination === "Ooty"){

        plan = `
<h3>🌿 Ooty Trip Plan</h3>

<p><strong>Duration:</strong> ${days}</p>

<p><strong>Budget:</strong> ${budget}</p>

<p><strong>Estimated Cost(including food and accommodation):</strong> ${cost}</p>

<h4>Day 1</h4>
<ul>
    <li>Ooty Lake</li>
    <li>Botanical Garden</li>
</ul>

<h4>Day 2</h4>
<ul>
    <li>Doddabetta Peak</li>
    <li>Rose Garden</li>
</ul>

<h4>🍴 Recommended Foods</h4>
<ul>
    <li>Varkey</li>
    <li>Tea</li>
</ul>

<h4>🏨 Recommended Hotels</h4>
<ul>
    <li>Savoy Hotel ⭐⭐⭐⭐⭐</li>
    <li>Sterling Ooty Fern Hill ⭐⭐⭐⭐</li>
    <li>Fortune Resort Sullivan Court ⭐⭐⭐⭐</li>
</ul>
`;
    }

    else if(destination === "Kanyakumari"){

        plan = `
<h3>🌅 Kanyakumari Trip Plan</h3>

<p><strong>Duration:</strong> ${days}</p>

<p><strong>Budget:</strong> ${budget}</p>

<p><strong>Estimated Cost(including food and accommodation):</strong> ${cost}</p>

<h4>Day 1</h4>
<ul>
    <li>Vivekananda Rock Memorial</li>
    <li>Thiruvalluvar Statue</li>
</ul>

<h4>Day 2</h4>
<ul>
    <li>Kanyakumari Beach</li>
    <li>Sunrise Point</li>
</ul>

<h4>🍴 Recommended Foods</h4>
<ul>
    <li>Fish Curry</li>
    <li>Seafood Meals</li>
</ul>

<h4>🏨 Recommended Hotels</h4>
<ul>
    <li>Sparsa Resort ⭐⭐⭐⭐</li>
    <li>Sea View Hotel ⭐⭐⭐⭐</li>
    <li>Hotel Tamil Nadu ⭐⭐⭐</li>
</ul>
`;
    }

    else if(destination === "Madurai"){

       plan = `
<h3>🏛️ Madurai Trip Plan</h3>

<p><strong>Duration:</strong> ${days}</p>

<p><strong>Budget:</strong> ${budget}</p>

<p><strong>Estimated Cost(including food and accommodation):</strong> ${cost}</p>

<h4>Day 1</h4>
<ul>
    <li>Meenakshi Amman Temple</li>
    <li>Thirumalai Nayakkar Mahal</li>
</ul>

<h4>Day 2</h4>
<ul>
    <li>Gandhi Memorial Museum</li>
    <li>Vaigai River View</li>
</ul>

<h4>🍴 Recommended Foods</h4>
<ul>
    <li>Jigarthanda</li>
    <li>Kari Dosa</li>
</ul>

<h4>🏨 Recommended Hotels</h4>
<ul>
    <li>Heritage Madurai ⭐⭐⭐⭐⭐</li>
    <li>Gateway Hotel ⭐⭐⭐⭐</li>
    <li>JC Residency ⭐⭐⭐⭐</li>
</ul>
`;
    }

    else if(destination === "Theni"){

        plan = `
<h3>⛰️ Theni Trip Plan</h3>

<p><strong>Duration:</strong> ${days}</p>

<p><strong>Budget:</strong> ${budget}</p>

<p><strong>Estimated Cost(including food and accommodation):</strong> ${cost}</p>

<h4>Day 1</h4>
<ul>
    <li>Vaigai Dam</li>
    <li>Suruli Falls</li>
</ul>

<h4>Day 2</h4>
<ul>
    <li>Meghamalai</li>
    <li>Tea Estates</li>
</ul>

<h4>🍴 Recommended Foods</h4>
<ul>
    <li>Parotta & Salna</li>
    <li>Local Tea</li>
</ul>

<h4>🏨 Recommended Hotels</h4>
<ul>
    <li>Hotel Western Gatz ⭐⭐⭐⭐</li>
    <li>Sri Arul Jothi Hotel ⭐⭐⭐</li>
    <li>Hotel Megamalai ⭐⭐⭐⭐</li>
</ul>
`;
    }

    document.getElementById("result").innerHTML =
        plan;
}
async function downloadPDF(){

    const result =
        document.getElementById("result");

    if(result.innerText.trim() === ""){
        alert("Generate a trip plan first!");
        return;
    }

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    let text = result.innerText;

text = text
.replace(/🌲|🌿|🌅|🏛️|⛰️/g, "")
.replace(/🍴/g, "")
.replace(/🏨/g, "")
.replace(/⭐/g, "*")
.replace(/₹/g, "Rs.");

    const lines =
        doc.splitTextToSize(text, 180);

    doc.setFontSize(14);

    doc.text("XploreTN Trip Planner", 15, 20);

    doc.setFontSize(11);

    doc.text(lines, 15, 35);

    doc.save("XploreTN_Trip_Plan.pdf");
}
