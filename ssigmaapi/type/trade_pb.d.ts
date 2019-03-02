// package: ssigmaapi.type
// file: ssigmaapi/type/trade.proto

import * as jspb from "google-protobuf";

export class Trades extends jspb.Message {
  clearTradesList(): void;
  getTradesList(): Array<Trade>;
  setTradesList(value: Array<Trade>): void;
  addTrades(value?: Trade, index?: number): Trade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Trades.AsObject;
  static toObject(includeInstance: boolean, msg: Trades): Trades.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Trades, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Trades;
  static deserializeBinaryFromReader(message: Trades, reader: jspb.BinaryReader): Trades;
}

export namespace Trades {
  export type AsObject = {
    tradesList: Array<Trade.AsObject>,
  }
}

export class Trade extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  getTradeId(): string;
  setTradeId(value: string): void;

  getExchange(): string;
  setExchange(value: string): void;

  getBase(): string;
  setBase(value: string): void;

  getQuote(): string;
  setQuote(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getSide(): string;
  setSide(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Trade.AsObject;
  static toObject(includeInstance: boolean, msg: Trade): Trade.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Trade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Trade;
  static deserializeBinaryFromReader(message: Trade, reader: jspb.BinaryReader): Trade;
}

export namespace Trade {
  export type AsObject = {
    symbol: string,
    tradeId: string,
    exchange: string,
    base: string,
    quote: string,
    price: number,
    amount: number,
    timestamp: number,
    side: string,
  }
}

