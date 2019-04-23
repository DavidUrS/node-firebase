const express = require("express");
const app = express();
require("dotenv").config();
const { customRoles } = require("./database/services");
const { customRolesRef } = require("./database/firebase");

async function insert(
  employerId = 371,
  customId = 2,
  feature = ["write", "read", "update", "delete"],
  hrCustomRoleId = 1050,
  name = "all"
) {
  try {
    let customRole = { employerId, customId, feature, hrCustomRoleId, name };

    await customRoles.addOrUpdateCustomRol(customRole);
    console.log("Inserted successfully");
  } catch (error) {
    console.log(error);
  }
}

insert();

customRolesRef.once("value").then(function(snapshot) {
  console.log(snapshot.val());
});

async function remove(customId = 2, name = "all") {
  let customROle = { customId, name };
  await customRoles.removeCustomRol(customROle);
  console.log("Deleted");
}

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server on por ${PORT}`);
});
