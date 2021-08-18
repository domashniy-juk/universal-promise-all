type PromiseType = Promise<unknown>;
export type UniversalPromiseAllInputType = Map<string, PromiseType> | Record<string, PromiseType> | PromiseType[];
export type UniversalPromiseAllReturnType = Promise<Map<string, unknown>  | Record<string, unknown> | unknown[]>;

const universalPromiseAll = (request: UniversalPromiseAllInputType): UniversalPromiseAllReturnType => {
    if (!request || typeof request !== 'object') {
        return Promise.reject(new TypeError('The input argument must be (Array | Object | Map)'));
    }

    if (Array.isArray(request)) {
        return Promise.all(request);
    }

    const isMap = request instanceof Map;
    const requestArrayWithKeys = (isMap ? Array.from((request as Map<string, unknown>).entries()) : Object.entries(request));
    const requestArrayWithoutKeys = requestArrayWithKeys.map(it => it[1]);
    return Promise.all(requestArrayWithoutKeys)
        .then(result => {
            const resultWithKeys: [string, unknown][] = requestArrayWithKeys.map((it, i) => [it[0], result[i]]);
            if (isMap) {
                return new Map(resultWithKeys);
            }
            return Object.fromEntries(resultWithKeys);
        });
}

export default universalPromiseAll;