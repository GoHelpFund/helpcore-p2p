'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var helpcore = require('@gohelpfund/helpcore-lib');
var utils = require('../utils');
var $ = helpcore.util.preconditions;
var _ = helpcore.deps._;
var BufferUtil = helpcore.util.buffer;
var BufferReader = helpcore.encoding.BufferReader;

/**
 * A message to confirm that a connection is still valid.
 * @param {Number} arg - A nonce for the Ping message
 * @param {Object=} options
 * @extends Message
 * @constructor
 */
function SyncstatuscountMessage(arg, options) {
  Message.call(this, options);
  this.command = 'ssc';
}
inherits(SyncstatuscountMessage, Message);

SyncstatuscountMessage.prototype.setPayload = function(payload) {
    var parser = new BufferReader(payload);
    this.nonce = parser.read(8);

};

SyncstatuscountMessage.prototype.getPayload = function() {
    return this.nonce;
};

module.exports = SyncstatuscountMessage;
