var student_list=[];
  
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "./link/studentlink.csv", true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行
    req.onload = function ( event ) {
      var txt=req.responseText;
      var line=txt.split("\n");

      for(let i=0;i<line.length-1;i++){
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
          aTag.href = student_list[i][1];
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

  //   function getCSV(){
  //     var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
  //     req.open("get", "studentlink.csv", true); // アクセスするファイルを指定
  //     req.send(null); // HTTPリクエストの発行
    
  //     // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
  //     req.onload = function(){
  //     convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
  //     }
  // }
   
  // // 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
  // function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
  //     // var result = []; // 最終的な二次元配列を入れるための配列
  //     var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
   
  //     // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
  //     for(var i=0;i<tmp.length;++i){
  //       student_list[i] = tmp[i].split(',');
  //     }
      
  // }


// var v;
// var mark_cnt=0;
// const max_m_id=5;

// //最初隠しておく要素--------------------------------------------------------------------------------------
// document.getElementById("mark_text").style.visibility ="hidden";
// for(let i=1;i<=max_m_id;i++){
//   document.getElementById("mark_buttom" + i ).style.visibility ="hidden";
// }
// //----------------------------------------------------------------------------------------------------

// //マークファイルの読み込み--------------------------------------------------------------------------------
// document.getElementById( "markfile" ).addEventListener( "change", function() {
//     //全てのマークを削除
//     delete_all_marks();
//     // フォームで選択された全ファイルを取得
//     var file = this.files[0] ;
//     //readerオブジェクトを作成
//     var reader = new FileReader();
//     // ファイル読み取りを実行
//     reader.readAsText(file);
//     reader.onload = function ( event ) {
//       var csv_val=reader.result;
//       create_Marks_from_text(csv_val);
//     }
// })
// //---------------------------------------------------------------------------------------------------------
// function create_Marks_from_text(txt){
//     var line=txt.split("\n");
//     for(let i=0;i<line.length-1;i++){
//       var v=line[i].split(",")
//       var time=v[1];
//       var memo=v[2];
//       var m_id=v[3];
//       createMark(m_id,time,memo);
//     }
// }
// //動画ファイルの取得とロード------------------------------------------------------------------------------------
// document.getElementById( "target" ).addEventListener( "change", function() {
//     // フォームで選択された全ファイルを取得
//     var fileList = this.files ;
//     document.getElementById( "target" ).style.display ="none";
//     // Blob URLの作成
//     var blobUrl = window.URL.createObjectURL( fileList[0] ) ;
    
//     // HTMLに書き出し (src属性にblob URLを指定)
//     var left_window = document.getElementById("left");
//     var movie_block = document.getElementById("movie_block");
    
//     movie_block.insertAdjacentHTML("afterbegin",'<br><div class="Video"><video id="video" src="' + blobUrl + '" controls></video></div>' );
//     // document.getElementById("myvideo").setAttribute("src")=blobUrl;
//     v = document.getElementById('video');
//     // //再生
//     // v.play();
//     // //一時停止
//     // v.pause();
//     //ロード
//     // v.load();
//     //再生位置の取得

//     document.getElementById("mark_text").style.visibility ="visible";
//     for(let i=1;i<=max_m_id;i++){
//       document.getElementById("mark_buttom" + i ).style.visibility ="visible";
//     }

//     v.addEventListener('timeupdate', function() {
//     })
// } ) ;
// //-------------------------------------------------------------------------------------------------------------------------
// //数値型から”00：00”表記への変換（秒、ミリ秒の場合）------------------------------------------------------------------------------
// function timeConvert(time) {
//     var sec = Math.floor(time);
//     var msec = ((time - sec) * 100).toFixed(0);
//     return sec + ':' + msec;
// }
// //--------------------------------------------------------------------------------------------------------------------------
// //時間をm:sに変換-------------------------------------------------------------------------------------------------------------
// function timeConvertMS(time){
//     h = parseInt(time/60/60);
//     m = ("0"+parseInt(time/60)%60).slice(-2);
//     s = ("0"+parseInt(time)%60).slice(-2);
//     if (h==0){
//       return m + ':' + s;
//     }else{
//       return h+ ':' +m + ':' + s;
//     }
// }
// //--------------------------------------------------------------------------------------------------------------------------
// //動画を指定の位置にジャンプ-----------------------------------------------------------------------------------------------------
// function jumpToPoint(time){
//     v.currentTime=time;
// }
// //----------------------------------------------------------------------------------------------------------------------------
// //マークを作成------------------------------------------------------------------------------------------------------------------
// function createMark(m_id,time,memo){
//     if (memo=='null'){
//       var memo=document.getElementById("mark_text").value;
//     }
//     if (time=='null'){
//       var raw_t= v.currentTime;
//     }else{
//       var raw_t= time;
//     }
//     var t= timeConvertMS(raw_t);
//     var div_marks = document.getElementById("div_marks");
//     mark_cnt=mark_cnt+1;
//     var mymark=document.createElement("div");
//     mymark.id = raw_t;//'mark' + mark_cnt;
//     mymark.className="mark";
//     var newBtn = document.createElement("button_" + m_id);
//     newBtn.className="button_" + m_id;

//     // mymark.setAttribute("raw_t")=raw_t;
//     newBtn.innerHTML=t;
//     newBtn.onclick = function(){jumpToPoint(raw_t);}
//     newBtn.oncontextmenu = function () {
//       var result=window.confirm(t+"のマークを削除しますか？");
//       if(result){
//         mymark.remove();
//         recreate_Marks();
//       }
//       return false;
//     };
//     mymark.appendChild(newBtn);
//     mymark.insertAdjacentHTML("beforeend", memo);
//     mymark.insertAdjacentHTML("beforeend", "<font color='white'>" +raw_t+ "</font>");
//     div_marks.appendChild(mymark);
//     div_marks.append(document.createElement("br"));
//     document.getElementById("mark_text").value = '';
// }
// //------------------------------------------------------------------------------------------------------------------
// //ダウンロードリンクから呼び出される命令-----------------------------------------------------------------------------------
// function download_Csv(){
//     var txt=get_Mark_info();
//     handleDownload(txt);
// }
// //-------------------------------------------------------------------------------------------------------------------
// //全マーク情報を取得----------------------------------------------------------------------------------------------------
// //戻り値はそのままcsvに書き出せる形式
// function get_Mark_info(){
//     var m=document.getElementsByClassName('mark')
//     var txt= "";
//     for(let i=0;i<m.length;i++ ){
//       // txt=txt+ i;
//       var str1=m.item(i).innerHTML;
//       var ret =  convert_to_OutputText(i,str1);
//       txt=txt + ret;
//     }
//     return txt;
// }
// //-------------------------------------------------------------------------------------------------------------
// //ダウンロードハンドル---------------------------------------------------------------------------------------------
// function handleDownload(txt) {
//     var bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
//     var content = txt;
//     var blob = new Blob([ bom, content ], { "type" : "text/csv" });

//     if (window.navigator.msSaveBlob) { 
//         window.navigator.msSaveBlob(blob, "test.csv"); 

//         // msSaveOrOpenBlobの場合はファイルを保存せずに開ける
//         window.navigator.msSaveOrOpenBlob(blob, "test.csv"); 
//     } else {
//         document.getElementById("download").href = window.URL.createObjectURL(blob);
//     }
// }
// //------------------------------------------------------------------------------------------------------------
// //一つのマークdivのhtml文字列をマーク情報に変換----------------------------------------------------------------------
// function convert_to_OutputText(no,str1){
//     var ii=str1.split(" ")
//     var m_id=ii[0].replace("<button_","")
//     str1=str1.replace('<button_'+m_id+' class="button_'+m_id+'">','')
//     str1=str1.replace('</button_'+m_id+'>',',')
//     str1=str1.replace('<font color="white">',',')
//     str1=str1.replace('</font>','')

//     var sp=str1.split(",")
//     rettxt= no + "," +sp[2]+ "," +sp[1]+ "," +m_id+"\n";
//     return rettxt;
// }
// //-------------------------------------------------------------------------------------------------------------
// //全てのマークを削除----------------------------------------------------------------------------------------------
// function delete_all_marks(){
//     var mymark = document.getElementById("div_marks");
//     while (mymark.firstChild) {
//       mymark.removeChild(mymark.firstChild);
//     }
// }
// //-------------------------------------------------------------------------------------------------------------
// //マークを作り直し----------------------------------------------------------------------------------------------
// function recreate_Marks(){
//     var mark_info=get_Mark_info();
//     delete_all_marks();
//     create_Marks_from_text(mark_info);
// }
// //-------------------------------------------------------------------------------------------------------------

// function get_max_box_no(){
//   //要素の取得
//   var elements = document.getElementsByClassName("drag-and-drop");
//   let max_no=0;
//   let my_no=0;
//   //マウスが要素内で押されたとき、又はタッチされたとき発火
//   for(var i = 0; i < elements.length; i++) {
//       my_no=Number(elements[i].getAttribute('box_no'));
//       if (my_no>max_no){
//           max_no=my_no;
//       }
//   }
//   max_no=max_no+1;
//   return max_no;
// }