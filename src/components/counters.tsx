import { RefreshCw, Recycle } from "lucide-react";
import Counter from "./counter";
import  "./components.css";

type CounterItem = {
  id: number;
  value: number;
};

type Props = {
  onReset: () => void;
  onIncrement: (counter: CounterItem) => void;
  onDecrement: (counter: CounterItem) => void;
  onDelete: (counterId: number) => void;
  onRestart: () => void;
  counters: CounterItem[];
  dataTestId?: string;
};

const Counters = ({
  onReset,
  onIncrement,
  onDelete,
  onDecrement,
  counters,
  onRestart,
  dataTestId,
}: Props) => {
  return (
    <div>
      <button
        data-test-id="btn-success-refresh"
        className="btn btn-success m-2"
        onClick={onReset}
        disabled={counters.length === 0}
      >
        <RefreshCw />
      </button>

      <button
        data-test-id="btn-primary-recycle"
        className="btn btn-primary m-2"
        onClick={onRestart}
        disabled={counters.length !== 0}
      >
        <Recycle  />
      </button>

      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Counters;