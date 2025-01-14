/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.20.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import {Addr, Binary, Call, CallOptional, AggregateResult, CallResult, BlockAggregateResult, ContractVersion} from "./types";
import {InstantiateMsg, ExecuteMsg, QueryMsg, MigrateMsg} from "./Multicall.types";
import { MulticallQueryClient } from "./Multicall.client";
export interface MulticallReactQuery<TResponse, TData = TResponse> {
  client: MulticallQueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface MulticallBlockTryAggregateOptionalQuery<TData> extends MulticallReactQuery<BlockAggregateResult, TData> {
  args: {
    includeCause?: boolean;
    queries: CallOptional[];
  };
}
export function useMulticallBlockTryAggregateOptionalQuery<TData = BlockAggregateResult>({
  client,
  args,
  options
}: MulticallBlockTryAggregateOptionalQuery<TData>) {
  return useQuery<BlockAggregateResult, Error, TData>(["multicallBlockTryAggregateOptional", client?.contractAddress, JSON.stringify(args)], () => client ? client.blockTryAggregateOptional({
    includeCause: args.includeCause,
    queries: args.queries
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MulticallBlockTryAggregateQuery<TData> extends MulticallReactQuery<BlockAggregateResult, TData> {
  args: {
    includeCause?: boolean;
    queries: Call[];
    requireSuccess?: boolean;
  };
}
export function useMulticallBlockTryAggregateQuery<TData = BlockAggregateResult>({
  client,
  args,
  options
}: MulticallBlockTryAggregateQuery<TData>) {
  return useQuery<BlockAggregateResult, Error, TData>(["multicallBlockTryAggregate", client?.contractAddress, JSON.stringify(args)], () => client ? client.blockTryAggregate({
    includeCause: args.includeCause,
    queries: args.queries,
    requireSuccess: args.requireSuccess
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MulticallBlockAggregateQuery<TData> extends MulticallReactQuery<BlockAggregateResult, TData> {
  args: {
    queries: Call[];
  };
}
export function useMulticallBlockAggregateQuery<TData = BlockAggregateResult>({
  client,
  args,
  options
}: MulticallBlockAggregateQuery<TData>) {
  return useQuery<BlockAggregateResult, Error, TData>(["multicallBlockAggregate", client?.contractAddress, JSON.stringify(args)], () => client ? client.blockAggregate({
    queries: args.queries
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MulticallTryAggregateOptionalQuery<TData> extends MulticallReactQuery<AggregateResult, TData> {
  args: {
    includeCause?: boolean;
    queries: CallOptional[];
  };
}
export function useMulticallTryAggregateOptionalQuery<TData = AggregateResult>({
  client,
  args,
  options
}: MulticallTryAggregateOptionalQuery<TData>) {
  return useQuery<AggregateResult, Error, TData>(["multicallTryAggregateOptional", client?.contractAddress, JSON.stringify(args)], () => client ? client.tryAggregateOptional({
    includeCause: args.includeCause,
    queries: args.queries
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MulticallTryAggregateQuery<TData> extends MulticallReactQuery<AggregateResult, TData> {
  args: {
    includeCause?: boolean;
    queries: Call[];
    requireSuccess?: boolean;
  };
}
export function useMulticallTryAggregateQuery<TData = AggregateResult>({
  client,
  args,
  options
}: MulticallTryAggregateQuery<TData>) {
  return useQuery<AggregateResult, Error, TData>(["multicallTryAggregate", client?.contractAddress, JSON.stringify(args)], () => client ? client.tryAggregate({
    includeCause: args.includeCause,
    queries: args.queries,
    requireSuccess: args.requireSuccess
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MulticallAggregateQuery<TData> extends MulticallReactQuery<AggregateResult, TData> {
  args: {
    queries: Call[];
  };
}
export function useMulticallAggregateQuery<TData = AggregateResult>({
  client,
  args,
  options
}: MulticallAggregateQuery<TData>) {
  return useQuery<AggregateResult, Error, TData>(["multicallAggregate", client?.contractAddress, JSON.stringify(args)], () => client ? client.aggregate({
    queries: args.queries
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MulticallContractVersionQuery<TData> extends MulticallReactQuery<ContractVersion, TData> {}
export function useMulticallContractVersionQuery<TData = ContractVersion>({
  client,
  options
}: MulticallContractVersionQuery<TData>) {
  return useQuery<ContractVersion, Error, TData>(["multicallContractVersion", client?.contractAddress], () => client ? client.contractVersion() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}