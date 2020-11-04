/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"logaligroup/Lists/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
