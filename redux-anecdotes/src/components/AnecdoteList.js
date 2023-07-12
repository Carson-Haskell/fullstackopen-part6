import { useDispatch, useSelector } from 'react-redux';
import { voteFor } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    let anecdotesToDisplay = anecdotes;

    if (filter !== '') {
      anecdotesToDisplay = anecdotes.filter((a) =>
        a.content.toLowerCase().includes(filter.toLowerCase()),
      );
    }

    return anecdotesToDisplay.sort((a, b) => b.votes - a.votes);
  });

  const dispatch = useDispatch();

  const vote = (id) => dispatch(voteFor(id));

  return (
    <ul>
      {anecdotes.map((anecdote) => (
        <li key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>Vote</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AnecdoteList;
