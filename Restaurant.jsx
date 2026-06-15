import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Restaurant({ initialName, initialAddress, initialRating, initialCuisine, initialImageUrl }) {
  const [name, setName] = useState(initialName);
  const [address, setAddress] = useState(initialAddress);
  const [rating, setRating] = useState(initialRating);
  const [cuisine, setCuisine] = useState(initialCuisine);
  const [imageUrl, setImageUrl] = useState(initialImageUrl);

  const [isEditing, setIsEditing] = useState(false);

  const [tempName, setTempName] = useState(name);
  const [tempAddress, setTempAddress] = useState(address);
  const [tempRating, setTempRating] = useState(rating);
  const [tempCuisine, setTempCuisine] = useState(cuisine);
  const [tempImageUrl, setTempImageUrl] = useState(imageUrl);

  const handleEdit = () => {
    setTempName(name);
    setTempAddress(address);
    setTempRating(rating);
    setTempCuisine(cuisine);
    setTempImageUrl(imageUrl);
    setIsEditing(true);
  };

  const handleSave = () => {
    setName(tempName);
    setAddress(tempAddress);
    setRating(Number(tempRating));
    setCuisine(tempCuisine);
    setImageUrl(tempImageUrl);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
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
      {isEditing ? (
        <div>
          <h3 style={{ marginTop: 0 }}>Редактирование информации</h3>
          
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>Название:</label>
            <input 
              type="text" 
              value={tempName} 
              onChange={(e) => setTempName(e.target.value)} 
              style={{ width: '100%', padding: '5px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>Адрес:</label>
            <input 
              type="text" 
              value={tempAddress} 
              onChange={(e) => setTempAddress(e.target.value)} 
              style={{ width: '100%', padding: '5px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>Рейтинг:</label>
            <input 
              type="number" 
              step="0.1" 
              min="0" 
              max="5" 
              value={tempRating} 
              onChange={(e) => setTempRating(e.target.value)} 
              style={{ width: '100%', padding: '5px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>Тип кухни:</label>
            <input 
              type="text" 
              value={tempCuisine} 
              onChange={(e) => setTempCuisine(e.target.value)} 
              style={{ width: '100%', padding: '5px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>Ссылка на фото:</label>
            <input 
              type="text" 
              value={tempImageUrl} 
              onChange={(e) => setTempImageUrl(e.target.value)} 
              style={{ width: '100%', padding: '5px', boxSizing: 'border-box' }}
            />
          </div>

          <button onClick={handleSave} style={{ marginRight: '10px', padding: '5px 10px' }}>Сохранить</button>
          <button onClick={handleCancel} style={{ padding: '5px 10px' }}>Отмена</button>
        </div>
      ) : (
        <div>
          <img 
            src={imageUrl} 
            alt={name} 
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} 
          />
          <h2 style={{ margin: '10px 0' }}>{name}</h2>
          <p><strong>Адрес:</strong> {address}</p>
          <p><strong>Рейтинг:</strong> {rating}</p>
          <p><strong>Кухня:</strong> {cuisine}</p>
          <button onClick={handleEdit} style={{ padding: '5px 10px', marginTop: '10px' }}>Редактировать</button>
        </div>
      )}
    </div>
  );
}

Restaurant.propTypes = {
  initialName: PropTypes.string.isRequired,
  initialAddress: PropTypes.string.isRequired,
  initialRating: PropTypes.number.isRequired,
  initialCuisine: PropTypes.string.isRequired,
  initialImageUrl: PropTypes.string.isRequired,
};

export default Restaurant;