import AnecdoteFilter from './components/AnecdoteFilter';
import AncedoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteFilter />
      <AnecdoteList />
      <AncedoteForm />
    </div>
  );
};

export default App;
