
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
   var monthHTML = document.createElement('table');
   //Create name title html container
   var monthTitleHTML = document.createElement('caption');
  
  //Create calendar month header html container
   var monthHeaderHTML = document.createElement('thead');
   //Create row container
   var monthHeaderRowHTML = document.createElement('tr');
   //Create html body container 
   var monthBodyHTML = document.createElement('tbody');
   
   //Set month name text
   monthTitleHTML.innerHTML =monthNames[month.getMonthIndex];
   
   var i;
   for ( i = 0; i < weekDaysNames.length; i++) {
     var cellHTML = document.createElement('td');
     cellHTML.innerHTML = weekDaysNames[i];
     monthHeaderRowHTML.appendChild(cellHTML);
   }
   monthHeaderHTML.appendChild(monthHeaderRowHTML);
   
   
   var cellCounter = 0;
   var daysCounter = firstDay.getDate();
 
   for(i=0; i < 7; i++){
     if(daysCounter <= lastMonthDay.getDate()){
       var rowHTML = document.createElement('tr');
       for(j=0; j < 7; j++){
            var columnHTML = document.createElement('td');
            var columnId = "cell"+i+j;
            if( cellCounter >= month.firstMonthDayNameIndex && daysCounter <= lastMonthDay.getDate()) { 
             columnHTML.innerHTML = daysCounter++;
             if(j == 0 || j == 6){
               columnHTML.className += "weekend-day"
             }else{
               columnHTML.className += "day"
             }
            }else{
              columnHTML.className += "empty-cell"
            }
            columnHTML.className += " cell"
            cellCounter++;
            rowHTML.appendChild(columnHTML);
       }
       monthBodyHTML.appendChild(rowHTML);
     }
   }

   monthHTML.appendChild( monthHeaderHTML );
   monthHTML.appendChild( monthTitleHTML );
  
   monthHTML.appendChild( monthBodyHTML );
   document.getElementById('calendar').appendChild(monthHTML)  ;
   
}

class Month {
   constructor(firstDay, ammountOfDays) {
      this.ammountOfDays = ammountOfDays;
      this.firstDay = firstDay;
      this.firstMonthDayNameIndex = firstDay.getDay();
      this.firstDay.getMonth();
      this.mm = this.firstDay.getMonth();
      this.yyyy = this.firstDay.getFullYear();
      var dd = this.firstDay.getDate()+ (this.ammountOfDays-1);
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
