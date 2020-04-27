"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants = {};
Constants.BASE_URL = "https://vision.googleapis.com/v1/images:annotate";
Constants.KEY_CONNECTOR = "?key=";
Constants.REQUEST_PAYLOAD = function (languages) { return ({
    requests: [
        {
            image: {
                content: ""
            },
            features: [
                {
                    type: "TEXT_DETECTION"
                }
            ],
            imageContext: {
                languageHints: languages
            }
        }
    ]
}); };
Constants.EMPTY_RESPONSE = {
    raw_text: []
};
exports.default = Constants;
//# sourceMappingURL=constants.js.map