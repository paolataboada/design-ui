import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DrawsPage from './modules/draws/pages/DrawsPage'
import MarketplacePage from './modules/marketplace/pages/MarketplacePage'

function App() {
  return (
    <BrowserRouter>
			<Routes>
				<Route path="/draws" element={<DrawsPage />} />
				<Route path="/marketplace" element={<MarketplacePage />} />
			</Routes>
		</BrowserRouter>
  )
}

export default App
