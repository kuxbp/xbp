var student_list=[];
  
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "./link/studentlink.csv", true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行
    req.onload = function ( event ) {
      var txt=req.responseText;
      var line=txt.split("\n");

      for(let i=0;i<line.length;i++){
        var v=line[i].split(",");
        student_list[i] = v;
      }
      // alert(student_list[0][0])
      // var body = document.getElementsByTagName("body")[0];
      var body = document.getElementById("studentlink");
      var tbl = document.createElement("table");
      var tblBody = document.createElement("tbody");
      var col=5
      var addflag=false
        // creating all cells
        for (var i = 0; i < student_list.length; i++) {
          m=i % col
          // creates a table row
          if (m==0){
            var row = document.createElement("tr");
            addflag=false;
          }
          
          var cell = document.createElement("td");
          var aTag = document.createElement("a");
          aTag.href = student_list[i][1]+"de56/";
          aTag.target='_blank';
          var cellText = document.createTextNode(student_list[i][0]);
          aTag.appendChild(cellText)
          cell.appendChild(aTag);
          row.appendChild(cell);
          
          if (m == col-1){
            tblBody.appendChild(row);
            addflag=true;
          }
          // add the row to the end of the table body
          
        }
        if (addflag==false){
          tblBody.appendChild(row);
        }
        
    
        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tbl);

        tbl.setAttribute("border","0");
        tbl.setAttribute("cellspacing","0");
        tbl.setAttribute("cellpadding","10");
    
      
    }



//---------------------------------------------------------------------------------------------------------
function convertCSVtoArray(txt){
    var line=txt.split("\n");
    for(let i=0;i<line.length-1;i++){
      var v=line[i].split(",");
      student_list[i] = v;
      // var name=v[0];
      // var link=v[1];
      // createMark(name,link);
    }

}