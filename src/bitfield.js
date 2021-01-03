"use strict";

import Ajv from "ajv";

const initSchema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    type: "object",
    additionalProperties: {
        type: "object",
        required: ["offset", "size"],
        properties: {
            offset: {
                type: "integer",
                minimum: 0,
            },
            size: {
                type: "integer",
                minimum: 0,
                default: 1,
            },
        },
    },
};
const ajv = new Ajv.default({ useDefaults: true, removeAdditional: true, coerceTypes: true });
const validateInit = ajv.compile(initSchema);

export class Bitfield {
    constructor(init = {}, value = 0n) {
        if (typeof init === "object" && init instanceof Bitfield) init = init._init;

        if (!validateInit(init)) throw new Error("Invalid init data");

        Object.defineProperties(this, {
            _value: { value: BigInt(value), writable: true },
            _init: init,
        });

        for (let name in init) {
            Object.defineProperty(this, name, {
                enumerable: true,
                get: () => {
                    if (init[name].size == 1)
                        return !!(this._value & (1n << BigInt(init[name].offset)));
                    let mask = ~(~0n << BigInt(init[name].size)) << BigInt(init[name].offset);
                    return (this._value & mask) >> BigInt(init[name].offset);
                },
                set: (val) => {
                    if (init[name].size == 1) {
                        if (val) this._value |= 1n << BigInt(init[name].offset);
                        else this._value &= ~(1n << BigInt(init[name].offset));
                    } else {
                        let mask = ~(~0n << BigInt(init[name].size)) << BigInt(init[name].offset);
                        this._value &= ~mask;
                        this._value |= mask & (BigInt(val) << BigInt(init[name].offset));
                    }
                },
            });
        }
    }

    toString(radix = 16) {
        return this._value.toString(radix);
    }
}
