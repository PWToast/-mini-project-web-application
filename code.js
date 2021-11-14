function calsummary()
{
    let a = document.getElementById("p").value;
    let b = document.getElementById("r").value;
    let c = document.getElementById("year").value;
    let summary = a*(1+b/100)**c
    document.getElementById("result").innerHTML = "จำนวนเงินที่มีหลังจากฝากในระยะเวลา "+ c +" ปี" + "คือ " + summary.toFixed(0);
}