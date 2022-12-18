// @ts-nocheck
sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {

    return Control.extend("employees.control.Signature", {

        metadata: {
            properties: {
                "width": {
                    type: "sap.ui.core.CSSSize",
                    defaultValue: "400px"
                },
                "height": {
                    type: "sap.ui.core.CSSSize",
                    defaultValue: "100px"
                },
                "bgcolor": {
                    type: "sap.ui.core.CSSColor",
                    defaultValue: "white"
                }
            }
        },

        onInit: function () {

        },

        renderer: function (oRM, oControl) {
            oRM.write("<div");
            oRM.addStyle("width", oControl.getProperty("width"));
            oRM.addStyle("height", oControl.getProperty("height"));
            oRM.addStyle("background-color", oControl.getProperty("bgcolor"));
            oRM.addStyle("border", "1px solid black");
            oRM.writeStyles();
            oRM.write(">");
            oRM.write("<canvas width='" + oControl.getProperty("width") + "' " + "height='"
                + oControl.getProperty("height") + "'");
            oRM.write("></canvas>");
            oRM.write("</div>");
        },

        onAfterRendering: function () {
            var canvas = document.querySelector("canvas");
            try {
                this.signaturePad = new SignaturePad(canvas);
                this.signaturePad.fill = false;
                canvas.addEventListener("mousedown", function() {
                    this.signaturePad.fill = true;
                }.bind(this));
            } catch (e) {
                console.error(e);
            }
        },

        clear: function () {
            try {
                this.signaturePad.clear();
                this.signaturePad.fill = false;
            } catch (err) {
                console.log(err);
            }
        },

        isFill : function() {
            return this.signaturePad.fill;
        },

        getSignature: function() {
            return this.signaturePad.toDataURL();
        },

        setSignature: function(signature) {
            this.signaturePad.fromDataURL(signature);
        }
        
    });
});     