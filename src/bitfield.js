"use strict";

import Ajv from "ajv";

const ajv = new Ajv.default({ useDefaults: true, removeAdditional: true, coerceTypes: true });
ajv.addSchema({
    $schema: "http://json-schema.org/draft-07/schema#",
    definitions: {
        property: {
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
                }
            }
        }
    },
    type: "object",
    additionalProperties: {$ref: "#/definitions/property"},
}, "init");

export class Bitfield {
    constructor(init = {}, value = 0n) {
        if (typeof init === "object" && init instanceof Bitfield) init = init._init;

        if (!ajv.validate("init", init)) throw new Error("Invalid init data");

        Object.defineProperties(this, {
            _value: { value: BigInt(value), writable: true },
            _init: {value: init, writable: false },
        });

        for (let name in init) this.defineProperty(name, init[name].offset, init[name].size);
    }

    defineProperty(name, offset, size = 1) {
        if (!ajv.validate("init#/definitions/property", {offset, size}))
            throw new Error("Invalid property definition");

        Object.defineProperty(this, name, {
            enumerable: true,
            get: () => {
                if (size == 1) return !!(this._value & (1n << BigInt(offset)));
                let mask = ~(~0n << BigInt(size)) << BigInt(offset);
                return (this._value & mask) >> BigInt(offset);
            },
            set: (val) => {
                if (size == 1) {
                    if (val) this._value |= 1n << BigInt(offset);
                    else this._value &= ~(1n << BigInt(offset));
                } else {
                    let mask = ~(~0n << BigInt(size)) << BigInt(offset);
                    this._value &= ~mask;
                    this._value |= mask & (BigInt(val) << BigInt(offset));
                }
            }
        });
        this._init[name] = {offset, size};
    }

    toString(radix = 16) {
        return this._value.toString(radix);
    }
}
