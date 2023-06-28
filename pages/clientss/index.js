import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];

  return (
    <div>
      <h1>The Clients Page!</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link href={`/clientss/${client.id}`}>{client.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClientsPage;
