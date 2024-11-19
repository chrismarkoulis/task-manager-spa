import { renderHook, act } from '@testing-library/react';
import { useDragAndDrop } from '../useDragAndDrop';
import { TaskContext } from '../../context/TaskContext';

describe('useDragAndDrop', () => {
  it('reorders tasks when drag and drop occurs', () => {
    const setTasksMock = jest.fn();

    const wrapper = ({ children }) => (
      <TaskContext.Provider value={{ setTasks: setTasksMock }}>
        {children}
      </TaskContext.Provider>
    );

    const { result } = renderHook(() => useDragAndDrop(), { wrapper });

    const mockTasks = [
      { id: 1, title: 'Task 1' },
      { id: 2, title: 'Task 2' },
      { id: 3, title: 'Task 3' },
    ];

    setTasksMock.mockImplementation((updateFn) => {
      const updatedTasks = updateFn(mockTasks);
      mockTasks.splice(0, mockTasks.length, ...updatedTasks);
    });

    const dragResult = {
      source: { index: 0 },
      destination: { index: 2 },
    };

    act(() => {
      result.current.handleOnDragEnd(dragResult);
    });

    expect(setTasksMock).toHaveBeenCalled();
    expect(mockTasks).toEqual([
      { id: 2, title: 'Task 2' },
      { id: 3, title: 'Task 3' },
      { id: 1, title: 'Task 1' },
    ]);
  });

  it('does nothing if there is no destination', () => {
    const setTasksMock = jest.fn();

    const wrapper = ({ children }) => (
      <TaskContext.Provider value={{ setTasks: setTasksMock }}>
        {children}
      </TaskContext.Provider>
    );

    const { result } = renderHook(() => useDragAndDrop(), { wrapper });

    const dragResult = {
      source: { index: 0 },
      destination: null,
    };

    act(() => {
      result.current.handleOnDragEnd(dragResult);
    });

    expect(setTasksMock).not.toHaveBeenCalled();
  });

  it('does nothing if the source and destination indices are the same', () => {
    const setTasksMock = jest.fn();

    const wrapper = ({ children }) => (
      <TaskContext.Provider value={{ setTasks: setTasksMock }}>
        {children}
      </TaskContext.Provider>
    );

    const { result } = renderHook(() => useDragAndDrop(), { wrapper });

    const dragResult = {
      source: { index: 1 },
      destination: { index: 1 },
    };

    act(() => {
      result.current.handleOnDragEnd(dragResult);
    });

    expect(setTasksMock).not.toHaveBeenCalled();
  });
});
