var BigNumber = require('bignumber.js');

module.exports = {
    /**
     *
     * @param {Number} height
     * @return {BigNumber}
     */
    getTotalSupplyByHeight: function (height) {
        return (new BigNumber(0)).plus((height) * 12.5).minus(125000); // TODO FIXME This is accurate only for blockheight > 20000 and before halvings. minus slowstart
    }

};
