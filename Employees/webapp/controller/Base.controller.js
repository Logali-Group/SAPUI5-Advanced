// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {

    return Controller.extend("logaligroup.Employees.controller.Base", {

        onInit: function () {

        },

        toOrderDetails: function (oEvent) {
            var orderID = oEvent.getSource().getBindingContext("odataNorthwind").getObject().OrderID;
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteOrderDetails", {
                OrderID: orderID
            });
        }
    });
}); 