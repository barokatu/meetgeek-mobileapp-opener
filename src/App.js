
import './App.css';

function App() {

  const user_uuid = "eyJpdiI6IlZFSkRHaFVhV2FhOW9pMWpYMXJTMkE9PSIsInZhbHVlIjoia2l5TjU5S0dZRVEzYlNudjJJMWtqQktTaThzTStIbXRWMFhySFdJYWwyRDlrTm45M2cwbU80anlFWlJscTVIUXVaYTVIWis4c1duUDd4ZWlKK255R3N0Nk84R0pBemo5T0JzaHp2S0lZeURPZFdNMHYvSHhWNThJTVBQMk1CMFEiLCJtYWMiOiI2MGI1Zjg1YmY3ZDQ1YjVkYmM4MGQ3MTA3ZDE4YmRkZWExZDllOWNlZDc0ZGM4YjFkMjM0MDY1MWRlNDU0NWVjIiwidGFnIjoiIn0%3D"; //you can get this from the backend, and pass it by intent uri to the app

  function launchAppOnAppleDevice() {
      const url = `meetgeekvoicerecorder://callback?cookie=${user_uuid}&escaped_string=string`;
      window.location.replace(url);
  }

  function launchAppOnAndroidDevice() {
      const url = `intent:///#Intent;scheme=meetgeekvoicerecorder://callback?cookie=${user_uuid}&escaped_string=string;package=com.meetgeek.MeetGeekVoiceRecorder;end`;
      window.location.replace(url);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={launchAppOnAppleDevice} style={{backgroundColor:"#fbb000", fontWeight: 'bolder', fontSize:12, padding: 18, borderRadius: 10, borderWidth: 0, marginBottom: 10, width: 240}}>Open on iOS</button>
        <button onClick={launchAppOnAndroidDevice} style={{backgroundColor:"#fbb000", fontWeight: 'bolder', fontSize:12, padding: 18, borderRadius: 10, borderWidth: 0, marginBottom: 10, width: 240}}>Open on Android</button>
      </header>
    </div>
  );
}

export default App;
