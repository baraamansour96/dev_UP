import React, { useState } from 'react';
import './home.css';

function AskForFreeDays() {
const [name, setName] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [reason, setReason] = useState('');
const [days, setDays] = useState(0);

const handleSubmit = (e) => {
e.preventDefault();
// Hier kun je de logica toevoegen om de formuliergegevens te verwerken, zoals het verzenden naar de server.
console.log({ name, phoneNumber, reason, days });
};

return (
<div className="vacation-form">
<h2>Vrije dagen aanvragen</h2>
<form onSubmit={handleSubmit}>
<label>
Jouw naam:
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
</label>
<label>
Jouw nummer:
<input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
</label>
<label>
Waarom wil je vrij:
<select value={reason} onChange={(e) => setReason(e.target.value)}>
<option value="ziekte">Ziekte</option>
<option value="vakantie">Vakantie</option>
<option value="anders">Anders</option>
</select>
</label>
<label htmlFor="details">Details:</label>
        <textarea id="details" name="details" rows="4"></textarea>
<label>
Hoeveel dagen wil je vrij:
<input type="number" value={days} onChange={(e) => setDays(parseInt(e.target.value))} />
</label>
<button type="submit">Verzenden</button>
<button type="submit"> Aanuleren </button>
</form>
</div>
);
}

export default AskForFreeDays;