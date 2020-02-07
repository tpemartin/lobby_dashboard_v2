 
window.onload=function(){
 
  var ms=8000; //m-second for timeOut
  
  //單位資訊按鈕
  var el1=document.getElementById('poster');
  var el2=document.getElementById('officeInfo');
  var btnInfo=document.getElementById('btn-info');
  var section3Status='poster';
  btnInfo.addEventListener("click",function(){
    if(section3Status=='poster'){
      //the first click
      el1.classList.add('hide');
      el2.classList.remove('hide');
      section3Status='officeInfo';
      console.log(section3Status);
      window.timeId3=setTimeout(function(){
        el1.classList.remove('hide');
        el2.classList.add('hide');},
        ms);
    } else {
      //second click to extend timeout
      clearTimeout(window.timeId3);
      console.log(section3Status);
      window.timeId3=setTimeout(function(){
        el1.classList.remove('hide');
        el2.classList.add('hide');
      }, ms);
    }
    //var timeId=hide_show_timeout(el1,el2,ms);
    section3Status='poster';
  });
  
  //行事曆按鈕
  var el3=document.getElementById('latestEvent');
  var el4=document.getElementById('calendar');
  var btnCalendar=document.getElementById('btn-calendar');
  var section2Status='latestEvent';
  btnCalendar.addEventListener("click",function(){
    if(section2Status=='latestEvent'){
      //the first click
      el3.classList.add('hide');
      el4.classList.remove('hide');
      section2Status='calendar';
      console.log(section2Status);
      window.timeId2=setTimeout(function(){
        el3.classList.remove('hide');
        el4.classList.add('hide');},
        ms);
    } else {
      //second click to extend timeout
      clearTimeout(window.timeId2);
      console.log(section2Status);
      window.timeId2=setTimeout(function(){
        el3.classList.remove('hide');
        el4.classList.add('hide');
      }, ms);
    }
    section2Status='latestEvent';
  });
 
  
  //home鍵恢復
  var btnHome=document.getElementById('btn-home');
  btnHome.addEventListener("click",function(){
    section3Status='poster';
    section2Status='latestEvent';
    clearTimeout(window.timeId2);
    clearTimeout(window.timeId3);
    console.log(section2Status);
    console.log(section3Status);
    el4.classList.add('hide');
    el3.classList.remove('hide');
    el1.classList.remove('hide');
    el2.classList.add('hide');
    }); 
};
