const getQuestions = (roundNumber) => {
    switch (roundNumber) {
        case 1:
            return [
                //<p>
                // $$ \sqrt{22b^3-c} \over 3b $$
                // </p>
                // `$$ \\sqrt{22b^3-c} \\over 3b $$`,
                `\\( f(x) = x - {7 \\over 5} \\)`,
                `\\( f(x) = x^2\\)`,
                `\\( f(x) = 2x^2 - 3x \\)`,
                `\\( f(x) = 3x^2 - {3 \\over 2} \\)`,
                `\\( f(x) = {1 \\over \\sqrt{x}} \\)`,
                `\\( f(x) = {1 \\over x} \\)`,
                `\\( f(x) = \\sqrt{2x - 3} \\)`,
                `\\( f(x) = \\sqrt{x} \\)`,
                `\\( f(x) = x \\sqrt{139} \\)`,
            ];
    }
};

const getAnswers = (roundNumber) => {
    switch (roundNumber) {
        case 1:
            return [
                `\\( f'(x) = 1 \\)`,
                `\\( f'(x) = 2x \\)`,
                `\\( f'(x) = 4x - 3 \\)`,
                `\\( f'(x) = 6x \\)`,
                `\\( f'(x) = {-1 \\over 2x \\sqrt{x}} \\)`,
                `\\( f'(x) = {-1 \\over x^2} \\)`,
                `\\( f'(x) = {1 \over \\sqrt{2x - 3}} \\)`,
                `\\( f'(x) = {1 \\over 2 \\sqrt{x}} \\)`,
                `\\( f'(x) = \\sqrt{139} \\)`,
            ];
    }
};

export { getQuestions, getAnswers };
