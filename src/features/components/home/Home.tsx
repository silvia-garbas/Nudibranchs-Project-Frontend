import { CardNudibranch } from '../card/CardNudibranch';
import { useNudibranchs } from '../../hooks/use.nudibranchs';
import { useEffect } from 'react';
import { Filter } from '../filter/Filter';
import './home.scss';

export default function Home() {
  const { nudibranchs, handleLoadNudibranchs } = useNudibranchs();

  useEffect(() => {
    handleLoadNudibranchs();
  }, [handleLoadNudibranchs]);

  return (
    <>
      <Filter></Filter>
      <div className="title_home">
        <h1> "In the end, it's always the sea."</h1>
      </div>
      <ul className="list">
        {nudibranchs.map((nudibranch) => (
          <CardNudibranch
            nudibranch={nudibranch}
            key={nudibranch.id}
          ></CardNudibranch>
        ))}
      </ul>
    </>
  );
}
