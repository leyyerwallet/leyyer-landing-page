import React from 'react';

type Step4VerifyPhraseProps = {
  originalMnemonic: string;
  selectedWords: string[];
  handleWordSelection: (word: string) => void;
};

const Step4VerifyPhrase: React.FC<Step4VerifyPhraseProps> = ({
  originalMnemonic,
  selectedWords,
  handleWordSelection
}) => {
  const words = originalMnemonic.split(' ');
  const remainingWords = words.filter((word) => !selectedWords.includes(word));

  return (
    <div className="text-center">
      <h1 className="text-xl font-bold mb-4">Verify Secret Phrase</h1>
      <p className="mb-8 text-sm">
        Tap the words to put them next to each other in the correct order.
      </p>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {selectedWords.map((word, index) => (
          <div
            key={index}
            className="p-2 bg-white border-2 border-emerald rounded-md"
          >
            {word}
          </div>
        ))}
        {Array.from({ length: 12 - selectedWords.length }).map((_, index) => (
          <div
            key={index}
            className="p-2 bg-transparent border-2 border-dashed border-gray-400 rounded-md"
          ></div>
        ))}
      </div>
      {remainingWords.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {remainingWords.map((word, index) => (
            <button key={index} onClick={() => handleWordSelection(word)}>
              {word}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Step4VerifyPhrase;
