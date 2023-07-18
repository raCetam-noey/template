sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("asim.controller.Main", {
            onInit: function () {
               
            },
            navTo: function (oEvent, sName) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                //nav to use with parameter
                oRouter.navTo(sName);
                
            }
         
        });
    });
