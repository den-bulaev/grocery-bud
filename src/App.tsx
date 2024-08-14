import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GroceryForm from "./components/GroceryForm";
import GroceryList from "./components/GroceryList";

import { ELocalStorageKeys, IGood } from "./interfaces";

function App() {
  const [goods, setGoods] = useState<IGood[]>([]);

  useEffect(() => {
    const goodsFromStorage = JSON.parse(
      localStorage.getItem(ELocalStorageKeys.GROCERY_ITEMS)!
    );

    if (!goodsFromStorage) {
      localStorage.setItem(ELocalStorageKeys.GROCERY_ITEMS, JSON.stringify([]));
    } else {
      setGoods(goodsFromStorage);
    }
  }, []);

  const updateGoods = (updatedGoods: IGood[]) => {
    setGoods(updatedGoods);

    localStorage.setItem(
      ELocalStorageKeys.GROCERY_ITEMS,
      JSON.stringify(updatedGoods)
    );
  };

  const addGood = (good: IGood) => {
    if (!good.name) {
      toast.error("Input shouldn't be empty");
      return;
    }

    setGoods((prev) => [good, ...prev]);

    const goodsFromStorage = JSON.parse(
      localStorage.getItem(ELocalStorageKeys.GROCERY_ITEMS)!
    );

    localStorage.setItem(
      ELocalStorageKeys.GROCERY_ITEMS,
      JSON.stringify([good, ...goodsFromStorage])
    );

    toast.success(`${good.name} successfully added`);
  };

  const handleDeleteItem = (id: string, itemName: string) => {
    const filteredGoods = goods.filter((good) => {
      return good.id !== id;
    });

    updateGoods(filteredGoods);
    toast.success(`${itemName} successfully deleted`);
  };

  const handleUpdateGood = (good: IGood) => {
    const targetGoodIndex = goods.findIndex((item) => item.id === good.id);
    const goodsCopy = [...goods];
    goodsCopy.splice(targetGoodIndex, 1, good);

    updateGoods(goodsCopy);
  };

  const groceryListProps = {
    goods,
    handleDeleteItem,
    handleUpdateGood,
  };

  return (
    <main>
      <section className="section-center">
        <GroceryForm addGood={addGood} />
        <GroceryList {...groceryListProps} />
        <ToastContainer position="top-center" />
      </section>
    </main>
  );
}

export default App;
