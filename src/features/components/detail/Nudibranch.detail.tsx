import { useNavigate, useParams } from 'react-router-dom';
import { useNudibranchs } from '../../hooks/use.nudibranchs';
import { Nudibranch } from '../../models/nudibranch';
import './nudibranchdetail.scss';

export default function NudiDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { nudibranchs, handleDeleteNudibranch } = useNudibranchs();

  const item: Nudibranch = nudibranchs.find(
    (nudibranch) => nudibranch.id === id
  ) as Nudibranch;

  const handleDelete = () => {
    handleDeleteNudibranch(item.id);
    navigate('/home');
  };

  return (
    <>
      <ul className="nudi-detail">
        <li className="card-nudi-detail">
          <div
            className="bordered-image"
            style={{
              backgroundImage: `url(${item.image.url})`,
            }}
          ></div>
          <div>
            <div className="nudi-details">
              <h2 className="specie">{item.specie}</h2>
              <p> Marine zone: {item.marinezone}</p>
              <p> Season: {item.season}</p>
              <p> Depth: {item.depth}</p>
            </div>
            <button className="delete-detail" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </li>
      </ul>
    </>
  );
}
