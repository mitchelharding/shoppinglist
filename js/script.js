$(document).ready(function(){

  $("form.form").submit(function(event){

    $("form.form").hide();

    var forms = ["meat", "veggies", "nutsandseeds", "fruit"];

    forms.forEach(function(form){
      var userInput = $("input#" + form).val();

      $("." + form).text(userInput);
    });

    $(".output").show();

    event.preventDefault();
  });
});
