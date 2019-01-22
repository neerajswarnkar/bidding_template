$(document).ready(function() {
function sortByNumber(rows, selector, ascending) {
    rows.sort(function(a, b) {
    var numberA = parseInt($(selector, a).text(), 10);
    var numberB = parseInt($(selector, b).text(), 10);
    if (ascending) return numberA - numberB;
    else return numberB - numberA;
    });

    return rows;
}

function sortByText(rows, selector, ascending) {
    rows.sort(function(a, b) {
    var textA = $(selector, a).text();
    var textB = $(selector, b).text();
    if (ascending) return textA.localeCompare(textB);
    else return textB.localeCompare(textA);
    });

    return rows;
}

function sortAllBy(field) {
    var rows = $("table tbody tr").toArray();

    switch (field) {
    case "distance":
        rows = sortByNumber(rows, "td.col-dis", true);
        break;
    case "bidding":
        rows = sortByNumber(rows, "td.col-bid", true);
        break;
    case "duration":
        rows = sortByText(rows, "td.col-dur", true);
        break;

    default:
        console.error("Undefined sort field " + field);
        break;
    }

    for (var i = 0; i < rows.length; i++) {
    $("table tbody").append(rows[i]);
    }
}

$("select").on("change", function() {
    sortAllBy(this.value);
});
});
