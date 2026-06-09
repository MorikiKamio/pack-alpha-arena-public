// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract PackAlphaVaultReceiptNFT is ERC721URIStorage {
    struct VaultReceipt {
        string holdingId;
        string assetId;
        bytes32 receiptHash;
        address minter;
        uint256 mintedAt;
    }

    uint256 public nextTokenId = 1;

    mapping(uint256 => VaultReceipt) public receipts;
    mapping(bytes32 => uint256) public tokenByReceiptHash;

    event VaultReceiptMinted(
        uint256 indexed tokenId,
        address indexed owner,
        bytes32 indexed receiptHash,
        string holdingId,
        string assetId,
        string tokenUri
    );

    constructor() ERC721("Pack Alpha Vault Receipt", "PAVR") {}

    function mintReceipt(
        address to,
        string calldata holdingId,
        string calldata assetId,
        bytes32 receiptHash,
        string calldata tokenUri
    ) external returns (uint256 tokenId) {
        require(to != address(0), "TO_REQUIRED");
        require(bytes(holdingId).length > 0, "HOLDING_ID_REQUIRED");
        require(bytes(assetId).length > 0, "ASSET_ID_REQUIRED");
        require(receiptHash != bytes32(0), "RECEIPT_HASH_REQUIRED");
        require(tokenByReceiptHash[receiptHash] == 0, "RECEIPT_ALREADY_MINTED");

        tokenId = nextTokenId;
        nextTokenId += 1;

        receipts[tokenId] = VaultReceipt({
            holdingId: holdingId,
            assetId: assetId,
            receiptHash: receiptHash,
            minter: msg.sender,
            mintedAt: block.timestamp
        });
        tokenByReceiptHash[receiptHash] = tokenId;

        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenUri);

        emit VaultReceiptMinted(tokenId, to, receiptHash, holdingId, assetId, tokenUri);
    }
}
