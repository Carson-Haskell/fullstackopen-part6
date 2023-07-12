import { useDispatch, useSelector } from 'react-redux';
import { voteFor } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    let anecdotesToDisplay = [...anecdotes];

    if (filter !== '') {
      anecdotesToDisplay = anecdotes.filter((a) =>
        a.content.toLowerCase().includes(filter.toLowerCase()),
      );
    }

    return anecdotesToDisplay.sort((a, b) => b.votes - a.votes);
  });

  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteFor(id));

    const votedFor = anecdotes.find((anc) => anc.id === id);

    dispatch(setNotification(`you voted for "${votedFor.content}"`));
  };

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
