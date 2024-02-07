import { useState, useEffect } from 'react';
import copyToClipboard from '../../utils/copyToClipboard ';

const Step3GeneratePhrase = () => {
  const [mnemonic, setMnemonic] = useState('');
  const [words, setWords] = useState<string[]>([]);
  const [wordsCoppied, setWordsCoppied] = useState(false);

  useEffect(() => {
    const fakeMnemonic =
      'apple banana cherry date elderberry fig grape hazelnut kiwi lemon mango nut';
    setMnemonic(fakeMnemonic);
    setWords(fakeMnemonic.split(' '));
  }, []);

  const handleCopy = () => {
    copyToClipboard(mnemonic);
    setWordsCoppied(true);
  };

  return (
    <div className="text-center">
      <h1 className="text-xl font-bold mb-4">Your Secret Phrase</h1>
      <p className="mb-8 text-s">
        Write down or copy these words in the right order and save them
        somewhere safe.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {words.map((word, index) => (
          <div
            key={index}
            className="p-2 bg-white border-2 border-emerald rounded-md"
          >
            {word}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center max-w-xs mx-auto mb-4">
        <button className="px-4 py-2 font-semibold text-emerald bg-white rounded-md flex-1 mr-2">
          Email me
        </button>
        <button
          onClick={handleCopy}
          className={`px-4 py-2 font-semibold ${wordsCoppied ? 'text-gray-500 bg-gray-200' : 'text-emerald bg-white'} rounded-md flex-1 ml-2`}
        >
          {wordsCoppied ? 'Copied!' : 'Copy words'}
        </button>
      </div>
      <p className="text-red-500 mb-4">
        DO NOT share your phrase with anyone as this gives full access to your
        wallet!
      </p>
    </div>
  );
};

export default Step3GeneratePhrase;
