// package: ssigmaapi.markethub.v1
// file: ssigmaapi/markethub/v1/markethub.proto

import * as jspb from "google-protobuf";
import * as ssigmaapi_type_market_pb from "../../../ssigmaapi/type/market_pb";
import * as ssigmaapi_type_trade_pb from "../../../ssigmaapi/type/trade_pb";
import * as ssigmaapi_type_orderbook_pb from "../../../ssigmaapi/type/orderbook_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";

export class GetTradesRequest extends jspb.Message {
  clearMarketsList(): void;
  getMarketsList(): Array<ssigmaapi_type_market_pb.Market>;
  setMarketsList(value: Array<ssigmaapi_type_market_pb.Market>): void;
  addMarkets(value?: ssigmaapi_type_market_pb.Market, index?: number): ssigmaapi_type_market_pb.Market;

  getVelocityWindowingSize(): number;
  setVelocityWindowingSize(value: number): void;

  getVolatilityWindowingSize(): number;
  setVolatilityWindowingSize(value: number): void;

  getVolumeWindowingSize(): number;
  setVolumeWindowingSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTradesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTradesRequest): GetTradesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTradesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTradesRequest;
  static deserializeBinaryFromReader(message: GetTradesRequest, reader: jspb.BinaryReader): GetTradesRequest;
}

export namespace GetTradesRequest {
  export type AsObject = {
    marketsList: Array<ssigmaapi_type_market_pb.Market.AsObject>,
    velocityWindowingSize: number,
    volatilityWindowingSize: number,
    volumeWindowingSize: number,
  }
}

export class GetTradesResponse extends jspb.Message {
  clearTradesWithMarketList(): void;
  getTradesWithMarketList(): Array<TradesWithMarket>;
  setTradesWithMarketList(value: Array<TradesWithMarket>): void;
  addTradesWithMarket(value?: TradesWithMarket, index?: number): TradesWithMarket;

  clearExchangeStatusList(): void;
  getExchangeStatusList(): Array<ExchangeStatus>;
  setExchangeStatusList(value: Array<ExchangeStatus>): void;
  addExchangeStatus(value?: ExchangeStatus, index?: number): ExchangeStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTradesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTradesResponse): GetTradesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTradesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTradesResponse;
  static deserializeBinaryFromReader(message: GetTradesResponse, reader: jspb.BinaryReader): GetTradesResponse;
}

export namespace GetTradesResponse {
  export type AsObject = {
    tradesWithMarketList: Array<TradesWithMarket.AsObject>,
    exchangeStatusList: Array<ExchangeStatus.AsObject>,
  }
}

export class GetOrderBooksRequest extends jspb.Message {
  clearMarketList(): void;
  getMarketList(): Array<ssigmaapi_type_market_pb.Market>;
  setMarketList(value: Array<ssigmaapi_type_market_pb.Market>): void;
  addMarket(value?: ssigmaapi_type_market_pb.Market, index?: number): ssigmaapi_type_market_pb.Market;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderBooksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderBooksRequest): GetOrderBooksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrderBooksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderBooksRequest;
  static deserializeBinaryFromReader(message: GetOrderBooksRequest, reader: jspb.BinaryReader): GetOrderBooksRequest;
}

export namespace GetOrderBooksRequest {
  export type AsObject = {
    marketList: Array<ssigmaapi_type_market_pb.Market.AsObject>,
  }
}

export class GetOrderBooksResponse extends jspb.Message {
  clearAllList(): void;
  getAllList(): Array<ssigmaapi_type_orderbook_pb.OrderBook>;
  setAllList(value: Array<ssigmaapi_type_orderbook_pb.OrderBook>): void;
  addAll(value?: ssigmaapi_type_orderbook_pb.OrderBook, index?: number): ssigmaapi_type_orderbook_pb.OrderBook;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  clearExchangeStatusList(): void;
  getExchangeStatusList(): Array<ExchangeStatus>;
  setExchangeStatusList(value: Array<ExchangeStatus>): void;
  addExchangeStatus(value?: ExchangeStatus, index?: number): ExchangeStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderBooksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderBooksResponse): GetOrderBooksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrderBooksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderBooksResponse;
  static deserializeBinaryFromReader(message: GetOrderBooksResponse, reader: jspb.BinaryReader): GetOrderBooksResponse;
}

export namespace GetOrderBooksResponse {
  export type AsObject = {
    allList: Array<ssigmaapi_type_orderbook_pb.OrderBook.AsObject>,
    timestamp: number,
    exchangeStatusList: Array<ExchangeStatus.AsObject>,
  }
}

export class GetTradesAndOrderBooksRequest extends jspb.Message {
  hasTradesReq(): boolean;
  clearTradesReq(): void;
  getTradesReq(): GetTradesRequest | undefined;
  setTradesReq(value?: GetTradesRequest): void;

  hasOrderbooksReq(): boolean;
  clearOrderbooksReq(): void;
  getOrderbooksReq(): GetOrderBooksRequest | undefined;
  setOrderbooksReq(value?: GetOrderBooksRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTradesAndOrderBooksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTradesAndOrderBooksRequest): GetTradesAndOrderBooksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTradesAndOrderBooksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTradesAndOrderBooksRequest;
  static deserializeBinaryFromReader(message: GetTradesAndOrderBooksRequest, reader: jspb.BinaryReader): GetTradesAndOrderBooksRequest;
}

export namespace GetTradesAndOrderBooksRequest {
  export type AsObject = {
    tradesReq?: GetTradesRequest.AsObject,
    orderbooksReq?: GetOrderBooksRequest.AsObject,
  }
}

export class GetTradesAndOrderBooksResponse extends jspb.Message {
  hasTradesRes(): boolean;
  clearTradesRes(): void;
  getTradesRes(): GetTradesResponse | undefined;
  setTradesRes(value?: GetTradesResponse): void;

  hasOrderbooksRes(): boolean;
  clearOrderbooksRes(): void;
  getOrderbooksRes(): GetOrderBooksResponse | undefined;
  setOrderbooksRes(value?: GetOrderBooksResponse): void;

  clearExchangeStatusList(): void;
  getExchangeStatusList(): Array<ExchangeStatus>;
  setExchangeStatusList(value: Array<ExchangeStatus>): void;
  addExchangeStatus(value?: ExchangeStatus, index?: number): ExchangeStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTradesAndOrderBooksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTradesAndOrderBooksResponse): GetTradesAndOrderBooksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTradesAndOrderBooksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTradesAndOrderBooksResponse;
  static deserializeBinaryFromReader(message: GetTradesAndOrderBooksResponse, reader: jspb.BinaryReader): GetTradesAndOrderBooksResponse;
}

export namespace GetTradesAndOrderBooksResponse {
  export type AsObject = {
    tradesRes?: GetTradesResponse.AsObject,
    orderbooksRes?: GetOrderBooksResponse.AsObject,
    exchangeStatusList: Array<ExchangeStatus.AsObject>,
  }
}

export class TradeWithAdditionalInfo extends jspb.Message {
  hasTrade(): boolean;
  clearTrade(): void;
  getTrade(): ssigmaapi_type_trade_pb.Trade | undefined;
  setTrade(value?: ssigmaapi_type_trade_pb.Trade): void;

  getVelocity(): number;
  setVelocity(value: number): void;

  getAcceleration(): number;
  setAcceleration(value: number): void;

  getVolatility(): number;
  setVolatility(value: number): void;

  getVolumeBase(): number;
  setVolumeBase(value: number): void;

  getVolumeQuote(): number;
  setVolumeQuote(value: number): void;

  getMomentumRate(): number;
  setMomentumRate(value: number): void;

  getVelocityWindowingSize(): number;
  setVelocityWindowingSize(value: number): void;

  getVolatilityWindowingSize(): number;
  setVolatilityWindowingSize(value: number): void;

  getVolumeWindowingSize(): number;
  setVolumeWindowingSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeWithAdditionalInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TradeWithAdditionalInfo): TradeWithAdditionalInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradeWithAdditionalInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeWithAdditionalInfo;
  static deserializeBinaryFromReader(message: TradeWithAdditionalInfo, reader: jspb.BinaryReader): TradeWithAdditionalInfo;
}

export namespace TradeWithAdditionalInfo {
  export type AsObject = {
    trade?: ssigmaapi_type_trade_pb.Trade.AsObject,
    velocity: number,
    acceleration: number,
    volatility: number,
    volumeBase: number,
    volumeQuote: number,
    momentumRate: number,
    velocityWindowingSize: number,
    volatilityWindowingSize: number,
    volumeWindowingSize: number,
  }
}

export class TradesWithMarket extends jspb.Message {
  hasMarket(): boolean;
  clearMarket(): void;
  getMarket(): ssigmaapi_type_market_pb.Market | undefined;
  setMarket(value?: ssigmaapi_type_market_pb.Market): void;

  clearTradesList(): void;
  getTradesList(): Array<TradeWithAdditionalInfo>;
  setTradesList(value: Array<TradeWithAdditionalInfo>): void;
  addTrades(value?: TradeWithAdditionalInfo, index?: number): TradeWithAdditionalInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradesWithMarket.AsObject;
  static toObject(includeInstance: boolean, msg: TradesWithMarket): TradesWithMarket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradesWithMarket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradesWithMarket;
  static deserializeBinaryFromReader(message: TradesWithMarket, reader: jspb.BinaryReader): TradesWithMarket;
}

export namespace TradesWithMarket {
  export type AsObject = {
    market?: ssigmaapi_type_market_pb.Market.AsObject,
    tradesList: Array<TradeWithAdditionalInfo.AsObject>,
  }
}

export class ExchangeStatus extends jspb.Message {
  getExchange(): string;
  setExchange(value: string): void;

  getOpen(): boolean;
  setOpen(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeStatus): ExchangeStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExchangeStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeStatus;
  static deserializeBinaryFromReader(message: ExchangeStatus, reader: jspb.BinaryReader): ExchangeStatus;
}

export namespace ExchangeStatus {
  export type AsObject = {
    exchange: string,
    open: boolean,
  }
}

