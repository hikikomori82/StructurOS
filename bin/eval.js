// Return argument

var SOS = window.SOS || {};
SOS.bin = SOS.bin || {};

SOS.bin.eval = function (input, argument) {
    "use strict";

    // man
    if (argument === SOS.man) {
        return {
            summary: "Evaluate input as JS expression",
            synopsis: ["echo EXPRESSION | eval", "eval EXPRESSION"],
            description: "Program eval evaluates JS expression and returns it",
            options: undefined,
            returns: ["Result of evaluated expression"],
            errors: undefined,
            examples: [
                "eval \"1 + 2\"",
                "echo \"1 + 2\" | parse | eval",
                "echo \"1 + 2\" | eval"
            ],
            see_also: ["echo"]
        };
    }

    // Evaluate input
    var w = window;
    if (input) {
        return SOS.fix(w.eval(input));
    }
    // Evaluate argument
    if (argument) {
        return SOS.fix(w.eval(argument));
    }
    return "";
};
