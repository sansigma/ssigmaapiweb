// package: ssigmaapi.markethub.v1
// file: ssigmaapi/markethub/v1/markethub.proto

var ssigmaapi_markethub_v1_markethub_pb = require("../../../ssigmaapi/markethub/v1/markethub_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MarketHubServiceV1 = (function () {
  function MarketHubServiceV1() {}
  MarketHubServiceV1.serviceName = "ssigmaapi.markethub.v1.MarketHubServiceV1";
  return MarketHubServiceV1;
}());

MarketHubServiceV1.GetTrades = {
  methodName: "GetTrades",
  service: MarketHubServiceV1,
  requestStream: false,
  responseStream: true,
  requestType: ssigmaapi_markethub_v1_markethub_pb.GetTradesRequest,
  responseType: ssigmaapi_markethub_v1_markethub_pb.GetTradesResponse
};

MarketHubServiceV1.GetOrderBooks = {
  methodName: "GetOrderBooks",
  service: MarketHubServiceV1,
  requestStream: false,
  responseStream: true,
  requestType: ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksRequest,
  responseType: ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksResponse
};

MarketHubServiceV1.GetTradesAndOrderBooks = {
  methodName: "GetTradesAndOrderBooks",
  service: MarketHubServiceV1,
  requestStream: false,
  responseStream: true,
  requestType: ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksRequest,
  responseType: ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksResponse
};

exports.MarketHubServiceV1 = MarketHubServiceV1;

function MarketHubServiceV1Client(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MarketHubServiceV1Client.prototype.getTrades = function getTrades(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MarketHubServiceV1.GetTrades, {
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

MarketHubServiceV1Client.prototype.getOrderBooks = function getOrderBooks(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MarketHubServiceV1.GetOrderBooks, {
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

MarketHubServiceV1Client.prototype.getTradesAndOrderBooks = function getTradesAndOrderBooks(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MarketHubServiceV1.GetTradesAndOrderBooks, {
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

exports.MarketHubServiceV1Client = MarketHubServiceV1Client;

