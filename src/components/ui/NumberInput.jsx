import NumberFlow from "@number-flow/react";
import { Minus, Plus } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateItemQty } from "../../app/features/cartSlice";

export function Input({ value = 0, min = -Infinity, max = Infinity, bookId }) {
  const defaultValue = useRef(value);
  const inputRef = useRef(null);
  const [animated, setAnimated] = useState(true);
  const [showCaret, setShowCaret] = useState(true);
  const dispatch = useDispatch();
  const onChange = useCallback(
    (newValue) => {
      if (newValue > max) {
        newValue = max;
      } else if (newValue < min) {
        newValue = min;
      }
      dispatch(updateItemQty({ bookId, qty: newValue }));
    },
    [bookId, dispatch, max, min]
  );

  const handleInput = ({ currentTarget: el }) => {
    setAnimated(false);
    if (el.value === "") {
      onChange?.(defaultValue.current);
      return;
    }
    const num = parseInt(el.value);
    if (
      isNaN(num) ||
      (min != null && num < min) ||
      (max != null && num > max)
    ) {
      el.value = String(value);
    } else {
      el.value = String(num);
      onChange?.(num);
    }
  };
  const handlePointerDown = (diff) => (event) => {
    setAnimated(true);
    if (event.pointerType === "mouse") {
      event?.preventDefault();
      inputRef.current?.focus();
    }
    const newVal = Math.min(Math.max(value + diff, min), max);
    onChange?.(newVal);
  };

  return (
    <div className="group flex font-semibold w-fit">
      <button
        aria-hidden
        tabIndex={-1}
        className="flex items-center pl-[.5em] pr-[.325em]"
        disabled={value <= min}
        onPointerDown={handlePointerDown(-1)}
      >
        <Minus className="size-4" absoluteStrokeWidth strokeWidth={3.5} />
      </button>

      <div className="relative grid items-center justify-items-center text-center [grid-template-areas:'overlap'] *:[grid-area:overlap]">
        <input
          ref={inputRef}
          min={min}
          max={max}
          step={1}
          value={value}
          inputMode="numeric"
          autoComplete="off"
          onInput={handleInput}
          style={{ fontKerning: "none" }}
          className={`spin-hide w-[1.5em] bg-transparent py-2 text-center font-[inherit] text-transparent outline-none appearance-none ${
            showCaret ? "caret-primary" : "caret-transparent"
          }`}
        />
        <NumberFlow
          value={value}
          animated={animated}
          aria-hidden
          willChange
          format={{ useGrouping: false }}
          onAnimationsStart={() => setShowCaret(false)}
          onAnimationsFinish={() => setShowCaret(true)}
          className="pointer-events-none"
        />
      </div>

      <button
        aria-hidden
        tabIndex={-1}
        className="flex items-center pl-[.325em] pr-[.5em] disabled:text-gray-500 disabled:cursor-not-allowed"
        disabled={value >= max}
        onPointerDown={handlePointerDown(1)}
      >
        <Plus className="size-4" absoluteStrokeWidth strokeWidth={3.5} />
      </button>
    </div>
  );
}

export default Input;
