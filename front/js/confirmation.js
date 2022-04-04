
  function OrderIdDisplay(){
    let idUrl = new URL(window.location.href).searchParams;
  orderId = idUrl.get("id");
 
  orderIdContainer = document.getElementById("orderId");
  orderIdContainer.innerHTML = orderId;

  }
OrderIdDisplay()