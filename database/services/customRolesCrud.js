const { customRolesRef } = require('../firebase');

const customRoles = {
//Get customs rols
    updateCustomRol : (rol) =>{
        customRolesRef.update({rol})
    },

    //Add custom rol
    addCustomRol: newRol =>{
        customRolesRef.set({newRol})
    }
}


module.exports = customRoles;


