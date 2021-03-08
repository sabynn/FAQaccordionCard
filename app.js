function openAnswer(n){
    var ans = document.getElementById("answer" + n);
    var arrow = document.getElementById("arrow" + n);
    if (ans.style.display === "block") {
        ans.style.display = "none";
        arrow.style.transform = "rotate(0)";
    } else {
        ans.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
        for (i=1; i<6;i++){
            if (i==n){
                continue;
            }
            var j = document.getElementById("answer" + i);
            var l = document.getElementById("arrow" + i);
            j.style.display = "none";
            l.style.transform = "rotate(0)";
        }
    }
}