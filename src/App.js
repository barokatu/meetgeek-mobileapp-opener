
import { useState } from 'react';
import './App.css';

function App() {
  const [cookie, setCookie] = useState('')
  const [returnedData, setReturnedData] = useState('')

  const user_uuid = "eyJpdiI6IlZFSkRHaFVhV2FhOW9pMWpYMXJTMkE9PSIsInZhbHVlIjoia2l5TjU5S0dZRVEzYlNudjJJMWtqQktTaThzTStIbXRWMFhySFdJYWwyRDlrTm45M2cwbU80anlFWlJscTVIUXVaYTVIWis4c1duUDd4ZWlKK255R3N0Nk84R0pBemo5T0JzaHp2S0lZeURPZFdNMHYvSHhWNThJTVBQMk1CMFEiLCJtYWMiOiI2MGI1Zjg1YmY3ZDQ1YjVkYmM4MGQ3MTA3ZDE4YmRkZWExZDllOWNlZDc0ZGM4YjFkMjM0MDY1MWRlNDU0NWVjIiwidGFnIjoiIn0%3D"; //you can get this from the backend, and pass it by intent uri to the app

  function launchAppOnAppleDevice() {
      const url = `meetgeekvoicerecorder://callback?cookie=${user_uuid}&escaped_string=string`;
      window.location.replace(url);
  }

  function launchAppOnAndroidDevice() {
      const url = `intent:///#Intent;scheme=meetgeekvoicerecorder://callback?cookie=${user_uuid}&escaped_string=string;package=com.meetgeek.assistant;end`;
      window.location.replace(url);
  }

  async function requestGetUser () {
    const config = {
      method: 'GET',
      maxBodyLength: Infinity,
      url: 'https://demo.meetgeek.ai/rp/api/mobile/get_user',
      headers: {
        'Cookie': `demo_session=${cookie}; Path=/;`,
        'Authorization': 'iyiOVpb2jZyC72lbAP4E1dUAyPZYBWB2F7HgVtG3iUOe0xbGiv6rCT2SHS4hOclYUuPhctDfKLuiOpSEKirRWlQkRFX0znhcsmjMJg6gxhQFNjaQDZoHqyZVbIOotLI8'
      }
    };
  
    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data)); // Optional logging for debugging
      setReturnedData({data: response.data})
    } catch (error) {
      console.error(error);
      setReturnedData({error: error})
      throw error; // Re-throw the error for proper handling elsewhere
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <input onChange={(e) => setCookie(e.target.value)} />
        <button onClick={launchAppOnAppleDevice} style={{backgroundColor:"#fbb000", fontWeight: 'bolder', fontSize:12, padding: 18, borderRadius: 10, borderWidth: 0, marginBottom: 10, width: 240}}>Open on iOS</button>
        <button onClick={launchAppOnAndroidDevice} style={{backgroundColor:"#fbb000", fontWeight: 'bolder', fontSize:12, padding: 18, borderRadius: 10, borderWidth: 0, marginBottom: 10, width: 240}}>Open on Android</button>
        <button onClick={launchAppOnAndroidDevice} style={{backgroundColor:"#fbb000", fontWeight: 'bolder', fontSize:12, padding: 18, borderRadius: 10, borderWidth: 0, marginBottom: 10, width: 240}}>Open on Android</button>
        <p>
          Returned data: <b/>
          {returnedData !== '' ? JSON.stringify(returnedData) : null}
        </p>
      </header>
    </div>
  );
}

export default App;
