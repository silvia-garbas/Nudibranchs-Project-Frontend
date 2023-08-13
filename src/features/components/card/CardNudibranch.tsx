import { Nudibranch } from '../../models/nudibranch';
import { Link } from 'react-router-dom';
import './cardNudibranch.scss';
// import { useNudibranchs } from '../../hooks/use.nudibranchs';

type PropsType = {
  nudibranch: Nudibranch;
};

export function CardNudibranch({ nudibranch }: PropsType) {
  // const { handleDeleteNudibranch } = useNudibranchs();

  return (
    <>
      <Link to={'detail/' + nudibranch.id}>
        <li className="card-nudi">
          <div className="card-nudi-text">
            <span>{nudibranch.specie}</span>
          </div>
          <img
            src={nudibranch.image.url}
            alt="nudibranch-image"
            className="bordered-image-card"
            width="300"
            height="300"
          />
        </li>
      </Link>
    </>
  );
}
