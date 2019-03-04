'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on helpcore-p2p Module {0}'
};

module.exports = require('@gohelpfund/helpcore-lib').errors.extend(spec);
