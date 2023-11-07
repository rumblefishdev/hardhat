// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { AbiParameterToPrimitiveType, GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface B$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "B",
  "sourceName": "contracts/C.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_b",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_s",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "getB",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50604051610604380380610604833981810160405281019061003291906101fb565b816000819055508060019081610048919061046e565b505050610540565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61007781610064565b811461008257600080fd5b50565b6000815190506100948161006e565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6100ed826100a4565b810181811067ffffffffffffffff8211171561010c5761010b6100b5565b5b80604052505050565b600061011f610050565b905061012b82826100e4565b919050565b600067ffffffffffffffff82111561014b5761014a6100b5565b5b610154826100a4565b9050602081019050919050565b60005b8381101561017f578082015181840152602081019050610164565b60008484015250505050565b600061019e61019984610130565b610115565b9050828152602081018484840111156101ba576101b961009f565b5b6101c5848285610161565b509392505050565b600082601f8301126101e2576101e161009a565b5b81516101f284826020860161018b565b91505092915050565b600080604083850312156102125761021161005a565b5b600061022085828601610085565b925050602083015167ffffffffffffffff8111156102415761024061005f565b5b61024d858286016101cd565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806102a957607f821691505b6020821081036102bc576102bb610262565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026103247fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826102e7565b61032e86836102e7565b95508019841693508086168417925050509392505050565b6000819050919050565b600061036b61036661036184610064565b610346565b610064565b9050919050565b6000819050919050565b61038583610350565b61039961039182610372565b8484546102f4565b825550505050565b600090565b6103ae6103a1565b6103b981848461037c565b505050565b5b818110156103dd576103d26000826103a6565b6001810190506103bf565b5050565b601f821115610422576103f3816102c2565b6103fc846102d7565b8101602085101561040b578190505b61041f610417856102d7565b8301826103be565b50505b505050565b600082821c905092915050565b600061044560001984600802610427565b1980831691505092915050565b600061045e8383610434565b9150826002028217905092915050565b61047782610257565b67ffffffffffffffff8111156104905761048f6100b5565b5b61049a8254610291565b6104a58282856103e1565b600060209050601f8311600181146104d857600084156104c6578287015190505b6104d08582610452565b865550610538565b601f1984166104e6866102c2565b60005b8281101561050e578489015182556001820191506020850194506020810190506104e9565b8683101561052b5784890151610527601f891682610434565b8355505b6001600288020188555050505b505050505050565b60b68061054e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063a1c5191514602d575b600080fd5b60336047565b604051603e91906067565b60405180910390f35b60008054905090565b6000819050919050565b6061816050565b82525050565b6000602082019050607a6000830184605a565b9291505056fea2646970667358221220d9268b96329d3a8617cfa3925eac59afcfbe7935e6fa7baab75e296746f136f264736f6c63430008130033",
  "deployedBytecode": "0x6080604052348015600f57600080fd5b506004361060285760003560e01c8063a1c5191514602d575b600080fd5b60336047565b604051603e91906067565b60405180910390f35b60008054905090565b6000819050919050565b6061816050565b82525050565b6000602082019050607a6000830184605a565b9291505056fea2646970667358221220d9268b96329d3a8617cfa3925eac59afcfbe7935e6fa7baab75e296746f136f264736f6c63430008130033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "contracts/C.sol:B",
    constructorArgs: [_b: AbiParameterToPrimitiveType<{"name":"_b","type":"uint256"}>, _s: AbiParameterToPrimitiveType<{"name":"_s","type":"string"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<B$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "contracts/C.sol:B",
    constructorArgs: [_b: AbiParameterToPrimitiveType<{"name":"_b","type":"uint256"}>, _s: AbiParameterToPrimitiveType<{"name":"_s","type":"string"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<B$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "contracts/C.sol:B",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<B$Type["abi"]>>;
}