import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

function SiteFrame({ src, title }) {
  return (
    <iframe
      className="site-frame"
      src={src}
      title={title}
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  );
}

function App() {
  return (
    <div className="app-shell">
      <main className="page-content">
        <Routes>
          <Route path="/" element={<SiteFrame src="/sites/home/index.html" title="Inicio" />} />
          <Route
            path="/nosotros"
            element={<SiteFrame src="/sites/nosotros/index.html" title="Nosotros" />}
          />
          <Route
            path="/marcas"
            element={<SiteFrame src="/sites/marcas/index.html" title="Marcas" />}
          />
          <Route
            path="/contacto"
            element={<SiteFrame src="/sites/contacto/index.html" title="Contacto" />}
          />
          <Route
            path="/tejas-el-aguila"
            element={<SiteFrame src="/sites/aguila/index.html" title="Tejas El Aguila" />}
          />
          <Route
            path="/catalogos"
            element={<SiteFrame src="/sites/catalogos/index.html" title="Catalogos" />}
          />
          <Route
            path="/celosia"
            element={<SiteFrame src="/sites/celosia/index.html" title="Celosia" />}
          />
          <Route
            path="/piedra-y-fachaleta-interstone"
            element={<SiteFrame src="/sites/interstone/index.html" title="Interstone" />}
          />
          <Route
            path="/piedra-y-fachaletas-perdura"
            element={<SiteFrame src="/sites/perdura/index.html" title="Perdura" />}
          />
          <Route
            path="/tejas-proceram"
            element={<SiteFrame src="/sites/proceram/index.html" title="Tejas Proceram" />}
          />
          <Route
            path="/tejas-terracota"
            element={<SiteFrame src="/sites/terracota/index.html" title="Tejas Terracota" />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
