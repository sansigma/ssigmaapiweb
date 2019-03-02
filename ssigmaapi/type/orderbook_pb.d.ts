// package: ssigmaapi.type
// file: ssigmaapi/type/orderbook.proto

import * as jspb from "google-protobuf";

export class BidAsk extends jspb.Message {
  getPrice(): number;
  setPrice(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BidAsk.AsObject;
  static toObject(includeInstance: boolean, msg: BidAsk): BidAsk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BidAsk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BidAsk;
  static deserializeBinaryFromReader(message: BidAsk, reader: jspb.BinaryReader): BidAsk;
}

export namespace BidAsk {
  export type AsObject = {
    price: number,
    amount: number,
  }
}

export class OrderBook extends jspb.Message {
  getExchange(): string;
  setExchange(value: string): void;

  getBase(): string;
  setBase(value: string): void;

  getQuote(): string;
  setQuote(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  clearBidsList(): void;
  getBidsList(): Array<BidAsk>;
  setBidsList(value: Array<BidAsk>): void;
  addBids(value?: BidAsk, index?: number): BidAsk;

  clearAsksList(): void;
  getAsksList(): Array<BidAsk>;
  setAsksList(value: Array<BidAsk>): void;
  addAsks(value?: BidAsk, index?: number): BidAsk;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderBook.AsObject;
  static toObject(includeInstance: boolean, msg: OrderBook): OrderBook.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderBook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderBook;
  static deserializeBinaryFromReader(message: OrderBook, reader: jspb.BinaryReader): OrderBook;
}

export namespace OrderBook {
  export type AsObject = {
    exchange: string,
    base: string,
    quote: string,
    symbol: string,
    bidsList: Array<BidAsk.AsObject>,
    asksList: Array<BidAsk.AsObject>,
    timestamp: number,
  }
}

