var NameSpace;
(function (NameSpace) {
    function AnnualFee(fee, term) {
        return fee * term;
    }
    NameSpace.AnnualFee = AnnualFee;
})(NameSpace || (NameSpace = {}));
/// <reference path="./NameSpace.ts" />
let TotalFee = NameSpace.AnnualFee(1800, 4);
console.log("Output : " + TotalFee);
