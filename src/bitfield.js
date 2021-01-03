"use strict";

import Ajv from "ajv";

// json-schema validation of setup args
const ajv = new Ajv.default({ useDefaults: true, removeAdditional: true, coerceTypes: true });
ajv.addSchema(
    {
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
                    },
                },
            },
        },
        type: "object",
        additionalProperties: { $ref: "#/definitions/property" },
    },
    "init"
);

/** Generic bitfield manipulation class */
export class Bitfield {
    /**
     * Create a new instance
     *
     * @since 1.0.0
     *
     * @param object init  List of properties to initialise with
     * @param BigInt value Initial bitfield value
     */
    constructor(init = {}, value = undefined) {
        if (typeof init === "object" && init instanceof Bitfield) {
            init = init._init;
            value = init._value;
        }

        if (!ajv.validate("init", init)) throw new Error("Invalid init data");

        Object.defineProperties(this, {
            _value: { value: BigInt(value || 0n), writable: true },
            _init: { value: init, writable: false },
        });

        for (let name in init) this.defineProperty(name, init[name].offset, init[name].size);
    }

    /**
     * Create a new property
     *
     * @since 1.0.6
     *
     * @param string name
     * @param int    offset Offset from the start of the bitfield
     * @param int    size   Size in bits of this property
     * @return void
     */
    defineProperty(name, offset, size = 1) {
        if (!ajv.validate("init#/definitions/property", { offset, size }))
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
            },
        });
        this._init[name] = { offset, size };
    }

    /**
     * Convert to string (proxy for BigInt.toString)
     *
     * @since 1.0.0
     *
     * @param int radix Base to convert with
     * @return string
     */
    toString(radix = 16) {
        return this._value.toString(radix);
    }

    /**
     * Set or get the bitmask value directly
     *
     * @since 1.0.7
     *
     * @param int value New bitmask value
     * @return BigInt Old bitmask value
     */
    value(value = undefined) {
        if (value === undefined) return this._value;

        let old = this._value;
        this._value = BigInt(value);
        return old;
    }
}
