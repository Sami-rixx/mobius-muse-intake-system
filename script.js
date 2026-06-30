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
