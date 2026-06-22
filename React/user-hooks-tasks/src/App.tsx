import { useFetch, useLocalStorage, useHover, useViewportSize } from './hooks';
import type { Post } from './types';
import './App.css';

function App() {
  const { isLoading, error, data, refetch } = useFetch<Post>('https://jsonplaceholder.typicode.com/posts'); // http://localhost:3001/posts
  const [value, { setItem, removeItem }] = useLocalStorage('some-key');
  const { hovered, ref } = useHover<HTMLDivElement>();
  const { height, width } = useViewportSize();

  return (
    <div className='tasks'>
      <div className='task1'>
        <h2>Задание 1 - useFetch</h2>
        <div>
          <div>
            <button onClick={() => refetch({
              params: {
                _limit: 3
              }
            })}>
              Перезапросить
            </button>
          </div>
          {isLoading && 'Загрузка...'}
          {error && 'Произошла ошибка'}
          {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>)}
        </div>
      </div>

      <div className='task2'>
        <h2>Задание 2 - useLocalStorage</h2>
        <div>
          <p>Значение из LocalStorage: {value}</p>
          <div>
            <button onClick={() => setItem('new storage value')}>Задать значение</button>
            <button onClick={() => removeItem()}>Удалить значение</button>
          </div>
        </div>
      </div>
      <div ref={ref} className='task3'>
        {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
      </div>
      <div className='task3'>
        Width: {width}, height: {height}
      </div>
    </div>
  );
}

export default App;
