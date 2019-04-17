// package: ssigmaapi.vitess.v1
// file: ssigmaapi/flnd/v1/vitess.proto

var ssigmaapi_flnd_v1_vitess_pb = require("../../../ssigmaapi/flnd/v1/vitess_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var VitessServiceV1 = (function () {
  function VitessServiceV1() {}
  VitessServiceV1.serviceName = "ssigmaapi.vitess.v1.VitessServiceV1";
  return VitessServiceV1;
}());

VitessServiceV1.GetMessage = {
  methodName: "GetMessage",
  service: VitessServiceV1,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: ssigmaapi_flnd_v1_vitess_pb.VitessMessage
};

VitessServiceV1.CreateMessage = {
  methodName: "CreateMessage",
  service: VitessServiceV1,
  requestStream: false,
  responseStream: false,
  requestType: ssigmaapi_flnd_v1_vitess_pb.VitessMessage,
  responseType: google_protobuf_empty_pb.Empty
};

VitessServiceV1.UpdateMessage = {
  methodName: "UpdateMessage",
  service: VitessServiceV1,
  requestStream: false,
  responseStream: false,
  requestType: ssigmaapi_flnd_v1_vitess_pb.VitessMessage,
  responseType: google_protobuf_empty_pb.Empty
};

VitessServiceV1.DeleteMessage = {
  methodName: "DeleteMessage",
  service: VitessServiceV1,
  requestStream: false,
  responseStream: false,
  requestType: ssigmaapi_flnd_v1_vitess_pb.VitessMessage,
  responseType: google_protobuf_empty_pb.Empty
};

exports.VitessServiceV1 = VitessServiceV1;

function VitessServiceV1Client(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

VitessServiceV1Client.prototype.getMessage = function getMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VitessServiceV1.GetMessage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

VitessServiceV1Client.prototype.createMessage = function createMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VitessServiceV1.CreateMessage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

VitessServiceV1Client.prototype.updateMessage = function updateMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VitessServiceV1.UpdateMessage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

VitessServiceV1Client.prototype.deleteMessage = function deleteMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VitessServiceV1.DeleteMessage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.VitessServiceV1Client = VitessServiceV1Client;

