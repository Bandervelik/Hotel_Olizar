import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css'; // Якщо у тебе є загальні стилі для всього додатка

function App() {
  return (
    <div>
      <Header />
      
      {/* Основний вміст сторінки */}
      <main>
        <section>
          <h1>Ласкаво просимо на наш сайт!</h1>
          <p>Це приклад головної сторінки з компонентами Header та Footer.</p>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
