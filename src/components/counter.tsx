import { MinusCircle, PlusCircle, Trash2 } from "lucide-react";
import "./components.css";

type CounterItem = {
  id: number;
  value: number;
};

type CounterProps = {
  counter: CounterItem;
  onIncrement: (counter: CounterItem) => void;
  onDecrement: (counter: CounterItem) => void;
  onDelete: (id: number) => void;
};

const getBadgeClasses = (counter: CounterItem) =>
  counter.value === 0
    ? "counter-badge counter-badge-empty"
    : "counter-badge counter-badge-active";

const getBadgeTestId = (counter: CounterItem) => {
  return counter.value === 0
    ? `badge-warning${counter.id}`
    : `badge-primary${counter.id}`;
};

const getDataTestId = (counter: CounterItem, prefix: string) => {
  return `${prefix}${counter.id}`;
};

const formatCount = (counter: CounterItem) => {
  return counter.value === 0 ? "Zero" : counter.value;
};

const Counter = ({
  counter,
  onIncrement,
  onDecrement,
  onDelete,
}: CounterProps) => {
  return (
    <div className="row align-items-center">
      <div className="col-md-1">
      <span
  data-test-id={getBadgeTestId(counter)}
  className={`${getBadgeClasses(counter)}`}
>
  {formatCount(counter)}
</span>
      </div>

      <div className="col-md-4">
        <button
          data-test-id={getDataTestId(counter, "btn-secondary")}
          className="btn btn-secondary"
          onClick={() => onIncrement(counter)}
        >
          <PlusCircle />
        </button>

        <button
          data-test-id={getDataTestId(counter, "btn-info")}
          className="btn btn-info m-2"
          onClick={() => onDecrement(counter)}
          disabled={counter.value === 0}
        >
          <MinusCircle />
        </button>

        <button
          data-test-id={getDataTestId(counter, "btn-danger")}
          className="btn btn-danger"
          onClick={() => onDelete(counter.id)}
        >
          <Trash2 />
        </button>
      </div>
    </div>
  );
};

export default Counter;