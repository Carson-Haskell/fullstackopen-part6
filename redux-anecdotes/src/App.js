import AnecdoteFilter from './components/AnecdoteFilter';
import AncedoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteFilter />
      <AnecdoteList />
      <AncedoteForm />
    </div>
  );
};

export default App;
