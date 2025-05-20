import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
        <h1>🌐 My App</h1>
      </header>

      <main>
        <Outlet /> {/* 여기서 하위 라우트가 렌더링됨 */}
      </main>

      <footer>
        <small>© 2025</small>
      </footer>
    </div>
  );
}

export default App;
