import React, { useState } from 'react';
import PropTypes from 'prop-types';

function UserCredentials({ defaultLogin, defaultPassword }) {
  const [loginInput, setLoginInput] = useState(defaultLogin);
  const [passwordInput, setPasswordInput] = useState(defaultPassword);

  const [savedLogin, setSavedLogin] = useState(defaultLogin);
  const [savedPassword, setSavedPassword] = useState(defaultPassword);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedLogin(loginInput);
    setSavedPassword(passwordInput);
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '400px',
      margin: '20px auto',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      <h3 style={{ marginTop: 0 }}>Ввод и отображение учетных данных</h3>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="username" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Логин:</label>
          <input
            id="username"
            type="text"
            value={loginInput}
            onChange={(e) => setLoginInput(e.target.value)}
            style={{ width: '100%', padding: '5px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Пароль:</label>
          <div style={{ display: 'flex', gap: '5px' }}>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              style={{ flexGrow: 1, padding: '5px' }}
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              style={{ padding: '5px' }}
            >
              {showPassword ? 'Скрыть' : 'Показать'}
            </button>
          </div>
        </div>

        <button type="submit" style={{ width: '100%', padding: '7px' }}>Применить изменения</button>
      </form>

      <div style={{ borderTop: '1px solid #eee', paddingTop: '15px' }}>
        <h4 style={{ margin: '0 0 10px 0' }}>Отображаемые данные:</h4>
        <p style={{ margin: '5px 0' }}>
          <strong>Логин:</strong> {savedLogin || 'Не указан'}
        </p>
        <p style={{ margin: '5px 0' }}>
          <strong>Пароль:</strong> {savedPassword ? (showPassword ? savedPassword : '••••••••') : 'Не указан'}
        </p>
      </div>
    </div>
  );
}

UserCredentials.propTypes = {
  defaultLogin: PropTypes.string,
  defaultPassword: PropTypes.string,
};

UserCredentials.defaultProps = {
  defaultLogin: '',
  defaultPassword: '',
};

export default UserCredentials;