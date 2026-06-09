export const packAlphaArenaAbi = [
  {
    "type": "function",
    "name": "agentScores",
    "inputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "roiBps",
        "type": "int256",
        "internalType": "int256"
      },
      {
        "name": "hitRateBps",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "drawdownBps",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "scoreBps",
        "type": "int256",
        "internalType": "int256"
      },
      {
        "name": "updatedAt",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "commitDecision",
    "inputs": [
      {
        "name": "decisionHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "assetId",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "action",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "venue",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "expectedNetEdgeBps",
        "type": "int256",
        "internalType": "int256"
      },
      {
        "name": "receiptHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "commitId",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "commitPrediction",
    "inputs": [
      {
        "name": "roundId",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "marketId",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "outcomeHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "predictionCommitId",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "commitStrategy",
    "inputs": [
      {
        "name": "agentId",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "roundId",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "strategyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "strategyCommitId",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "commits",
    "inputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "trader",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "assetId",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "action",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "venue",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "expectedNetEdgeBps",
        "type": "int256",
        "internalType": "int256"
      },
      {
        "name": "receiptHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "timestamp",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "predictionSettlements",
    "inputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "predictions",
    "inputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "roundId",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "marketId",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "outcomeHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "timestamp",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "publishValuationRoot",
    "inputs": [
      {
        "name": "batchId",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "merkleRoot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "valuedAt",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "sourceManifestUri",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "recordExecutionReceipt",
    "inputs": [
      {
        "name": "intentId",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "decisionHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "receiptHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "realizedPnlUsdE6",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "recordTokenExecutionReceipt",
    "inputs": [
      {
        "name": "intentId",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "decisionHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "receiptHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "settlementToken",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "notionalAmount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "realizedPnlUsdE6",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "roundResults",
    "inputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "settlePrediction",
    "inputs": [
      {
        "name": "predictionCommitId",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "outcome",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "rewardPoints",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "settleRound",
    "inputs": [
      {
        "name": "roundId",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "winningAgentId",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "resultHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "strategies",
    "inputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "agent",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "agentId",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "roundId",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "strategyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "timestamp",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "updateAgentScore",
    "inputs": [
      {
        "name": "agentId",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "roiBps",
        "type": "int256",
        "internalType": "int256"
      },
      {
        "name": "hitRateBps",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "drawdownBps",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "scoreBps",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "outputs": [
      {
        "name": "agentIdHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "valuationRoots",
    "inputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "event",
    "name": "AgentScoreUpdated",
    "inputs": [
      {
        "name": "agentIdHash",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "agentId",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "roiBps",
        "type": "int256",
        "indexed": false,
        "internalType": "int256"
      },
      {
        "name": "hitRateBps",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "drawdownBps",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "scoreBps",
        "type": "int256",
        "indexed": false,
        "internalType": "int256"
      },
      {
        "name": "updatedAt",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "DecisionCommitted",
    "inputs": [
      {
        "name": "commitId",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "decisionHash",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "trader",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "assetId",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "action",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "venue",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "expectedNetEdgeBps",
        "type": "int256",
        "indexed": false,
        "internalType": "int256"
      },
      {
        "name": "receiptHash",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      },
      {
        "name": "timestamp",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ExecutionReceiptRecorded",
    "inputs": [
      {
        "name": "intentId",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "decisionHash",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "receiptHash",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      },
      {
        "name": "realizedPnlUsdE6",
        "type": "int256",
        "indexed": false,
        "internalType": "int256"
      },
      {
        "name": "executedAt",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PredictionCommitted",
    "inputs": [
      {
        "name": "predictionCommitId",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "roundId",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "marketId",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "outcomeHash",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      },
      {
        "name": "timestamp",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PredictionSettled",
    "inputs": [
      {
        "name": "predictionCommitId",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "outcome",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "rewardPoints",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "settledAt",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RoundSettled",
    "inputs": [
      {
        "name": "roundId",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "winningAgentId",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "resultHash",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      },
      {
        "name": "settledAt",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "StrategyCommitted",
    "inputs": [
      {
        "name": "strategyCommitId",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "agent",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "agentId",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "roundId",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "strategyHash",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      },
      {
        "name": "timestamp",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokenExecutionReceiptRecorded",
    "inputs": [
      {
        "name": "intentId",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "decisionHash",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "receiptHash",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      },
      {
        "name": "settlementToken",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "notionalAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "realizedPnlUsdE6",
        "type": "int256",
        "indexed": false,
        "internalType": "int256"
      },
      {
        "name": "executedAt",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ValuationRootPublished",
    "inputs": [
      {
        "name": "batchId",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "merkleRoot",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      },
      {
        "name": "valuedAt",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "sourceManifestUri",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      }
    ],
    "anonymous": false
  }
] as const;

export const packAlphaArenaBytecode = '0x6080604052348015600e575f80fd5b506119d98061001c5f395ff3fe608060405234801561000f575f80fd5b50600436106100fb575f3560e01c80637e06edbd11610093578063afee45c011610063578063afee45c014610286578063c105fb2d146102a5578063c7955948146102b8578063fb547fee146102cb575f80fd5b80637e06edbd1461022e57806383a89a2514610241578063936ba9b914610260578063aec7da1614610273575f80fd5b806342527f5b116100ce57806342527f5b1461017b57806347885781146101e057806351eb7fcd146102065780635d9eaeaf1461021b575f80fd5b806313d18cff146100ff578063200d236c146101255780632e9607ab146101385780633ff34eb914610157575b5f80fd5b61011261010d36600461129c565b6102de565b6040519081526020015b60405180910390f35b6101126101333660046112f9565b6103a1565b61011261014636600461136c565b60066020525f908152604090205481565b61016a61016536600461136c565b6105d2565b60405161011c9594939291906113b1565b6101b861018936600461136c565b600360208190525f91825260409091208054600182015460028301549383015460049093015491939092909185565b604080519586526020860194909452928401919091526060830152608082015260a00161011c565b6101f36101ee36600461136c565b610716565b60405161011c97969594939291906113fb565b610219610214366004611464565b6108ec565b005b61016a61022936600461136c565b6109b1565b61011261023c3660046112f9565b6109dd565b61011261024f36600461136c565b60046020525f908152604090205481565b61011261026e366004611493565b610bfb565b61021961028136600461154c565b610e95565b61011261029436600461136c565b60056020525f908152604090205481565b6102196102b336600461159b565b610f46565b6102196102c636600461154c565b611022565b6102196102d93660046115f7565b6110ef565b5f86866040516102ef929190611651565b6040805191829003822060a08301825287835260208084018881528484018881526060860188815242608088018181525f878152600396879052889020985189559351600189015591516002880155519286019290925551600490940193909355905190925082917f4294f0e68d189518b67108a8808243b0ea69b70a9ceee11c5c35f5faaff844a19161038f918b918b918b918b918b918b9190611688565b60405180910390a29695505050505050565b5f816103ed5760405162461bcd60e51b815260206004820152601660248201527514d51490551151d657d21054d217d49154555254915160521b60448201526064015b60405180910390fd5b338686868686604051602001610408969594939291906116c5565b60408051601f1981840301815291815281516020928301205f818152928390529120600401549091501561047e5760405162461bcd60e51b815260206004820152601760248201527f53545241544547595f414c52454144595f45584953545300000000000000000060448201526064016103e4565b6040518060a00160405280336001600160a01b0316815260200187878080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250505090825250604080516020601f8801819004810282018101909252868152918101919087908790819084018382808284375f920182905250938552505050602080830186905242604093840152848252818152919020825181546001600160a01b0319166001600160a01b0390911617815590820151600182019061055090826117a1565b506040820151600282019061056590826117a1565b506060820151816003015560808201518160040155905050336001600160a01b0316817f15f5261babd1005e57e40836a8b9dea57ec0da338e4bc168fefd0076e619273c8888888888426040516105c19695949392919061185c565b60405180910390a395945050505050565b5f60208190529081526040902080546001820180546001600160a01b0390921692916105fd9061171d565b80601f01602080910402602001604051908101604052809291908181526020018280546106299061171d565b80156106745780601f1061064b57610100808354040283529160200191610674565b820191905f5260205f20905b81548152906001019060200180831161065757829003601f168201915b5050505050908060020180546106899061171d565b80601f01602080910402602001604051908101604052809291908181526020018280546106b59061171d565b80156107005780601f106106d757610100808354040283529160200191610700565b820191905f5260205f20905b8154815290600101906020018083116106e357829003601f168201915b5050505050908060030154908060040154905085565b60026020525f9081526040902080546001820180546001600160a01b0390921692916107419061171d565b80601f016020809104026020016040519081016040528092919081815260200182805461076d9061171d565b80156107b85780601f1061078f576101008083540402835291602001916107b8565b820191905f5260205f20905b81548152906001019060200180831161079b57829003601f168201915b5050505050908060020180546107cd9061171d565b80601f01602080910402602001604051908101604052809291908181526020018280546107f99061171d565b80156108445780601f1061081b57610100808354040283529160200191610844565b820191905f5260205f20905b81548152906001019060200180831161082757829003601f168201915b5050505050908060030180546108599061171d565b80601f01602080910402602001604051908101604052809291908181526020018280546108859061171d565b80156108d05780601f106108a7576101008083540402835291602001916108d0565b820191905f5260205f20905b8154815290600101906020018083116108b357829003601f168201915b5050505050908060040154908060050154908060060154905087565b8361092e5760405162461bcd60e51b815260206004820152601260248201527112539511539517d25117d49154555254915160721b60448201526064016103e4565b8261094b5760405162461bcd60e51b81526004016103e490611898565b816109685760405162461bcd60e51b81526004016103e4906118c8565b604080518381526020810183905242818301529051849186917f0ced19fc33cbe46db0b2656945a3d08dc0f078e250573433d4a24b3d076c1a1c9181900360600190a350505050565b600160208190525f9182526040909120805491810180546001600160a01b03909316926105fd9061171d565b5f81610a235760405162461bcd60e51b815260206004820152601560248201527413d55510d3d35157d21054d217d491545552549151605a1b60448201526064016103e4565b338686868686604051602001610a3e969594939291906116c5565b60408051601f1981840301815291815281516020928301205f818152600190935291206004015490915015610ab55760405162461bcd60e51b815260206004820152601960248201527f50524544494354494f4e5f414c52454144595f4558495354530000000000000060448201526064016103e4565b6040518060a00160405280336001600160a01b0316815260200187878080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250505090825250604080516020601f8801819004810282018101909252868152918101919087908790819084018382808284375f920182905250938552505050602080830186905242604093840152848252600180825292909120835181546001600160a01b0319166001600160a01b03909116178155908301519091820190610b8a90826117a1565b5060408201516002820190610b9f90826117a1565b506060820151816003015560808201518160040155905050336001600160a01b0316817fcc3d931bbfc9ac63fc2d8c5ede3739b54af54999977e070516fc7180ae45d6ec8888888888426040516105c19695949392919061185c565b5f89610c195760405162461bcd60e51b81526004016103e490611898565b81610c365760405162461bcd60e51b81526004016103e4906118c8565b6040516bffffffffffffffffffffffff193360601b166020820152603481018b90526054810183905260740160408051601f1981840301815291815281516020928301205f818152600290935291206006015490915015610cd15760405162461bcd60e51b8152602060048201526015602482015274434f4d4d49545f414c52454144595f45584953545360581b60448201526064016103e4565b6040518060e00160405280336001600160a01b031681526020018a8a8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250505090825250604080516020601f8b0181900481028201810190925289815291810191908a908a90819084018382808284375f92019190915250505090825250604080516020601f8901819004810282018101909252878152918101919088908890819084018382808284375f920182905250938552505050602080830187905260408084018790524260609094019390935284825260028152919020825181546001600160a01b0319166001600160a01b03909116178155908201516001820190610de990826117a1565b5060408201516002820190610dfe90826117a1565b5060608201516003820190610e1390826117a1565b506080820151816004015560a0820151816005015560c08201518160060155905050336001600160a01b03168a827fc421022191d9ba5b09c6b9e969a8425783cb87c71f3d5609647919a0ed25d37d8c8c8c8c8c8c8c8c42604051610e80999897969594939291906118f7565b60405180910390a49998505050505050505050565b83610edb5760405162461bcd60e51b8152602060048201526016602482015275141491511250d51253d397d25117d49154555254915160521b60448201526064016103e4565b8282604051610eeb929190611651565b604080519182900382205f8781526006602052919091205584907f431072aace7e58fe5eebc43688e3fe31b195a0880e12ecb831f8490cfdd8617490610f38908690869086904290611954565b60405180910390a250505050565b84610f875760405162461bcd60e51b815260206004820152601160248201527010905510d217d25117d491545552549151607a1b60448201526064016103e4565b83610fcb5760405162461bcd60e51b815260206004820152601460248201527313515492d31157d493d3d517d49154555254915160621b60448201526064016103e4565b5f85815260046020526040908190208590555185907f793202766fe750b17c8c6a25b79583521c06bbe075d072122ec21032b0deb24c9061101390879087908790879061197a565b60405180910390a25050505050565b836110635760405162461bcd60e51b81526020600482015260116024820152701493d5539117d25117d491545552549151607a1b60448201526064016103e4565b806110a75760405162461bcd60e51b8152602060048201526014602482015273149154d5531517d21054d217d49154555254915160621b60448201526064016103e4565b5f84815260056020526040908190208290555184907f1a51eda4699a4147cea73b9b0f3bb0ed9acddf59744d79f36162beff483b4c1390610f38908690869086904290611954565b856111315760405162461bcd60e51b815260206004820152601260248201527112539511539517d25117d49154555254915160721b60448201526064016103e4565b8461114e5760405162461bcd60e51b81526004016103e490611898565b8361116b5760405162461bcd60e51b81526004016103e4906118c8565b6001600160a01b0383166111b25760405162461bcd60e51b815260206004820152600e60248201526d1513d2d15397d49154555254915160921b60448201526064016103e4565b5f82116111f55760405162461bcd60e51b81526020600482015260116024820152701393d51253d3905317d491545552549151607a1b60448201526064016103e4565b604080518581526001600160a01b038516602082015290810183905260608101829052426080820152859087907f21d1f215ead52521504ac308b23986f6e1a8b626820d613f32d7687b415e32929060a00160405180910390a3505050505050565b5f8083601f840112611267575f80fd5b50813567ffffffffffffffff81111561127e575f80fd5b602083019150836020828501011115611295575f80fd5b9250929050565b5f805f805f8060a087890312156112b1575f80fd5b863567ffffffffffffffff8111156112c7575f80fd5b6112d389828a01611257565b909a90995060208901359860408101359850606081013597506080013595509350505050565b5f805f805f6060868803121561130d575f80fd5b853567ffffffffffffffff811115611323575f80fd5b61132f88828901611257565b909650945050602086013567ffffffffffffffff81111561134e575f80fd5b61135a88828901611257565b96999598509660400135949350505050565b5f6020828403121561137c575f80fd5b5035919050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b6001600160a01b038616815260a0602082018190525f906113d490830187611383565b82810360408401526113e68187611383565b60608401959095525050608001529392505050565b6001600160a01b038816815260e0602082018190525f9061141e90830189611383565b82810360408401526114308189611383565b905082810360608401526114448188611383565b6080840196909652505060a081019290925260c090910152949350505050565b5f805f8060808587031215611477575f80fd5b5050823594602084013594506040840135936060013592509050565b5f805f805f805f805f60c08a8c0312156114ab575f80fd5b8935985060208a013567ffffffffffffffff8111156114c8575f80fd5b6114d48c828d01611257565b90995097505060408a013567ffffffffffffffff8111156114f3575f80fd5b6114ff8c828d01611257565b90975095505060608a013567ffffffffffffffff81111561151e575f80fd5b61152a8c828d01611257565b9a9d999c50979a96999598959660808101359660a09091013595509350505050565b5f805f806060858703121561155f575f80fd5b84359350602085013567ffffffffffffffff81111561157c575f80fd5b61158887828801611257565b9598909750949560400135949350505050565b5f805f805f608086880312156115af575f80fd5b853594506020860135935060408601359250606086013567ffffffffffffffff8111156115da575f80fd5b6115e688828901611257565b969995985093965092949392505050565b5f805f805f8060c0878903121561160c575f80fd5b86359550602087013594506040870135935060608701356001600160a01b0381168114611637575f80fd5b9598949750929560808101359460a0909101359350915050565b818382375f9101908152919050565b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b60c081525f61169b60c08301898b611660565b60208301979097525060408101949094526060840192909252608083015260a09091015292915050565b6bffffffffffffffffffffffff198760601b168152848660148301375f858201601481015f8152858782375090930160148101929092525060340195945050505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c9082168061173157607f821691505b60208210810361174f57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561179c57805f5260205f20601f840160051c8101602085101561177a5750805b601f840160051c820191505b81811015611799575f8155600101611786565b50505b505050565b815167ffffffffffffffff8111156117bb576117bb611709565b6117cf816117c9845461171d565b84611755565b6020601f821160018114611801575f83156117ea5750848201515b5f19600385901b1c1916600184901b178455611799565b5f84815260208120601f198516915b828110156118305787850151825560209485019460019092019101611810565b508482101561184d57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b608081525f61186f60808301888a611660565b8281036020840152611882818789611660565b6040840195909552505060600152949350505050565b602080825260169082015275111150d254d253d397d21054d217d49154555254915160521b604082015260600190565b602080825260159082015274149150d152541517d21054d217d491545552549151605a1b604082015260600190565b60c081525f61190a60c083018b8d611660565b828103602084015261191d818a8c611660565b9050828103604084015261193281888a611660565b60608401969096525050608081019290925260a0909101529695505050505050565b606081525f611967606083018688611660565b6020830194909452506040015292915050565b848152836020820152606060408201525f611999606083018486611660565b969550505050505056fea2646970667358221220ba85cee0a8cc5f7b141610e18e16a994efbf80eae929dacd1a392c4099fe5c0c64736f6c634300081a0033' as const;

export const demoUsdcAbi = [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "initialRecipient",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "allowance",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "spender",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "approve",
    "inputs": [
      {
        "name": "spender",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "value",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "balanceOf",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "decimals",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint8",
        "internalType": "uint8"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "mint",
    "inputs": [
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "name",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "symbol",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalSupply",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "transfer",
    "inputs": [
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "value",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transferFrom",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "value",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "Approval",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "spender",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "value",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Transfer",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "value",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "ERC20InsufficientAllowance",
    "inputs": [
      {
        "name": "spender",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "allowance",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "needed",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC20InsufficientBalance",
    "inputs": [
      {
        "name": "sender",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "balance",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "needed",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC20InvalidApprover",
    "inputs": [
      {
        "name": "approver",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC20InvalidReceiver",
    "inputs": [
      {
        "name": "receiver",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC20InvalidSender",
    "inputs": [
      {
        "name": "sender",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ERC20InvalidSpender",
    "inputs": [
      {
        "name": "spender",
        "type": "address",
        "internalType": "address"
      }
    ]
  }
] as const;

export const demoUsdcBytecode = '0x60a060405234801561000f575f80fd5b50604051610d04380380610d0483398101604081905261002e91610240565b6040518060400160405280601481526020017f5061636b20416c7068612044656d6f20555344430000000000000000000000008152506040518060400160405280600681526020016570615553444360d01b81525081600390816100929190610305565b50600461009f8282610305565b505033608052506001600160a01b038116156100d7576100d7816100c56006600a6104b8565b6100d290620f42406104c6565b6100dd565b506104f0565b6001600160a01b03821661010b5760405163ec442f0560e01b81525f60048201526024015b60405180910390fd5b6101165f838361011a565b5050565b6001600160a01b038316610144578060025f82825461013991906104dd565b909155506101b49050565b6001600160a01b0383165f90815260208190526040902054818110156101965760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610102565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b0382166101d0576002805482900390556101ee565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161023391815260200190565b60405180910390a3505050565b5f60208284031215610250575f80fd5b81516001600160a01b0381168114610266575f80fd5b9392505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c9082168061029557607f821691505b6020821081036102b357634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561030057805f5260205f20601f840160051c810160208510156102de5750805b601f840160051c820191505b818110156102fd575f81556001016102ea565b50505b505050565b81516001600160401b0381111561031e5761031e61026d565b6103328161032c8454610281565b846102b9565b6020601f821160018114610364575f831561034d5750848201515b5f19600385901b1c1916600184901b1784556102fd565b5f84815260208120601f198516915b828110156103935787850151825560209485019460019092019101610373565b50848210156103b057868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b634e487b7160e01b5f52601160045260245ffd5b6001815b600184111561040e578085048111156103f2576103f26103bf565b600184161561040057908102905b60019390931c9280026103d7565b935093915050565b5f82610424575060016104b2565b8161043057505f6104b2565b816001811461044657600281146104505761046c565b60019150506104b2565b60ff841115610461576104616103bf565b50506001821b6104b2565b5060208310610133831016604e8410600b841016171561048f575081810a6104b2565b61049b5f1984846103d3565b805f19048211156104ae576104ae6103bf565b0290505b92915050565b5f61026660ff841683610416565b80820281158282048414176104b2576104b26103bf565b808201808211156104b2576104b26103bf565b6080516107f561050f5f395f818161016101526102c501526107f55ff3fe608060405234801561000f575f80fd5b50600436106100a6575f3560e01c806340c10f191161006e57806340c10f191461011f57806370a08231146101345780638da5cb5b1461015c57806395d89b411461019b578063a9059cbb146101a3578063dd62ed3e146101b6575f80fd5b806306fdde03146100aa578063095ea7b3146100c857806318160ddd146100eb57806323b872dd146100fd578063313ce56714610110575b5f80fd5b6100b26101ee565b6040516100bf9190610665565b60405180910390f35b6100db6100d63660046106b5565b61027e565b60405190151581526020016100bf565b6002545b6040519081526020016100bf565b6100db61010b3660046106dd565b610297565b604051600681526020016100bf565b61013261012d3660046106b5565b6102ba565b005b6100ef610142366004610717565b6001600160a01b03165f9081526020819052604090205490565b6101837f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100bf565b6100b2610332565b6100db6101b13660046106b5565b610341565b6100ef6101c4366004610737565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b6060600380546101fd90610768565b80601f016020809104026020016040519081016040528092919081815260200182805461022990610768565b80156102745780601f1061024b57610100808354040283529160200191610274565b820191905f5260205f20905b81548152906001019060200180831161025757829003601f168201915b5050505050905090565b5f3361028b81858561034e565b60019150505b92915050565b5f336102a4858285610360565b6102af8585856103dc565b506001949350505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103245760405162461bcd60e51b815260206004820152600a60248201526927a7262cafa7aba722a960b11b60448201526064015b60405180910390fd5b61032e8282610439565b5050565b6060600480546101fd90610768565b5f3361028b8185856103dc565b61035b838383600161046d565b505050565b6001600160a01b038381165f908152600160209081526040808320938616835292905220545f198110156103d657818110156103c857604051637dc7a0d960e11b81526001600160a01b0384166004820152602481018290526044810183905260640161031b565b6103d684848484035f61046d565b50505050565b6001600160a01b03831661040557604051634b637e8f60e11b81525f600482015260240161031b565b6001600160a01b03821661042e5760405163ec442f0560e01b81525f600482015260240161031b565b61035b83838361053f565b6001600160a01b0382166104625760405163ec442f0560e01b81525f600482015260240161031b565b61032e5f838361053f565b6001600160a01b0384166104965760405163e602df0560e01b81525f600482015260240161031b565b6001600160a01b0383166104bf57604051634a1406b160e11b81525f600482015260240161031b565b6001600160a01b038085165f90815260016020908152604080832093871683529290522082905580156103d657826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161053191815260200190565b60405180910390a350505050565b6001600160a01b038316610569578060025f82825461055e91906107a0565b909155506105d99050565b6001600160a01b0383165f90815260208190526040902054818110156105bb5760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161031b565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b0382166105f557600280548290039055610613565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161065891815260200190565b60405180910390a3505050565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b80356001600160a01b03811681146106b0575f80fd5b919050565b5f80604083850312156106c6575f80fd5b6106cf8361069a565b946020939093013593505050565b5f805f606084860312156106ef575f80fd5b6106f88461069a565b92506107066020850161069a565b929592945050506040919091013590565b5f60208284031215610727575f80fd5b6107308261069a565b9392505050565b5f8060408385031215610748575f80fd5b6107518361069a565b915061075f6020840161069a565b90509250929050565b600181811c9082168061077c57607f821691505b60208210810361079a57634e487b7160e01b5f52602260045260245ffd5b50919050565b8082018082111561029157634e487b7160e01b5f52601160045260245ffdfea264697066735822122004411d89ffd97971d3ca114f3e41abe818b0c05e2cd33b6c4b121ff915adc1e864736f6c634300081a0033' as const;
