(function(){

    function IncalcTime (offset){
        var AnTime=new Date();
        var utc= AnTime.getTime() + (AnTime.getTimezoneOffset()*60000);
        var InTime= new Date(utc + (offset*3600000)); 

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

    IncalcTime('6.5');
    


})()