// Require https module to get the object from the API.
const https = require("https");

// Require xml2json-light module
const parser = require("xml2json-light");

// Make the get request, using the get() method, I should need to passed the url and a callback function for the response.

let url = "https://www.senate.gov/general/contact_information/senators_cfm.xml";

https
  .get(url, (res) => {
    //console.log("statusCode", res.statusCode); <--- 200.
    //console.log("header:", res.headers);   <--- Headers content: server/etag/date/connection.

    let xmlData = "";
    let newObjFormat = { members: [] };
    let obj;

    //Make sure res returns an object, rather than a string
    let options = {
      object: true,
    };

    res.on("data", (chunk) => {
      xmlData += chunk;
    });

    //Parse XML using the xml2json function thanks to the xml2json-light module.
    res.on("end", () => {
      obj = parser.xml2json(xmlData, options);

      // Loop the Obj to extract the needed data for the new format.
      for (member in obj.contact_information.member) {
        let uniqueMember = obj.contact_information.member[member];
        let address = uniqueMember.address.split(" ");
        let postalCode = uniqueMember.address.substr(-5);
        newObjFormat.members.push({
          firstName: uniqueMember.first_name,
          lastName: uniqueMember.last_name,
          fullName: `${uniqueMember.first_name} ${uniqueMember.last_name}`,
          chartId: uniqueMember.bioguide_id,
          mobile: uniqueMember.phone,
          address: [
            {
              street: `${address[0]} ${address[1]} ${address[3]} ${address[4]}`,
              city: address[5],
              state: address[6],
              postal: Number(postalCode),
            },
          ],
        });
      }
      //Printing the converted data.

      console.log(JSON.stringify(newObjFormat, null, 1));
    });

    //Handle errors
  })
  .on("error", (err) => {
    console.log(err.message);
  });
