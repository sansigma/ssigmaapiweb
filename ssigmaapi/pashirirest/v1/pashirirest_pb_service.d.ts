// package: ssigmaapi.pashirirest.v1
// file: ssigmaapi/pashirirest/v1/pashirirest.proto

import * as ssigmaapi_pashirirest_v1_pashirirest_pb from "../../../ssigmaapi/pashirirest/v1/pashirirest_pb";
import * as ssigmaapi_type_market_pb from "../../../ssigmaapi/type/market_pb";
import * as ssigmaapi_type_orderbook_pb from "../../../ssigmaapi/type/orderbook_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PashiriRestServiceV1GetOrderBook = {
  readonly methodName: string;
  readonly service: typeof PashiriRestServiceV1;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof ssigmaapi_type_market_pb.Market;
  readonly responseType: typeof ssigmaapi_type_orderbook_pb.OrderBook;
};

export class PashiriRestServiceV1 {
  static readonly serviceName: string;
  static readonly GetOrderBook: PashiriRestServiceV1GetOrderBook;
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

export class PashiriRestServiceV1Client {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getOrderBook(requestMessage: ssigmaapi_type_market_pb.Market, metadata?: grpc.Metadata): ResponseStream<ssigmaapi_type_orderbook_pb.OrderBook>;
}

