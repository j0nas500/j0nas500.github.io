    function getValues()
  {
    var numberUsed = document.getElementById('numberUsed').value;
    var price = document.getElementById('price').value;
    var inPackage = document.getElementById('inPackage').innerHTML;
    var revenue = 0;
      console.log("REVENUE: " + revenue + " PRICE: " + price + " INPACKAGE: " + inPackage + " NUMBERUSED: " + numberUsed + " END");
    if (numberUsed=="")
    {
      revenue = price * inPackage;
    }
    else
    {
      revenue = price * numberUsed;
    }
    var value = revenue * 5;
    document.getElementById("revenue").innerHTML = revenue;
    document.getElementById("value").innerHTML = value;
  }

    function getValuess()
  {
    var punkte = document.getElementById('punkte').value;
    var N15 = 0;
    var N14 = 0;
    var N13 = 0;
      console.log("REVENUE: " + revenue + " PRICE: " + price + " INPACKAGE: " + inPackage + " NUMBERUSED: " + numberUsed + " END");
    if (numberUsed=="")
    {
      N15 = punkte * 98.67 / 100;
    }
    else
    {
      N15 = punkte * 98.67 / 100;
    }
    var value = revenue * 5;
    document.getElementById("NP15").innerHTML = N15;
    document.getElementById("value").innerHTML = value;
  }