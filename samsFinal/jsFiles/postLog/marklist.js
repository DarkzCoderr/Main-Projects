const marksData = {
    "Semester 1": {
        "CIA1": [
            {subject: "Language", marks: 40},
            {subject: "English", marks: 40},
            {subject: "Programming With C", marks: 29},
            {subject: "Computer System Architecture", marks: 40},
            {subject: "Mathematics for Computer Science", marks: 48}
        ],
        "CIA2": [
            {subject: "Language", marks: 41},
            {subject: "English", marks: 48},
            {subject: "Programming With C", marks: 47},
            {subject: "Computer System Architecture", marks: 50},
            {subject: "Mathematics for Computer Science", marks: 36}
        ],
        "Model": [
            {subject: "Language", marks: 57},
            {subject: "English", marks: 53},
            {subject: "Programming With C", marks: 62},
            {subject: "Computer System Architecture", marks: 55},
            {subject: "Mathematics for Computer Science", marks: 68}
        ],
        "Semester": [
            {subject: "Language", marks: 64},
            {subject: "English", marks: 83},
            {subject: "Programming With C", marks: 74},
            {subject: "Computer System Architecture", marks: 68},
            {subject: "Mathematics for Computer Science", marks: 72}
        ]
    },
    "Semester 2": {
        "CIA1": [
            {subject: "Language", marks: 28},
            {subject: "English", marks: 33},
            {subject: "Programming With Python", marks: 49},
            {subject: "Data Structures & Algorithms", marks: 45},
            {subject: "Numerical Methods", marks: 43},
            {subject: "Multimedia Systems", marks: 50}
        ],
        "Model": [
            {subject: "Language", marks: 43},
            {subject: "English", marks: 55},
            {subject: "Programming With Python", marks: 63},
            {subject: "Data Structures & Algorithms", marks: 54},
            {subject: "Numerical Methods", marks: 70},
            {subject: "Multimedia Systems", marks: 56}
        ],
        "Semester": [
            {subject: "Language", marks: 67},
            {subject: "English", marks: 68},
            {subject: "Programming With Python", marks: 74},
            {subject: "Data Structures & Algorithms", marks: 74},
            {subject: "Numerical Methods", marks: 76},
            {subject: "Multimedia Systems", marks: 60}
        ]
    },
    "Semester 3": {
        "CIA1": [
            {subject: "Language", marks: 34},
            {subject: "English", marks: 40},
            {subject: "Programming With Java", marks: 49},
            {subject: "Computer Networks", marks: 34},
            {subject: "Business Accounting", marks: 40}
        ]
    }
};

function showMarks(examType) {
    const semester = document.getElementById('semester-dropdown').value;
    const semesterKey = `Semester ${semester}`;
    const table = document.getElementById('marks-table');
    table.innerHTML = '';

    if (marksData[semesterKey] && marksData[semesterKey][examType]) {
        const marksArray = marksData[semesterKey][examType];

        const headerRow = document.createElement('tr');
        const subjectHeader = document.createElement('th');
        subjectHeader.textContent = 'Subject';
        const marksHeader = document.createElement('th');
        marksHeader.textContent = 'Marks';
        headerRow.appendChild(subjectHeader);
        headerRow.appendChild(marksHeader);
        table.appendChild(headerRow);

        marksArray.forEach(entry => {
            const row = document.createElement('tr');
            const subjectCell = document.createElement('td');
            subjectCell.textContent = entry.subject;
            const marksCell = document.createElement('td');
            marksCell.textContent = entry.marks;
            row.appendChild(subjectCell);
            row.appendChild(marksCell);
            table.appendChild(row);
        });

        document.getElementById('marks-display').style.display = 'block';
    } else {
        document.getElementById('marks-display').style.display = 'none';
        alert('No data available for this exam.');
    }
}
