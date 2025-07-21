import MessageComponent from "./components/MessageComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header style={styles.header}>
        <h1 style={styles.mainTitle}>Домашнє завдання: useAsync Hook</h1>
        <p style={styles.subtitle}>
          Демонстрація роботи з асинхронними даними в React
        </p>
      </header>

      <main>
        <MessageComponent />
      </main>

      <footer style={styles.footer}>
        <p>Створено за допомогою React + Vite</p>
      </footer>
    </div>
  );
}

const styles = {
  header: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#282c34",
    color: "white",
    marginBottom: "20px",
  },
  mainTitle: {
    margin: "0 0 10px 0",
    fontSize: "2em",
  },
  subtitle: {
    margin: "0",
    fontSize: "1.1em",
    opacity: "0.8",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    marginTop: "40px",
    borderTop: "1px solid #eee",
    color: "#666",
  },
};

export default App;
