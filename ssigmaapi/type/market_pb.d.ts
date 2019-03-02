// package: ssigmaapi.type
// file: ssigmaapi/type/market.proto

import * as jspb from "google-protobuf";

export class Market extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  getExchange(): string;
  setExchange(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Market.AsObject;
  static toObject(includeInstance: boolean, msg: Market): Market.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Market, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Market;
  static deserializeBinaryFromReader(message: Market, reader: jspb.BinaryReader): Market;
}

export namespace Market {
  export type AsObject = {
    symbol: string,
    exchange: string,
  }
}

