import { useCallback, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export const useDragAndDrop = () => {
    const { setTasks } = useContext(TaskContext);

    const handleOnDragEnd = useCallback((result) => {
        const { destination, source } = result;

        if (!destination) return;

        if (destination.index === source.index) return;

        setTasks((prevTasks) => {
            const reorderedTasks = [...prevTasks];
            const [removed] = reorderedTasks.splice(source.index, 1);
            reorderedTasks.splice(destination.index, 0, removed);

            return reorderedTasks;
        });
    }, [setTasks]);

    return { handleOnDragEnd };
};
