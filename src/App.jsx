
import GeneralInfo from "./components/GeneralInfo";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";

const App = () => {
  return (
    <div className="app">
      <h1>CV Application</h1>
      <GeneralInfo />
      <EducationalExperience />
      <PracticalExperience />
    </div>
  );
};

export default App;
