// Beispielhafte Ressourcen-Kosten für jedes Schiff (Metall, Kristall, Deuterium)
const shipCosts = {
    "Leichter Jäger": { metal: 3000, crystal: 1000, deuterium: 0 },
    "Schwerer Jäger": { metal: 6000, crystal: 4000, deuterium: 0 },
    "Kreuzer": { metal: 20000, crystal: 7000, deuterium: 0 },
    "Schlachtschiff": { metal: 45000, crystal: 15000, deuterium: 0 },
    "Schlachtkreuzer": { metal: 30000, crystal: 40000, deuterium: 15000 },
    "Bomber": { metal: 50000, crystal: 25000, deuterium: 15000 },
    "Zerstörer": { metal: 60000, crystal: 40000, deuterium: 15000 }, 
    "Todesstern": { metal: 5000000, crystal: 4000000, deuterium: 1000000 },
    "Reaper": { metal: 85000, crystal: 55000, deuterium: 20000 },
    "Pathfinder": { metal: 8000, crystal: 15000, deuterium: 8000 },
    "K-Transporter": { metal: 2000, crystal: 2000, deuterium: 0 },
    "G-Transporter": { metal: 6000, crystal: 6000, deuterium: 0 },
    "Kolonieschiff": { metal: 10000, crystal: 20000, deuterium: 10000 },
    "Recycler": { metal: 10000, crystal: 6000, deuterium: 2000 },
    "Spionagesonde": { metal: 0, crystal: 1000, deuterium: 0 }
};

// Übersetzungen
const translations = {
    de: { /* ... Übersetzungen wie oben ... */ },
    en: { /* ... Übersetzungen wie oben ... */ }
};

// Berechnung der Ressourcen
function calculateResources() {
    let percentage = parseFloat(document.getElementById("percentage").value) / 100;
    let totalMetall = 0;
    let totalKristall = 0;
    let totalDeuterium = 0;

    for (let i = 0; i < Object.keys(shipCosts).length; i++) {
        let shipType = Object.keys(shipCosts)[i];
        let quantity = parseInt(document.getElementById(`input${i + 1}`).value) || 0;

        totalMetall += shipCosts[shipType].metal * quantity * percentage;
        totalKristall += shipCosts[shipType].crystal * quantity * percentage;
        totalDeuterium += shipCosts[shipType].deuterium * quantity * percentage;
    }

    document.getElementById("resultMetall").textContent = totalMetall.toLocaleString('de-DE');
    document.getElementById("resultKristall").textContent = totalKristall.toLocaleString('de-DE');
    document.getElementById("resultDeuterium").textContent = totalDeuterium.toLocaleString('de-DE');
}

// Sprachwechsel
document.getElementById("language-select").addEventListener("change", function (event) {
    /* Sprachwechsel-Logik wie oben ... */
});
// Beispielhafte Ressourcen-Kosten für jedes Schiff (Metall, Kristall, Deuterium)
const shipCosts = {
    "Leichter Jäger": { metal: 3000, crystal: 1000, deuterium: 0 },
    "Schwerer Jäger": { metal: 6000, crystal: 4000, deuterium: 0 },
    "Kreuzer": { metal: 20000, crystal: 7000, deuterium: 0 },
    "Schlachtschiff": { metal: 45000, crystal: 15000, deuterium: 0 },
    "Schlachtkreuzer": { metal: 30000, crystal: 40000, deuterium: 15000 },
    "Bomber": { metal: 50000, crystal: 25000, deuterium: 15000 },
    "Zerstörer": { metal: 60000, crystal: 40000, deuterium: 15000 }, 
    "Todesstern": { metal: 5000000, crystal: 4000000, deuterium: 1000000 },
    "Reaper": { metal: 85000, crystal: 55000, deuterium: 20000 },
    "Pathfinder": { metal: 8000, crystal: 15000, deuterium: 8000 },
    "K-Transporter": { metal: 2000, crystal: 2000, deuterium: 0 },
    "G-Transporter": { metal: 6000, crystal: 6000, deuterium: 0 },
    "Kolonieschiff": { metal: 10000, crystal: 20000, deuterium: 10000 },
    "Recycler": { metal: 10000, crystal: 6000, deuterium: 2000 },
    "Spionagesonde": { metal: 0, crystal: 1000, deuterium: 0 }
};

// Übersetzungen
const translations = {
    de: { /* ... Übersetzungen wie oben ... */ },
    en: { /* ... Übersetzungen wie oben ... */ }
};

// Berechnung der Ressourcen
function calculateResources() {
    let percentage = parseFloat(document.getElementById("percentage").value) / 100;
    let totalMetall = 0;
    let totalKristall = 0;
    let totalDeuterium = 0;

    for (let i = 0; i < Object.keys(shipCosts).length; i++) {
        let shipType = Object.keys(shipCosts)[i];
        let quantity = parseInt(document.getElementById(`input${i + 1}`).value) || 0;

        totalMetall += shipCosts[shipType].metal * quantity * percentage;
        totalKristall += shipCosts[shipType].crystal * quantity * percentage;
        totalDeuterium += shipCosts[shipType].deuterium * quantity * percentage;
    }

    document.getElementById("resultMetall").textContent = totalMetall.toLocaleString('de-DE');
    document.getElementById("resultKristall").textContent = totalKristall.toLocaleString('de-DE');
    document.getElementById("resultDeuterium").textContent = totalDeuterium.toLocaleString('de-DE');
}

// Sprachwechsel
document.getElementById("language-select").addEventListener("change", function (event) {
    /* Sprachwechsel-Logik wie oben ... */
});

        document.getElementById(`shipType${i + 1}`).textContent = t.shipTypes[i];
    }
});
