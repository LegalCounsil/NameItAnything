export default function Home() {
  const signals = [
    { coin: 'BTC', signal: 'BUY' },
    { coin: 'ETH', signal: 'SELL' }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Crypto Signal Dashboard</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        {signals.map(({ coin, signal }) => (
          <div key={coin} className="mb-4">
            <h2 className="text-xl font-semibold">{coin}</h2>
            <p className={\`text-lg \${signal === 'BUY' ? 'text-green-600' : 'text-red-600'}\`}>
              Signal: {signal}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
