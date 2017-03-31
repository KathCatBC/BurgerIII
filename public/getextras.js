$(document).ready(function() {

  $(".modal").hide()

  
  getExtras();

  var extraCheck = $("#extra");
  var veggieCheck =$("#veggie");
  var sauceCheck =$("#sauce");
  var cheeseCheck =$("#cheese");

  getExtras();
  getSauce();
  getCheese();
  getVeggies();
  
  
  $(".modal-close").on("click", function() {
          $(".modal").hide()
  });
  


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

      function renderVeggieList(data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          console.log(data[i])
          rowsToAdd.push(createSelectRow(data[i]));
        }
        veggieCheck.empty();    //empty any existing values
        veggieCheck.append(rowsToAdd);   // add the new row to the selection option
        veggieCheck.val();     // select is ready for the user to select a value
    }

      function renderCheeseList(data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          console.log(data[i])
          rowsToAdd.push(createSelectRow(data[i]));
        }
        cheeseCheck.empty();    //empty any existing values
        cheeseCheck.append(rowsToAdd);   // add the new row to the selection option
        cheeseCheck.val();     // select is ready for the user to select a value
    }

      function renderSauceList(data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          console.log(data[i])
          rowsToAdd.push(createSelectRow(data[i]));
        }
        sauceCheck.empty();    //empty any existing values
        sauceCheck.append(rowsToAdd);   // add the new row to the selection option
        sauceCheck.val();     // select is ready for the user to select a value
    }

    function createSelectRow(topping) {
        var listOption = $("<div class='check-style'><input type='checkbox'/></div>");
        listOption.attr("value", topping.id);
        listOption.append("<label>" + topping.topping_name + "</label>");  
        return listOption;
    }

    function getExtras() {
        $.get("/api/extras", renderExtraList)
   }

    function getSauce() {
        $.get("/api/sauce", renderSauceList)
   }

    function getCheese() {
        $.get("/api/cheese", renderCheeseList)
   }

    function getVeggies() {
        $.get("/api/veggies", renderVeggieList)
   }



});