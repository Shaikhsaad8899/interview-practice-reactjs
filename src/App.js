import SearchInput from "./components/childComponents/DebouncedComponent";
import WithAuth from "./components/childComponents/withAuth";
import ContextProvider from "./components/Context/Context";
import RouterComponenent from "./components/routing/Router";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <RouterComponenent />
        {/* <WithAuth /> */}
        {/* <SearchInput /> */}
      </div>
    </ContextProvider>
  );
}

export default App;
