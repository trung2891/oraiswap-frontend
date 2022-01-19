import { BroadCastMode } from '@oraichain/cosmosjs';
import { Network } from 'bip32';
import { Buffer } from 'buffer';
import Keplr from '../lib/kelpr';
import { Keplr as keplr } from './kelpr/wallet';
import Wasm from '../lib/wasm';

declare global {
  type ExecuteOptions = {
    gas?: number;
    fees?: number;
    funds?: string;
    memo?: string;
    mode?: BroadCastMode;
  };

  type ExecuteKeplrOptions = {
    accountNumber: Long | null;
    sequence: number;
    gas: number;
    fees: number;
    mode?: BroadCastMode;
  };

  type SignedData = {
    signature: string;
    publicKey: string;
  };

  type ContractAddress = {
    marketplace: string | undefined;
    ow721: string | undefined;
    lock?: string | undefined;
    auction: string | undefined;
  };

  type StatusCode = {
    SUCCESS: number;
    NOT_FOUND: number;
    GENERIC_ERROR: number;
  };

  interface FileData {
    name: string;
    data: Buffer;
  }

  interface ChildKeyData {
    privateKey: Buffer;
    chainCode: Buffer;
    network: Network;
  }

  declare class Wallet {
    getChildKey(path?: string): Promise<ChildKeyData>;
    send(message: any);
    deploy(file: FileData);
  }
  interface Window {
    MSStream: String;
    Keystation: any;
    Wallet: Wallet;
    Wasm: Wasm;
    Keplr: Keplr;
    ethereum: any;
    keplr: keplr;
    queryIfDatasetMinted({ tokenId: string }): Promise<boolean>;
  }

  declare const APP_SETTINGS: Record<string, any>;
}

export {};