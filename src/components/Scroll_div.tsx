import { colors } from "./util";
import "./scroll.css";

export default function Scroll_div() {
  return (
    <div className="scroll_div min-w-[100vw] flex">
      {colors.map((color, index) => (
        <div
          className="min-w-[100vw] container "
          key={index}
          style={{ backgroundColor: color, height: "100%" }}
        >
          {/* <h1 className="text-9xl text-white text-center">{index}</h1> */}

          <div className="font-pair">
            <p>Oxygen , Source Sans Pro</p>
          </div>
          <div className="text-wrapper">
            <h1 className="">Cheese Ipsum</h1>
            <p className="">
              Cheese and biscuits say cheese red leicester. Who moved my cheese
              danish fontina cottage cheese lancashire fromage frais queso
              lancashire paneer. Cheese on toast squirty cheese feta pecorino
              stinking bishop paneer jarlsberg dolcelatte. Airedale edam danish
              fontina lancashire st. agur blue cheese who moved my cheese
              parmesan emmental. Taleggio cow fromage frais red leicester
              camembert de normandie swiss cheese slices pepper jack. Ricotta
              fondue queso mascarpone halloumi mozzarella caerphilly blue
              castello. Cheese and wine the big cheese cheese and biscuits
              cheesy feet manchego brie bavarian bergkase taleggio. Cheeseburger
              caerphilly pepper jack.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
