var NameSpace;
(function (NameSpace) {
    function AnnualFee(fee, term) {
        return fee * term;
    }
    NameSpace.AnnualFee = AnnualFee;
})(NameSpace || (NameSpace = {}));
