// ================================
// SPECIAL FAMILY DAYS
// ================================

const birthdays = {

    "1-2": ["Shaista Farhat"],
    "1-21": ["Mohammed Ashraf"],

    "2-17": ["Furkan Akhtar"],
    "2-24": ["Mohammed Arib"],

    "3-10": ["Tahreem Fatima"],
    "3-20": ["Mohammed Mubeen"],
    "3-30": ["Fahmida Begum"],

    "4-11": ["Mohammed Azlan"],
    "4-15": ["Husna Begum 🕊️"],

    "5-21": ["Habeeba Sadaf"],

    "7-1": ["Sayyed Javed", "Gousiya Begum"],
    "7-2": ["Tanzila Tarheen"],
    "7-3": ["Shahid Akhtar"],
    "7-10": ["Umme Ammara"],
    "7-12": ["Mohammed Ali Langde 🕊️"],
    "7-30": ["Sayyed Kaneez Fatima"],

    "8-2": ["Abdul Gaffar", "Mohammedi Begum"],
    "8-17": ["Mohammed Waseem"],
    "8-26": ["Firdous Jahan"],

    "9-13": ["Sayyed Neha Kausar"],
    "9-21": ["Shehnaz Begum"],

    "10-19": ["Sayyed Kasim"],

    "11-2": ["Imtiaz Ali"],
    "11-11": ["Gulnar Sayyed"],
    "11-17": ["Amjad Ali", "Hadiya Taqdees"],

    "12-8": ["Afsiya Parveen"],
    "12-26": ["Ayesha Siddiqua"]

};


// ================================
// WEDDING ANNIVERSARIES
// ================================

const anniversaries = {

    "4-23": "Imtiaz Ali ❤️ Gousiya Begum",

    "5-19": "Mohammed Waseem ❤️ Firdous Jahan",

    "5-23": "Abdul Gaffar ❤️ Mohammedi Begum",

    "7-30": "Afsiya Parveen ❤️ Shahid Akhtar",

    "10-23": "Mohammed Mubeen ❤️ Fahmida Begum",

    "12-25": "Ayesha Siddiqua ❤️ Shoaib Ahmed"

};


// ================================
// CHECK TODAY
// ================================

const today = new Date();

const month = today.getMonth() + 1;
const day = today.getDate();

const dateKey = `${month}-${day}`;

const message = document.getElementById("special-message");


if (message) {

    const birthdayNames = birthdays[dateKey];

    const anniversary = anniversaries[dateKey];


    if (birthdayNames && anniversary) {

        message.innerHTML =
            `🎂 Happy Birthday to <strong>${birthdayNames.join(", ")}</strong>!<br>
             💍 Happy Anniversary to <strong>${anniversary}</strong>!`;

    }

    else if (birthdayNames) {

        message.innerHTML =
            `🎂🎉 Happy Birthday to <strong>${birthdayNames.join(" & ")}</strong>!<br>
             May this day be filled with happiness and beautiful memories! ❤️`;

    }

    else if (anniversary) {

        message.innerHTML =
            `💍🎉 Happy Anniversary to <strong>${anniversary}</strong>!<br>
             Wishing you many more beautiful years together! ❤️`;

    }

    else {

        message.innerHTML =
            `💖 No birthday or anniversary today.<br>
             But every day with family is special! 🥰`;

    }

}


// ================================
// CONFETTI
// ================================

function createConfetti() {

    const colors = [
        "#ff4d8d",
        "#ffd166",
        "#7b61ff",
        "#4dd4ac",
        "#ff9f43"
    ];

    for (let i = 0; i < 60; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}


if (birthdays[dateKey] || anniversaries[dateKey]) {

    createConfetti();

}