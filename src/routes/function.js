const express = require("express");
const router = express.Router();

//! Init modules
const moduleSearch = require("../Consultas/Search.js");

//*POS para actualizar status de Kiosco
router.get("/search/:q", (req, res, next) => {
  var hoy = new Date();
  var fecha =
    hoy.getDate() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getFullYear();
  var hora = hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();

  console.log("---------New-Status " + fecha + " " + hora + "-------------");
  console.log(req.body);

  var data = {
    wordSearch: req.params.q,
  };

  // var data = {
  //   wordSearch: req.body.data,
  // };

  //console.log(data);
  moduleSearch.read(data).then((result) => {
    var resData = result.data.allAllCities.edges;
    //console.log(resData);
    let response = [];
    resData.forEach((element) => {
      let node = element.node;
      if (node != null) response.push(node);
    });
    //console.log(response)

    res.json({
      search: response,
    });
  });
});




module.exports = router;
