"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const checkStatus = async () => {
    try {
      const res = await fetch("/api/maintenance");
      const data = await res.json();
      setIsMaintenanceMode(data.maintenanceMode);
    } catch {
      console.error("Failed to fetch status");
    }
  };

  useEffect(() => {
    checkStatus();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "uvibes-admin-maintenance") {
        setIsAuthenticated(true);
        setMessage("");
    } else {
        setMessage("Mot de passe incorrect");
    }
  };

  const toggleMaintenance = async (newStatus: boolean) => {
    setLoading(true);
    try {
      const res = await fetch("/api/maintenance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, maintenanceMode: newStatus }),
      });
      
      if (res.ok) {
        setIsMaintenanceMode(newStatus);
        setMessage(newStatus ? "Maintenance ACTIVÉE" : "Maintenance DÉSACTIVÉE");
      } else {
        setMessage("Erreur lors de la mise à jour");
      }
    } catch {
        setMessage("Erreur de connexion");
    } finally {
        setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={styles.container}>
        <h1 style={{ fontFamily: "var(--title-font)", color: "var(--mainColor)" }}>Administration Uvibes</h1>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Se connecter</button>
        </form>
        {message && <p style={{color: 'red', }}>{message}</p>}
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={{ fontFamily: "var(--title-font)", color: "var(--mainColor)" }}>Gestion de la Maintenance</h1>
      <div style={styles.statusCard}>
        <p>Statut actuel : <strong>{isMaintenanceMode ? "🔴 EN MAINTENANCE" : "🟢 EN LIGNE"}</strong></p>
        
        <button 
            onClick={() => toggleMaintenance(!isMaintenanceMode)}
            style={{
                ...styles.toggleButton,
                backgroundColor: isMaintenanceMode ? "#4CAF50" : "#f44336"
            }}
            disabled={loading}
        >
            {loading ? "..." : (isMaintenanceMode ? "Désactiver la maintenance" : "Activer la maintenance")}
        </button>
      </div>
      {message && <p style={{marginTop: 20}}>{message}</p>}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "#fd6e00",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  statusCard: {
    border: "1px solid #ddd",
    padding: "40px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  toggleButton: {
    padding: "15px 30px",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    cursor: "pointer",
    marginTop: "20px",
  }
};
