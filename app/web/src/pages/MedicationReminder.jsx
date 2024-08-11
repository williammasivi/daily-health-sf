import { useEffect, useState } from 'react';
import axios from 'axios';
import tada from '../assets/sounds/Stand Still _ Step Up_ High Water (Official Soundtrack)(MP3_160K).mp3';
import { FaPills, FaPlusCircle } from 'react-icons/fa';
import DisplayHoraire from '../components/ui/DisplayHoraire';
import DisplayHoraireSkeleton from '../components/ui/DisplayHoraireSkeleton';

const MedicationReminder = () => {
  const [reminders, setReminders] = useState([]);
  const [horaireTitle, setHoraireTitle] = useState('');
  const [heures, setHeures] = useState('');

  // Load reminders from API
  useEffect(() => {
    async function loadHoraire() {
      try {
        const resp = await axios.get('http://localhost:3000/api/horaires');
        const result = await resp.data;
        setReminders(result.horaires.map((reminder) => ({ ...reminder, triggered: false })));
      } catch (e) {
        console.error("Failed to load reminders:", e);
      }
    }
    loadHoraire();
  }, []);

  // Check the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const currentTime = now.toTimeString().slice(0, 5); // Use HH:MM format

      reminders.forEach((reminder, index) => {
        if (reminder.heures === currentTime && !reminder.triggered) {
          playSound();
          setReminders((prevReminders) => {
            const updatedReminders = [...prevReminders];
            updatedReminders[index] = { ...reminder, triggered: true };
            return updatedReminders;
          });
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [reminders]);

  // Play the reminder sound
  const playSound = () => {
    const alertSound = document.getElementById("alertSound");
    if (alertSound) {
      alertSound.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }
  };

  // Add new reminder
  const addReminder = async () => {
    if (horaireTitle && heures) {
      const newReminder = { horaireTitle, heures, triggered: false };
      setReminders([...reminders, newReminder]);
      setHoraireTitle('');
      setHeures('');
      
      try {
        await axios.post('http://localhost:3000/api/horaires', newReminder);
      } catch (error) {
        console.error("Failed to add reminder:", error);
      }
    }
  };

  const deleteHoraire = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/horaires/${id}`);
      setReminders(reminders.filter(reminder => reminder.horaireId !== id));
    } catch (error) {
      console.error("Failed to delete reminder:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 p-8 rounded-lg shadow-lg text-black max-w-lg mx-auto mt-12">
      <audio className='hidden' id="alertSound" src={tada} preload="auto"></audio>
      <h2 className="text-3xl font-bold mb-6 text-green-700">Medication Reminder</h2>
      <div className="mb-6">
        <label htmlFor="medication" className="block text-sm font-medium">Medication Name</label>
        <input
          type="text"
          id="medication"
          value={horaireTitle}
          onChange={(e) => setHoraireTitle(e.target.value)}
          className="mt-1 p-3 w-full bg-gray-200 border border-gray-400 rounded"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="time" className="block text-sm font-medium">Reminder Time</label>
        <input
          type="time"
          id="time"
          value={heures}
          onChange={(e) => setHeures(e.target.value)}
          className="mt-1 p-3 w-full bg-gray-200 border border-gray-400 rounded"
        />
      </div>
      <button
        onClick={addReminder}
        className="bg-green-600 hover:bg-green-700 text-white py-3 px-5 rounded flex items-center"
      >
        <FaPlusCircle className="mr-2" /> Add Reminder
      </button>
      <ul className="mt-8 space-y-4">
        {
          reminders.length === 0 ? (
            'abcdeff'.split('').map((item, i) => <DisplayHoraireSkeleton key={i} />)
          ) : (
            reminders.map((reminder, index) => (
              <DisplayHoraire
                key={reminder.horaireId || index}
                medication={reminder.horaireTitle}
                time={reminder.heures}
                handleDelete={() => deleteHoraire(reminder.horaireId || 'not found')}
              />
            ))
          )
        }
      </ul>
    </div>
  );
};

export default MedicationReminder;
