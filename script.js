// Beispielhafte Ressourcen-Kosten für jedes Schiff (Metall, Kristall, Deuterium)
const shipCosts = {
    "Leichter Jäger": { metal: 1250, crystal: 500, deuterium: 100 },
    "Schwerer Jäger": { metal: 6000, crystal: 4000, deuterium: 1000 },
    "Kreuzer": { metal: 2000, crystal: 2000, deuterium: 500 },
    "Schlachtschiff": { metal: 7000, crystal: 4000, deuterium: 1000 },
    "Schlachtkreuzer": { metal: 30000, crystal: 40000, deuterium: 15000 }, // Korrektur
    "Bomber": { metal: 5000, crystal: 3000, deuterium: 1000 },
    "Zerstörer": { metal: 6000, crystal: 2000, deuterium: 500 },
    "Todesstern": { metal: 50000, crystal: 30000, deuterium: 10000 },
    "Reaper": { metal: 10000, crystal: 10000, deuterium: 4000 },
    "Pathfinder": { metal: 8000, crystal: 15000, deuterium: 8000 },
    "K-Transporter": { metal: 2000, crystal: 2000, deuterium: 0 }, // Korrektur
    "G-Transporter": { metal: 6000, crystal: 6000, deuterium: 0 }, // Korrektur
    "Kolonieschiff": { metal: 10000, crystal: 20000, deuterium: 10000 }, // Korrektur
    "Recycler": { metal: 10000, crystal: 6000, deuterium: 2000 }, // Korrektur
    "Spionagesonde": { metal: 0, crystal: 1000, deuterium: 0 } // Korrektur
};

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

    for (let i = 0; i < shipCosts.length; i++) {
        let quantity = parseInt(document.getElementById(`input${i + 1}`).value) || 0;
        let shipType = document.getElementById(`shipType${i + 1}`).textContent;

        totalMetall += shipCosts[shipType].metal * quantity * percentage;
        totalKristall += shipCosts[shipType].crystal * quantity * percentage;
        totalDeuterium += shipCosts[shipType].deuterium * quantity * percentage;
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
