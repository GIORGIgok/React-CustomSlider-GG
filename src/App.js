import './App.css';
import CustomSlider from './components/customSlider/CustomSlider';
import { ImageData } from './components/customSlider/Data';

function App() {
    return <CustomSlider slides={ImageData} />;
}

export default App;