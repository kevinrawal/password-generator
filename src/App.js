import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Footer from './footer';

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [ch, setCh] = useState(false);
  const [password, setPassword] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  // function to generate random password 

  // use of useCallback is to optimize render, it fires whenever dependency with passwordGenerator changes
  const copyToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    setIsCopied(true);

    // Reset the "Copied" state after a brief delay
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) {
      str += "0123456789";
    }
    if (ch) {
      str += `!@#$%^&*()-_=+[]{}|;:'",.<>?/`;
    }
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str[index];
    }
    setPassword(pass);
  }, [length, num, ch, setPassword]);

  // useEffect will run the passwordGenerator whenever dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [length, num, ch]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto flex-1 p-4 max-w-md bg-gray-100 rounded-lg shadow-lg mb-8 mt-8">
        <p className="text-lg font-bold mb-4">Generated Password:</p>
        <p className="bg-gray-200 p-2 rounded-md">{password}</p>

        <button
          onClick={copyToClipboard}
          className={`mt-4 ${isCopied ? 'bg-green-500' : 'bg-blue-500'} hover:${
            isCopied ? 'bg-green-700' : 'bg-blue-700'
          } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>

        <div className="mt-6">
          {/* range input */}
          <label className="block text-sm font-medium text-gray-600">Password Length: {length}</label>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full mt-1 focus:outline-none focus:ring focus:border-blue-300"
          />

          {/* number check */}
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="numberInput"
              checked={num}
              onChange={() => setNum((prev) => !prev)}
              className="mr-2"
            />
            <label htmlFor="numberInput" className="text-sm font-medium text-gray-600">
              Include Numbers
            </label>
          </div>

          {/* special character check */}
          <div className="mt-2 flex items-center">
            <input
              type="checkbox"
              id="specialChar"
              checked={ch}
              onChange={() => setCh((prev) => !prev)}
              className="mr-2"
            />
            <label htmlFor="specialChar" className="text-sm font-medium text-gray-600">
              Include Special Characters
            </label>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
