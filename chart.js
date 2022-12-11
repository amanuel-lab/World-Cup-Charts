var val  = [];
function input() {
    val.push({
         point1: document.getElementById("net").value,
         point2: document.getElementById("sen").value,
         point3: document.getElementById("ecu").value,
         point4: document.getElementById("qat").value,
        
       });   
 }
 function chartdata() {
    var xValue = ["Netherlands", "Senegal", "Ecuador", "Qatar"];
    var yValue = [val[0].point1, val[0].point2, val[0].point3, val[0].point4];
    var barColors = ["red", "red","red","red","red"];        
      new Chart( "myChart",
          {
          type: "line",
          data: {
            labels: xValue,
            datasets: [{
              backgroundColor: barColors,
              data: yValue
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Group A"
            }
          }
        });
    }




    var val2  = [];
    function input2() {
      val2.push({
           point5: document.getElementById("eng").value,
           point6: document.getElementById("us").value,
           point7: document.getElementById("ira").value,
           point8: document.getElementById("wal").value,
          
         });   
   }

   function chartdata2() {
    var xValue = ["England", "USA", "Iran", "Wales"];
    var yValue = [val2[0].point5, val2[0].point6, val2[0].point7, val2[0].point8];
    var barColors = ["red", "red","red","red","red"];        
      new Chart( "myChart",
          {
          type: "line",
          data: {
            labels: xValue,
            datasets: [{
              backgroundColor: barColors,
              data: yValue
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Group B"
            }
          }
        });
    }





    var val3  = [];
    function input3() {
      val3.push({
           point9: document.getElementById("arg").value,
           point10: document.getElementById("pol").value,
           point11: document.getElementById("mex").value,
           point12: document.getElementById("sau").value,
          
         });   
   }

   function chartdata3() {
    var xValue = ["Argentina", "Poland", "Mexico", "Saudi Arabia"];
    var yValue = [val3[0].point9, val3[0].point10, val3[0].point11, val3[0].point12];
    var barColors = ["red", "red","red","red","red"];        
      new Chart( "myChart",
          {
          type: "line",
          data: {
            labels: xValue,
            datasets: [{
              backgroundColor: barColors,
              data: yValue
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Group C"
            }
          }
        });
    }




    var val4  = [];
    function input4() {
      val4.push({
           point13: document.getElementById("fra").value,
           point14: document.getElementById("aus").value,
           point15: document.getElementById("tun").value,
           point16: document.getElementById("den").value,
          
         });   
   }

   function chartdata4() {
    var xValue = ["France", "Autralia", "Tunisia", "Denmark"];
    var yValue = [val4[0].point13, val4[0].point14, val4[0].point15, val4[0].point16];
    var barColors = ["red", "red","red","red","red"];        
      new Chart( "myChart",
          {
          type: "line",
          data: {
            labels: xValue,
            datasets: [{
              backgroundColor: barColors,
              data: yValue
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Group D"
            }
          }
        });
    }