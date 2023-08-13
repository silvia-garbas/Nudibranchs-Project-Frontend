import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NudibranchRepository } from '../../core/services/nudibranch.repository';
import { AppDispatch, RootState } from '../../core/store/store';
import { load, create, deleteById, update } from '../redux/nudibranch.slice'; //create
// import { Nudibranch } from '../models/nudibranch';
import { Nudibranch } from '../models/nudibranch';

export function useNudibranchs() {
  const { nudibranchs } = useSelector((state: RootState) => state.nudibranchs);
  const { token } = useSelector((state: RootState) => state.users);
  const dispatch: AppDispatch = useDispatch();
  const url = 'http://localhost:4400/';

  const nudibranchRepo: NudibranchRepository = useMemo(
    () => new NudibranchRepository(url, token as string),
    [token] // []
  );

  // Get nudibranchs from back -> Async
  // Set into the state -> Sync

  const handleLoadNudibranchs = useCallback(async () => {
    console.log('Handle Load');
    //HOME
    const loadNudibranchs = await nudibranchRepo.getAll();
    dispatch(load(loadNudibranchs));
  }, [dispatch, nudibranchRepo]);

  const handleCreateNudibranch = async (nudi: FormData) => {
    console.log('Handle Create');
    const newNudi = await nudibranchRepo.createNudibranch(nudi);
    dispatch(create(newNudi));
  };

  const handleDeleteNudibranch = async (id: Nudibranch['id']) => {
    const deleteNudi = await nudibranchRepo.deleteNudibranchById(id);
    dispatch(deleteById(deleteNudi.id));
  };

  const handleUpdateNudibranch = async (data: Partial<Nudibranch>) => {
    // NO ES TIPO nudi: FormData?
    console.log('Handle Update');
    const updateNudi = await nudibranchRepo.updateNudibranch(data); //nudi
    dispatch(update(updateNudi));
  };

  // const handleUpdate = async (task: Task) => {
  //   try {
  //     const updatedTask = await repo.update(task.id, task);
  //     dispatch(ac.updateTaskAction(updatedTask));
  //   } catch (error) {
  //     consoleError(error);
  //   }
  // };

  // const handleDelete = async (task: Task) => {
  //   try {
  //     await repo.delete(task.id);
  //     dispatch(ac.deleteTaskAction(task.id));
  //   } catch (error) {
  //     consoleError(error);
  //   }
  // };

  // const handleCreateNudibranch = async (nudi: Omit<Nudibranch, 'id'>) => {
  //     const newNudi = await nudibranchRepo.createNudibranch(nudi);
  //     dispatch(create(newNudi));
  //   }

  return {
    handleLoadNudibranchs,
    handleCreateNudibranch,
    handleDeleteNudibranch,
    handleUpdateNudibranch,
    nudibranchs,
    nudibranchRepo,
    url,
  };
}

// const handleCreateNudibranch = async (nudi: Omit<Nudibranch, 'id'>) =>{
// const newNudi = await nudibranchRepo.create(nudi);
//  dispatch(create(newNudi));
// }, [dispatch, nudibranchRepo]);

// const handleLoadNudibranchs = useCallback(async () => {
//   dispatch(getAllNudibranchsAsync(repo));
// }, [dispatch, repo]);
