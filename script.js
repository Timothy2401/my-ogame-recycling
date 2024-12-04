// Schiffskosten
const shipCosts = {
    "Leichter Jäger": { metal: 3000, crystal: 1000, deuterium: 0 },
    "Schwerer Jäger": { metal: 6000, crystal: 4000, deuterium: 0 },
    "Kreuzer": { metal: 20000, crystal: 7000, deuterium: 0 },
    "Schlachtschiff": { metal: 45000, crystal: 15000, deuterium: 0 },
    "Schlachtkreuzer": { metal: 30000, crystal: 40000, deuterium: 15000 },
    "Bomber": { metal: 50000, crystal: 25000, deuterium: 15000 },
    "Zerstörer": { metal: 60000, crystal: 50000, deuterium: 15000 },
    "Todesstern": { metal: 5000000, crystal: 4000000, deuterium: 1000000 },
    "Reaper": { metal: 85000, crystal: 55000, deuterium: 20000 },
    "Pathfinder": { metal: 8000, crystal: 15000, deuterium: 8000 },
    "K-Transporter": { metal: 2000, crystal: 2000, deuterium: 0 },
    "G-Transporter": { metal: 6000, crystal: 6000, deuterium: 0 },
    "Kolonieschiff": { metal: 10000, crystal: 20000, deuterium: 10000 },
    "Recycler": { metal: 10000, crystal: 6000, deuterium: 2000 },
    "Spionagesonde": { metal: 0, crystal: 1000, deuterium: 0 }
};

// Berechnung der Ressourcen
function calculateResources() {
    const percentageInput = document.getElementById("percentage").value;
    const percentage = parseFloat(percentageInput) / 100;

    if (isNaN(percentage) || percentage < 0.35 || percentage > 0.75) {
        alert("Bitte geben Sie einen gültigen Prozentsatz ein (35%-75%)!");
        return;
    }

    let totalMetall = 0;
    let totalKristall = 0;
    let totalDeuterium = 0;

    Object.entries(shipCosts).forEach(([shipType, costs], index) => {
        const inputField = document.getElementById(`input${index + 1}`);
        const quantity = parseInt(inputField.value) || 0;

        totalMetall += costs.metal * quantity * percentage;
        totalKristall += costs.crystal * quantity * percentage;
        totalDeuterium += costs.deuterium * quantity * percentage;
    });

    document.getElementById("resultMetall").textContent = totalMetall.toLocaleString('de-DE');
    document.getElementById("resultKristall").textContent = totalKristall.toLocaleString('de-DE');
    document.getElementById("resultDeuterium").textContent = totalDeuterium.toLocaleString('de-DE');
}

// Sprachumschaltung vorbereiten (Falls benötigt)
document.getElementById("calculateButton").addEventListener("click", calculateResources);
