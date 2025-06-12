import UpdateItem from "./components/UpdateItem";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


// use the following link to get the data
// `/doors` will give you all the doors, to get a specific door use `/doors/1`.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  // Get the existing item from the server
  // const [item, setItem] = useState(null);
  // pass the item to UpdateItem as a prop

  return (
    <>
      <div className="min-h-screen bg-violet-200 w-screen select-none">
        <Router>
          <div className="p-4 space-y-4">
            <h1 className="text-2xl font-bold text-white p-5 flex justify-center">Door Manager</h1>
            <nav className="space-x-4 flex justify-center items-center">
              <Link to="/edit/1" className="p-4 bg-pink-100 !text-black rounded-3xl m-6 ">Door 1</Link>
              <Link to="/edit/2" className="p-4 bg-pink-100 !text-black rounded-3xl m-6">Door 2</Link>
            </nav>
            <Routes>
              <Route path="/edit/:id" element={<UpdateItem />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );}

export default App;
