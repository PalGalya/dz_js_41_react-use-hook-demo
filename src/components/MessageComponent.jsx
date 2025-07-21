import React from "react";
import useAsync from "../hooks/useAsync";

// Симуляція асинхронного запиту до сервера
const fetchMessage = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve("Привіт! Це повідомлення з сервера");
      } else {
        reject(new Error("Помилка мережі"));
      }
    }, 2000);
  });
};

const MessageComponent = () => {
  const { data, loading, error, execute } = useAsync();

  const handleFetchMessage = () => {
    execute(fetchMessage);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Компонент для отримання повідомлень</h2>

      <button
        onClick={handleFetchMessage}
        disabled={loading}
        style={{
          ...styles.button,
          backgroundColor: loading ? "#cccccc" : "#007bff",
        }}
      >
        {loading ? "Завантаження..." : "Отримати повідомлення"}
      </button>

      {loading && (
        <div style={styles.status}>
          <div style={styles.loader}></div>
          <p>Завантажуємо дані...</p>
        </div>
      )}

      {error && (
        <div style={styles.error}>
          <p>❌ Помилка: {error}</p>
        </div>
      )}

      {data && !loading && (
        <div style={styles.success}>
          <p>✅ {data}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  button: {
    display: "block",
    width: "200px",
    margin: "0 auto 20px",
    padding: "10px",
    fontSize: "16px",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  status: {
    textAlign: "center",
    padding: "15px",
    margin: "10px 0",
    backgroundColor: "#e3f2fd",
    borderRadius: "4px",
    color: "#1976d2",
  },
  success: {
    textAlign: "center",
    padding: "15px",
    margin: "10px 0",
    backgroundColor: "#e8f5e8",
    borderRadius: "4px",
    color: "#4caf50",
  },
  error: {
    textAlign: "center",
    padding: "15px",
    margin: "10px 0",
    backgroundColor: "#ffebee",
    borderRadius: "4px",
    color: "#f44336",
  },
  loader: {
    margin: "0 auto 10px",
    width: "20px",
    height: "20px",
    border: "3px solid #f3f3f3",
    borderTop: "3px solid #1976d2",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default MessageComponent;
