import { useNavigate } from 'react-router-dom';
import { useNudibranchs } from '../../hooks/use.nudibranchs';
import { SyntheticEvent } from 'react';

import './nudibranchCreateForm.scss';
export default function NudibranchCreateForm() {
  const navigate = useNavigate();
  const { handleCreateNudibranch } = useNudibranchs();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const nudibranchForm = event.target as HTMLFormElement;
    const nudibranchData = new FormData(nudibranchForm);

    await handleCreateNudibranch(nudibranchData);
    navigate('/home');
  };
  return (
    <div className="form-wrapper">
      <form
        className="create-form"
        aria-label="form"
        id="create-form"
        onSubmit={handleSubmit}
      >
        <h2 className="title_form">Sharing is caring</h2>
        <input type="text" placeholder="Specie" name="specie"></input>
        <select name="marinezone">
          <option>Marine Zone</option>
          <option value="Mediterranean Sea">Mediterranean Sea</option>
          <option value="Cantabrian Sea">Cantabrian Sea</option>
          <option value="Atlantic Ocean">Atlantic Ocean</option>
        </select>
        <input type="text" placeholder="Season" name="season"></input>
        <input type="text" placeholder="Depth" name="depth"></input>
        <input type="file" placeholder="Image" name="image"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
