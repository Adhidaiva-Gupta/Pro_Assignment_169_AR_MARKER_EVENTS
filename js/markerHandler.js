AFRAME.RegisterComponent("markerHandler", {
        init: async function() {    
            this.el.addEventListener("markerFound", () => {
                    console.log("Marker is found");
                    this.handleMarkerFound;
            });

            this.el.addEventListener("markerLost", () => {  
                console.log("Marker is lost");
                this.handleMarkerLost;
            });
        },

        handleMarkerFound: function() {    
            var buttonDiv = document.getElementById("button-div");
            buttonDiv.style.display = "flex";

            var orderButton = document.getElementById("order-button")
            var orderSummaryButton = document.getElementById("order-summary-button");

            //Click Events

            orderButton.addEventListener("click", () => {
                    swal({
                            icon: "https://i.imgur.com/4NZ6uLY.jpg",
                            title: "Thanks for the Order!",
                            text: " ",
                            timer: 2000,
                            buttons: false
                    });
            });

            orderSummaryButton.addEventListener("click", () => {
                    swal({ 
                            icon: "warning",
                            title: "OrderSummary",
                            text: "Work In Progress"
                    });
            });
        },

        handleMarkerLost: function() {  
            //changing button div visibility
            var buttonDiv = document.getElementById("button-div")
            buttonDiv.style.display = "none";
        }
});