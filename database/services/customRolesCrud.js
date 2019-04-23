const { customRolesRef } = require("../firebase");

const customRoles = {
  //Delete custom role
  removeCustomRol: async rol => {
    let ref = customRolesRef.child("/" + rol.customId + "_" + rol.name);
    await ref.remove();
  },
  //Add custom rol
  addOrUpdateCustomRol: async newRol => {
    let newCustomRoleRef = customRolesRef.child(
      "/" + newRol.customId + "_" + newRol.name
    );
    newRol._id = newCustomRoleRef.push().key;
    await newCustomRoleRef.set(newRol);
  }
};

module.exports = customRoles;
