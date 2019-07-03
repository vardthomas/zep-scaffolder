import * as React from 'react'

function buildComponentsForContract(contract){
    return {
        title: buildContractTitleComponent(contract.contractName),
        sends: buildSendComponents(contract.abi)
    }
}

function buildContractTitleComponent(contractName){
   return <h3>{contractName}</h3>
}

function buildSendComponents(abi){
    const sendComponents = {}

    abi.forEach(function(item){
        if("name" in item && item.name){ // skipping constructor for now
            sendComponents[item.name] = (
                <div>
                    {item.name}
                </div>
            );
        }
      });

    return sendComponents
}

export default buildComponentsForContract


