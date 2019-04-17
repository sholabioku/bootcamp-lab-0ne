// The Encoder function takes two arrays as its parameters, raw and code_words.
// This function replaces the words in `raw` with the words in `code_words` such that the first occurrence of
// each word in `raw` is assigned the first unassigned word in `code_words`

function encoderSolution(raw, code_words) {
    const dict = {};
    let count =0;

    new Set(raw).forEach((key) => {
      dict[key] = code_words[count];
      count++;
    });

    const encoded = [];
    raw.find((key) => {
      encoded.push(dict[key]);
    });

    return encoded;

}

module.exports = encoderSolution;