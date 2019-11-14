(function(){

    var time = function(){
        var today=new Date();
        var hour=today.getHours();
        var min=today.getMinutes();
        var sec=today.getSeconds();
        var day=today.getDate() ;
        var month=today.getMonth() ;
        var year=today.getFullYear();
        var dayweek=today.getDay() ;
        var weekdays=['SUN' , 'MON' , 'TUE' , 'WED' , 'THU' , 'FRI' , 'SAT'];
        var months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        var pHour = document.getElementById('time-hour');
        var pMin = document.getElementById('time-min');
        var pSec = document.getElementById('time-sec');
        var pAmpm = document.getElementById('ampm');
        var pDayweek = document.getElementById('weekday');
        var pMonth = document.getElementById('date-month');
        var pDay = document.getElementById('date-day');
        var pYear = document.getElementById('date-year');
        
        if (hour>=0 && hour<12){
            pAmpm.textContent="AM";
        }
        else{
            pAmpm.textContent="PM";
        }
        if (hour>12){
            hour=hour-12;
        }
        if (hour<10){
            hour="0"+hour;
        }
        if (min<10){
            min="0"+min;
        }
        if (sec<10){
            sec="0"+sec;
        }


        pHour.textContent=hour;

        pMin.textContent=min;

        pSec.textContent=sec;




        pDayweek.textContent=weekdays[dayweek] + `, `;
        pMonth.textContent=months[month] + `, ` ;
        pDay.textContent=day + `, `;
        pYear.textContent=year;


        
    }
    time();
    var ininter=setInterval(time,1000);
    
    function IncalcTime (){
        var AnTime=new Date();
        var utc= AnTime.getTime() + (AnTime.getTimezoneOffset()*60000);
        var InTime= new Date(utc + (5.5*3600000)); 

        var hour=InTime.getHours();
        var min=InTime.getMinutes();
        var sec=InTime.getSeconds();
        var day=InTime.getDate() ;
        var month=InTime.getMonth() ;
        var year=InTime.getFullYear();
        var dayweek=InTime.getDay() ;
        var weekdays=['SUN' , 'MON' , 'TUE' , 'WED' , 'THU' , 'FRI' , 'SAT'];
        var months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        var pHour = document.getElementById('intime-hour');
        var pMin = document.getElementById('intime-min');
        var pSec = document.getElementById('intime-sec');
        var pAmpm = document.getElementById('inampm');
        var pDayweek = document.getElementById('inweekday');
        var pMonth = document.getElementById('indate-month');
        var pDay = document.getElementById('indate-day');
        var pYear = document.getElementById('indate-year');
        
        if (hour>=0 && hour<12){
            pAmpm.textContent="AM";
        }
        else{
            pAmpm.textContent="PM";
        }
        if (hour>12){
            hour=hour-12;
        }
        if (hour<10){
            hour="0"+hour;
        }
        if (min<10){
            min="0"+min;
        }
        if (sec<10){
            sec="0"+sec;
        }


        pHour.textContent=hour;

        pMin.textContent=min;

        pSec.textContent=sec;




        pDayweek.textContent=weekdays[dayweek] + `, `;
        pMonth.textContent=months[month] + `, ` ;
        pDay.textContent=day + `, `;
        pYear.textContent=year;

        
    }

    IncalcTime();
    var ininter=setInterval(IncalcTime,1000);
    
    function chcalcTime (){
        var AnTime=new Date();
        var utc= AnTime.getTime() + (AnTime.getTimezoneOffset()*60000);
        var chTime= new Date(utc + (8*3600000)); 

        var hour=chTime.getHours();
        var min=chTime.getMinutes();
        var sec=chTime.getSeconds();
        var day=chTime.getDate() ;
        var month=chTime.getMonth() ;
        var year=chTime.getFullYear();
        var dayweek=chTime.getDay() ;
        var weekdays=['SUN' , 'MON' , 'TUE' , 'WED' , 'THU' , 'FRI' , 'SAT'];
        var months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        var pHour = document.getElementById('chtime-hour');
        var pMin = document.getElementById('chtime-min');
        var pSec = document.getElementById('chtime-sec');
        var pAmpm = document.getElementById('champm');
        var pDayweek = document.getElementById('chweekday');
        var pMonth = document.getElementById('chdate-month');
        var pDay = document.getElementById('chdate-day');
        var pYear = document.getElementById('chdate-year');
        
        if (hour>=0 && hour<12){
            pAmpm.textContent="AM";
        }
        else{
            pAmpm.textContent="PM";
        }
        if (hour>12){
            hour=hour-12;
        }
        if (hour<10){
            hour="0"+hour;
        }
        if (min<10){
            min="0"+min;
        }
        if (sec<10){
            sec="0"+sec;
        }


        pHour.textContent=hour;

        pMin.textContent=min;

        pSec.textContent=sec;




        pDayweek.textContent=weekdays[dayweek] + `, `;
        pMonth.textContent=months[month] + `, ` ;
        pDay.textContent=day + `, `;
        pYear.textContent=year;

        
    }

    chcalcTime();
    var chinter= setInterval(chcalcTime,1000); 

    function decalcTime (){
        var AnTime=new Date();
        var utc= AnTime.getTime() + (AnTime.getTimezoneOffset()*60000);
        var deTime= new Date(utc + (-4*3600000)); 

        var hour=deTime.getHours();
        var min=deTime.getMinutes();
        var sec=deTime.getSeconds();
        var day=deTime.getDate() ;
        var month=deTime.getMonth() ;
        var year=deTime.getFullYear();
        var dayweek=deTime.getDay() ;
        var weekdays=['SUN' , 'MON' , 'TUE' , 'WED' , 'THU' , 'FRI' , 'SAT'];
        var months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        var pHour = document.getElementById('detime-hour');
        var pMin = document.getElementById('detime-min');
        var pSec = document.getElementById('detime-sec');
        var pAmpm = document.getElementById('deampm');
        var pDayweek = document.getElementById('deweekday');
        var pMonth = document.getElementById('dedate-month');
        var pDay = document.getElementById('dedate-day');
        var pYear = document.getElementById('dedate-year');
        
        if (hour>=0 && hour<12){
            pAmpm.textContent="AM";
        }
        else{
            pAmpm.textContent="PM";
        }
        if (hour>12){
            hour=hour-12;
        }
        if (hour<10){
            hour="0"+hour;
        }
        if (min<10){
            min="0"+min;
        }
        if (sec<10){
            sec="0"+sec;
        }


        pHour.textContent=hour;

        pMin.textContent=min;

        pSec.textContent=sec;




        pDayweek.textContent=weekdays[dayweek] + `, `;
        pMonth.textContent=months[month] + `, ` ;
        pDay.textContent=day + `, `;
        pYear.textContent=year;

        
    }

    decalcTime();
    var deinter=setInterval(decalcTime, 1000);

})()

