var express = require("express");
var router = express.Router();
const supabase = require("../database/connection");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "bye" });
});

router.get("/tickets", async function (req, res, next) {
  const { data, error } = await supabase
    .from("ticketing")
    .select()
    .eq("for_sale", true);
  if (error) {
    res.send(error);
  } else {
    res.send(data);
  }
});

router.get("/tickets/:ticket_id", async function (req, res, next) {
  const { data, error } = await supabase
    .from("ticketing")
    .select()
    .eq("ticket_id", req.params.ticket_id);
  if (error) {
    res.send(error);
  } else if (data[0].for_sale === false) {
    res.status(404).send("Sorry. This ticket is no longer for sale.")
  } else {
    res.send(data);
  }
});

router.post("/tickets", async function (req, res, next) {
  const { data, error } = await supabase
    .from("ticketing")
    .insert(req.body)
    .select();
  console.log(req.body);
  if (error) {
    res.send(error);
  } else {
    console.log("sent");
    res.send(data);
  }
});

module.exports = router;
