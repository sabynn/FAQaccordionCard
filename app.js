function openAnswer(n){
    var ans = document.getElementById("answer" + n);
    if (ans.style.display === "block") {
        ans.style.display = "none";
    } else {
        ans.style.display = "block";
        for (i=1; i<6;i++){
            if (i==n){
                continue;
            }
            var j = document.getElementById("answer" + i);
            j.style.display = "none";
        }
    }
}