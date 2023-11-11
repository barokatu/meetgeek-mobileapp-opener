
import './App.css';

function App() {

  const user_uuid = "a0234daf-0f4c-11ed-ae4f-0242c0a8011d"; //you can get this from the backend, and pass it by intent uri to the app

  function launchAppOnAppleDevice() {
      const url = `meetgeekvoicerecorder://callback?user_uuid=${user_uuid}&escaped_string=string`;
      window.location.replace(url);
  }

  function launchAppOnAndroidDevice() {
      const url = `intent:///#Intent;scheme=meetgeekvoicerecorder://callback?user_uuid=${user_uuid}&escaped_string=string;package=com.meetgeek.MeetGeekVoiceRecorder;end`;
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
