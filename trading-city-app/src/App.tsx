import { useState } from 'react'
import './App.css'

const startingAgents = [
  { name: 'The Scalper', market: 'SPY', pnl: 248.62 },
  { name: 'Trend Hunter', market: 'QQQ', pnl: 136.40 },
  { name: 'Dip Buyer', market: 'IWM', pnl: -42.18 },
  { name: 'VWAP Scout', market: 'SPY', pnl: 94.25 },
]

function App() {
  const [agents, setAgents] = useState(startingAgents)
  const [day, setDay] = useState(1)

  const total = agents.reduce((sum, agent) => sum + agent.pnl, 0)

  function simulateDay() {
    setAgents(current =>
      current.map(agent => ({
        ...agent,
        pnl: Math.round((agent.pnl + Math.random() * 160 - 70) * 100) / 100,
      }))
    )
    setDay(current => current + 1)
  }

  return (
    <main style={{
      background: '#0c1521',
      color: '#eaf4f0',
      minHeight: '100vh',
      padding: '24px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'left',
    }}>
      <div style={{ color: '#b9ef85', fontWeight: 800 }}>
        ◈ TRADING CITY
      </div>

      <p style={{ color: '#91a4b1', marginTop: 32 }}>
        WORLD 01 / WALL STREET
      </p>

      <h1 style={{ fontSize: 38, margin: '8px 0' }}>
        Wall Street City
      </h1>

      <p style={{ color: '#91a4b1' }}>
        Your trading empire starts here.
      </p>

      <section style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        margin: '28px 0',
      }}>
        <div style={card}>
          <small>SIMULATED P&L</small>
          <h2 style={{ color: '#b9ef85' }}>
            ${total.toFixed(2)}
          </h2>
        </div>
        <div style={card}>
          <small>ACTIVE AGENTS</small>
          <h2>04</h2>
        </div>
        <div style={card}>
          <small>SIMULATION DAY</small>
          <h2>{day}</h2>
        </div>
      </section>

      <h2>Financial District 🏙️</h2>
      <div style={{
        display: 'flex',
        gap: 12,
        alignItems: 'end',
        overflowX: 'auto',
        padding: '35px 0',
      }}>
        {agents.map((agent, index) => (
          <div key={agent.name} style={{
            ...card,
            minWidth: 125,
            height: 150 + index * 22,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            borderTop: '5px solid #b9ef85',
          }}>
            <div style={{ fontSize: 35 }}>🏢</div>
            <strong>{agent.name}</strong>
            <small>{agent.market}</small>
            <p style={{
              color: agent.pnl >= 0 ? '#b9ef85' : '#ff8d8d',
            }}>
              ${agent.pnl.toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <button onClick={simulateDay} style={{
        background: '#b9ef85',
        color: '#0c1521',
        border: 0,
        borderRadius: 9,
        padding: '15px 22px',
        fontWeight: 800,
        cursor: 'pointer',
      }}>
        ▶ Simulate Next Day
      </button>

      <p style={{ color: '#91a4b1', fontSize: 12, marginTop: 25 }}>
        Prototype v0.1 · Fictional agents and simulated results only.
        No real trading.
      </p>
    </main>
  )
}

const card = {
  background: '#192838',
  border: '1px solid #33485a',
  borderRadius: 12,
  padding: 16,
}

export default App
