export type UniversalPromiseAllInputType<T> = {
    [P in keyof T]: Promise<T[P]>;
};

export type UniversalPromiseAllReturnType<T> = {
    [P in keyof T]: T[P];
};

const universalPromiseAll = <T>(request: UniversalPromiseAllInputType<T>): Promise<UniversalPromiseAllReturnType<T>> => {
    if (!request || typeof request !== 'object') {
        return Promise.reject(new TypeError('The input argument must be (Array | Object)'));
    }

    if (Array.isArray(request)) {
        return Promise.all(request) as any;
    }

    const requestArrayWithKeys = Object.entries(request);
    return Promise.all(requestArrayWithKeys.map(it => it[1]))
        .then(result => {
            const resultWithKeys = requestArrayWithKeys.map((it, i) => [it[0], result[i]]);
            return Object.fromEntries(resultWithKeys);
        });
}

export default universalPromiseAll;