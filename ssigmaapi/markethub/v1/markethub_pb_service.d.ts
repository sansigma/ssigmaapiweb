// package: ssigmaapi.markethub.v1
// file: ssigmaapi/markethub/v1/markethub.proto

import * as ssigmaapi_markethub_v1_markethub_pb from "../../../ssigmaapi/markethub/v1/markethub_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MarketHubServiceV1GetTrades = {
  readonly methodName: string;
  readonly service: typeof MarketHubServiceV1;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof ssigmaapi_markethub_v1_markethub_pb.GetTradesRequest;
  readonly responseType: typeof ssigmaapi_markethub_v1_markethub_pb.GetTradesResponse;
};

type MarketHubServiceV1GetOrderBooks = {
  readonly methodName: string;
  readonly service: typeof MarketHubServiceV1;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksRequest;
  readonly responseType: typeof ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksResponse;
};

type MarketHubServiceV1GetTradesAndOrderBooks = {
  readonly methodName: string;
  readonly service: typeof MarketHubServiceV1;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksRequest;
  readonly responseType: typeof ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksResponse;
};

export class MarketHubServiceV1 {
  static readonly serviceName: string;
  static readonly GetTrades: MarketHubServiceV1GetTrades;
  static readonly GetOrderBooks: MarketHubServiceV1GetOrderBooks;
  static readonly GetTradesAndOrderBooks: MarketHubServiceV1GetTradesAndOrderBooks;
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

export class MarketHubServiceV1Client {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getTrades(requestMessage: ssigmaapi_markethub_v1_markethub_pb.GetTradesRequest, metadata?: grpc.Metadata): ResponseStream<ssigmaapi_markethub_v1_markethub_pb.GetTradesResponse>;
  getOrderBooks(requestMessage: ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksRequest, metadata?: grpc.Metadata): ResponseStream<ssigmaapi_markethub_v1_markethub_pb.GetOrderBooksResponse>;
  getTradesAndOrderBooks(requestMessage: ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksRequest, metadata?: grpc.Metadata): ResponseStream<ssigmaapi_markethub_v1_markethub_pb.GetTradesAndOrderBooksResponse>;
}

