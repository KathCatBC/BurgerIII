$(document).ready(function() {

  $(".modal").hide()

  
  getExtras();

  var extraCheck = $("#extra");
  
  
  $(".modal-close").on("click", function() {
          $(".modal").hide()
  });
  
 




// The next 3 functions are used to populate the select list of projects in the HTML form
    function renderExtraList(data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          console.log(data[i])
          rowsToAdd.push(createSelectRow(data[i]));
        }
        extraCheck.empty();    //empty any existing values
        extraCheck.append(rowsToAdd);   // add the new row to the selection option
        extraCheck.val();     // select is ready for the user to select a value
    }

    function createSelectRow(topping) {
        var listOption = $("<div><input type='checkbox'/></div>");
        listOption.attr("value", topping.id);
        listOption.append("<label>" + topping.topping_name + "</label>");  
        return listOption;
    }

    function getExtras() {
        console.log('getting extras')
        // get all the values you need from the table
        $.get("/api/extras", renderExtraList)
   }



});