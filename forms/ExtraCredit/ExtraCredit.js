let columns = prompt('How many asterisks do you want per line (1 to 10)')

let rows = prompt('How many lines do you want (1 to 10)?')

for(i = 0; i < rows; i++){
   for(j = 0; j < columns; j++){
    document.write("*")
   }
   document.write("<br>")

}


