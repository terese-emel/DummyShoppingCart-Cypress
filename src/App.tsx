import { useState } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./components/components.css";

type CounterItem = {
  id: number;
  value: number;
};

const initialCounters: CounterItem[] = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 },
];

const App = () => {
  const [counters, setCounters] = useState<CounterItem[]>(initialCounters);

  const handleIncrement = (counter: CounterItem) => {
    setCounters((currentCounters) =>
      currentCounters.map((item) =>
        item.id === counter.id
          ? { ...item, value: item.value + 1 }
          : item
      )
    );
  };

  const handleDecrement = (counter: CounterItem) => {
    setCounters((currentCounters) =>
      currentCounters.map((item) =>
        item.id === counter.id
          ? { ...item, value: Math.max(0, item.value - 1) }
          : item
      )
    );
  };

  const handleReset = () => {
    setCounters((currentCounters) =>
      currentCounters.map((counter) => ({
        ...counter,
        value: 0,
      }))
    );
  };

  const handleDelete = (counterId: number) => {
    setCounters((currentCounters) =>
      currentCounters.filter((counter) => counter.id !== counterId)
    );
  };

  const handleRestart = () => {
    setCounters(initialCounters);
  };

const totalCounters = counters.reduce(
  (total, counter) => total + counter.value,
  0
);

  return (
    <>
      <NavBar totalCounters={totalCounters} />

      <main className="container">
        <Counters
          counters={counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onRestart={handleRestart}
        />
      </main>
    </>
  );
};

export default App;

