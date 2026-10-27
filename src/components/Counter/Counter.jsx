import { useDispatch, useSelector } from "react-redux";

import { addAtion } from "../../redux/actions.js";

export default function Counter () {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);
    console.log(count)

    const addMoney = (event) => {
        const value = event.target.previousElementSibling.value;
        if (value.length === 0) {
            return;
        }
        dispatch(addAtion(Number(value)))
        event.target.previousElementSibling.value = "";
    };

    const minusMoney = () => {
        const value = document.querySelector("input").value;
        if (value.length === 0) {
            return;
        }
        dispatch({ type: "minus", payload: Number(value) })
        document.querySelector("input").value = "";
    };

    return (
        <div>
            <input type="text" placeholder="Введіть суму" />
            <button onClick={addMoney}>+</button>
            <span>{count}</span>
            <button onClick={minusMoney}>-</button>
        </div>
    )
}