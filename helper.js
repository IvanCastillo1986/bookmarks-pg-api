// This class replaces console logs and generic errors with a specific error that we define
class RecordNotFoundError extends Error {

    constructor(message) {
        super(message)

        this.name = "RecordNotFoundError"
        this.statusCode = "400"
        this.message = message
    }
    // throw new RecordNotFoundError("some error message")
}

module.exports = {
    RecordNotFoundError
}
