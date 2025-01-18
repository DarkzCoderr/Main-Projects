const events = {
    "2024-06-23": {type: "holiday", description: "Holiday"},
    "2024-06-29": {type: "holiday", description: "Holiday"},
    "2024-06-30": {type: "holiday", description: "Holiday"},
    "2024-07-06": {type: "holiday", description: "Holiday"},
    "2024-07-07": {type: "holiday", description: "Holiday"},
    "2024-07-14": {type: "holiday", description: "Holiday"},
    "2024-07-17": {type: "event", description: "Muharram"},
    "2024-07-20": {type: "holiday", description: "Holiday"},
    "2024-07-21": {type: "holiday", description: "Holiday"},
    "2024-07-28": {type: "holiday", description: "Holiday"},
    "2024-08-03": {type: "event", description: "Aadi Peruku"},
    "2024-08-04": {type: "holiday", description: "Holiday"},
    "2024-08-11": {type: "holiday", description: "Holiday"},
    "2024-08-15": {type: "event", description: "Independence Day"},
    "2024-08-17": {type: "holiday", description: "Holiday"},
    "2024-08-18": {type: "holiday", description: "Holiday"},
    "2024-08-25": {type: "holiday", description: "Holiday"},
    "2024-08-26": {type: "event", description: "Krishna Jayanthi"},
    "2024-08-31": {type: "holiday", description: "Holiday"},
    "2024-09-01": {type: "holiday", description: "Holiday"},
    "2024-09-07": {type: "event", description: "Vinayakar Chathurthi"},
    "2024-09-08": {type: "holiday", description: "Holiday"},
    "2024-09-15": {type: "holiday", description: "Holiday"},
    "2024-09-16": {type: "event", description: "Milad-un-Nabi"},
    "2024-09-21": {type: "holiday", description: "Holiday"},
    "2024-09-22": {type: "holiday", description: "Holiday"},
    "2024-09-28": {type: "event", description: "Pongal"},
    "2024-09-29": {type: "holiday", description: "Holiday"},
};

const userNames = {
    '23BCA065': 'Naveen',
    '23BCA066': 'Naveen',
    '23BCA067': 'Naveen',
    '23BCA068': 'Nester',
    '23BCA069': 'Nithinyaa',
    '23BCA070': 'Nithish',
    '23BCA071': 'Nithish',
    '23BCA072': 'Pavannan',
    '23BCA073': 'Praveen',
    '23BCA074': 'Praveen',
    '23BCA075': 'Praveen',
    '23BCA076': 'Pugazhlarasu',
    '23BCA077': 'Raghul',
    '23BCA078': 'Ragupathi',
    '23BCA079': 'Rahul',
    '23BCA080': 'Ramkumar',
    '23BCA081': 'Rathinasamy',
    '23BCA082': 'Ravees',
    '23BCA083': 'Ravivarma',
    '23BCA084': 'Rishanth',
    '23BCA085': 'Rithik',
    '23BCA086': 'Rohith',
    '23BCA087': 'Rohith',
    '23BCA088': 'Roshan',
    '23BCA089': 'Roswin',
    '23BCA090': 'Ruknudheen',
    '23BCA091': 'Sabarish',
    '23BCA092': 'Sakthivel',
    '23BCA093': 'Sandeep',
    '23BCA094': 'Sanjay',
    '23BCA095': 'Sanjay',
    '23BCA096': 'Sanjay',
    '23BCA097': 'Santhosh',
    '23BCA098': 'Saran',
    '23BCA099': 'Saran',
    '23BCA100': 'Sarathi',
    '23BCA101': 'Sathyapadma',
    '23BCA102': 'Sayuj',
    '23BCA105': 'Shankara',
    '23BCA106': 'Sherin',
    '23BCA108': 'Sivasankari',
    '23BCA109': 'Sornavisal',
    '23BCA110': 'Sreejith',
    '23BCA111': 'Srinath',
    '23BCA112': 'Srindhi',
    '23BCA113': 'Sudhin',
    '23BCA114': 'Sukran',
    '23BCA115': 'Sunil',
    '23BCA116': 'Surya',
    '23BCA117': 'Thillai',
    '23BCA118': 'Udhaya',
    '23BCA119': 'Vaishnav',
    '23BCA120': 'Varun',
    '23BCA121': 'Vasanthan',
    '23BCA123': 'Vignesh',
    '23BCA124': 'Vikram',
    '23BCA125': 'Vinodh',
    '23BCA126': 'VishnuVR',
    '23BCA127': 'Viswa',
    '23BCA128': 'Viswa',
    '23BCA129': 'Yogesh',
    '23BCA130': 'Yuvaraj'
};

function getNextEvent() {
    const today = new Date();
    let nextEventDate = null;
    let nextEventDescription = "No upcoming events";

    for (const [date, event] of Object.entries(events)) {
        const eventDate = new Date(date);
        if (eventDate >= today) {
            if (!nextEventDate || eventDate < nextEventDate) {
                nextEventDate = eventDate;
                nextEventDescription = event.description;
            }
        }
    }

    return { date: nextEventDate, description: nextEventDescription };
}

function updateNextEventDetails() {
    const nextEvent = getNextEvent();
    const eventDetailsElement = document.getElementById("event-details");

    if (nextEvent.date) {
        eventDetailsElement.textContent = `${nextEvent.description}, on ${nextEvent.date.toDateString()}`;
    } else {
        eventDetailsElement.textContent = "No upcoming events";
    }
}

function updateGreeting(username) {
    const now = new Date();
    const hours = now.getHours();
    let greeting = "Hi!";

    if (hours < 12) {
        greeting = "Good morning";
    } else if (hours < 18) {
        greeting = "Good afternoon";
    } else if (hours < 22) {
        greeting = "Good evening";
    } else {
        greeting = "Good night";
    }

    const userName = userNames[username] || "User";
    const greetingElement = document.querySelector(".line-1");
    greetingElement.textContent = `${greeting}, ${userName}!`;
}

document.addEventListener("DOMContentLoaded", function() {
    const username = localStorage.getItem('username');

    if (username) {
        updateNextEventDetails();
        updateGreeting(username);
    } else {
        window.location.href = '/htmlFiles/preLog/login.html';
    }
});