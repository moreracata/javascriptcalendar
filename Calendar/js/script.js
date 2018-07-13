$( document ).ready(function() {
    console.log( "ready!" );

    
});

function createCalendar(){
   
    var ammountOfDays = document.getElementById("ammountOfDaysmmountOfDays").value;
    var inputDate = document.getElementById("startDate").value.split('-');
    var code = document.getElementById("countryCode").value;
    
    
    var firstDay = new Date(inputDate[0], inputDate[1] - 1, inputDate[2]);
    var lastMonthDay = new Date(inputDate[0], inputDate[1] - 1, inputDate[2]);
    lastMonthDay.setDate(lastMonthDay.getDate()+ammountOfDays);

    
    renderTable(ammountOfDays,firstDay,lastMonthDay);

   
}

function renderTable( anmountOfDays,firstDay,lastMonthDay) 
{
   document.getElementById("calendar").style.display = "block";
   //document.getElementById("user-inputs").style.display = "none";
   //String month names
   var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   //String week days
   var weekDaysNames = ["S", "M","T","W","T","F","S"];
   //First day, index name
   var firstMonthDayNameIndex = firstDay.getDay();
  

   //Month name
   var monthName = monthNames[firstDay.getMonth()];
   //Create name html container
   var month = document.createElement('table');
   //Create name title html container
   var monthTitle = document.createElement('caption');
  
  //Create calendar month header html container
   var monthHeader = document.createElement('thead');
   //Create html row header container
   var monthHeaderRow = document.createElement('tr');
   //Create html body container 
   var monthBody = document.createElement('tbody');
   
   //Set month name text
   monthTitle.innerHTML = monthName;
   var i;
   for ( i = 0; i < weekDaysNames.length; i++) {
      var cell = document.createElement('td');
      cell.innerHTML = weekDaysNames[i];
      monthHeaderRow.appendChild(cell);
   }
   monthHeader.appendChild(monthHeaderRow);
    
   
   var cellCounter = 0;
   var daysCounter = firstDay.getDate();
 
   for(i=0; i < 7; i++){
      if(daysCounter <= lastMonthDay.getDate()){
         var row = document.createElement('tr');
         for(j=0; j < 7; j++){
               var column = document.createElement('td');
               var columnId = "cell"+i+j;
               if( cellCounter >= firstMonthDayNameIndex && daysCounter <= lastMonthDay.getDate()) { 
                 column.innerHTML = daysCounter++;
                 if(j == 0 || j == 6){
                    column.className += "weekend-day"
                 }else{
                    column.className += "day"
                 }
               }else{
                  column.className += "empty-cell"
               }
               column.className += " cell"
               cellCounter++;
               row.appendChild(column);
         }
         monthBody.appendChild(row);
      }
   }

 month.appendChild( monthHeader );
   month.appendChild( monthTitle );
  
   month.appendChild( monthBody );
   var month = document.getElementById('calendar').appendChild(month)  ;
   
}

