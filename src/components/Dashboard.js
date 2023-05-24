import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [tickets, setTickets] = useState([]);
  const [openCount, setOpenCount] = useState(0);
  const [closedCount, setClosedCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    // Leitura do arquivo data.json
    fetch('/data/data.json')
      .then((response) => response.json())
      .then((data) => {
        setTickets(data);
        countTicketStatus(data);
      })
      .catch((error) => {
        console.log('Erro ao ler o arquivo data.json:', error);
      });
  }, []);

  const countTicketStatus = (data) => {
    let open = 0;
    let closed = 0;
    let pending = 0;

    data.forEach((ticket) => {
      if (ticket.status === 'open') {
        open++;
      } else if (ticket.status === 'closed') {
        closed++;
      } else if (ticket.status === 'pending') {
        pending++;
      }
    });

    setOpenCount(open);
    setClosedCount(closed);
    setPendingCount(pending);
  };

  return (
    <div>
        <h2>Dashboard</h2>
        <p>Atendimentos em aberto: {openCount}</p>
        <p>Atendimentos fechados: {closedCount}</p>
        <p>Atendimentos pendentes: {pendingCount}</p>
        <h3>Horário de criação dos tickets:</h3>
        <ul>
        {tickets.map((ticket) => (
            <li key={ticket.id}>{ticket.createdAt}</li>
        ))}
        </ul>
    </div>
  );
}

export default Dashboard;
