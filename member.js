function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("memberSkills");
    var memberSkills2 = document.getElementById("memberSkills2");
    var memberSkills3 = document.getElementById("memberSkills3");
    if (member.checked == true) {
        memberSkills.style.display = "block";
        memberSkills2.style.display = "block";
        memberSkills3.style.display = "block";
    } else {
        memberSkills.style.display = "none";
        memberSkills2.style.display = "none";
        memberSkills3.style.display = "none";
    }
}