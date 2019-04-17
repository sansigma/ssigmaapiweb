// package: ssigmaapi.flnd.v1
// file: ssigmaapi/flnd/v1/flnd.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class VitessMessage extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VitessMessage.AsObject;
  static toObject(includeInstance: boolean, msg: VitessMessage): VitessMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VitessMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VitessMessage;
  static deserializeBinaryFromReader(message: VitessMessage, reader: jspb.BinaryReader): VitessMessage;
}

export namespace VitessMessage {
  export type AsObject = {
    text: string,
  }
}

