//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BridgeToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const bridgeTokenAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'tokenName', internalType: 'string', type: 'string' },
      { name: 'tokenSymbol', internalType: 'string', type: 'string' },
      { name: 'decimals_', internalType: 'uint8', type: 'uint8' },
      { name: 'minterAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burnFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'minter',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'error',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC2612ExpiredSignature',
  },
  {
    type: 'error',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC2612InvalidSigner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockBridgeToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockBridgeTokenAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burnFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SuperBridge
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const superBridgeAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'tokenAddress', internalType: 'address', type: 'address' },
      { name: 'operatorAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'claimRefund',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'conclude',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'executedByChain',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'sourceChain', internalType: 'uint256', type: 'uint256' },
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'destinationUser', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'destinationChain', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'finishRquest',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nextId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'operator',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'destinationChain', internalType: 'uint256', type: 'uint256' },
      { name: 'destinationUser', internalType: 'address', type: 'address' },
    ],
    name: 'requestBridge',
    outputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'requests',
    outputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'destinationUser', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'destinationChain', internalType: 'uint256', type: 'uint256' },
      { name: 'sourceChain', internalType: 'uint256', type: 'uint256' },
      {
        name: 'status',
        internalType: 'enum SuperBridge.Status',
        type: 'uint8',
      },
      { name: 'claimed', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'revertRequest',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOperator', internalType: 'address', type: 'address' }],
    name: 'updateOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'destinationUser',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'destinationChain',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BridgeRequested',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldOperator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOperator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OperatorUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Refunded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'status',
        internalType: 'enum SuperBridge.Status',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'StatusUpdated',
  },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Bytecode
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const bridgeTokenBytecode =
  '0x6101a0604052348015610010575f5ffd5b5060405161295e38038061295e833981810160405281019061003291906104e6565b83806040518060400160405280600181526020017f31000000000000000000000000000000000000000000000000000000000000008152508686816003908161007b9190610792565b50806004908161008b9190610792565b5050506100a26005836101f460201b90919060201c565b61012081815250506100be6006826101f460201b90919060201c565b6101408181525050818051906020012060e08181525050808051906020012061010081815250504660a081815250506100fb61024160201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250505050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036101a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019e906108bb565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166101608173ffffffffffffffffffffffffffffffffffffffff16815250508160ff166101808160ff168152505050505050610a4b565b5f6020835110156102155761020e8361029b60201b60201c565b905061023b565b826102258361030060201b60201c565b5f0190816102339190610792565b5060ff5f1b90505b92915050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60e05161010051463060405160200161028095949392919061090f565b60405160208183030381529060405280519060200120905090565b5f5f829050601f815111156102e757826040517f305a27a90000000000000000000000000000000000000000000000000000000081526004016102de9190610998565b60405180910390fd5b8051816102f3906109e5565b5f1c175f1b915050919050565b5f819050919050565b5f604051905090565b5f5ffd5b5f5ffd5b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61036882610322565b810181811067ffffffffffffffff8211171561038757610386610332565b5b80604052505050565b5f610399610309565b90506103a5828261035f565b919050565b5f67ffffffffffffffff8211156103c4576103c3610332565b5b6103cd82610322565b9050602081019050919050565b8281835e5f83830152505050565b5f6103fa6103f5846103aa565b610390565b9050828152602081018484840111156104165761041561031e565b5b6104218482856103da565b509392505050565b5f82601f83011261043d5761043c61031a565b5b815161044d8482602086016103e8565b91505092915050565b5f60ff82169050919050565b61046b81610456565b8114610475575f5ffd5b50565b5f8151905061048681610462565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6104b58261048c565b9050919050565b6104c5816104ab565b81146104cf575f5ffd5b50565b5f815190506104e0816104bc565b92915050565b5f5f5f5f608085870312156104fe576104fd610312565b5b5f85015167ffffffffffffffff81111561051b5761051a610316565b5b61052787828801610429565b945050602085015167ffffffffffffffff81111561054857610547610316565b5b61055487828801610429565b935050604061056587828801610478565b9250506060610576878288016104d2565b91505092959194509250565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806105d057607f821691505b6020821081036105e3576105e261058c565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026106457fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261060a565b61064f868361060a565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61069361068e61068984610667565b610670565b610667565b9050919050565b5f819050919050565b6106ac83610679565b6106c06106b88261069a565b848454610616565b825550505050565b5f5f905090565b6106d76106c8565b6106e28184846106a3565b505050565b5b81811015610705576106fa5f826106cf565b6001810190506106e8565b5050565b601f82111561074a5761071b816105e9565b610724846105fb565b81016020851015610733578190505b61074761073f856105fb565b8301826106e7565b50505b505050565b5f82821c905092915050565b5f61076a5f198460080261074f565b1980831691505092915050565b5f610782838361075b565b9150826002028217905092915050565b61079b82610582565b67ffffffffffffffff8111156107b4576107b3610332565b5b6107be82546105b9565b6107c9828285610709565b5f60209050601f8311600181146107fa575f84156107e8578287015190505b6107f28582610777565b865550610859565b601f198416610808866105e9565b5f5b8281101561082f5784890151825560018201915060208501945060208101905061080a565b8683101561084c5784890151610848601f89168261075b565b8355505b6001600288020188555050505b505050505050565b5f82825260208201905092915050565b7f4d494e5445525f5a45524f0000000000000000000000000000000000000000005f82015250565b5f6108a5600b83610861565b91506108b082610871565b602082019050919050565b5f6020820190508181035f8301526108d281610899565b9050919050565b5f819050919050565b6108eb816108d9565b82525050565b6108fa81610667565b82525050565b610909816104ab565b82525050565b5f60a0820190506109225f8301886108e2565b61092f60208301876108e2565b61093c60408301866108e2565b61094960608301856108f1565b6109566080830184610900565b9695505050505050565b5f61096a82610582565b6109748185610861565b93506109848185602086016103da565b61098d81610322565b840191505092915050565b5f6020820190508181035f8301526109b08184610960565b905092915050565b5f81519050919050565b5f819050602082019050919050565b5f6109dc82516108d9565b80915050919050565b5f6109ef826109b8565b826109f9846109c2565b9050610a04816109d1565b92506020821015610a4457610a3f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8360200360080261060a565b831692505b5050919050565b60805160a05160c05160e0516101005161012051610140516101605161018051611ea7610ab75f395f61048501525f818161040701526104b901525f610cd501525f610c9a01525f6111ce01525f6111ad01525f610a9a01525f610af001525f610b190152611ea75ff3fe608060405234801561000f575f5ffd5b5060043610610109575f3560e01c806342966c68116100a057806384b0196e1161006f57806384b0196e146102b757806395d89b41146102db578063a9059cbb146102f9578063d505accf14610329578063dd62ed3e1461034557610109565b806342966c681461021f57806370a082311461023b57806379cc67901461026b5780637ecebe001461028757610109565b806323b872dd116100dc57806323b872dd14610197578063313ce567146101c75780633644e515146101e557806340c10f191461020357610109565b806306fdde031461010d578063075461721461012b578063095ea7b31461014957806318160ddd14610179575b5f5ffd5b610115610375565b6040516101229190611684565b60405180910390f35b610133610405565b60405161014091906116e3565b60405180910390f35b610163600480360381019061015e919061175d565b610429565b60405161017091906117b5565b60405180910390f35b61018161044b565b60405161018e91906117dd565b60405180910390f35b6101b160048036038101906101ac91906117f6565b610454565b6040516101be91906117b5565b60405180910390f35b6101cf610482565b6040516101dc9190611861565b60405180910390f35b6101ed6104a9565b6040516101fa9190611892565b60405180910390f35b61021d6004803603810190610218919061175d565b6104b7565b005b610239600480360381019061023491906118ab565b610553565b005b610255600480360381019061025091906118d6565b610567565b60405161026291906117dd565b60405180910390f35b6102856004803603810190610280919061175d565b6105ac565b005b6102a1600480360381019061029c91906118d6565b6105cc565b6040516102ae91906117dd565b60405180910390f35b6102bf6105dd565b6040516102d297969594939291906119f2565b60405180910390f35b6102e3610682565b6040516102f09190611684565b60405180910390f35b610313600480360381019061030e919061175d565b610712565b60405161032091906117b5565b60405180910390f35b610343600480360381019061033e9190611ac8565b610734565b005b61035f600480360381019061035a9190611b65565b610879565b60405161036c91906117dd565b60405180910390f35b60606003805461038490611bd0565b80601f01602080910402602001604051908101604052809291908181526020018280546103b090611bd0565b80156103fb5780601f106103d2576101008083540402835291602001916103fb565b820191905f5260205f20905b8154815290600101906020018083116103de57829003601f168201915b5050505050905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f5f6104336108fb565b9050610440818585610902565b600191505092915050565b5f600254905090565b5f5f61045e6108fb565b905061046b858285610914565b6104768585856109a7565b60019150509392505050565b5f7f0000000000000000000000000000000000000000000000000000000000000000905090565b5f6104b2610a97565b905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610545576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053c90611c4a565b60405180910390fd5b61054f8282610b4d565b5050565b61056461055e6108fb565b82610bcc565b50565b5f5f5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6105be826105b86108fb565b83610914565b6105c88282610bcc565b5050565b5f6105d682610c4b565b9050919050565b5f6060805f5f5f60606105ee610c91565b6105f6610ccc565b46305f5f1b5f67ffffffffffffffff81111561061557610614611c68565b5b6040519080825280602002602001820160405280156106435781602001602082028036833780820191505090505b507f0f00000000000000000000000000000000000000000000000000000000000000959493929190965096509650965096509650965090919293949596565b60606004805461069190611bd0565b80601f01602080910402602001604051908101604052809291908181526020018280546106bd90611bd0565b80156107085780601f106106df57610100808354040283529160200191610708565b820191905f5260205f20905b8154815290600101906020018083116106eb57829003601f168201915b5050505050905090565b5f5f61071c6108fb565b90506107298185856109a7565b600191505092915050565b8342111561077957836040517f6279130200000000000000000000000000000000000000000000000000000000815260040161077091906117dd565b60405180910390fd5b5f7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886107a78c610d07565b896040516020016107bd96959493929190611c95565b6040516020818303038152906040528051906020012090505f6107df82610d5a565b90505f6107ee82878787610d73565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461086257808a6040517f4b800e46000000000000000000000000000000000000000000000000000000008152600401610859929190611cf4565b60405180910390fd5b61086d8a8a8a610902565b50505050505050505050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b5f33905090565b61090f8383836001610da1565b505050565b5f61091f8484610879565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110156109a15781811015610992578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161098993929190611d1b565b60405180910390fd5b6109a084848484035f610da1565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a17575f6040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610a0e91906116e3565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a87575f6040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610a7e91906116e3565b60405180910390fd5b610a92838383610f70565b505050565b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16148015610b1257507f000000000000000000000000000000000000000000000000000000000000000046145b15610b3f577f00000000000000000000000000000000000000000000000000000000000000009050610b4a565b610b47611189565b90505b90565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610bbd575f6040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610bb491906116e3565b60405180910390fd5b610bc85f8383610f70565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c3c575f6040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610c3391906116e3565b60405180910390fd5b610c47825f83610f70565b5050565b5f60075f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6060610cc760057f000000000000000000000000000000000000000000000000000000000000000061121e90919063ffffffff16565b905090565b6060610d0260067f000000000000000000000000000000000000000000000000000000000000000061121e90919063ffffffff16565b905090565b5f60075f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f815480929190600101919050559050919050565b5f610d6c610d66610a97565b836112cb565b9050919050565b5f5f5f5f610d838888888861130b565b925092509250610d9382826113f2565b829350505050949350505050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610e11575f6040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610e0891906116e3565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610e81575f6040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610e7891906116e3565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508015610f6a578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610f6191906117dd565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610fc0578060025f828254610fb49190611d7d565b9250508190555061108e565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015611049578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161104093929190611d1b565b60405180910390fd5b8181035f5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036110d5578060025f828254039250508190555061111f565b805f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161117c91906117dd565b60405180910390a3505050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000004630604051602001611203959493929190611db0565b60405160208183030381529060405280519060200120905090565b606060ff5f1b831461123a5761123383611554565b90506112c5565b81805461124690611bd0565b80601f016020809104026020016040519081016040528092919081815260200182805461127290611bd0565b80156112bd5780601f10611294576101008083540402835291602001916112bd565b820191905f5260205f20905b8154815290600101906020018083116112a057829003601f168201915b505050505090505b92915050565b5f6040517f190100000000000000000000000000000000000000000000000000000000000081528360028201528260228201526042812091505092915050565b5f5f5f7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0845f1c1115611347575f6003859250925092506113e8565b5f6001888888886040515f815260200160405260405161136a9493929190611e01565b6020604051602081039080840390855afa15801561138a573d5f5f3e3d5ffd5b5050506020604051035190505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036113db575f60015f5f1b935093509350506113e8565b805f5f5f1b935093509350505b9450945094915050565b5f600381111561140557611404611e44565b5b82600381111561141857611417611e44565b5b0315611550576001600381111561143257611431611e44565b5b82600381111561144557611444611e44565b5b0361147c576040517ff645eedf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600260038111156114905761148f611e44565b5b8260038111156114a3576114a2611e44565b5b036114e757805f1c6040517ffce698f70000000000000000000000000000000000000000000000000000000081526004016114de91906117dd565b60405180910390fd5b6003808111156114fa576114f9611e44565b5b82600381111561150d5761150c611e44565b5b0361154f57806040517fd78bce0c0000000000000000000000000000000000000000000000000000000081526004016115469190611892565b60405180910390fd5b5b5050565b60605f611560836115c6565b90505f602067ffffffffffffffff81111561157e5761157d611c68565b5b6040519080825280601f01601f1916602001820160405280156115b05781602001600182028036833780820191505090505b5090508181528360208201528092505050919050565b5f5f60ff835f1c169050601f81111561160b576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80915050919050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f61165682611614565b611660818561161e565b935061167081856020860161162e565b6116798161163c565b840191505092915050565b5f6020820190508181035f83015261169c818461164c565b905092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6116cd826116a4565b9050919050565b6116dd816116c3565b82525050565b5f6020820190506116f65f8301846116d4565b92915050565b5f5ffd5b611709816116c3565b8114611713575f5ffd5b50565b5f8135905061172481611700565b92915050565b5f819050919050565b61173c8161172a565b8114611746575f5ffd5b50565b5f8135905061175781611733565b92915050565b5f5f60408385031215611773576117726116fc565b5b5f61178085828601611716565b925050602061179185828601611749565b9150509250929050565b5f8115159050919050565b6117af8161179b565b82525050565b5f6020820190506117c85f8301846117a6565b92915050565b6117d78161172a565b82525050565b5f6020820190506117f05f8301846117ce565b92915050565b5f5f5f6060848603121561180d5761180c6116fc565b5b5f61181a86828701611716565b935050602061182b86828701611716565b925050604061183c86828701611749565b9150509250925092565b5f60ff82169050919050565b61185b81611846565b82525050565b5f6020820190506118745f830184611852565b92915050565b5f819050919050565b61188c8161187a565b82525050565b5f6020820190506118a55f830184611883565b92915050565b5f602082840312156118c0576118bf6116fc565b5b5f6118cd84828501611749565b91505092915050565b5f602082840312156118eb576118ea6116fc565b5b5f6118f884828501611716565b91505092915050565b5f7fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b61193581611901565b82525050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b61196d8161172a565b82525050565b5f61197e8383611964565b60208301905092915050565b5f602082019050919050565b5f6119a08261193b565b6119aa8185611945565b93506119b583611955565b805f5b838110156119e55781516119cc8882611973565b97506119d78361198a565b9250506001810190506119b8565b5085935050505092915050565b5f60e082019050611a055f83018a61192c565b8181036020830152611a17818961164c565b90508181036040830152611a2b818861164c565b9050611a3a60608301876117ce565b611a4760808301866116d4565b611a5460a0830185611883565b81810360c0830152611a668184611996565b905098975050505050505050565b611a7d81611846565b8114611a87575f5ffd5b50565b5f81359050611a9881611a74565b92915050565b611aa78161187a565b8114611ab1575f5ffd5b50565b5f81359050611ac281611a9e565b92915050565b5f5f5f5f5f5f5f60e0888a031215611ae357611ae26116fc565b5b5f611af08a828b01611716565b9750506020611b018a828b01611716565b9650506040611b128a828b01611749565b9550506060611b238a828b01611749565b9450506080611b348a828b01611a8a565b93505060a0611b458a828b01611ab4565b92505060c0611b568a828b01611ab4565b91505092959891949750929550565b5f5f60408385031215611b7b57611b7a6116fc565b5b5f611b8885828601611716565b9250506020611b9985828601611716565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680611be757607f821691505b602082108103611bfa57611bf9611ba3565b5b50919050565b7f4f4e4c595f4d494e5445520000000000000000000000000000000000000000005f82015250565b5f611c34600b8361161e565b9150611c3f82611c00565b602082019050919050565b5f6020820190508181035f830152611c6181611c28565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f60c082019050611ca85f830189611883565b611cb560208301886116d4565b611cc260408301876116d4565b611ccf60608301866117ce565b611cdc60808301856117ce565b611ce960a08301846117ce565b979650505050505050565b5f604082019050611d075f8301856116d4565b611d1460208301846116d4565b9392505050565b5f606082019050611d2e5f8301866116d4565b611d3b60208301856117ce565b611d4860408301846117ce565b949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f611d878261172a565b9150611d928361172a565b9250828201905080821115611daa57611da9611d50565b5b92915050565b5f60a082019050611dc35f830188611883565b611dd06020830187611883565b611ddd6040830186611883565b611dea60608301856117ce565b611df760808301846116d4565b9695505050505050565b5f608082019050611e145f830187611883565b611e216020830186611852565b611e2e6040830185611883565b611e3b6060830184611883565b95945050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffdfea264697066735822122026c1f31e40be1b591ca9c2061c58fb0aaad209d7a8d8a23cdcf07a7ebbd8cdae64736f6c634300081c0033' as const
export const mockBridgeTokenBytecode =
  '0x608060405234801561000f575f5ffd5b506040518060400160405280600f81526020017f4d6f636b427269646765546f6b656e00000000000000000000000000000000008152506040518060400160405280600381526020017f4d42540000000000000000000000000000000000000000000000000000000000815250816003908161008b91906102e0565b50806004908161009b91906102e0565b5050506103af565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061011e57607f821691505b602082108103610131576101306100da565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026101937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610158565b61019d8683610158565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f6101e16101dc6101d7846101b5565b6101be565b6101b5565b9050919050565b5f819050919050565b6101fa836101c7565b61020e610206826101e8565b848454610164565b825550505050565b5f5f905090565b610225610216565b6102308184846101f1565b505050565b5b81811015610253576102485f8261021d565b600181019050610236565b5050565b601f8211156102985761026981610137565b61027284610149565b81016020851015610281578190505b61029561028d85610149565b830182610235565b50505b505050565b5f82821c905092915050565b5f6102b85f198460080261029d565b1980831691505092915050565b5f6102d083836102a9565b9150826002028217905092915050565b6102e9826100a3565b67ffffffffffffffff811115610302576103016100ad565b5b61030c8254610107565b610317828285610257565b5f60209050601f831160018114610348575f8415610336578287015190505b61034085826102c5565b8655506103a7565b601f19841661035686610137565b5f5b8281101561037d57848901518255600182019150602085019450602081019050610358565b8683101561039a5784890151610396601f8916826102a9565b8355505b6001600288020188555050505b505050505050565b610fc2806103bc5f395ff3fe608060405234801561000f575f5ffd5b50600436106100b2575f3560e01c806342966c681161006f57806342966c681461018c57806370a08231146101a857806379cc6790146101d857806395d89b41146101f4578063a9059cbb14610212578063dd62ed3e14610242576100b2565b806306fdde03146100b6578063095ea7b3146100d457806318160ddd1461010457806323b872dd14610122578063313ce5671461015257806340c10f1914610170575b5f5ffd5b6100be610272565b6040516100cb9190610c10565b60405180910390f35b6100ee60048036038101906100e99190610cc1565b610302565b6040516100fb9190610d19565b60405180910390f35b61010c610324565b6040516101199190610d41565b60405180910390f35b61013c60048036038101906101379190610d5a565b61032d565b6040516101499190610d19565b60405180910390f35b61015a61035b565b6040516101679190610dc5565b60405180910390f35b61018a60048036038101906101859190610cc1565b610363565b005b6101a660048036038101906101a19190610dde565b610371565b005b6101c260048036038101906101bd9190610e09565b610385565b6040516101cf9190610d41565b60405180910390f35b6101f260048036038101906101ed9190610cc1565b6103ca565b005b6101fc6103ea565b6040516102099190610c10565b60405180910390f35b61022c60048036038101906102279190610cc1565b61047a565b6040516102399190610d19565b60405180910390f35b61025c60048036038101906102579190610e34565b61049c565b6040516102699190610d41565b60405180910390f35b60606003805461028190610e9f565b80601f01602080910402602001604051908101604052809291908181526020018280546102ad90610e9f565b80156102f85780601f106102cf576101008083540402835291602001916102f8565b820191905f5260205f20905b8154815290600101906020018083116102db57829003601f168201915b5050505050905090565b5f5f61030c61051e565b9050610319818585610525565b600191505092915050565b5f600254905090565b5f5f61033761051e565b9050610344858285610537565b61034f8585856105ca565b60019150509392505050565b5f6012905090565b61036d82826106ba565b5050565b61038261037c61051e565b82610739565b50565b5f5f5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6103dc826103d661051e565b83610537565b6103e68282610739565b5050565b6060600480546103f990610e9f565b80601f016020809104026020016040519081016040528092919081815260200182805461042590610e9f565b80156104705780601f1061044757610100808354040283529160200191610470565b820191905f5260205f20905b81548152906001019060200180831161045357829003601f168201915b5050505050905090565b5f5f61048461051e565b90506104918185856105ca565b600191505092915050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b5f33905090565b61053283838360016107b8565b505050565b5f610542848461049c565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110156105c457818110156105b5578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016105ac93929190610ede565b60405180910390fd5b6105c384848484035f6107b8565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361063a575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016106319190610f13565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106aa575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016106a19190610f13565b60405180910390fd5b6106b5838383610987565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361072a575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016107219190610f13565b60405180910390fd5b6107355f8383610987565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107a9575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016107a09190610f13565b60405180910390fd5b6107b4825f83610987565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610828575f6040517fe602df0500000000000000000000000000000000000000000000000000000000815260040161081f9190610f13565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610898575f6040517f94280d6200000000000000000000000000000000000000000000000000000000815260040161088f9190610f13565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508015610981578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516109789190610d41565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109d7578060025f8282546109cb9190610f59565b92505081905550610aa5565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015610a60578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610a5793929190610ede565b60405180910390fd5b8181035f5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610aec578060025f8282540392505081905550610b36565b805f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610b939190610d41565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f610be282610ba0565b610bec8185610baa565b9350610bfc818560208601610bba565b610c0581610bc8565b840191505092915050565b5f6020820190508181035f830152610c288184610bd8565b905092915050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610c5d82610c34565b9050919050565b610c6d81610c53565b8114610c77575f5ffd5b50565b5f81359050610c8881610c64565b92915050565b5f819050919050565b610ca081610c8e565b8114610caa575f5ffd5b50565b5f81359050610cbb81610c97565b92915050565b5f5f60408385031215610cd757610cd6610c30565b5b5f610ce485828601610c7a565b9250506020610cf585828601610cad565b9150509250929050565b5f8115159050919050565b610d1381610cff565b82525050565b5f602082019050610d2c5f830184610d0a565b92915050565b610d3b81610c8e565b82525050565b5f602082019050610d545f830184610d32565b92915050565b5f5f5f60608486031215610d7157610d70610c30565b5b5f610d7e86828701610c7a565b9350506020610d8f86828701610c7a565b9250506040610da086828701610cad565b9150509250925092565b5f60ff82169050919050565b610dbf81610daa565b82525050565b5f602082019050610dd85f830184610db6565b92915050565b5f60208284031215610df357610df2610c30565b5b5f610e0084828501610cad565b91505092915050565b5f60208284031215610e1e57610e1d610c30565b5b5f610e2b84828501610c7a565b91505092915050565b5f5f60408385031215610e4a57610e49610c30565b5b5f610e5785828601610c7a565b9250506020610e6885828601610c7a565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680610eb657607f821691505b602082108103610ec957610ec8610e72565b5b50919050565b610ed881610c53565b82525050565b5f606082019050610ef15f830186610ecf565b610efe6020830185610d32565b610f0b6040830184610d32565b949350505050565b5f602082019050610f265f830184610ecf565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610f6382610c8e565b9150610f6e83610c8e565b9250828201905080821115610f8657610f85610f2c565b5b9291505056fea26469706673582212205ea4bde92a6687419959e8fce6d355bed34c522580b3e1301db5a797f38f9ee364736f6c634300081c0033' as const
export const superBridgeBytecode =
  '0x610180604052348015610010575f5ffd5b5060405161357638038061357683398181016040528101906100329190610412565b6040518060400160405280600b81526020017f53757065724272696467650000000000000000000000000000000000000000008152506040518060400160405280600181526020017f31000000000000000000000000000000000000000000000000000000000000008152506100b15f8361029f60201b90919060201c565b61012081815250506100cd60018261029f60201b90919060201c565b6101408181525050818051906020012060e08181525050808051906020012061010081815250504660a0818152505061010a6102ec60201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff168152505050505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036101b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ac906104aa565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610223576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161021a90610512565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166101608173ffffffffffffffffffffffffffffffffffffffff16815250508060025f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506109cc565b5f6020835110156102c0576102b98361034660201b60201c565b90506102e6565b826102d0836103ab60201b60201c565b5f0190816102de919061076d565b5060ff5f1b90505b92915050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60e05161010051463060405160200161032b959493929190610872565b60405160208183030381529060405280519060200120905090565b5f5f829050601f8151111561039257826040517f305a27a90000000000000000000000000000000000000000000000000000000081526004016103899190610919565b60405180910390fd5b80518161039e90610966565b5f1c175f1b915050919050565b5f819050919050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6103e1826103b8565b9050919050565b6103f1816103d7565b81146103fb575f5ffd5b50565b5f8151905061040c816103e8565b92915050565b5f5f60408385031215610428576104276103b4565b5b5f610435858286016103fe565b9250506020610446858286016103fe565b9150509250929050565b5f82825260208201905092915050565b7f544f4b454e5f5a45524f000000000000000000000000000000000000000000005f82015250565b5f610494600a83610450565b915061049f82610460565b602082019050919050565b5f6020820190508181035f8301526104c181610488565b9050919050565b7f4f50455241544f525f5a45524f000000000000000000000000000000000000005f82015250565b5f6104fc600d83610450565b9150610507826104c8565b602082019050919050565b5f6020820190508181035f830152610529816104f0565b9050919050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806105ab57607f821691505b6020821081036105be576105bd610567565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026106207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826105e5565b61062a86836105e5565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61066e61066961066484610642565b61064b565b610642565b9050919050565b5f819050919050565b61068783610654565b61069b61069382610675565b8484546105f1565b825550505050565b5f5f905090565b6106b26106a3565b6106bd81848461067e565b505050565b5b818110156106e0576106d55f826106aa565b6001810190506106c3565b5050565b601f821115610725576106f6816105c4565b6106ff846105d6565b8101602085101561070e578190505b61072261071a856105d6565b8301826106c2565b50505b505050565b5f82821c905092915050565b5f6107455f198460080261072a565b1980831691505092915050565b5f61075d8383610736565b9150826002028217905092915050565b61077682610530565b67ffffffffffffffff81111561078f5761078e61053a565b5b6107998254610594565b6107a48282856106e4565b5f60209050601f8311600181146107d5575f84156107c3578287015190505b6107cd8582610752565b865550610834565b601f1984166107e3866105c4565b5f5b8281101561080a578489015182556001820191506020850194506020810190506107e5565b868310156108275784890151610823601f891682610736565b8355505b6001600288020188555050505b505050505050565b5f819050919050565b61084e8161083c565b82525050565b61085d81610642565b82525050565b61086c816103d7565b82525050565b5f60a0820190506108855f830188610845565b6108926020830187610845565b61089f6040830186610845565b6108ac6060830185610854565b6108b96080830184610863565b9695505050505050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6108eb82610530565b6108f58185610450565b93506109058185602086016108c3565b61090e816108d1565b840191505092915050565b5f6020820190508181035f83015261093181846108e1565b905092915050565b5f81519050919050565b5f819050602082019050919050565b5f61095d825161083c565b80915050919050565b5f61097082610939565b8261097a84610943565b905061098581610952565b925060208210156109c5576109c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff836020036008026105e5565b831692505b5050919050565b60805160a05160c05160e05161010051610120516101405161016051612b2c610a4a5f395f8181610584015281816106fb0152818161096601528181610c6c0152818161119601526114a101525f61154901525f61150e01525f61191a01525f6118f901525f61157e01525f6115d401525f6115fd0152612b2c5ff3fe608060405234801561000f575f5ffd5b50600436106100b2575f3560e01c806361b8ce8c1161006f57806361b8ce8c1461017457806381d12c581461019257806384b0196e146101c8578063a53fedc5146101ec578063ac7475ed1461021c578063fc0c546a14610238576100b2565b80630d60c3b2146100b657806316e8d99f146100d25780633487b256146100ee578063570ca7351461010a5780635b7baf64146101285780635fad3eab14610144575b5f5ffd5b6100d060048036038101906100cb9190611b4c565b610256565b005b6100ec60048036038101906100e79190611c32565b610468565b005b61010860048036038101906101039190611b4c565b61078f565b005b610112610a2b565b60405161011f9190611d11565b60405180910390f35b610142600480360381019061013d9190611b4c565b610a50565b005b61015e60048036038101906101599190611d2a565b610da3565b60405161016b9190611d82565b60405180910390f35b61017c610dcd565b6040516101899190611daa565b60405180910390f35b6101ac60048036038101906101a79190611b4c565b610dd3565b6040516101bf9796959493929190611e36565b60405180910390f35b6101d0610e68565b6040516101e3979695949392919061201c565b60405180910390f35b6102066004803603810190610201919061209e565b610f0d565b6040516102139190611daa565b60405180910390f35b610236600480360381019061023191906120ee565b6112df565b005b61024061149f565b60405161024d9190612174565b60405180910390f35b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102dc906121d7565b60405180910390fd5b5f60035f8381526020019081526020015f2090505f73ffffffffffffffffffffffffffffffffffffffff16815f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610389576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103809061223f565b60405180910390fd5b5f600381111561039c5761039b611dc3565b5b816005015f9054906101000a900460ff1660038111156103bf576103be611dc3565b5b146103ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f6906122a7565b60405180910390fd5b6003816005015f6101000a81548160ff0219169083600381111561042657610425611dc3565b5b0217905550817f2da7b23ca63c1eb969eee5fae4acb98186abecf5358b0354a82a5183ebca6b2a600360405161045c91906122c5565b60405180910390a25050565b4684146104aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104a190612328565b60405180910390fd5b824211156104ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e490612390565b60405180910390fd5b60045f8981526020019081526020015f205f8a81526020019081526020015f205f9054906101000a900460ff161561055a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610551906123f8565b60405180910390fd5b5f7fde88f817c4732d92457f955e0f74070fda7a5c781ba7e162139d47533dee1da58a8a8a8a8a8a7f0000000000000000000000000000000000000000000000000000000000000000308c6040516020016105be9a99989796959493929190612416565b6040516020818303038152906040528051906020012090505f6105e0826114c3565b90505f6106308286868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f820116905080830192505050505050506114dc565b905060025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146106c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b8906124fa565b60405180910390fd5b600160045f8d81526020019081526020015f205f8e81526020019081526020015f205f6101000a81548160ff0219169083151502179055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166340c10f198a8a6040518363ffffffff1660e01b8152600401610754929190612518565b5f604051808303815f87803b15801561076b575f5ffd5b505af115801561077d573d5f5f3e3d5ffd5b50505050505050505050505050505050565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461081e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610815906121d7565b60405180910390fd5b5f60035f8381526020019081526020015f2090505f73ffffffffffffffffffffffffffffffffffffffff16815f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036108c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b99061223f565b60405180910390fd5b5f60038111156108d5576108d4611dc3565b5b816005015f9054906101000a900460ff1660038111156108f8576108f7611dc3565b5b14610938576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092f906122a7565b60405180910390fd5b6002816005015f6101000a81548160ff0219169083600381111561095f5761095e611dc3565b5b02179055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166342966c6882600201546040518263ffffffff1660e01b81526004016109c19190611daa565b5f604051808303815f87803b1580156109d8575f5ffd5b505af11580156109ea573d5f5f3e3d5ffd5b50505050817f2da7b23ca63c1eb969eee5fae4acb98186abecf5358b0354a82a5183ebca6b2a6002604051610a1f91906122c5565b60405180910390a25050565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f60035f8381526020019081526020015f2090505f73ffffffffffffffffffffffffffffffffffffffff16815f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610af4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aeb9061223f565b60405180910390fd5b600380811115610b0757610b06611dc3565b5b816005015f9054906101000a900460ff166003811115610b2a57610b29611dc3565b5b14610b6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6190612589565b60405180910390fd5b8060050160019054906101000a900460ff1615610bbc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb3906125f1565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16815f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610c4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4390612659565b60405180910390fd5b60018160050160016101000a81548160ff0219169083151502179055505f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb3384600201546040518363ffffffff1660e01b8152600401610cc9929190612518565b6020604051808303815f875af1158015610ce5573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d0991906126a1565b905080610d4b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4290612716565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16837f7ca5472b7ea78c2c0141c5a12ee6d170cf4ce8ed06be3d22c8252ddfc7a6a2c48460020154604051610d969190611daa565b60405180910390a3505050565b6004602052815f5260405f20602052805f5260405f205f915091509054906101000a900460ff1681565b60055481565b6003602052805f5260405f205f91509050805f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002015490806003015490806004015490806005015f9054906101000a900460ff16908060050160019054906101000a900460ff16905087565b5f6060805f5f5f6060610e79611506565b610e81611540565b46305f5f1b5f67ffffffffffffffff811115610ea057610e9f612734565b5b604051908082528060200260200182016040528015610ece5781602001602082028036833780820191505090505b507f0f00000000000000000000000000000000000000000000000000000000000000959493929190965096509650965096509650965090919293949596565b5f5f8411610f50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f47906127ab565b60405180910390fd5b5f8303610f92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8990612813565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611000576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ff79061287b565b60405180910390fd5b60055f815461100e906128c6565b91905081905590506040518060e001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020014681526020015f600381111561107e5761107d611dc3565b5b81526020015f151581525060035f8381526020019081526020015f205f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005015f6101000a81548160ff0219169083600381111561116c5761116b611dc3565b5b021790555060c08201518160050160016101000a81548160ff0219169083151502179055509050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330876040518463ffffffff1660e01b81526004016111f19392919061290d565b6020604051808303815f875af115801561120d573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061123191906126a1565b611270576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161126790612716565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16827f9ba4259abda2b27972175af8b8a66ec413fec712d1957ef9f69448ea020fb8d687876040516112d0929190612942565b60405180910390a49392505050565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461136e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611365906121d7565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036113dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113d3906129b3565b60405180910390fd5b5f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160025f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167ffbe5b6cbafb274f445d7fed869dc77a838d8243a22c460de156560e8857cad0360405160405180910390a35050565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f6114d56114cf61157b565b83611631565b9050919050565b5f5f5f5f6114ea8686611671565b9250925092506114fa82826116c6565b82935050505092915050565b606061153b5f7f000000000000000000000000000000000000000000000000000000000000000061182890919063ffffffff16565b905090565b606061157660017f000000000000000000000000000000000000000000000000000000000000000061182890919063ffffffff16565b905090565b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161480156115f657507f000000000000000000000000000000000000000000000000000000000000000046145b15611623577f0000000000000000000000000000000000000000000000000000000000000000905061162e565b61162b6118d5565b90505b90565b5f6040517f190100000000000000000000000000000000000000000000000000000000000081528360028201528260228201526042812091505092915050565b5f5f5f60418451036116b1575f5f5f602087015192506040870151915060608701515f1a90506116a38882858561196a565b9550955095505050506116bf565b5f600285515f1b9250925092505b9250925092565b5f60038111156116d9576116d8611dc3565b5b8260038111156116ec576116eb611dc3565b5b0315611824576001600381111561170657611705611dc3565b5b82600381111561171957611718611dc3565b5b03611750576040517ff645eedf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600381111561176457611763611dc3565b5b82600381111561177757611776611dc3565b5b036117bb57805f1c6040517ffce698f70000000000000000000000000000000000000000000000000000000081526004016117b29190611daa565b60405180910390fd5b6003808111156117ce576117cd611dc3565b5b8260038111156117e1576117e0611dc3565b5b0361182357806040517fd78bce0c00000000000000000000000000000000000000000000000000000000815260040161181a91906129d1565b60405180910390fd5b5b5050565b606060ff5f1b83146118445761183d83611a51565b90506118cf565b81805461185090612a17565b80601f016020809104026020016040519081016040528092919081815260200182805461187c90612a17565b80156118c75780601f1061189e576101008083540402835291602001916118c7565b820191905f5260205f20905b8154815290600101906020018083116118aa57829003601f168201915b505050505090505b92915050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000463060405160200161194f959493929190612a47565b60405160208183030381529060405280519060200120905090565b5f5f5f7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0845f1c11156119a6575f600385925092509250611a47565b5f6001888888886040515f81526020016040526040516119c99493929190612ab3565b6020604051602081039080840390855afa1580156119e9573d5f5f3e3d5ffd5b5050506020604051035190505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611a3a575f60015f5f1b93509350935050611a47565b805f5f5f1b935093509350505b9450945094915050565b60605f611a5d83611ac3565b90505f602067ffffffffffffffff811115611a7b57611a7a612734565b5b6040519080825280601f01601f191660200182016040528015611aad5781602001600182028036833780820191505090505b5090508181528360208201528092505050919050565b5f5f60ff835f1c169050601f811115611b08576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80915050919050565b5f5ffd5b5f5ffd5b5f819050919050565b611b2b81611b19565b8114611b35575f5ffd5b50565b5f81359050611b4681611b22565b92915050565b5f60208284031215611b6157611b60611b11565b5b5f611b6e84828501611b38565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f611ba082611b77565b9050919050565b611bb081611b96565b8114611bba575f5ffd5b50565b5f81359050611bcb81611ba7565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f840112611bf257611bf1611bd1565b5b8235905067ffffffffffffffff811115611c0f57611c0e611bd5565b5b602083019150836001820283011115611c2b57611c2a611bd9565b5b9250929050565b5f5f5f5f5f5f5f5f5f6101008a8c031215611c5057611c4f611b11565b5b5f611c5d8c828d01611b38565b9950506020611c6e8c828d01611b38565b9850506040611c7f8c828d01611bbd565b9750506060611c908c828d01611bbd565b9650506080611ca18c828d01611b38565b95505060a0611cb28c828d01611b38565b94505060c0611cc38c828d01611b38565b93505060e08a013567ffffffffffffffff811115611ce457611ce3611b15565b5b611cf08c828d01611bdd565b92509250509295985092959850929598565b611d0b81611b96565b82525050565b5f602082019050611d245f830184611d02565b92915050565b5f5f60408385031215611d4057611d3f611b11565b5b5f611d4d85828601611b38565b9250506020611d5e85828601611b38565b9150509250929050565b5f8115159050919050565b611d7c81611d68565b82525050565b5f602082019050611d955f830184611d73565b92915050565b611da481611b19565b82525050565b5f602082019050611dbd5f830184611d9b565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b60048110611e0157611e00611dc3565b5b50565b5f819050611e1182611df0565b919050565b5f611e2082611e04565b9050919050565b611e3081611e16565b82525050565b5f60e082019050611e495f83018a611d02565b611e566020830189611d02565b611e636040830188611d9b565b611e706060830187611d9b565b611e7d6080830186611d9b565b611e8a60a0830185611e27565b611e9760c0830184611d73565b98975050505050505050565b5f7fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b611ed781611ea3565b82525050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f611f1f82611edd565b611f298185611ee7565b9350611f39818560208601611ef7565b611f4281611f05565b840191505092915050565b5f819050919050565b611f5f81611f4d565b82525050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b611f9781611b19565b82525050565b5f611fa88383611f8e565b60208301905092915050565b5f602082019050919050565b5f611fca82611f65565b611fd48185611f6f565b9350611fdf83611f7f565b805f5b8381101561200f578151611ff68882611f9d565b975061200183611fb4565b925050600181019050611fe2565b5085935050505092915050565b5f60e08201905061202f5f83018a611ece565b81810360208301526120418189611f15565b905081810360408301526120558188611f15565b90506120646060830187611d9b565b6120716080830186611d02565b61207e60a0830185611f56565b81810360c08301526120908184611fc0565b905098975050505050505050565b5f5f5f606084860312156120b5576120b4611b11565b5b5f6120c286828701611b38565b93505060206120d386828701611b38565b92505060406120e486828701611bbd565b9150509250925092565b5f6020828403121561210357612102611b11565b5b5f61211084828501611bbd565b91505092915050565b5f819050919050565b5f61213c61213761213284611b77565b612119565b611b77565b9050919050565b5f61214d82612122565b9050919050565b5f61215e82612143565b9050919050565b61216e81612154565b82525050565b5f6020820190506121875f830184612165565b92915050565b7f4f4e4c595f4f50455241544f52000000000000000000000000000000000000005f82015250565b5f6121c1600d83611ee7565b91506121cc8261218d565b602082019050919050565b5f6020820190508181035f8301526121ee816121b5565b9050919050565b7f524551554553545f4e4f545f464f554e440000000000000000000000000000005f82015250565b5f612229601183611ee7565b9150612234826121f5565b602082019050919050565b5f6020820190508181035f8301526122568161221d565b9050919050565b7f4e4f545f50454e44494e470000000000000000000000000000000000000000005f82015250565b5f612291600b83611ee7565b915061229c8261225d565b602082019050919050565b5f6020820190508181035f8301526122be81612285565b9050919050565b5f6020820190506122d85f830184611e27565b92915050565b7f444553545f434841494e000000000000000000000000000000000000000000005f82015250565b5f612312600a83611ee7565b915061231d826122de565b602082019050919050565b5f6020820190508181035f83015261233f81612306565b9050919050565b7f5349475f455850495245440000000000000000000000000000000000000000005f82015250565b5f61237a600b83611ee7565b915061238582612346565b602082019050919050565b5f6020820190508181035f8301526123a78161236e565b9050919050565b7f414c52454144595f4558454355544544000000000000000000000000000000005f82015250565b5f6123e2601083611ee7565b91506123ed826123ae565b602082019050919050565b5f6020820190508181035f83015261240f816123d6565b9050919050565b5f6101408201905061242a5f83018d611f56565b612437602083018c611d9b565b612444604083018b611d9b565b612451606083018a611d02565b61245e6080830189611d02565b61246b60a0830188611d9b565b61247860c0830187611d9b565b61248560e0830186611d02565b612493610100830185611d02565b6124a1610120830184611d9b565b9b9a5050505050505050505050565b7f4241445f534947000000000000000000000000000000000000000000000000005f82015250565b5f6124e4600783611ee7565b91506124ef826124b0565b602082019050919050565b5f6020820190508181035f830152612511816124d8565b9050919050565b5f60408201905061252b5f830185611d02565b6125386020830184611d9b565b9392505050565b7f4e4f545f524556455254454400000000000000000000000000000000000000005f82015250565b5f612573600c83611ee7565b915061257e8261253f565b602082019050919050565b5f6020820190508181035f8301526125a081612567565b9050919050565b7f414c52454144595f434c41494d454400000000000000000000000000000000005f82015250565b5f6125db600f83611ee7565b91506125e6826125a7565b602082019050919050565b5f6020820190508181035f830152612608816125cf565b9050919050565b7f4e4f545f524551554553544552000000000000000000000000000000000000005f82015250565b5f612643600d83611ee7565b915061264e8261260f565b602082019050919050565b5f6020820190508181035f83015261267081612637565b9050919050565b61268081611d68565b811461268a575f5ffd5b50565b5f8151905061269b81612677565b92915050565b5f602082840312156126b6576126b5611b11565b5b5f6126c38482850161268d565b91505092915050565b7f5452414e534645525f4641494c454400000000000000000000000000000000005f82015250565b5f612700600f83611ee7565b915061270b826126cc565b602082019050919050565b5f6020820190508181035f83015261272d816126f4565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f414d4f554e545f5a45524f0000000000000000000000000000000000000000005f82015250565b5f612795600b83611ee7565b91506127a082612761565b602082019050919050565b5f6020820190508181035f8301526127c281612789565b9050919050565b7f434841494e5f5a45524f000000000000000000000000000000000000000000005f82015250565b5f6127fd600a83611ee7565b9150612808826127c9565b602082019050919050565b5f6020820190508181035f83015261282a816127f1565b9050919050565b7f444553545f555345525f5a45524f0000000000000000000000000000000000005f82015250565b5f612865600e83611ee7565b915061287082612831565b602082019050919050565b5f6020820190508181035f83015261289281612859565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6128d082611b19565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361290257612901612899565b5b600182019050919050565b5f6060820190506129205f830186611d02565b61292d6020830185611d02565b61293a6040830184611d9b565b949350505050565b5f6040820190506129555f830185611d9b565b6129626020830184611d9b565b9392505050565b7f4f50455241544f525f5a45524f000000000000000000000000000000000000005f82015250565b5f61299d600d83611ee7565b91506129a882612969565b602082019050919050565b5f6020820190508181035f8301526129ca81612991565b9050919050565b5f6020820190506129e45f830184611f56565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680612a2e57607f821691505b602082108103612a4157612a406129ea565b5b50919050565b5f60a082019050612a5a5f830188611f56565b612a676020830187611f56565b612a746040830186611f56565b612a816060830185611d9b565b612a8e6080830184611d02565b9695505050505050565b5f60ff82169050919050565b612aad81612a98565b82525050565b5f608082019050612ac65f830187611f56565b612ad36020830186612aa4565b612ae06040830185611f56565b612aed6060830184611f56565b9594505050505056fea2646970667358221220bf233a35158a879cfc33ba455c5e9d6e474fdc25a43ed099fa4c587d609b0b3764736f6c634300081c0033' as const
