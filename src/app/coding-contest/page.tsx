
import CenterLayout from '../components/CenterLayout';
import ContestsList from './../components/ContestTable';

const App = () => {
  return (
    <CenterLayout>
    <div className="container mx-auto px-4 sm:px-8">
      {/* <h1 className="text-3xl font-bold my-4">Contests</h1> */}
      <ContestsList apiUrl="https://kontests.net/api/v1/leet_code" platformName="LeetCode" />
      <ContestsList apiUrl="https://kontests.net/api/v1/code_chef" platformName="CodeChef" />
      <ContestsList apiUrl="https://kontests.net/api/v1/codeforces" platformName="Codeforces" />
    </div>
    </CenterLayout>
  );
};

export default App;
