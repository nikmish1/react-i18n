const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

let en = {
  "hello.label":
    "It sets up your development environment so that you can use the latest  JavaScript features, provides a nice developer experience, and optimizes  your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6  on your machine.",
};

let hi = {
  "hello.label":
    "यह आपके विकास के माहौल को स्थापित करता है ताकि आप नवीनतम जावास्क्रिप्ट सुविधाओं का उपयोग कर सकें, एक अच्छा डेवलपर अनुभव प्रदान करता है, और उत्पादन के लिए अपने ऐप का अनुकूलन करता है। आपको अपनी मशीन पर नोड> = 8.10 और npm> = 5.6 होना चाहिए",
};

app.get("/assets/translations/en.json", (req, res) => {
  res.send(en);
});

app.get("/assets/translations/hi.json", (req, res) => {
  res.send(hi);
});

// app.get("/:id", (req, res) => {
//   const recipe = recipes.filter(
//     recipe => recipe.id === parseInt(req.params.id)
//   );
//   if (recipe.length === 0) return res.status(404).send();
//   if (recipe.length > 1) return res.status(500).send();
//   res.send(recipe[0]);
// });

// app.post('/', (req, res) => {
//   req.body.id = recipes.length + 1;
//   recipes.push(req.body)
//   res.status(200).send()
// })

app.listen(8081, () => {
  console.log("App's running on port 8081");
});
