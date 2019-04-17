// package: ssigmaapi.vitess.v1
// file: ssigmaapi/flnd/v1/vitess.proto

import * as ssigmaapi_flnd_v1_vitess_pb from "../../../ssigmaapi/flnd/v1/vitess_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type VitessServiceV1GetMessage = {
  readonly methodName: string;
  readonly service: typeof VitessServiceV1;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof ssigmaapi_flnd_v1_vitess_pb.VitessMessage;
};

type VitessServiceV1CreateMessage = {
  readonly methodName: string;
  readonly service: typeof VitessServiceV1;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ssigmaapi_flnd_v1_vitess_pb.VitessMessage;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type VitessServiceV1UpdateMessage = {
  readonly methodName: string;
  readonly service: typeof VitessServiceV1;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ssigmaapi_flnd_v1_vitess_pb.VitessMessage;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type VitessServiceV1DeleteMessage = {
  readonly methodName: string;
  readonly service: typeof VitessServiceV1;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ssigmaapi_flnd_v1_vitess_pb.VitessMessage;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class VitessServiceV1 {
  static readonly serviceName: string;
  static readonly GetMessage: VitessServiceV1GetMessage;
  static readonly CreateMessage: VitessServiceV1CreateMessage;
  static readonly UpdateMessage: VitessServiceV1UpdateMessage;
  static readonly DeleteMessage: VitessServiceV1DeleteMessage;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: () => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class VitessServiceV1Client {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getMessage(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ssigmaapi_flnd_v1_vitess_pb.VitessMessage|null) => void
  ): UnaryResponse;
  getMessage(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: ssigmaapi_flnd_v1_vitess_pb.VitessMessage|null) => void
  ): UnaryResponse;
  createMessage(
    requestMessage: ssigmaapi_flnd_v1_vitess_pb.VitessMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  createMessage(
    requestMessage: ssigmaapi_flnd_v1_vitess_pb.VitessMessage,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateMessage(
    requestMessage: ssigmaapi_flnd_v1_vitess_pb.VitessMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateMessage(
    requestMessage: ssigmaapi_flnd_v1_vitess_pb.VitessMessage,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteMessage(
    requestMessage: ssigmaapi_flnd_v1_vitess_pb.VitessMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteMessage(
    requestMessage: ssigmaapi_flnd_v1_vitess_pb.VitessMessage,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

