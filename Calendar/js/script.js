
function createCalendar(){
    document.getElementById("calendar").innerHTML = "";
   var ammountOfDays = Number(document.getElementById("ammountOfDaysmmountOfDays").value);
   var inputDate = document.getElementById("startDate").value.split('-');
   var code = document.getElementById("countryCode").value;
   
   var firstCalendarDay = new Date(inputDate);
   //Last day selected by the user
   var lastCalendarDay =  new Date(firstCalendarDay);
   lastCalendarDay.setDate(lastCalendarDay.getDate() + Number(ammountOfDays-1));
   
   //Inital day for the first month
   var initialCurrentMonthDate = firstCalendarDay;
   //Last day for current month
   var initialCurrentLastMonthDate = getLastMonthDayDate(initialCurrentMonthDate.getFullYear(),initialCurrentMonthDate.getMonth());
   
   
      var monthsCounter = 0;
      var seguir = true;
       while(seguir ){
          if(lastCalendarDay.getTime() === initialCurrentLastMonthDate.getTime()){
             
            seguir = false;
         }
         var month = new Month(initialCurrentMonthDate, initialCurrentLastMonthDate,ammountOfDays);
         renderMonth(month);
         
         //First day next month
         initialCurrentMonthDate.setDate(initialCurrentLastMonthDate.getDate()+1);
         //Last day next month
         initialCurrentLastMonthDate = getLastMonthDayDate(initialCurrentMonthDate.getFullYear(),initialCurrentMonthDate.getMonth());
         if(lastCalendarDay < initialCurrentLastMonthDate){
            initialCurrentLastMonthDate = lastCalendarDay;
         }
      }
   
 
  /* if(lastCalendarDay == initialCurrentLastMonthDate){
         initialCurrentLastMonthDate = lastCalendarDay;
         var month = new Month(initialCurrentMonthDate, initialCurrentLastMonthDate,ammountOfDays);
      renderMonth(month);
   }*/
   
   

}

function getLastMonthDayDate(y,m){
   return new Date(y, m + 1, 0);
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
   var monthTitleHTML = document.createElement('tr');
   var monthTitleTagHTML = document.createElement('td');
   monthTitleTagHTML.setAttribute("colspan", "7");
   monthTitleTagHTML.setAttribute("class", "month-title");
     
  //Create calendar month header html container
   var monthHeaderHTML = document.createElement('thead');
   //Create row container
   var monthHeaderRowHTML = document.createElement('tr');
   //Create html body container 
   var monthBodyHTML = document.createElement('tbody');
   
   //Set month name text
   monthTitleTagHTML.innerHTML =monthNames[month.getMonthIndex];
   monthTitleHTML.appendChild(monthTitleTagHTML);
   
   
   var i;
   for ( i = 0; i < weekDaysNames.length; i++) {
     var cellHTML = document.createElement('td');
     cellHTML.innerHTML = weekDaysNames[i];
     monthHeaderRowHTML.appendChild(cellHTML);
   }
   monthHeaderHTML.appendChild(monthHeaderRowHTML);
   monthHeaderHTML.appendChild(monthTitleHTML);

   
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
  
  
   monthHTML.appendChild( monthBodyHTML );
   document.getElementById('calendar').appendChild(monthHTML)  ;
   
}

class Month {
   constructor(firstDay, lastMonthDay, ammountOfDays) {
      this.ammountOfDays = ammountOfDays;
      this.firstDay = firstDay;
      this.firstMonthDayNameIndex = firstDay.getDay();
      this.lastMonthDay = lastMonthDay;
      this.mm = this.firstDay.getMonth();
      this.yyyy = this.firstDay.getFullYear();
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
   
   get getAmmountOfMonthDays () {
      return new Date(this.yyyy, this.mm, 0).getDate();
   }
   
   get getLastMontDayDate(){
      return new Date(this.yyyy, this.mm, this.getAmmountOfMonthDays+1);
   }
}