// package: ssigmaapi.pashiriwebsocket.v1
// file: ssigmaapi/pashiriwebsocket/v1/pashiriwebsocket.proto

var ssigmaapi_pashiriwebsocket_v1_pashiriwebsocket_pb = require("../../../ssigmaapi/pashiriwebsocket/v1/pashiriwebsocket_pb");
var ssigmaapi_type_market_pb = require("../../../ssigmaapi/type/market_pb");
var ssigmaapi_type_trade_pb = require("../../../ssigmaapi/type/trade_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PashiriWebsocketServiceV1 = (function () {
  function PashiriWebsocketServiceV1() {}
  PashiriWebsocketServiceV1.serviceName = "ssigmaapi.pashiriwebsocket.v1.PashiriWebsocketServiceV1";
  return PashiriWebsocketServiceV1;
}());

PashiriWebsocketServiceV1.GetTrades = {
  methodName: "GetTrades",
  service: PashiriWebsocketServiceV1,
  requestStream: false,
  responseStream: true,
  requestType: ssigmaapi_type_market_pb.Market,
  responseType: ssigmaapi_type_trade_pb.Trades
};

exports.PashiriWebsocketServiceV1 = PashiriWebsocketServiceV1;

function PashiriWebsocketServiceV1Client(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PashiriWebsocketServiceV1Client.prototype.getTrades = function getTrades(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(PashiriWebsocketServiceV1.GetTrades, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.end.forEach(function (handler) {
        handler();
      });
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.PashiriWebsocketServiceV1Client = PashiriWebsocketServiceV1Client;

