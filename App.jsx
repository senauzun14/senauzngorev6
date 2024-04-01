import  { useState } from "react";
import  "./App.css";

const emojiler = [
  { name: "100", emoji: "💯" },
  { name: " Gülümseme", emoji: "😊" },
  { name: "Kahkaha", emoji: "😄"},
  { name: "Göz kırpma", emoji: "😉" },
  { name: "Ağlama", emoji: "😢" },
  { name: "Üzgün", emoji: "😔" },
  { name: "Şaşkın", emoji: "😳" },
  { name: "Kızgın", emoji: "😡" },
  { name: "Şeytan", emoji: "😈" },
  { name: "Korkmuş", emoji: "😨 "},
  { name: "Soğuk Terli", emoji: "😰" },
  { name: " Kısık Gülen Gözler", emoji: "😆" },
  { name: "Uykulu", emoji: "😪" },
  { name: "Gülemekten Ağlayan", emoji: "😂 "},
  { name: "Dişleri ile Gülen", emoji: "😁" },
  { name: "Terli Gülüş", emoji: "😅 "}, 
  { name: "Kalp Yapan Gözler", emoji: "😍"}, 
  { name: "Dil Çıkaran", emoji: "😜" },
  { name: "Yum yum gülümeseme", emoji: "😋" },
  { name: "Öpücük", emoji: "😘" },
  { name: "Melek", emoji: "😇" },
  { name: "Hasta", emoji: "🤒" }
];

function EmojiArama() {
  const [seciliIndex, setSeciliIndex] = useState(null);
  const [aramaKelime, setAramaKelime] = useState('');

  const handleArama = (event) => {
    setAramaKelime(event.target.value);
    setSeciliIndex(null); 
  };

  const kopyalaPanoya = (emoji) => {
    navigator.clipboard.writeText(emoji)
  };

  const filtrelenmisEmojiler = emojiler.filter((emoji) => {
    return emoji.name.toLowerCase().includes(aramaKelime.toLowerCase());
  });

  return (
    <div className="arama-kutusu">
      <div className="arama-kutusu-baslik">
      <label>🐱Emoji Arama Motoru🐱</label>
      </div>
      <br />
      <input
        type="text"
        className="arama-kutusu-input"
        value={aramaKelime}
        onChange={handleArama}
      />
      <div className="emoji-listesi">
        {filtrelenmisEmojiler.map((emoji, index) => (
          <span
            key={index}
            className={`emoji-elemani ${seciliIndex === index ? "secili" : ''}`}
            onClick={() => {
              setSeciliIndex(index);
              kopyalaPanoya(emoji.emoji);
            }}
          >
            <span className="emoji" role="img" aria-label={emoji.name}>{emoji.emoji}</span>
            <span className="emoji-ad">{emoji.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <EmojiArama />
    </div>
  );
}

export default App;
