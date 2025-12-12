// APPROXIMATE coordinates (tumhare map ko dekhkar logically set kiye)
// Jab tum final clean map doge, main precise coordinates de dunga.

let locations = {
    "6th building": { x: 300, y: 200 },
    "9th building": { x: 360, y: 200 },

    // Opposite side me cafeteria
    "cafeteria": { x: 330, y: 280 },

    // Xerox center cafeteria ke bilkul side me
    "xerox center": { x: 365, y: 280 },

    "boys hostel": { x: 120, y: 430 },
    "girls hostel": { x: 170, y: 450 },

    "boys mess": { x: 140, y: 420 },
    "girls mess": { x: 190, y: 460 },

    "boys washroom": { x: 310, y: 230 },
    "girls washroom": { x: 340, y: 240 },

    "gate 1": { x: 70, y: 100 },
    "gate 2": { x: 250, y: 90 },
    "gate 3": { x: 450, y: 85 },
    "gate 4": { x: 600, y: 120 },

    "first aid": { x: 380, y: 220 }
};

function showRoute() {
    let start = document.getElementById("start").value.toLowerCase();
    let end = document.getElementById("end").value.toLowerCase();

    if (!locations[start] || !locations[end]) {
        alert("Incorrect location! Try: 6th Building, 9th Building, Cafeteria, Xerox Center");
        return;
    }

    let canvas = document.getElementById("routeCanvas");
    let ctx = canvas.getContext("2d");

    canvas.width = 700;
    canvas.height = 500;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let s = locations[start];
    let e = locations[end];

    // ROUTE LINE
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(e.x, e.y);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.stroke();

    // END POINT DOT
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(e.x, e.y, 8, 0, 2 * Math.PI);
    ctx.fill();
}
