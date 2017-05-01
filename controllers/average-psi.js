var template = require('../views/average-psi');  
var average_psi_data = require('../model/average-psi');  

exports.get = function(req, res) {  
  var average_psi = average_psi_data.average_psi;
  var average_psi_str = JSON.stringify(average_psi_data.average_psi);
  var average_psi_content = "";

  console.log(average_psi_content);

  //var psi_data = JSON.stringify(average_psi_data.psi_data);
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write(template.build("AVG PSI", "Singapore Average PSI", average_psi ));
  res.end();
};
