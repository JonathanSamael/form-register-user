const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const Contact = require("./models/Contact");

app.engine("hbs", hbs.engine({ defaultLayout: "main" }));
app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get("/", (req, res) => {
  Contact.findAll({}).then((contacts) => {
    const data = {
      showContacts: contacts.map(contact => {
        return {
          contact_ID: contact.contact_ID,
          name: contact.name,
          age: contact.age,
          phone: contact.phone
        }
      })
    }
    res.render("home", { showContacts: data.showContacts });
  });
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.get("/deleted", (req, res) => {
  res.render("deleted")
})

app.post("/", async (req, res) => {
  console.log(req.params);
  await Contact.create({
    name: req.body.name,
    age: req.body.age,
    phone: req.body.phone,
  })
    .then(() => {
      res.redirect("/add");
    })
    .catch((err) => {
      res.send("houve um erro " + err);
    });
});

app.get('/deleted/:contact_ID', (req, res) => {
  console.log("Item a ser deletado");
  Contact.destroy({where: {'contact_ID': req.params.contact_ID}}).then(() => {
    res.redirect("/deleted")
  }).catch((err) => {
    res.send("Está postagem não existe!" + err)
  });
});

app.listen(5000, (req, res) => {
  console.log("Server running on 5000");
});