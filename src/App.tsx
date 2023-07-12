import Navbar from "./components/Navbar";
import CreateCommunity from "./page/CreateCommunity";
import DetailPost from "./page/DetailPost";
import Feed from "./page/Feed";
import SubRedit from "./page/SubRedit";

function App() {
  return (
    <>
      <Navbar />
      <div className="container max-w-7xl mx-auto relative pt-20">
        {/* <DetailPost /> */}
        {/* <Feed /> */}
        <CreateCommunity />
        {/* <SubRedit /> */}
      </div>
    </>
  );
}

export default App;
