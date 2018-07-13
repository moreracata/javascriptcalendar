
function createCalendar(){
 
   var ammountOfDays = Number(document.getElementById("ammountOfDaysmmountOfDays").value);
   var inputDate = document.getElementById("startDate").value.split('-');
   var code = document.getElementById("countryCode").value;
   
   var firstDay = new Date(inputDate);
   var month = new Month(firstDay, ammountOfDays);
  
   renderMonth(month);

}

function renderMonth(month) 
{
   anmountOfDays = month.anmountOfDays;
   firstDay = month.firstDay;
   lastMonthDay = month.lastMonthDay;
   
   document.getElementById("calendar").style.display = "block";
   //document.getElementById("user-inputs").style.display = "none";
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   //String week days
   var weekDaysNames = ["S", "M","T","W","T","F","S"];


   //Create month html container
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
   var stringName =monthNames[month.getMonthIndex];
   monthTitle.innerHTML =stringName;
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
            if( cellCounter >= month.firstMonthDayNameIndex && daysCounter <= lastMonthDay.getDate()) { 
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

class Month {
   constructor(firstDay, ammountOfDays) {
      this.ammountOfDays = ammountOfDays;
      this.firstDay = firstDay;
      this.firstMonthDayNameIndex = firstDay.getDay();
      this.firstDay.getMonth();
      this.mm = this.firstDay.getMonth();
      this.yyyy = this.firstDay.getFullYear();
      var dd = this.firstDay.getDate()+ this.ammountOfDays;
      this.lastMonthDay = new Date(this.yyyy,this.mm,dd);
   }
  
   
   //Returns the month number
   get getMonthIndex(){
      return this.mm ;
   }
   
   //Returns the day of the week
   get getFirstDayIndex(){
      return this.firstMonthDayNameIndex;
   }
   
   //Returns the month year
   get getYear(){
      return this.yyyy;
   }

}
