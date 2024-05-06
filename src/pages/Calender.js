import React, { useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom'; // Importeer Link vanuit react-router-dom

function Calendar() {
  const [rooster, setRooster] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [showNewAppointmentForm, setShowNewAppointmentForm] = useState(false);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    if (newTitle.trim() !== '' && newDescription.trim() !== '' && newDate.trim() !== '' && newTime.trim() !== '') {
      const currentDate = new Date().toLocaleString();
      const appointment = {
        title: newTitle,
        description: newDescription,
        date: newDate,
        time: newTime,
        day: new Date(newDate).toLocaleDateString('nl-NL', { weekday: 'short' })
      };
      const updatedRooster = { ...rooster };
      if (!updatedRooster[selectedDate]) {
        updatedRooster[selectedDate] = [];
      }
      if (editingIndex !== null) {
        updatedRooster[selectedDate][editingIndex] = appointment;
        setEditingIndex(null);
      } else {
        updatedRooster[selectedDate].push(appointment);
      }
      setRooster(updatedRooster);
      setShowNewAppointmentForm(false);
      setNewTitle('');
      setNewDescription('');
      setNewDate('');
      setNewTime('');
    }
  };

  const handleEditAppointment = (index) => {
    const appointment = rooster[selectedDate][index];
    setNewTitle(appointment.title);
    setNewDescription(appointment.description);
    setNewDate(appointment.date);
    setNewTime(appointment.time);
    setEditingIndex(index);
    setShowNewAppointmentForm(true);
  };

  const handleDeleteAppointment = (index) => {
    const updatedRooster = { ...rooster };
    updatedRooster[selectedDate].splice(index, 1);
    setRooster(updatedRooster);
  };

  const goToWeek = (increment) => {
    const currentDate = new Date(selectedDate);
    currentDate.setDate(currentDate.getDate() + increment * 7);
    setSelectedDate(currentDate.toISOString().slice(0, 10));
  };

  return (
    <form onSubmit={handleAppointmentSubmit} className="rooster-page">
      <h1>Rooster</h1>
      
    
      <div className="calendar">
        <span></span>
      </div>
    <img className="background-image" src="images/r.jpg" alt="ai-pra" />{/* Voeg een afbeelding toe */}
     
          <div className="week-navigation">
        <button onClick={() => goToWeek(-1)}>&lt; Next week</button>
        <button onClick={() => goToWeek(1)}> &gt; Last week</button>
        </div>
     
      {showNewAppointmentForm && (
        <div className="new-appointment-form">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Titel"
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Beschrijving"
          />
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            placeholder="Datum"
          />
          <input
            type="time"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            placeholder="Tijd"
          />
          <div>
            <button type="submit">Opslaan</button>
            <button type="button" onClick={() => setShowNewAppointmentForm(false)}>Aanuleren</button>
          </div>
        </div>
      )}
      <div className="form-container">
        <button onClick={() => setShowNewAppointmentForm(true)}> +To-Do </button>
      </div>
      <div className="appointments">
        {rooster[selectedDate] && (
          <ul>
            {rooster[selectedDate].map((appointment, index) => (
              <li key={index} className="appointment">
                <div>
                 
                  <span className="appointment-description">{appointment.day} - {appointment.date} </span>
                   <div>
                   <span className="appointment-description">{appointment.time}  </span>
                   </div>
                  <div>
                    <span className="">{appointment.title}  </span>
                  </div>
                  <div>
                  <span className="appointment-description">{appointment.Beschrijving}</span>
                  </div>
                </div>
                <div>
                  <button onClick={() => handleEditAppointment(index)}>Bewerken</button>
                  <button onClick={() => handleDeleteAppointment(index)}>Verwijderen</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
}

export default Calendar;

