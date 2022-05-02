$(document).ready(function () {
  //grabbing data from facultyList.json
  $.getJSON("facultyList.json", function (data) {

    let facultyList = data.facultymembers;


    let faculty = $("#faculty");

    for (let i = 0; i < facultyList.length; i++) {
      //decalration here to make sure all json objects are being used
      
      let facultyImg = $("<img>");
      let facultyName = $("<h2>");
      let facultyDepartment = $("<h3>");
      let facultyBio = $("<p>");

      //set the src attribute of the image to the image path
      facultyImg.attr("src", facultyList[i].image);
      facultyImg.attr("alt", facultyList[i].full_name);

      facultyName.text(facultyList[i].full_name);
      facultyDepartment.text(facultyList[i].department);
      facultyBio.text(facultyList[i].bio);

      //append the image, name, department, and bio to the faculty div
      faculty.append(facultyImg);
      faculty.append(facultyName);
      faculty.append(facultyDepartment);
      faculty.append(facultyBio);
    }
  });
}
);