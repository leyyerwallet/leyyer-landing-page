import React from 'react';

type Step4VerifyPhraseProps = {
  originalMnemonic: string;
  onVerifySuccess: () => void;
  onVerifyFailure: () => void;
};

const Step4VerifyPhrase: React.FC<Step4VerifyPhraseProps> = ({
  originalMnemonic,
  onVerifySuccess,
  onVerifyFailure
}) => {
  const words = originalMnemonic.split(' ');
  const [selectedWords, setSelectedWords] = React.useState<string[]>([]);
  const [remainingWords, setRemainingWords] = React.useState<string[]>(words);

  const handleWordSelection = (word: string) => {
    const newSelectedWords = [...selectedWords, word];
    const newRemainingWords = remainingWords.filter((w) => w !== word);

    setSelectedWords(newSelectedWords);
    setRemainingWords(newRemainingWords);

    if (newSelectedWords.length === words.length) {
      if (newSelectedWords.join(' ') === originalMnemonic) {
        onVerifySuccess();
      } else {
        onVerifyFailure();
        setSelectedWords([]);
        setRemainingWords(words);
      }
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-xl font-bold mb-4">Verify Secret Phrase</h1>
      <p className="mb-8 text-sm">
        Tap the words to put them next to each other in the correct order.
      </p>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className={`p-2 ${selectedWords[index] ? 'bg-white border-2 border-emerald' : 'bg-transparent border-2 border-dashed border-gray-400'} rounded-md`}
          >
            {selectedWords[index] || ''}
          </div>
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
