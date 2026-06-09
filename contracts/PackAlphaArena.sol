// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract PackAlphaArena {
    struct StrategyCommit {
        address agent;
        string agentId;
        string roundId;
        bytes32 strategyHash;
        uint256 timestamp;
    }

    struct PredictionCommit {
        address user;
        string roundId;
        string marketId;
        bytes32 outcomeHash;
        uint256 timestamp;
    }

    struct DecisionCommit {
        address trader;
        string assetId;
        string action;
        string venue;
        int256 expectedNetEdgeBps;
        bytes32 receiptHash;
        uint256 timestamp;
    }

    struct AgentScore {
        int256 roiBps;
        uint256 hitRateBps;
        uint256 drawdownBps;
        int256 scoreBps;
        uint256 updatedAt;
    }

    mapping(bytes32 => StrategyCommit) public strategies;
    mapping(bytes32 => PredictionCommit) public predictions;
    mapping(bytes32 => DecisionCommit) public commits;
    mapping(bytes32 => AgentScore) public agentScores;
    mapping(bytes32 => bytes32) public valuationRoots;
    mapping(bytes32 => bytes32) public roundResults;
    mapping(bytes32 => bytes32) public predictionSettlements;

    event StrategyCommitted(
        bytes32 indexed strategyCommitId,
        address indexed agent,
        string agentId,
        string roundId,
        bytes32 strategyHash,
        uint256 timestamp
    );

    event PredictionCommitted(
        bytes32 indexed predictionCommitId,
        address indexed user,
        string roundId,
        string marketId,
        bytes32 outcomeHash,
        uint256 timestamp
    );

    event ValuationRootPublished(
        bytes32 indexed batchId,
        bytes32 merkleRoot,
        uint256 valuedAt,
        string sourceManifestUri
    );

    event DecisionCommitted(
        bytes32 indexed commitId,
        bytes32 indexed decisionHash,
        address indexed trader,
        string assetId,
        string action,
        string venue,
        int256 expectedNetEdgeBps,
        bytes32 receiptHash,
        uint256 timestamp
    );

    event ExecutionReceiptRecorded(
        bytes32 indexed intentId,
        bytes32 indexed decisionHash,
        bytes32 receiptHash,
        int256 realizedPnlUsdE6,
        uint256 executedAt
    );

    event TokenExecutionReceiptRecorded(
        bytes32 indexed intentId,
        bytes32 indexed decisionHash,
        bytes32 receiptHash,
        address settlementToken,
        uint256 notionalAmount,
        int256 realizedPnlUsdE6,
        uint256 executedAt
    );

    event RoundSettled(
        bytes32 indexed roundId,
        string winningAgentId,
        bytes32 resultHash,
        uint256 settledAt
    );

    event AgentScoreUpdated(
        bytes32 indexed agentIdHash,
        string agentId,
        int256 roiBps,
        uint256 hitRateBps,
        uint256 drawdownBps,
        int256 scoreBps,
        uint256 updatedAt
    );

    event PredictionSettled(
        bytes32 indexed predictionCommitId,
        string outcome,
        uint256 rewardPoints,
        uint256 settledAt
    );

    function commitStrategy(
        string calldata agentId,
        string calldata roundId,
        bytes32 strategyHash
    ) external returns (bytes32 strategyCommitId) {
        require(strategyHash != bytes32(0), "STRATEGY_HASH_REQUIRED");

        strategyCommitId = keccak256(abi.encodePacked(msg.sender, agentId, roundId, strategyHash));
        require(strategies[strategyCommitId].timestamp == 0, "STRATEGY_ALREADY_EXISTS");

        strategies[strategyCommitId] = StrategyCommit({
            agent: msg.sender,
            agentId: agentId,
            roundId: roundId,
            strategyHash: strategyHash,
            timestamp: block.timestamp
        });

        emit StrategyCommitted(strategyCommitId, msg.sender, agentId, roundId, strategyHash, block.timestamp);
    }

    function commitPrediction(
        string calldata roundId,
        string calldata marketId,
        bytes32 outcomeHash
    ) external returns (bytes32 predictionCommitId) {
        require(outcomeHash != bytes32(0), "OUTCOME_HASH_REQUIRED");

        predictionCommitId = keccak256(abi.encodePacked(msg.sender, roundId, marketId, outcomeHash));
        require(predictions[predictionCommitId].timestamp == 0, "PREDICTION_ALREADY_EXISTS");

        predictions[predictionCommitId] = PredictionCommit({
            user: msg.sender,
            roundId: roundId,
            marketId: marketId,
            outcomeHash: outcomeHash,
            timestamp: block.timestamp
        });

        emit PredictionCommitted(predictionCommitId, msg.sender, roundId, marketId, outcomeHash, block.timestamp);
    }

    function publishValuationRoot(
        bytes32 batchId,
        bytes32 merkleRoot,
        uint256 valuedAt,
        string calldata sourceManifestUri
    ) external {
        require(batchId != bytes32(0), "BATCH_ID_REQUIRED");
        require(merkleRoot != bytes32(0), "MERKLE_ROOT_REQUIRED");
        valuationRoots[batchId] = merkleRoot;

        emit ValuationRootPublished(batchId, merkleRoot, valuedAt, sourceManifestUri);
    }

    function commitDecision(
        bytes32 decisionHash,
        string calldata assetId,
        string calldata action,
        string calldata venue,
        int256 expectedNetEdgeBps,
        bytes32 receiptHash
    ) external returns (bytes32 commitId) {
        require(decisionHash != bytes32(0), "DECISION_HASH_REQUIRED");
        require(receiptHash != bytes32(0), "RECEIPT_HASH_REQUIRED");

        commitId = keccak256(abi.encodePacked(msg.sender, decisionHash, receiptHash));
        require(commits[commitId].timestamp == 0, "COMMIT_ALREADY_EXISTS");

        commits[commitId] = DecisionCommit({
            trader: msg.sender,
            assetId: assetId,
            action: action,
            venue: venue,
            expectedNetEdgeBps: expectedNetEdgeBps,
            receiptHash: receiptHash,
            timestamp: block.timestamp
        });

        emit DecisionCommitted(
            commitId,
            decisionHash,
            msg.sender,
            assetId,
            action,
            venue,
            expectedNetEdgeBps,
            receiptHash,
            block.timestamp
        );
    }

    function recordExecutionReceipt(
        bytes32 intentId,
        bytes32 decisionHash,
        bytes32 receiptHash,
        int256 realizedPnlUsdE6
    ) external {
        require(intentId != bytes32(0), "INTENT_ID_REQUIRED");
        require(decisionHash != bytes32(0), "DECISION_HASH_REQUIRED");
        require(receiptHash != bytes32(0), "RECEIPT_HASH_REQUIRED");

        emit ExecutionReceiptRecorded(intentId, decisionHash, receiptHash, realizedPnlUsdE6, block.timestamp);
    }

    function recordTokenExecutionReceipt(
        bytes32 intentId,
        bytes32 decisionHash,
        bytes32 receiptHash,
        address settlementToken,
        uint256 notionalAmount,
        int256 realizedPnlUsdE6
    ) external {
        require(intentId != bytes32(0), "INTENT_ID_REQUIRED");
        require(decisionHash != bytes32(0), "DECISION_HASH_REQUIRED");
        require(receiptHash != bytes32(0), "RECEIPT_HASH_REQUIRED");
        require(settlementToken != address(0), "TOKEN_REQUIRED");
        require(notionalAmount > 0, "NOTIONAL_REQUIRED");

        emit TokenExecutionReceiptRecorded(
            intentId,
            decisionHash,
            receiptHash,
            settlementToken,
            notionalAmount,
            realizedPnlUsdE6,
            block.timestamp
        );
    }

    function settleRound(
        bytes32 roundId,
        string calldata winningAgentId,
        bytes32 resultHash
    ) external {
        require(roundId != bytes32(0), "ROUND_ID_REQUIRED");
        require(resultHash != bytes32(0), "RESULT_HASH_REQUIRED");
        roundResults[roundId] = resultHash;

        emit RoundSettled(roundId, winningAgentId, resultHash, block.timestamp);
    }

    function updateAgentScore(
        string calldata agentId,
        int256 roiBps,
        uint256 hitRateBps,
        uint256 drawdownBps,
        int256 scoreBps
    ) external returns (bytes32 agentIdHash) {
        agentIdHash = keccak256(bytes(agentId));
        agentScores[agentIdHash] = AgentScore({
            roiBps: roiBps,
            hitRateBps: hitRateBps,
            drawdownBps: drawdownBps,
            scoreBps: scoreBps,
            updatedAt: block.timestamp
        });

        emit AgentScoreUpdated(agentIdHash, agentId, roiBps, hitRateBps, drawdownBps, scoreBps, block.timestamp);
    }

    function settlePrediction(
        bytes32 predictionCommitId,
        string calldata outcome,
        uint256 rewardPoints
    ) external {
        require(predictionCommitId != bytes32(0), "PREDICTION_ID_REQUIRED");
        predictionSettlements[predictionCommitId] = keccak256(bytes(outcome));

        emit PredictionSettled(predictionCommitId, outcome, rewardPoints, block.timestamp);
    }
}
