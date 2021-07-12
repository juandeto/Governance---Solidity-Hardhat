//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";



contract Governance {
    address public FafToken = 0x5FbDB2315678afecb367f032d93F642f64180aa3;
    address public president;
    uint term;
    mapping(uint => Candidate) public candidateLookup;
    mapping(address => bool) public voterLookup;
    uint public candidateCount;
    event votedEvent(uint indexed id);

    constructor() {
         term = block.timestamp;
    }

    struct Candidate {
        uint id;
        string name;
        uint voteCount;
        bool exists;
    }

    function addCandidate(string memory name)  public {
        require(FafToken.balanceOf(msg.sender) > 50000, 'No tenes los fondos necesarios'); //con menos de 1000000 de fafafs no podes ser candidato.
        candidateLookup[candidateCount] = Candidate(candidateCount, name, 0, true);
        candidateCount++;
    }


    function getCandidates() external view returns (string[] memory, uint[] memory) {
        string[] memory names = new string[](candidateCount);
        uint[] memory voteCounts = new uint[](candidateCount);
        for (uint i = 0; i < candidateCount; i++) {
            names[i] = candidateLookup[i].name;
            voteCounts[i] = candidateLookup[i].voteCount;
        }
        return (names, voteCounts);
    }

    function vote(uint id, uint comision) isElectionTime external {
        require(FafToken.balanceOf(msg.sender) >= 300000, 'No tenes los fondos necesarios');
        require (!voterLookup[msg.sender]);
        require (id >= 0 && id <= candidateCount-1);
        FafToken.transfer(msg.sender, this.balance, 300000);
        candidateLookup[id].voteCount++;
        emit votedEvent(id);
    }

    //traspaso de mando
    function declareNewPresident() external returns(string memory) {
        require(voterLookup.length >=12 && voterLookup.length < 20);// si votaron al menos 12 personas
        require(president = msg.sender); // esta funcion solo la puede expresar el presidente en funciones
        president = candidateLookup[0];
        for(uint i = 0; i <= candidateLookup.length; i++){
            if(president.voteCount < candidateLookup[i]){
                president = candidateLookup[i];
            }
        }
        // se transfiere el balance del contrato al actual presidente
        FafToken.transfer(this, president, this.balance);
        term = now + 4 weeks;
         //reseteamos los candidatos
         reset();
    }

    function electionTime() view public returns(bool) {
        if(now < term + 1 days && now > term){
            return true;
        }else{
            return false;
        }
    }

    //reseteamos los candidatos
    function reset() internal {
        for(uint i = 0; i <= candidateLookup.length; i++){
                delete candidateLookup[i];
        }
    }

    modifier onlyPresident {
    require(msg.sender == president);
    _;
    }
    modifier isElectionTime {
        require(now < term + 1 days && now > term);
        _;
    }

            //accept any incoming amount
    fallback () external payable {
    }

    receive() external payable {
        // React to receiving ether
    }
}