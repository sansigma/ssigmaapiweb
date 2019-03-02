// package: ssigmaapi.pashiriwebsocket.v1
// file: ssigmaapi/pashiriwebsocket/v1/pashiriwebsocket.proto

import * as ssigmaapi_pashiriwebsocket_v1_pashiriwebsocket_pb from "../../../ssigmaapi/pashiriwebsocket/v1/pashiriwebsocket_pb";
import * as ssigmaapi_type_market_pb from "../../../ssigmaapi/type/market_pb";
import * as ssigmaapi_type_trade_pb from "../../../ssigmaapi/type/trade_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PashiriWebsocketServiceV1GetTrades = {
  readonly methodName: string;
  readonly service: typeof PashiriWebsocketServiceV1;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof ssigmaapi_type_market_pb.Market;
  readonly responseType: typeof ssigmaapi_type_trade_pb.Trades;
};

export class PashiriWebsocketServiceV1 {
  static readonly serviceName: string;
  static readonly GetTrades: PashiriWebsocketServiceV1GetTrades;
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

export class PashiriWebsocketServiceV1Client {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getTrades(requestMessage: ssigmaapi_type_market_pb.Market, metadata?: grpc.Metadata): ResponseStream<ssigmaapi_type_trade_pb.Trades>;
}

