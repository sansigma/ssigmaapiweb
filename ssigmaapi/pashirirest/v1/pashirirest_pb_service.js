// package: ssigmaapi.pashirirest.v1
// file: ssigmaapi/pashirirest/v1/pashirirest.proto

var ssigmaapi_pashirirest_v1_pashirirest_pb = require("../../../ssigmaapi/pashirirest/v1/pashirirest_pb");
var ssigmaapi_type_market_pb = require("../../../ssigmaapi/type/market_pb");
var ssigmaapi_type_orderbook_pb = require("../../../ssigmaapi/type/orderbook_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PashiriRestServiceV1 = (function () {
  function PashiriRestServiceV1() {}
  PashiriRestServiceV1.serviceName = "ssigmaapi.pashirirest.v1.PashiriRestServiceV1";
  return PashiriRestServiceV1;
}());

PashiriRestServiceV1.GetOrderBook = {
  methodName: "GetOrderBook",
  service: PashiriRestServiceV1,
  requestStream: false,
  responseStream: true,
  requestType: ssigmaapi_type_market_pb.Market,
  responseType: ssigmaapi_type_orderbook_pb.OrderBook
};

exports.PashiriRestServiceV1 = PashiriRestServiceV1;

function PashiriRestServiceV1Client(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PashiriRestServiceV1Client.prototype.getOrderBook = function getOrderBook(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(PashiriRestServiceV1.GetOrderBook, {
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

exports.PashiriRestServiceV1Client = PashiriRestServiceV1Client;

