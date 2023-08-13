import { SyntheticEvent } from 'react';

// import { useNudibranchs } from '../../hooks/use.nudibranchs';
import { RootState } from '../../../core/store/store';
import { useSelector } from 'react-redux';
// import styles from './filter.scss';
import styles from './filter.module.scss';
export function Filter() {
  // const { handleFilterNudibranch } = useNudibranchs();
  const { nudibranchs } = useSelector((state: RootState) => state.nudibranchs);

  const handleSelect = (event: SyntheticEvent) => {
    const element = event.target as HTMLSelectElement;
    if (element.name === 'marinezone') {
      const filter = `/?marinezone=${element.value}`;
      console.log(filter);
      // console.log(handleFilterNudibranch(filter));
      console.log(nudibranchs);
      return nudibranchs;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <select
          className={styles.button}
          name="marine zone"
          onChange={handleSelect}
        >
          <option>Marine Zone</option>
          <option value="mediterranean sea">Mediterranean Sea</option>
          <option value="cantabric sea">Cantabric Sea </option>
          <option value="atlantic ocean">Atlantic Ocean</option>
        </select>
        {/* <button className={styles.reset} name="reset" onClick={handleSelect}> */}
        {/* Reset
</button> */}
      </div>
    </div>
  );
}
