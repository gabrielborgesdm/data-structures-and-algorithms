function Validation(key, value) {
    return {
        isBetween: function isBetween(min, max) {
            this.isNumber()
            if (value < min || value > max) throw `${key} should be between ${min} and ${max}`
            return this
        },

        isNumber: function isNumber() {
            this.isTypeOf("number")
            return this
        },

        isTypeOf: function isTypeOf(type) {
            if (typeof value !== type) throw `${key} should be a ${type}`
            return this
        },

        isArray: function isArray() {
            if (!Array.isArray(value)) throw `${key} should be an Array`
            return this
        }
    }
}

module.exports = Validation