
//witch between pages 
$('#switchHome').click(function () {
    $('nav').toggleClass('menu menu_active');
    window.location.href = 'index.html';
});
$('#switchEducationandQualification').click(function () {
    window.location.href = 'EducationandQualification.html';
});
$('#switchCourse').click(function () {
    window.location.href = 'Course.html';
});
$('#switchExperience').click(function () {
    window.location.href = 'Experience.html';
});
$('#switchProjects').click(function () {
    window.location.href = 'Projects.html';
});
$('#switchContact').click(function () {
    window.location.href = 'Contact.html';
});