// Ressourcen-Kosten für jedes Schiff
const resources = [
    { metal: 3000, crystal: 1000, deuterium: 0 },
    { metal: 6000, crystal: 4000, deuterium: 0 },
    { metal: 20000, crystal: 7000, deuterium: 2000 },
    { metal: 45000, crystal: 15000, deuterium: 0 },
    { metal: 30000, crystal: 10000, deuterium: 15000 },
    { metal: 50000, crystal: 25000, deuterium: 15000 },
    { metal: 60000, crystal: 50000, deuterium: 15000 },
    { metal: 5000000, crystal: 4000000, deuterium: 1000000 },
    { metal: 85000, crystal: 55000, deuterium: 20000 },
    { metal: 8000, crystal: 15000, deuterium: 8000 },
    { metal: 2000, crystal: 0, deuterium: 0 },
    { metal: 3000, crystal: 2000, deuterium: 0 },
    { metal: 10000, crystal: 0, deuterium: 0 },
    { metal: 10000, crystal: 600, deuterium: 0 },
    { metal: 1000, crystal: 1000, deuterium: 2000 }
];

// Übersetzungen
const translations = {
    de: {
        pageTitle: "Ogame Schiff-Recycling",
        shipTypes: [
            "Leichter Jäger", "Schwerer Jäger", "Kreuzer", "Schlachtschiff", "Schlachtkreuzer",
            "Bomber", "Zerstörer", "Todesstern", "Reaper", "Pathfinder", "K-Transporter",
            "G-Transporter", "Kolonieschiff", "Recycler", "Spionagesonde"
        ],
        percentageLabel: "Wähle den Prozentsatz (35 % - 75 %):",
        calculateButton: "Berechnen",
        resultTitle: "Ergebnis:",
        shipTypeHeader: "Schiffstyp",
        quantityHeader: "Eingabewert"
    },
    en: {
        pageTitle: "Ogame Ship Recycling",
        shipTypes: [
            "Light Fighter", "Heavy Fighter", "Cruiser", "Battleship", "Battlecruiser",
            "Bomber", "Destroyer", "Death Star", "Reaper", "Pathfinder", "K-Transporter",
            "G-Transporter", "Colony Ship", "Recycler", "Spy Probe"
        ],
        percentageLabel: "Choose percentage (35% - 75%):",
        calculateButton: "Calculate",
        resultTitle: "Result:",
        shipTypeHeader: "Ship Type",
        quantityHeader: "Input Value"
    }
};

// Berechnung der Ressourcen
function calculateResources() {
    let percentage = parseFloat(document.getElementById("percentage").value) / 100;
    let totalMetall = 0;
    let totalKristall = 0;
    let totalDeuterium = 0;

    for (let i = 0; i < resources.length; i++) {
        let quantity = parseInt(document.getElementById(`input${i + 1}`).value) || 0;
        totalMetall += resources[i].metal * quantity * percentage;
        totalKristall += resources[i].crystal * quantity * percentage;
        totalDeuterium += resources[i].deuterium * quantity * percentage;
    }

    // Mit Dezimaltrennzeichen formatieren
    document.getElementById("resultMetall").textContent = totalMetall.toLocaleString('de-DE');
    document.getElementById("resultKristall").textContent = totalKristall.toLocaleString('de-DE');
    document.getElementById("resultDeuterium").textContent = totalDeuterium.toLocaleString('de-DE');
}

// Sprachwechsel
document.getElementById("language-select").addEventListener("change", function (event) {
    const language = event.target.value;
    const t = translations[language];

    document.getElementById("pageTitle").textContent = t.pageTitle;
    document.getElementById("shipTypeHeader").textContent = t.shipTypeHeader;
    document.getElementById("quantityHeader").textContent = t.quantityHeader;
    document.querySelector("label[for='percentage']").textContent = t.percentageLabel;
    document.querySelector("button").textContent = t.calculateButton;
    document.querySelector("h2").textContent = t.resultTitle;

    // Schiffstypen
    for (let i = 0; i < t.shipTypes.length; i++) {
        document.getElementById(`shipType${i + 1}`).textContent = t.shipTypes[i];
    }
});
