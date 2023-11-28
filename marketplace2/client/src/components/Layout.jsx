import { Outlet, useLocation } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

// Componente de layout que envolve a navegação, conteúdo da página e rodapé
export default function Layout() {
  // Obtém a localização atual da navegação
  const location = useLocation();
  // Obtém o caminho da URL
  const path = location.pathname;

  // Renderiza a estrutura do layout
  return (
    <div className='App'>
      {/* Componente de navegação (Navbar) */}
      <Navbar />

      {/* Conteúdo da página */}
      <div className={`${path === '/' ? '' : 'my-5 py-3'} content`}>
        {/* Outlet renderiza o componente correspondente à rota atual */}
        <Outlet />
      </div>

      {/* Rodapé (Footer) */}
      <Footer />
    </div>
  );
}

