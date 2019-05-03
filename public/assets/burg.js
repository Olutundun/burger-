       $(document).ready(function () {
           //updates the displayed/devoured burgers
           $(".devour-burger").on("click", function () {
               let id = $(this).data("id");
               let eaten = $(this).data("eaten");

               let newDevoured = {
                   devoured: eaten
               };

               console.log(id);
               console.log(newDevoured);

               $.ajax("/api/burgers/" + id, {
                   type: "PUT",
                   data: newDevoured
               }).then(
                   function () {
                       console.log("burger devoured");
                       // Reload the page to get the updated list
                       location.reload();
                   });
           });

           // create/POST a new burger
           $(".create-form").on("submit", function (event) {
               event.preventDefault();

               let newBurger = {
                   burger_name: $("#burgerSubmit").val().trim()
               };

               $.ajax("/api/burgers", {
                   type: "POST",
                   data: newBurger
               }).then(
                   function () {
                       console.log("added a new burger to the database");
                       location.reload();
                   });
           });

           // clears out the displayed burgers
           $(".clearTable").on("click", function () {
               $.ajax("/api/burgers", {
                   type: "DELETE"
               }).then(
                   function () {
                       console.log("table cleared");
                       location.reload();
                   });
           });

       });