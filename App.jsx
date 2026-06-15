import React from 'react';
import Restaurant from './Restaurant';
import UserCredentials from './UserCredentials';

function App() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      backgroundColor: '#f5f5f5', 
      minHeight: '100vh', 
      padding: '40px 20px',
      boxSizing: 'border-box'
    }}>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '40px' 
      }}>
        <div>
          <h2 style={{ textAlign: 'center', color: '#555' }}>Ресторан</h2>
          <Restaurant 
            initialName="Название"
            initialAddress="Адресс"
            initialRating={4.7}
            initialCuisine="Тип кухни"
            initialImageUrl="Изображение"
          />
        </div>

        <div>
          <h2 style={{ textAlign: 'center', color: '#555' }}>Авторизация</h2>
          <UserCredentials 
            defaultLogin="user_admin" 
            defaultPassword="secure_password_123" 
          />
        </div>
      </div>
    </div>
  );
}

export default App;