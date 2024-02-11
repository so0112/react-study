// import Modal from './compdonents/modal/Modal';
import { ReduxPage } from './redux/example/ReduxPage';

function App() {
  return (
    <div
      className="App"
      style={{
        width: '500px',
        display: 'flex',
        height: '500px',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
      }}
    >
      <ReduxPage />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
