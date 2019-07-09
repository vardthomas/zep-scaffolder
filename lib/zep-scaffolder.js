"use strict";
exports.__esModule = true;
var React = require("react");
function buildComponentsForContract(contract) {
    return {
        title: buildContractTitleComponent(contract.contractName),
        sends: buildSendComponents(contract.abi)
    };
}
function buildContractTitleComponent(contractName) {
    return React.createElement("h3", null, contractName);
}
function buildSendComponents(abi) {
    var sendComponents = {};
    abi.forEach(function (item) {
        if ("name" in item && item.name) {
            sendComponents[item.name] = (React.createElement("div", null, item.name));
        }
    });
    return sendComponents;
}
exports["default"] = buildComponentsForContract;
//# sourceMappingURL=zep-scaffolder.js.map