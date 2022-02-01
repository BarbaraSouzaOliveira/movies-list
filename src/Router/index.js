import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
function Router() {
    return (
        <Routes>
            <Route element={<Home />} path="/" exact />
        </Routes>
    )
}
export default Router
