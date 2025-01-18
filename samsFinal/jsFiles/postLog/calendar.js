const events = {
    "2024-06-19": {type: "dayOrder", description: "Order: I"},
    "2024-06-20": {type: "dayOrder", description: "Order: II"},
    "2024-06-21": {type: "dayOrder", description: "Order: III"},
    "2024-06-22": {type: "dayOrder", description: "Order: IV"},
    "2024-06-23": {type: "holiday", description: "Holiday"},
    "2024-06-24": {type: "dayOrder", description: "Order: V"},
    "2024-06-25": {type: "dayOrder", description: "Order: VI"},
    "2024-06-26": {type: "dayOrder", description: "Order: I"},
    "2024-06-27": {type: "dayOrder", description: "Order: II"},
    "2024-06-28": {type: "dayOrder", description: "Order: III"},
    "2024-06-29": {type: "holiday", description: "Holiday"},
    "2024-06-30": {type: "holiday", description: "Holiday"},
    "2024-07-01": {type: "dayOrder", description: "Order: IV"},
    "2024-07-02": {type: "dayOrder", description: "Order: V"},
    "2024-07-03": {type: "dayOrder", description: "Order: VI"},
    "2024-07-04": {type: "dayOrder", description: "Order: I"},
    "2024-07-05": {type: "dayOrder", description: "Order: II"},
    "2024-07-06": {type: "holiday", description: "Holiday"},
    "2024-07-07": {type: "holiday", description: "Holiday"},
    "2024-07-08": {type: "dayOrder", description: "Order: III"},
    "2024-07-09": {type: "dayOrder", description: "Order: IV"},
    "2024-07-10": {type: "dayOrder", description: "Order: V"},
    "2024-07-11": {type: "dayOrder", description: "Order: VI"},
    "2024-07-12": {type: "dayOrder", description: "Order: I"},
    "2024-07-13": {type: "dayOrder", description: "Order: II"},
    "2024-07-14": {type: "holiday", description: "Holiday"},
    "2024-07-15": {type: "dayOrder", description: "Order: III"},
    "2024-07-16": {type: "dayOrder", description: "Order: IV"},
    "2024-07-17": {type: "event", description: "Muharram"},
    "2024-07-18": {type: "dayOrder", description: "Order: V"},
    "2024-07-19": {type: "dayOrder", description: "Order: VI"},
    "2024-07-20": {type: "holiday", description: "Holiday"},
    "2024-07-21": {type: "holiday", description: "Holiday"},
    "2024-07-22": {type: "dayOrder", description: "Order: I"},
    "2024-07-23": {type: "dayOrder", description: "Order: II"},
    "2024-07-24": {type: "dayOrder", description: "Order: III"},
    "2024-07-25": {type: "dayOrder", description: "Order: IV"},
    "2024-07-26": {type: "dayOrder", description: "Order: V"},
    "2024-07-27": {type: "dayOrder", description: "Order: VI"},
    "2024-07-28": {type: "holiday", description: "Holiday"},
    "2024-07-29": {type: "dayOrder", description: "Order: I"},
    "2024-07-30": {type: "dayOrder", description: "Order: II"},
    "2024-07-31": {type: "dayOrder", description: "Order: III"},
    "2024-08-01": {type: "dayOrder", description: "Order: IV"},
    "2024-08-02": {type: "dayOrder", description: "Order: V"},
    "2024-08-03": {type: "event", description: "Aadi Peruku"},
    "2024-08-04": {type: "holiday", description: "Holiday"},
    "2024-08-05": {type: "dayOrder", description: "Order: VI"},
    "2024-08-06": {type: "dayOrder", description: "Order: I"},
    "2024-08-07": {type: "dayOrder", description: "Order: II"},
    "2024-08-08": {type: "dayOrder", description: "Order: III"},
    "2024-08-09": {type: "dayOrder", description: "Order: IV"},
    "2024-08-10": {type: "dayOrder", description: "Order: V"},
    "2024-08-11": {type: "holiday", description: "Holiday"},
    "2024-08-12": {type: "dayOrder", description: "Order: VI"},
    "2024-08-13": {type: "dayOrder", description: "Order: I"},
    "2024-08-14": {type: "dayOrder", description: "Order: II"},
    "2024-08-15": {type: "event", description: "Independence Day"},
    "2024-08-16": {type: "dayOrder", description: "Order: III"},
    "2024-08-17": {type: "holiday", description: "Holiday"},
    "2024-08-18": {type: "holiday", description: "Holiday"},
    "2024-08-19": {type: "dayOrder", description: "Order: IV"},
    "2024-08-20": {type: "dayOrder", description: "Order: V"},
    "2024-08-21": {type: "dayOrder", description: "Order: VI"},
    "2024-08-22": {type: "dayOrder", description: "Order: I"},
    "2024-08-23": {type: "dayOrder", description: "Order: II"},
    "2024-08-24": {type: "dayOrder", description: "Order: III"},
    "2024-08-25": {type: "holiday", description: "Holiday"},
    "2024-08-26": {type: "event", description: "Krishna Jayanthi"},
    "2024-08-27": {type: "dayOrder", description: "Order: IV"},
    "2024-08-28": {type: "dayOrder", description: "Order: V"},
    "2024-08-29": {type: "dayOrder", description: "Order: VI"},
    "2024-08-30": {type: "dayOrder", description: "Order: I"},
    "2024-08-31": {type: "holiday", description: "Holiday"},
    "2024-09-01": {type: "holiday", description: "Holiday"},
    "2024-09-02": {type: "dayOrder", description: "Order: II"},
    "2024-09-03": {type: "dayOrder", description: "Order: III"},
    "2024-09-04": {type: "dayOrder", description: "Order: IV"},
    "2024-09-05": {type: "dayOrder", description: "Order: V"},
    "2024-09-06": {type: "dayOrder", description: "Order: VI"},
    "2024-09-07": {type: "event", description: "Vinayakar Chathurthi"},
    "2024-09-08": {type: "holiday", description: "Holiday"},
    "2024-09-09": {type: "dayOrder", description: "Order: I"},
    "2024-09-10": {type: "dayOrder", description: "Order: II"},
    "2024-09-11": {type: "dayOrder", description: "Order: III"},
    "2024-09-12": {type: "dayOrder", description: "Order: IV"},
    "2024-09-13": {type: "dayOrder", description: "Order: V"},
    "2024-09-14": {type: "dayOrder", description: "Order: VI"},
    "2024-09-15": {type: "holiday", description: "Holiday"},
    "2024-09-16": {type: "event", description: "Milad-un-Nabi"},
    "2024-09-17": {type: "dayOrder", description: "Order: I"},
    "2024-09-18": {type: "dayOrder", description: "Order: II"},
    "2024-09-19": {type: "dayOrder", description: "Order: III"},
    "2024-09-20": {type: "dayOrder", description: "Order: IV"},
    "2024-09-21": {type: "holiday", description: "Holiday"},
    "2024-09-22": {type: "holiday", description: "Holiday"},
    "2024-09-23": {type: "dayOrder", description: "Order: V"},
    "2024-09-24": {type: "dayOrder", description: "Order: VI"},
    "2024-09-25": {type: "dayOrder", description: "Order: I"},
    "2024-09-26": {type: "dayOrder", description: "Order: II"},
    "2024-09-27": {type: "dayOrder", description: "Order: III"},
    "2024-09-28": {type: "dayOrder", description: "Order: IV"},
    "2024-09-29": {type: "holiday", description: "Holiday"},
    "2024-09-30": {type: "dayOrder", description: "Order: V"},
    "2024-10-01": {type: "dayOrder", description: "Order: VI"},
    "2024-10-02": {type: "event", description: "Order: II"},
    "2024-10-03": {type: "dayOrder", description: "Order: I"},
    "2024-10-04": {type: "dayOrder", description: "Order: II"},
    "2024-10-05": {type: "holiday", description: "Holiday"},
    "2024-10-06": {type: "holiday", description: "Holiday"},
    "2024-10-07": {type: "dayOrder", description: "Order: III"},
    "2024-10-08": {type: "dayOrder", description: "Order: IV"},
    "2024-10-09": {type: "dayOrder", description: "Order: V"},
    "2024-10-10": {type: "dayOrder", description: "Order: VI"},
    "2024-10-11": {type: "event", description: "Ayutha Pooja"},
    "2024-10-12": {type: "event", description: "Vijayadashami"},
    "2024-10-13": {type: "holiday", description: "Holiday"},
    "2024-10-14": {type: "dayOrder", description: "Order: I"},
    "2024-10-15": {type: "dayOrder", description: "Order: II"},
    "2024-10-16": {type: "dayOrder", description: "Order: III"},
    "2024-10-17": {type: "dayOrder", description: "Order: IV"},
    "2024-10-18": {type: "dayOrder", description: "Order: V"},
    "2024-10-19": {type: "dayOrder", description: "Order: VI"},
    "2024-10-20": {type: "holiday", description: "Holiday"},
    "2024-10-21": {type: "dayOrder", description: "Order: I"},
    "2024-10-22": {type: "dayOrder", description: "Order: II"},
    "2024-10-23": {type: "dayOrder", description: "Order: III"},
    "2024-10-24": {type: "dayOrder", description: "Order: IV"},
    "2024-10-25": {type: "dayOrder", description: "Order: V"},
    "2024-10-26": {type: "dayOrder", description: "Order: V"},
    "2024-10-27": {type: "dayOrder", description: "Order: VI"},
    "2024-10-31": {type: "event", description: "Deepavali"},
    "2024-11-03": {type: "holiday", description: "Holiday"},
    "2024-11-10": {type: "holiday", description: "Holiday"}
};


let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function generateCalendar(month, year) {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendarBody = document.getElementById("calendarBody");
    calendarBody.innerHTML = "";

    let date = 1;

    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");

            if (i === 0 && j < firstDay) {
                cell.classList.add("empty");
            } else if (date > daysInMonth) {
                break;
            } else {
                const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
                const event = events[dateString];

                if (event) {
                    cell.classList.add(event.type);
                    cell.setAttribute('title', event.description);
                }

                cell.innerText = date;
                date++;
            }

            row.appendChild(cell);
        }

        calendarBody.appendChild(row);
    }

    document.getElementById("monthYear").innerText = `${monthNames[month]} ${year}`;
}

document.getElementById("prevBtn").addEventListener("click", () => {
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
    generateCalendar(currentMonth, currentYear);
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
    currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
    generateCalendar(currentMonth, currentYear);
});

generateCalendar(currentMonth, currentYear);