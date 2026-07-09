// ==========================================
// MOBIUS MUSE INTAKE FORM
// Page 1 JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // Progress Bar
    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = "25%";

    // Next Button
    const nextButton = document.getElementById("nextBtn");

    nextButton.addEventListener("click", function () {

        // Get form
        const form = document.getElementById("pageOne");

        // Check if every required field is filled
        if (!form.checkValidity()) {

            form.reportValidity();
            return;

        }

        // Create object
        const pageOneData = {

            schoolName:
                document.getElementById("schoolName").value,

            filledBy:
                document.getElementById("filledBy").value,

            date:
                document.getElementById("date").value,

            gradeScope:
                document.querySelector(
                    'input[name="gradeScope"]:checked'
                ).value,

            overload:
                document.querySelector(
                    'input[name="overload"]:checked'
                ).value,

            ambiguity:
                document.querySelector(
                    'input[name="ambiguity"]:checked'
                ).value,

            specialistTeachers:
                document.querySelector(
                    'input[name="specialistTeachers"]:checked'
                ).value,

            specialistNote:
                document.getElementById("specialistNote").value

        };

        // Save temporarily
        localStorage.setItem(
            "pageOneData",
            JSON.stringify(pageOneData)
        );

        // Success message
        alert("Page 1 completed successfully!");

        // Next page
        window.location.href = "page2.html";

    });

});

// ================================
// PAGE 2
// ================================

const nextPage2 = document.getElementById("nextPage2");

if(nextPage2){

    nextPage2.addEventListener("click", function(){

        const pageTwo = document.getElementById("pageTwo");

        if(!pageTwo.checkValidity()){

            pageTwo.reportValidity();
            return;

        }

        const pageTwoData = {

            engUP: document.getElementById("engUP").value,
            engJS: document.getElementById("engJS").value,

            kisUP: document.getElementById("kisUP").value,
            kisJS: document.getElementById("kisJS").value,

            mathUP: document.getElementById("mathUP").value,
            mathJS: document.getElementById("mathJS").value,

            creUP: document.getElementById("creUP").value,
            creJS: document.getElementById("creJS").value,

            sciUP: document.getElementById("sciUP").value,

            intSciJS: document.getElementById("intSciJS").value,

            agrUP: document.getElementById("agrUP").value,
            agrJS: document.getElementById("agrJS").value,

            sstUP: document.getElementById("sstUP").value,
            sstJS: document.getElementById("sstJS").value,

            casUP: document.getElementById("casUP").value,
            casJS: document.getElementById("casJS").value,

            preTechJS: document.getElementById("preTechJS").value,

            ppiUP: document.getElementById("ppiUP").value,
            ppiJS: document.getElementById("ppiJS").value

        };

        localStorage.setItem(
            "pageTwoData",
            JSON.stringify(pageTwoData)
        );

        window.location.href = "page3.html";

    });

}

// ================================
// PAGE 3
// ================================

const generateTeachers = document.getElementById("generateTeachers");

if (generateTeachers) {

    generateTeachers.addEventListener("click", function () {

        const pageThree = document.getElementById("pageThree");

        if (!pageThree.checkValidity()) {

            pageThree.reportValidity();
            return;

        }

        const teacherCount = parseInt(
            document.getElementById("teacherCount").value
        );

        const schoolNotes = document.getElementById("schoolNotes").value;

        const pageThreeData = {

            teacherCount: teacherCount,

            schoolNotes: schoolNotes

        };

        // Save Page 3 Data
        localStorage.setItem(
            "pageThreeData",
            JSON.stringify(pageThreeData)
        );

        // Create empty teacher list
        const teachers = [];

        for (let i = 1; i <= teacherCount; i++) {

            teachers.push({

                teacherNumber: i,

                teacherName: "",

                tscNumber: "",

                employmentType: "",

                maximumLessons: "",

                specialist: false,

                subjects: [],

                grades: []

            });

        }

        // Save teacher list
        localStorage.setItem(
            "teachers",
            JSON.stringify(teachers)
        );

        // Keep track of current teacher
        localStorage.setItem(
            "currentTeacher",
            0
        );

        alert(
            teacherCount +
            " teacher forms will now be generated."
        );

        // Open first teacher form
        window.location.href = "teacher.html";

    });

    }

// ======================================
// PAGE 4 - TEACHER FORM
// ======================================

const saveTeacher = document.getElementById("saveTeacher");

if (saveTeacher) {

    const teachers = JSON.parse(localStorage.getItem("teachers")) || [];
    let currentTeacher = parseInt(localStorage.getItem("currentTeacher")) || 0;

    // Display current teacher number
    const teacherHeading = document.getElementById("teacherHeading");

    if (teacherHeading) {
        teacherHeading.innerText =
            "Teacher " + (currentTeacher + 1) + " of " + teachers.length;
    }

    saveTeacher.addEventListener("click", function () {

        const teacherForm = document.getElementById("teacherForm");

        if (!teacherForm.checkValidity()) {

            teacherForm.reportValidity();
            return;

        }

        // Collect selected subjects
        let selectedSubjects = [];

        document
            .querySelectorAll(".checkbox-group input[type='checkbox']")
            .forEach(function (checkbox) {

                if (checkbox.checked) {

                    selectedSubjects.push(checkbox.value);

                }

            });

        // Save teacher data
        teachers[currentTeacher] = {

            teacherNumber: currentTeacher + 1,

            teacherName:
                document.getElementById("teacherName").value,

            tscNumber:
                document.getElementById("tscNumber").value,

            employmentType:
                document.getElementById("employmentType").value,

            maximumLessons:
                document.getElementById("maximumLessons").value,

            specialist:
                document.getElementById("specialistTeacher").value,

            subjects: selectedSubjects

        };

        localStorage.setItem(
            "teachers",
            JSON.stringify(teachers)
        );

        currentTeacher++;

        localStorage.setItem(
            "currentTeacher",
            currentTeacher
        );

        // More teachers remaining
        if (currentTeacher < teachers.length) {

            window.location.reload();

        }

        // Finished all teachers
        else {

            window.location.href = "review.html";

        }

    });

            }
