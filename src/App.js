import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import './App.css';

const Tischfische = () => {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    nachname: '',
    email: '',
    phone: '',
    date: today, 
    time: '',
    persons: 1, 
    message: '',
    mealTime: '', 
    vegetarian: false, 
    allergies: [], 
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const allergies = formData.allergies;
      if (checked) {
        allergies.push(value);
      } else {
        const index = allergies.indexOf(value);
        if (index !== -1) {
          allergies.splice(index, 1);
        }
      }
      setFormData({ ...formData, allergies });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    const selectedTime = formData.time;
    if (selectedTime) {
      const hour = parseInt(selectedTime.split(':')[0], 10);
      if (hour >= 6 && hour < 12) {
        setFormData({ ...formData, mealTime: 'Frühstück' });
      } else if (hour >= 12 && hour < 18) {
        setFormData({ ...formData, mealTime: 'Mittagessen' });
      } else {
        setFormData({ ...formData, mealTime: 'Abendessen' });
      }
    }
  }, [formData.time]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="Frame">
      <form onSubmit={handleSubmit}>
        <div className='title-tisch'>
          <h1>Tischreservation</h1>
          <div className='underline-title' />
        </div>
        <br />
        <label className='input-title'>Name:</label>
        <div className='underline-name' />
        <div />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className='input'
        />
        <br />

        <label className='input-title'>Nachname:</label>
        <div className='underline-nachname' />
        <div />
        <input
          type="text"
          name="nachname"
          value={formData.nachname}
          onChange={handleChange}
          placeholder="Dein Nachname"
          className='input'
        />
        <br />
        <label className='input-title'>E-Mail:</label>
        <div className='underline-email' />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className='input'
        />
        <br />
        <label className='input-title'>Telefonnummer: </label>
        <div className='underline-tele' />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone"
          className='input'
        />
        <br />
        <label className='input-title'>Anzahl der Personen:</label>
        <br />
        <input
          type="number"
          name="persons"
          value={formData.persons}
          onChange={handleChange}
          placeholder="Number of Persons"
          className='input'
          min="1"
          max="8"
        />
        <br />
        <label>Datum:</label>
        <br />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className='input'
          min={today}
        />
        <br />
        <label>Zeit:</label>
        <br />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className='input'
        />
        <br />
        <label className='input-title'>Persönliche Nachricht:</label>
        <br />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className='input'
        />
        <br />
        <label className='input-title'>Essenszeit:</label>
        <br />
        <input
          type="text"
          name="mealTime"
          value={formData.mealTime}
          onChange={handleChange}
          className='input'
          readOnly
        />
        <br />
        <label className='input-title'>Vegetarian:</label>
        <br />
        <input
          type="checkbox"
          name="vegetarian"
          checked={formData.vegetarian}
          onChange={handleChange}
        />
        <br />
        <label className='input-title'>Allergies:</label>
        <br />
        <label>
          <input
            type="checkbox"
            name="allergies"
            value="Nuts"
            checked={formData.allergies.includes('Nuts')}
            onChange={handleChange}
          /> Nuts
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="allergies"
            value="Dairy"
            checked={formData.allergies.includes('Dairy')}
            onChange={handleChange}
          /> Dairy
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="allergies"
            value="Gluten"
            checked={formData.allergies.includes('Gluten')}
            onChange={handleChange}
          /> Gluten
        </label>
        <br />
        <button type="submit" className='button'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Tischfische;
